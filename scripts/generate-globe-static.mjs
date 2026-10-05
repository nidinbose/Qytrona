// Pre-renders the hero Globe's first frame (rotation 0) as a static SVG, so the globe is
// visible from first paint on slow phones; the animated canvas takes over once the page is idle.
// Mirrors the drawing in app/Components/HomeComponents/Globe.jsx — re-run after changing either.
// Usage: node scripts/generate-globe-static.mjs   (after generate-globe-dots.mjs)
import { readFileSync, writeFileSync } from "node:fs";

const SIZE = 1000;
const C = SIZE / 2;
const RADIUS = C * 0.9;
const PX = SIZE / 400; // canvas pixel sizes are designed for a ~400px globe

const india = { lat: 22.3511, lng: 78.6677 };
const connections = [
  [40.7128, -74.006], [43.6532, -79.3832], [-23.5505, -46.6333], [51.5074, -0.1278], [52.52, 13.405],
  [-26.2041, 28.0473], [25.2048, 55.2708], [1.3521, 103.8198], [35.6762, 139.6503], [-33.8688, 151.2093],
];

const toVec = (lat, lng) => {
  const a = (lat * Math.PI) / 180;
  const b = (lng * Math.PI) / 180;
  return { x: Math.cos(a) * Math.cos(b), y: Math.sin(a), z: Math.cos(a) * Math.sin(b) };
};
const project = (v) => ({ x: C + RADIUS * v.x, y: C - RADIUS * v.y, z: v.z }); // rotation 0
const slerp = (a, b, t) => {
  const dot = Math.max(-1, Math.min(1, a.x * b.x + a.y * b.y + a.z * b.z));
  const o = Math.acos(dot);
  if (o < 1e-6) return a;
  const s = Math.sin(o);
  const wa = Math.sin((1 - t) * o) / s;
  const wb = Math.sin(t * o) / s;
  return { x: a.x * wa + b.x * wb, y: a.y * wa + b.y * wb, z: a.z * wa + b.z * wb };
};
const f = (n) => +n.toFixed(1);

const parts = [];
parts.push(`<circle cx="${C}" cy="${C}" r="${RADIUS}" fill="none" stroke="rgba(156,163,175,0.3)" stroke-width="${f(PX)}"/>`);

// dots, at their average twinkle
for (const [lat, lng] of JSON.parse(readFileSync("public/globe-dots.json", "utf8"))) {
  const p = project(toVec(lat, lng));
  if (p.z <= 0) continue;
  const r = (0.5 + p.z * 0.7 + 0.175) * PX;
  const alpha = Math.min(0.12 + p.z * 0.22 + 0.07, 0.55);
  parts.push(`<circle cx="${f(p.x)}" cy="${f(p.y)}" r="${f(r)}" fill-opacity="${alpha.toFixed(2)}"/>`);
}

// arcs from India + city points
const iv = toVec(india.lat, india.lng);
for (const [lat, lng] of connections) {
  const cv = toVec(lat, lng);
  let d = "";
  let started = false;
  for (let j = 0; j <= 48; j++) {
    const p = project(slerp(iv, cv, j / 48));
    if (p.z <= -0.02) {
      started = false;
      continue;
    }
    d += `${started ? "L" : "M"}${f(p.x)} ${f(p.y)}`;
    started = true;
  }
  if (d) parts.push(`<path d="${d}" fill="none" stroke="rgba(255,95,45,0.55)" stroke-width="${f(1.1 * PX)}"/>`);
  const cp = project(cv);
  if (cp.z > 0) parts.push(`<circle cx="${f(cp.x)}" cy="${f(cp.y)}" r="${f(2.4 * PX)}" fill="#FF5F2D"/>`);
}
const ip = project(iv);
if (ip.z > 0) parts.push(`<circle cx="${f(ip.x)}" cy="${f(ip.y)}" r="${f(4.5 * PX)}" fill="#FF5F2D"/>`);

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${SIZE} ${SIZE}"><g fill="rgb(156,163,175)">${parts.join("")}</g></svg>`;
writeFileSync("public/globe-static.svg", svg);
console.log(`public/globe-static.svg — ${(svg.length / 1024).toFixed(0)} KB`);
