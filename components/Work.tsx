"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { FiChevronLeft, FiChevronRight, FiSearch, FiX } from "react-icons/fi";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

const pageSize = 2;

export default function Work() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const filteredProjects = useMemo(
    () => projects.filter((project) => `${project.title} ${project.description} ${project.stack.join(" ")}`.toLowerCase().includes(query.toLowerCase())),
    [query],
  );
  const pageCount = Math.max(1, Math.ceil(filteredProjects.length / pageSize));
  const visibleProjects = filteredProjects.slice((page - 1) * pageSize, page * pageSize);

  return (
    <section id="work" className="border-t border-white/15 py-20">
      <div className="mb-10 flex items-center justify-between gap-4">
        <p className="text-sm opacity-55">Selected work</p>
        <div className={`flex items-center gap-2 overflow-hidden rounded-full border border-white/25 transition-all duration-300 ${searchOpen ? "w-full max-w-xs px-3" : "w-10 border-transparent"}`}>
          {searchOpen && <input autoFocus value={query} onChange={(event) => { setQuery(event.target.value); setPage(1); }} placeholder="Search projects..." className="min-w-0 flex-1 bg-transparent py-2 text-sm outline-none placeholder:opacity-50" aria-label="Search projects" />}
          <button type="button" className="shrink-0 p-2" onClick={() => { setSearchOpen((open) => !open); if (searchOpen) { setQuery(""); setPage(1); } }} aria-label={searchOpen ? "Close project search" : "Search projects"}>{searchOpen ? <FiX /> : <FiSearch />}</button>
        </div>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {visibleProjects.length > 0 ? visibleProjects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={(page - 1) * pageSize + index} />
        )) : (
          <div className="rounded-2xl border border-dashed border-white/25 px-6 py-12 text-center md:col-span-2">
            <p className="font-medium">No projects found</p>
            <p className="mt-2 text-sm opacity-60">Try a different title, tool, or keyword.</p>
            <button type="button" onClick={() => setQuery("")} className="mt-5 text-sm underline underline-offset-4 transition hover:text-[#D97745]">
              Clear search
            </button>
          </div>
        )}
      </div>
      <div className="mt-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button type="button" disabled={page === 1} onClick={() => setPage((current) => current - 1)} className="rounded-full border border-white/20 p-2 disabled:opacity-30" aria-label="Previous projects"><FiChevronLeft /></button>
          <span className="text-sm opacity-60">{page} / {pageCount}</span>
          <button type="button" disabled={page === pageCount} onClick={() => setPage((current) => current + 1)} className="rounded-full border border-white/20 p-2 disabled:opacity-30" aria-label="Next projects"><FiChevronRight /></button>
        </div>
        <Link href="/projects" className="text-sm underline underline-offset-4 transition hover:text-[#D97745]">See all projects</Link>
      </div>
    </section>
  );
}
