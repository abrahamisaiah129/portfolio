"use client";

import Link from "next/link";
import { useState } from "react";
import { FiArrowLeft, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

const pageSize = 4;

export default function ProjectsPage() {
  const [page, setPage] = useState(1);
  const pageCount = Math.ceil(projects.length / pageSize);
  const visibleProjects = projects.slice((page - 1) * pageSize, page * pageSize);

  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col px-6 sm:px-10">
      <Header />
      <section className="py-20 sm:py-28">
        <Link href="/" className="mb-8 inline-flex items-center gap-2 text-sm opacity-60 transition hover:opacity-100"><FiArrowLeft /> Back home</Link>
        <p className="text-sm opacity-55">Portfolio archive</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight sm:text-7xl">All projects.</h1>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {visibleProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={(page - 1) * pageSize + index} />
          ))}
        </div>
        <div className="mt-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              type="button"
              disabled={page === 1}
              onClick={() => setPage((current) => current - 1)}
              className="rounded-full border border-white/20 p-2 transition hover:bg-white hover:text-[#0A0A0A] disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-inherit"
              aria-label="Previous projects"
            >
              <FiChevronLeft />
            </button>
            <span className="text-sm opacity-60" aria-live="polite">
              Page {page} of {pageCount}
            </span>
            <button
              type="button"
              disabled={page === pageCount}
              onClick={() => setPage((current) => current + 1)}
              className="rounded-full border border-white/20 p-2 transition hover:bg-white hover:text-[#0A0A0A] disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-inherit"
              aria-label="Next projects"
            >
              <FiChevronRight />
            </button>
          </div>
          <span className="hidden text-sm opacity-50 sm:inline">
            {projects.length} projects
          </span>
        </div>
      </section>
      <Footer />
    </main>
  );
}
