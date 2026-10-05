// Pre-renders the dotted world map used by WorldMapVisual into a static SVG, so the
// map library and its data never ship to the browser.
// Usage: node scripts/generate-world-dots.mjs
import { readFileSync, writeFileSync } from "node:fs";
import DottedMap from "dotted-map/without-countries";

const DOT_COLOR = "#d6d6d6";

const mapData = JSON.parse(readFileSync("app/Components/HomeComponents/world-map-data.json", "utf8"));
const map = new DottedMap({ map: mapData });
const svg = map.getSVG({ radius: 0.22, color: DOT_COLOR, shape: "circle", backgroundColor: "white" });

// Same dots, smaller file: one shared fill instead of one per circle, and no whitespace.
const min = svg
  .split(` fill="${DOT_COLOR}" />`)
  .join("/>")
  .replace(/>\s+</g, "><")
  .replace(/(<svg[^>]*>)/, `$1<g fill="${DOT_COLOR}">`)
  .replace("</svg>", "</g></svg>")
  .trim();

writeFileSync("public/Images/world-dots.svg", min);
console.log(`public/Images/world-dots.svg — ${(min.length / 1024).toFixed(0)} KB`);
