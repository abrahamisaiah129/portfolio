"use client";

import { KeyboardEvent, useEffect, useState } from "react";
import Image from "next/image";
import { FiArrowUpRight, FiCode, FiExternalLink, FiGithub, FiMail, FiX } from "react-icons/fi";
import { SiFigma, SiFirebase, SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";

const stackIcons = {
  "Next.js": SiNextdotjs,
  TypeScript: SiTypescript,
  Tailwind: SiTailwindcss,
  Figma: SiFigma,
  Firebase: SiFirebase,
};

type Project = {
  title: string;
  description: string;
  details: string;
  stack: string[];
  image: string;
  imageSrc?: string;
  githubUrl: string;
  liveUrl?: string;
};

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const closeOnEscape = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setIsOpen(true);
    }
  };

  return (
    <>
      <article
        className="group cursor-pointer rounded-2xl border border-white/15 bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D97745]"
        onClick={() => setIsOpen(true)}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="button"
        aria-label={`View details for ${project.title}`}
      >
        <div
          role="img"
          aria-label={`${project.title} project preview`}
          className={`relative mb-6 flex h-48 flex-col items-start rounded-xl bg-gradient-to-br ${project.image} p-4 text-[#E3DACC]`}
        >
          {project.imageSrc && (
            <Image
              src={project.imageSrc}
              alt={`${project.title} preview`}
              fill
              sizes="(max-width: 768px) 90vw, 45vw"
              className="object-cover"
            />
          )}
          <span className="absolute inset-0 bg-black/20" aria-hidden="true" />
          <span className="text-sm">0{index + 1}</span>
          <div className="mt-auto">
            <p className="text-2xl font-semibold tracking-tight">{project.title}</p>
            <p className="mt-1 text-xs uppercase tracking-[0.16em] opacity-70">Project preview</p>
          </div>
          <FiArrowUpRight className="absolute right-4 top-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-xl font-medium">{project.title}</h2>
            <p className="mt-2 text-sm opacity-55">{project.description}</p>
          </div>
          <FiExternalLink className="shrink-0 opacity-50 transition group-hover:opacity-100" aria-hidden="true" />
        </div>
        <div className="mt-5 flex flex-wrap gap-3 text-xs opacity-65">
          {project.stack.map((technology) => {
            const Icon = stackIcons[technology as keyof typeof stackIcons] ?? FiCode;
            return <span key={technology} className="inline-flex items-center gap-1.5"><Icon aria-hidden="true" />{technology}</span>;
          })}
        </div>
        <p className="mt-6 text-xs uppercase tracking-[0.16em] opacity-40 transition group-hover:opacity-70">View project details</p>
      </article>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-md"
          role="presentation"
          onClick={() => setIsOpen(false)}
        >
          <section
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-white/20 bg-[#171717] p-5 shadow-2xl shadow-black/50 sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-labelledby={`${project.title}-title`}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 rounded-full border border-white/20 p-2 transition hover:bg-white hover:text-[#0A0A0A]"
              aria-label="Close project details"
            >
              <FiX />
            </button>
            <div
              role="img"
              aria-label={`${project.title} project preview`}
              className={`relative flex h-56 flex-col justify-end overflow-hidden rounded-2xl bg-gradient-to-br ${project.image} p-5 sm:h-72`}
            >
              {project.imageSrc && (
                <Image
                  src={project.imageSrc}
                  alt={`${project.title} preview`}
                  fill
                  sizes="(max-width: 640px) 90vw, 600px"
                  className="object-cover"
                />
              )}
              <span className="absolute inset-0 bg-black/20" aria-hidden="true" />
              <span className="text-3xl font-semibold tracking-tight text-[#E3DACC]">{project.title}</span>
              <span className="mt-1 text-sm text-[#E3DACC]/75">Project 0{index + 1} · Preview image</span>
            </div>
            <p className="mt-8 text-sm uppercase tracking-[0.2em] opacity-50">Case study preview</p>
            <h2 id={`${project.title}-title`} className="mt-3 text-3xl font-semibold tracking-tight">{project.title}</h2>
            <p className="mt-4 leading-7 opacity-70">{project.details}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((technology) => (
                <span key={technology} className="rounded-full border border-white/15 bg-white/[0.05] px-3 py-1.5 text-xs opacity-75">{technology}</span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3 border-t border-white/10 pt-6">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-medium text-[#0A0A0A] transition hover:opacity-80"
              >
                GitHub <FiGithub />
              </a>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 px-4 py-2.5 text-sm transition hover:bg-white hover:text-[#0A0A0A]"
                >
                  Live demo <FiExternalLink />
                </a>
              )}
              <a
                href={`mailto:abrahamisaiah129@gmail.com?subject=${encodeURIComponent(`${project.title} project enquiry`)}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-4 py-2.5 text-sm transition hover:bg-white hover:text-[#0A0A0A]"
              >
                Request a demo <FiMail />
              </a>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
