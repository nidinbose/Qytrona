"use client";

import Link from "next/link";
import { Icon, PageHero, Section } from "./Shared";
import { company } from "./legalData";

/* ------------------------------- building blocks ------------------------------ */

function LegalSection({ section, index }) {
  return (
    <section id={section.id} className="scroll-mt-28 border-t border-gray-200 pt-10 first:border-t-0 first:pt-0">
      <h2 className="flex items-baseline gap-3 text-3xl font-semibold tracking-tight text-[#0c0705] sm:text-4xl">
        <span className="text-base font-medium text-[#FF5F2D]">{String(index + 1).padStart(2, "0")}</span>
        {section.title}
      </h2>

      <div className="mt-6 space-y-5 text-lg leading-relaxed text-gray-600 sm:text-xl">
        {section.body?.map((p) => (
          <p key={p}>{p}</p>
        ))}

        {section.list && (
          <ul className="space-y-4">
            {section.list.map((item) => (
              <li key={item} className="flex gap-3">
                <Icon name="check" className="mt-1.5 h-5 w-5 shrink-0 text-[#FF5F2D]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}

        {section.after?.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
    </section>
  );
}

function ContactCard({ index }) {
  return (
    <section id="contact-us" className="scroll-mt-28 border-t border-gray-200 pt-10">
      <h2 className="flex items-baseline gap-3 text-3xl font-semibold tracking-tight text-[#0c0705] sm:text-4xl">
        <span className="text-base font-medium text-[#FF5F2D]">{String(index + 1).padStart(2, "0")}</span>
        Contact Us
      </h2>
      <p className="mt-6 text-lg leading-relaxed text-gray-600 sm:text-xl">
        If you have any questions about this page, or want to make a request about your data, get in touch:
      </p>

      <div className="mt-6 rounded-2xl bg-[#0c0705] p-6 text-white sm:p-8">
        <p className="text-xl font-semibold sm:text-2xl">{company.name}</p>
        <div className="mt-5 grid gap-4 text-base text-white/80 sm:grid-cols-3 sm:text-lg">
          <span className="flex items-center gap-2">
            <Icon name="pin" className="h-5 w-5 text-[#FF5F2D]" />
            {company.location}
          </span>
          <a href={company.phone.href} className="flex items-center gap-2 transition-colors hover:text-[#FF5F2D]">
            <Icon name="phone" className="h-5 w-5 text-[#FF5F2D]" />
            {company.phone.display}
          </a>
          <a
            href={company.whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition-colors hover:text-[#FF5F2D]"
          >
            <Icon name="chat" className="h-5 w-5 text-[#FF5F2D]" />
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- page ---------------------------------- */

export default function LegalPage({ content, related }) {
  const toc = [...content.sections, { id: "contact-us", title: "Contact Us" }];

  return (
    <>
      <PageHero
        eyebrow={content.eyebrow}
        title={content.title}
        highlight={content.highlight}
        description={content.description}
      >
        <p className="text-base text-gray-500">
          Last updated: <span className="font-medium text-[#0c0705]">{content.updated}</span>
        </p>
      </PageHero>

      <Section className="bg-white !pt-4">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[280px_1fr] lg:gap-16">
          <aside className="hidden lg:block">
            <nav className="sticky top-28">
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-gray-400">On this page</p>
              <ol className="space-y-2.5 border-l border-gray-200">
                {toc.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="-ml-px block border-l border-transparent pl-4 text-base text-gray-600 transition-colors hover:border-[#FF5F2D] hover:text-[#FF5F2D]"
                    >
                      {s.title}
                    </a>
                  </li>
                ))}
              </ol>

              {related && (
                <Link
                  href={related.href}
                  className="mt-8 inline-flex items-center gap-2 text-base font-medium text-[#0c0705] transition-colors hover:text-[#FF5F2D]"
                >
                  {related.label}
                  <Icon name="arrow" className="h-4 w-4" />
                </Link>
              )}
            </nav>
          </aside>

          <div className="max-w-4xl space-y-12">
            {content.sections.map((section, i) => (
              <LegalSection key={section.id} section={section} index={i} />
            ))}
            <ContactCard index={content.sections.length} />

            {related && (
              <p className="text-base text-gray-500 lg:hidden">
                See also:{" "}
                <Link href={related.href} className="font-medium text-[#FF5F2D] hover:underline">
                  {related.label}
                </Link>
              </p>
            )}
          </div>
        </div>
      </Section>
    </>
  );
}
