// Converts the globe's map grid into a compact [lat, lng] list served from /public, so the
// hero Globe fetches it after first paint instead of bundling ~126 KB into the page JS.
// Usage: node scripts/generate-globe-dots.mjs
import { readFileSync, writeFileSync } from "node:fs";

const R_EARTH = 6378137;
const { X_MIN, X_MAX, Y_MIN, Y_MAX, width, height, points } = JSON.parse(
  readFileSync("app/Components/HomeComponents/world-map-globe-data.json", "utf8")
);

const out = [];
for (const key in points) {
  const { x, y } = points[key];
  const mercX = X_MIN + (x / width) * (X_MAX - X_MIN);
  const mercY = Y_MAX - (y / height) * (Y_MAX - Y_MIN);
  out.push([
    +((mercY / R_EARTH) * (180 / Math.PI)).toFixed(2),
    +((mercX / R_EARTH) * (180 / Math.PI)).toFixed(2),
  ]);
}

const json = JSON.stringify(out);
writeFileSync("public/globe-dots.json", json);
console.log(`public/globe-dots.json — ${out.length} dots, ${(json.length / 1024).toFixed(0)} KB`);
