"use client";

import { useEffect, useMemo, useRef, useState } from "react";

// Dot positions ([lat, lng]) are generated into /public by scripts/generate-globe-dots.mjs and
// fetched after first paint, so they don't weigh down the page's JavaScript.
const DOTS_URL = "/globe-dots.json";

const india = { name: "India", lat: 22.3511, lng: 78.6677 };

const connections = [
  { name: "New York", lat: 40.7128, lng: -74.006 },
  { name: "Toronto", lat: 43.6532, lng: -79.3832 },
  { name: "São Paulo", lat: -23.5505, lng: -46.6333 },
  { name: "London", lat: 51.5074, lng: -0.1278 },
  { name: "Berlin", lat: 52.52, lng: 13.405 },
  { name: "Johannesburg", lat: -26.2041, lng: 28.0473 },
  { name: "Dubai", lat: 25.2048, lng: 55.2708 },
  { name: "Singapore", lat: 1.3521, lng: 103.8198 },
  { name: "Tokyo", lat: 35.6762, lng: 139.6503 },
  { name: "Sydney", lat: -33.8688, lng: 151.2093 },
];


function toVec(lat, lng) {
  const latR = (lat * Math.PI) / 180;
  const lngR = (lng * Math.PI) / 180;
  return {
    x: Math.cos(latR) * Math.cos(lngR),
    y: Math.sin(latR),
    z: Math.cos(latR) * Math.sin(lngR),
  };
}

function slerp(a, b, t) {
  const dot = Math.max(-1, Math.min(1, a.x * b.x + a.y * b.y + a.z * b.z));
  const omega = Math.acos(dot);
  if (omega < 1e-6) return a;
  const s = Math.sin(omega);
  const wa = Math.sin((1 - t) * omega) / s;
  const wb = Math.sin(t * omega) / s;
  return {
    x: a.x * wa + b.x * wb,
    y: a.y * wa + b.y * wb,
    z: a.z * wa + b.z * wb,
  };
}

function project(vec, rotation, cx, cy, radius) {
  const cos = Math.cos(rotation);
  const sin = Math.sin(rotation);
  const vx = vec.x * cos + vec.z * sin;
  const vz = -vec.x * sin + vec.z * cos;
  return { x: cx + radius * vx, y: cy - radius * vec.y, z: vz };
}

export default function Globe({ className = "" }) {
  const canvasRef = useRef(null);
  const rotationRef = useRef(0);

  const [dotVectors, setDotVectors] = useState([]);
  const stillRef = useRef(null);

  useEffect(() => {
    let cancelled = false;
    fetch(DOTS_URL)
      .then((r) => r.json())
      .then((points) => {
        if (cancelled) return;
        setDotVectors(
          points.map(([lat, lng]) => ({
            ...toVec(lat, lng),
            phase: Math.random() * Math.PI * 2,
            speed: 0.6 + Math.random() * 0.9,
          }))
        );
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  const indiaVec = useMemo(() => toVec(india.lat, india.lng), []);

  const connectionData = useMemo(() => {
    const steps = 48;
    return connections.map((c, i) => {
      const vec = toVec(c.lat, c.lng);
      const arc = [];
      for (let j = 0; j <= steps; j++) {
        arc.push(slerp(indiaVec, vec, j / steps));
      }
      return {
        ...c,
        vec,
        arc,
        offset: i / connections.length,
      };
    });
  }, [indiaVec]);

  // Light still frame (outline, arcs, city points at rotation 0) rendered inline with the HTML.
  // Inline SVG isn't an LCP candidate, so the hero text stays the LCP element; the canvas takes over
  // from this exact frame (adding the dots) once the page is idle.
  const still = useMemo(() => {
    const S = 1000;
    const c = S / 2;
    const r = c * 0.9;
    const px = S / 400;
    const pt = (v) => project(v, 0, c, c, r);
    const f = (n) => Math.round(n);
    const arcs = connectionData.map((conn) => {
      let d = "";
      let started = false;
      for (const v of conn.arc) {
        const p = pt(v);
        if (p.z <= -0.02) {
          started = false;
          continue;
        }
        d += `${started ? "L" : "M"}${f(p.x)} ${f(p.y)}`;
        started = true;
      }
      return d;
    });
    const cities = connectionData.map((conn) => pt(conn.vec)).filter((p) => p.z > 0);
    return { S, c, r, px, arcs, cities, india: pt(indiaVec) };
  }, [connectionData, indiaVec]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let raf;
    let cx = 0;
    let cy = 0;
    let radius = 0;

    function resize() {
      const rect = canvas.getBoundingClientRect();
      const size = Math.max(1, Math.round(rect.width));
      canvas.width = size * dpr;
      canvas.height = size * dpr;
      cx = canvas.width / 2;
      cy = canvas.height / 2;
      radius = (Math.min(canvas.width, canvas.height) / 2) * 0.9;
    }

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    function draw() {
      const rotation = rotationRef.current;
      const t = performance.now() / 1000;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(156,163,175,0.3)";
      ctx.lineWidth = dpr;
      ctx.stroke();

      for (const vec of dotVectors) {
        const p = project(vec, rotation, cx, cy, radius);
        if (p.z <= 0) continue;
        const depth = p.z;
        const twinkle = (Math.sin(t * vec.speed + vec.phase) + 1) / 2;
        const size = (0.5 + depth * 0.7 + twinkle * 0.35) * dpr;
        const alpha = 0.12 + depth * 0.22 + twinkle * 0.14;
        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(156,163,175,${Math.min(alpha, 0.55)})`;
        ctx.fill();
      }

      for (const conn of connectionData) {
        ctx.beginPath();
        let started = false;
        for (const vec of conn.arc) {
          const p = project(vec, rotation, cx, cy, radius);
          if (p.z <= -0.02) {
            started = false;
            continue;
          }
          if (!started) {
            ctx.moveTo(p.x, p.y);
            started = true;
          } else {
            ctx.lineTo(p.x, p.y);
          }
        }
        ctx.strokeStyle = "rgba(255,95,45,0.55)";
        ctx.lineWidth = 1.1 * dpr;
        ctx.stroke();

        const cp = project(conn.vec, rotation, cx, cy, radius);
        if (cp.z > 0) {
          ctx.beginPath();
          ctx.arc(cp.x, cp.y, 2.4 * dpr, 0, Math.PI * 2);
          ctx.fillStyle = "#FF5F2D";
          ctx.fill();
        }

        // Traveling pulse animating from India to the city along the arc
        const travelDuration = 2.8;
        const progress = (t / travelDuration + conn.offset) % 1;
        for (let k = 0; k < 6; k++) {
          const trailProgress = progress - k * 0.015;
          if (trailProgress < 0) continue;
          const travelVec = slerp(indiaVec, conn.vec, trailProgress);
          const tp = project(travelVec, rotation, cx, cy, radius);
          if (tp.z <= 0) continue;
          const trailAlpha = (1 - k / 6) * 0.9;
          ctx.beginPath();
          ctx.arc(tp.x, tp.y, (2.6 - k * 0.3) * dpr, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255,143,80,${trailAlpha})`;
          ctx.fill();
        }
      }

      const ip = project(indiaVec, rotation, cx, cy, radius);
      if (ip.z > 0) {
        const pulse = (Math.sin(performance.now() / 450) + 1) / 2;
        ctx.beginPath();
        ctx.arc(ip.x, ip.y, (5 + pulse * 11) * dpr, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255,95,45,${0.55 - pulse * 0.5})`;
        ctx.lineWidth = 1.4 * dpr;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(ip.x, ip.y, 4.5 * dpr, 0, Math.PI * 2);
        ctx.fillStyle = "#FF5F2D";
        ctx.fill();
      }
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let visible = true;

    // ~30fps is plenty for a slow spin and halves the main-thread cost (rotation is time-based).
    const FRAME_MS = 1000 / 30;
    let last = 0;
    let ready = false; // don't animate until the page has loaded and the browser is idle

    function frame(now) {
      if (now - last >= FRAME_MS) {
        rotationRef.current += 0.006 * Math.min(4, (now - last) / 16.7 || 1);
        last = now;
        draw();
      }
      raf = visible ? requestAnimationFrame(frame) : 0;
    }

    function start() {
      if (ready && !raf && visible && !document.hidden) {
        last = performance.now();
        raf = requestAnimationFrame(frame);
      }
    }

    function stop() {
      cancelAnimationFrame(raf);
      raf = 0;
    }

    // Only animate while the globe is on screen and the tab is visible.
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible && !reduceMotion) start();
      else stop();
    });
    io.observe(canvas);

    const onVisibility = () => (document.hidden || reduceMotion ? stop() : start());
    document.addEventListener("visibilitychange", onVisibility);

    // The inline still frame shows until the dots have loaded and the page is idle; then the
    // canvas takes over from the same rotation-0 frame and starts spinning.
    let idleId;
    const begin = () => {
      if (dotVectors.length === 0) return; // effect re-runs once the dots arrive
      const idle = window.requestIdleCallback || ((cb) => setTimeout(cb, 300));
      idleId = idle(() => {
        ready = true;
        draw();
        if (stillRef.current) stillRef.current.style.visibility = "hidden";
        if (!reduceMotion) start();
      });
    };
    if (document.readyState === "complete") begin();
    else window.addEventListener("load", begin, { once: true });

    return () => {
      window.removeEventListener("load", begin);
      if (idleId) (window.cancelIdleCallback || clearTimeout)(idleId);
      stop();
      io.disconnect();
      ro.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [dotVectors, indiaVec, connectionData]);

  return (
    <div className={`relative ${className}`}>
      <svg
        ref={stillRef}
        viewBox={`0 0 ${still.S} ${still.S}`}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full"
      >
        <circle cx={still.c} cy={still.c} r={still.r} fill="none" stroke="rgba(156,163,175,0.3)" strokeWidth={still.px} />
        {still.arcs.map((d, i) => d && <path key={i} d={d} fill="none" stroke="rgba(255,95,45,0.55)" strokeWidth={1.1 * still.px} />)}
        {still.cities.map((p, i) => (
          <circle key={i} cx={Math.round(p.x)} cy={Math.round(p.y)} r={2.4 * still.px} fill="#FF5F2D" />
        ))}
        {still.india.z > 0 && (
          <circle cx={Math.round(still.india.x)} cy={Math.round(still.india.y)} r={4.5 * still.px} fill="#FF5F2D" />
        )}
      </svg>
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
    </div>
  );
}
