// Renders a small, safe subset of Markdown as React elements (no raw HTML is ever injected):
//   ## Heading / ### Subheading, paragraphs, - bullet lists, 1. numbered lists,
//   > quotes, ``` code blocks ```, ![alt](image-url), and inline **bold**, *italic*, `code`, [links](url).

const safeUrl = (url) => (/^(https?:\/\/|\/|#|mailto:|tel:)/i.test(url) ? url : "#");

function renderInline(text, keyPrefix) {
  const out = [];
  const re = /(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`|\[[^\]]+\]\([^)\s]+\))/g;
  let last = 0;
  let m;
  let i = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    const token = m[0];
    const key = `${keyPrefix}-${i++}`;
    if (token.startsWith("**")) {
      out.push(<strong key={key} className="font-semibold text-[#0c0705]">{token.slice(2, -2)}</strong>);
    } else if (token.startsWith("`")) {
      out.push(
        <code key={key} className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-[0.9em] text-[#e6481a]">
          {token.slice(1, -1)}
        </code>
      );
    } else if (token.startsWith("[")) {
      const [, label, url] = token.match(/^\[([^\]]+)\]\(([^)\s]+)\)$/);
      const href = safeUrl(url);
      const external = /^https?:\/\//i.test(href);
      out.push(
        <a
          key={key}
          href={href}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className="font-medium text-[#FF5F2D] underline decoration-[#FF5F2D]/30 underline-offset-4 hover:decoration-[#FF5F2D]"
        >
          {label}
        </a>
      );
    } else {
      out.push(<em key={key}>{token.slice(1, -1)}</em>);
    }
    last = m.index + token.length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

function parseBlocks(src) {
  const lines = String(src || "").replace(/\r\n/g, "\n").split("\n");
  const blocks = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    if (!trimmed) {
      i++;
      continue;
    }
    if (trimmed.startsWith("```")) {
      const code = [];
      i++;
      while (i < lines.length && !lines[i].trim().startsWith("```")) code.push(lines[i++]);
      i++;
      blocks.push({ type: "code", text: code.join("\n") });
      continue;
    }
    const heading = trimmed.match(/^(#{2,3})\s+(.*)$/);
    if (heading) {
      blocks.push({ type: heading[1].length === 2 ? "h2" : "h3", text: heading[2] });
      i++;
      continue;
    }
    const image = trimmed.match(/^!\[([^\]]*)\]\(([^)\s]+)\)$/);
    if (image) {
      blocks.push({ type: "img", alt: image[1], src: image[2] });
      i++;
      continue;
    }
    if (/^[-*]\s+/.test(trimmed)) {
      const items = [];
      while (i < lines.length && /^[-*]\s+/.test(lines[i].trim())) items.push(lines[i++].trim().replace(/^[-*]\s+/, ""));
      blocks.push({ type: "ul", items });
      continue;
    }
    if (/^\d+\.\s+/.test(trimmed)) {
      const items = [];
      while (i < lines.length && /^\d+\.\s+/.test(lines[i].trim())) items.push(lines[i++].trim().replace(/^\d+\.\s+/, ""));
      blocks.push({ type: "ol", items });
      continue;
    }
    if (trimmed.startsWith(">")) {
      const quote = [];
      while (i < lines.length && lines[i].trim().startsWith(">")) quote.push(lines[i++].trim().replace(/^>\s?/, ""));
      blocks.push({ type: "quote", text: quote.join(" ") });
      continue;
    }
    const para = [];
    while (
      i < lines.length &&
      lines[i].trim() &&
      !/^(#{2,3}\s|[-*]\s|\d+\.\s|>|```|!\[)/.test(lines[i].trim())
    ) {
      para.push(lines[i++].trim());
    }
    blocks.push({ type: "p", text: para.join(" ") });
  }
  return blocks;
}

export function headingId(text) {
  return String(text)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// Headings for a table of contents.
export function getHeadings(src) {
  return parseBlocks(src)
    .filter((b) => b.type === "h2")
    .map((b) => ({ id: headingId(b.text), text: b.text.replace(/[*`]/g, "") }));
}

export default function PostContent({ content }) {
  return (
    <div className="space-y-6 text-lg leading-[1.8] text-gray-700">
      {parseBlocks(content).map((b, i) => {
        const k = `b${i}`;
        switch (b.type) {
          case "h2":
            return (
              <h2 key={k} id={headingId(b.text)} className="scroll-mt-28 pt-6 text-3xl font-semibold tracking-tight text-[#0c0705] sm:text-4xl">
                {renderInline(b.text, k)}
              </h2>
            );
          case "h3":
            return (
              <h3 key={k} className="pt-2 text-2xl font-semibold tracking-tight text-[#0c0705]">
                {renderInline(b.text, k)}
              </h3>
            );
          case "ul":
            return (
              <ul key={k} className="space-y-3">
                {b.items.map((item, j) => (
                  <li key={j} className="flex gap-3">
                    <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-[#FF5F2D]" />
                    <span>{renderInline(item, `${k}-${j}`)}</span>
                  </li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={k} className="space-y-3">
                {b.items.map((item, j) => (
                  <li key={j} className="flex gap-4">
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#FF5F2D]/10 text-sm font-semibold text-[#FF5F2D]">
                      {j + 1}
                    </span>
                    <span>{renderInline(item, `${k}-${j}`)}</span>
                  </li>
                ))}
              </ol>
            );
          case "quote":
            return (
              <blockquote key={k} className="rounded-r-2xl border-l-4 border-[#FF5F2D] bg-[#FF5F2D]/5 py-4 pl-6 pr-4 text-xl italic text-[#0c0705]">
                {renderInline(b.text, k)}
              </blockquote>
            );
          case "code":
            return (
              <pre key={k} className="overflow-x-auto rounded-2xl bg-[#0c0705] p-5 font-mono text-sm leading-relaxed text-white/90">
                <code>{b.text}</code>
              </pre>
            );
          case "img":
            return (
              // eslint-disable-next-line @next/next/no-img-element -- admin-supplied URLs from any host
              <img key={k} src={safeUrl(b.src)} alt={b.alt} className="w-full rounded-2xl border border-gray-200" loading="lazy" />
            );
          default:
            return <p key={k}>{renderInline(b.text, k)}</p>;
        }
      })}
    </div>
  );
}
