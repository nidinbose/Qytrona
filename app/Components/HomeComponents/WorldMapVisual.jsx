"use client";

import { useMemo } from "react";
import DottedMap from "dotted-map/without-countries";
import mapData from "./world-map-data.json";

const MAP_WIDTH = 800;
const MAP_HEIGHT = 400;

const india = { name: "India", lat: 22.3511, lng: 78.6677 };

const connections = [
  { name: "New York", lat: 40.7128, lng: -74.006 },
  { name: "London", lat: 51.5074, lng: -0.1278 },
  { name: "Dubai", lat: 25.2048, lng: 55.2708 },
  { name: "Singapore", lat: 1.3521, lng: 103.8198 },
  { name: "Sydney", lat: -33.8688, lng: 151.2093 },
];

function project(lat, lng) {
  const x = (lng + 180) * (MAP_WIDTH / 360);
  const y = (90 - lat) * (MAP_HEIGHT / 180);
  return { x, y };
}

function curvedPath(a, b) {
  const mx = (a.x + b.x) / 2;
  const my = Math.min(a.y, b.y) - 55;
  return `M ${a.x} ${a.y} Q ${mx} ${my} ${b.x} ${b.y}`;
}

export default function WorldMapVisual({
  dotColor = "#d6d6d6",
  backgroundColor = "white",
  lineColor = "#f97316",
  hubColor = "#ea580c",
  pointColor = "#ea580c",
  className = "",
  edgeMask = false,
}) {
  const mapImage = useMemo(() => {
    const map = new DottedMap({ map: mapData });
    const svg = map.getSVG({
      radius: 0.22,
      color: dotColor,
      shape: "circle",
      backgroundColor,
    });
    return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
  }, [dotColor, backgroundColor]);

  const indiaPoint = project(india.lat, india.lng);

  return (
    <div
      className={`relative ${className}`}
      style={
        edgeMask
          ? {
              maskImage:
                "radial-gradient(ellipse 75% 75% at 50% 50%, black 60%, transparent 100%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 75% 75% at 50% 50%, black 60%, transparent 100%)",
            }
          : undefined
      }
    >
      <img
        src={mapImage}
        alt="World map highlighting India's global connections"
        className="absolute inset-0 h-full w-full object-cover pointer-events-none select-none"
        draggable={false}
      />

      <svg
        viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
      >
        {connections.map((c, i) => {
          const p = project(c.lat, c.lng);
          const d = curvedPath(indiaPoint, p);
          return (
            <g key={c.name}>
              <path
                d={d}
                fill="none"
                stroke={lineColor}
                strokeWidth="1"
                strokeOpacity="0.4"
                strokeDasharray="3 3"
              />
              <circle r="3" fill={pointColor} opacity="0.9">
                <animateMotion
                  dur="3.5s"
                  begin={`${i * 0.5}s`}
                  repeatCount="indefinite"
                  path={d}
                />
              </circle>
              <circle cx={p.x} cy={p.y} r="2.8" fill={hubColor} />
              <circle
                cx={p.x}
                cy={p.y}
                r="2.8"
                fill="none"
                stroke={hubColor}
                strokeOpacity="0.5"
              />
            </g>
          );
        })}

        {/* India hub marker */}
        <circle cx={indiaPoint.x} cy={indiaPoint.y} r="5.5" fill={hubColor} />
        <circle cx={indiaPoint.x} cy={indiaPoint.y} r="5.5" fill={hubColor} opacity="0.5">
          <animate
            attributeName="r"
            values="5.5;18;5.5"
            dur="2.5s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.5;0;0.5"
            dur="2.5s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </div>
  );
}
