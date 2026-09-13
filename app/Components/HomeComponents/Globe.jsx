"use client";

import { useEffect, useMemo, useRef } from "react";
import mapData from "./world-map-globe-data.json";

const R_EARTH = 6378137;

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

function gridToLatLng({ X_MIN, X_MAX, Y_MIN, Y_MAX, width, height, points }) {
  const out = [];
  for (const key in points) {
    const { x, y } = points[key];
    const mercX = X_MIN + (x / width) * (X_MAX - X_MIN);
    const mercY = Y_MAX - (y / height) * (Y_MAX - Y_MIN);
    const lng = (mercX / R_EARTH) * (180 / Math.PI);
    const lat = (mercY / R_EARTH) * (180 / Math.PI);
    out.push([lat, lng]);
  }
  return out;
}

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

  const dotVectors = useMemo(() => {
    return gridToLatLng(mapData).map(([lat, lng]) => ({
      ...toVec(lat, lng),
      phase: Math.random() * Math.PI * 2,
      speed: 0.6 + Math.random() * 0.9,
    }));
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
        const size = (0.6 + depth * 0.9 + twinkle * 0.6) * dpr;
        const alpha = 0.2 + depth * 0.4 + twinkle * 0.3;
        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(107,114,128,${Math.min(alpha, 0.95)})`;
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

    function frame() {
      rotationRef.current += 0.006;
      draw();
      raf = requestAnimationFrame(frame);
    }

    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [dotVectors, indiaVec, connectionData]);

  return (
    <div className={`relative ${className}`}>
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
    </div>
  );
}
