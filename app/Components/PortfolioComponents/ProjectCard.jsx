"use client";

import Link from "next/link";
import { Icon } from "../CompanyComponents/Shared";
import { industries } from "../IndustryComponents/industriesData";
import { categories } from "./portfolioData";
import ProjectCover from "./ProjectCover";

const industryName = Object.fromEntries(industries.map((i) => [i.slug, i.name]));
const categoryName = Object.fromEntries(categories.map((c) => [c.slug, c.name]));

export function SampleBadge({ className = "" }) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border border-dashed border-gray-300 bg-white/90 px-2.5 py-1 text-[11px] font-medium text-gray-500 backdrop-blur ${className}`}
      title="Placeholder project — replace with a real one in portfolioData.js"
    >
      Sample project
    </span>
  );
}

export default function ProjectCard({ project, index = 0 }) {
  return (
    <Link
      href={`/portfolio/work/${project.slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-gray-200 bg-white transition-all duration-500 hover:-translate-y-2 hover:border-transparent hover:shadow-2xl hover:shadow-[#0c0705]/15"
    >
      <div className="relative">
        <ProjectCover cover={project.cover} className="aspect-[4/3]" />

        <div className="absolute inset-x-5 top-5 flex items-start justify-between">
          <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-[#0c0705] shadow-sm backdrop-blur">
            {categoryName[project.category]}
          </span>
          {project.sample && <SampleBadge />}
        </div>

        {/* hover: view button slides up */}
        <div className="pointer-events-none absolute inset-0 flex items-end justify-end p-5">
          <span className="flex translate-y-4 items-center gap-2 rounded-full bg-[#0c0705] py-1.5 pl-4 pr-1.5 text-sm font-medium text-white opacity-0 shadow-xl transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            View case study
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FF5F2D]">
              <Icon name="arrow" className="h-3.5 w-3.5 -rotate-45" />
            </span>
          </span>
        </div>
      </div>

      <div className="relative flex flex-1 flex-col p-6 sm:p-7">
        <span className="absolute left-6 right-6 top-0 h-px origin-left scale-x-0 bg-[#FF5F2D] transition-transform duration-500 group-hover:scale-x-100 sm:left-7 sm:right-7" />
        <div className="flex items-center justify-between gap-3">
          <span className="text-xs font-medium uppercase tracking-[0.15em] text-[#FF5F2D]">
            {industryName[project.industry]}
          </span>
          <span className="font-mono text-xs text-gray-400">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[#0c0705] transition-colors duration-300 group-hover:text-[#FF5F2D]">
          {project.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-gray-600">{project.summary}</p>
        <div className="mt-auto flex flex-wrap gap-2 pt-5">
          {project.tech.slice(0, 3).map((t) => (
            <span key={t} className="rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs text-gray-600">
              {t}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span className="rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs text-gray-400">
              +{project.tech.length - 3}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
