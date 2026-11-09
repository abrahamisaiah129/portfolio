"use client";

import { useEffect, useState } from "react";
import {
  FiArrowUpRight,
  FiArrowUp,
  FiBriefcase,
  FiDownload,
  FiMail,
  FiMessageCircle,
  FiX,
} from "react-icons/fi";
import { SiWhatsapp } from "react-icons/si";

const actions = [
  {
    label: "Start a project",
    description: "Tell me what you are building",
    icon: FiMail,
    href: "mailto:abrahamisaiah129@gmail.com?subject=New%20project%20enquiry",
  },
  {
    label: "Chat on WhatsApp",
    description: "Get a quick response",
    icon: SiWhatsapp,
    href: "https://wa.me/2349132260101",
    external: true,
  },
  {
    label: "See selected work",
    description: "Explore recent projects",
    icon: FiBriefcase,
    href: "/#work",
  },
  {
    label: "Download resume",
    description: "View experience and skills",
    icon: FiDownload,
    href: "/Abraham_Isaiah_Resume.pdf",
    download: true,
  },
];

export default function Assistant() {
  const [open, setOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    const updateScrollState = () => setShowBackToTop(window.scrollY > 500);
    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });

    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      window.removeEventListener("scroll", updateScrollState);
    };
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-40 sm:bottom-8 sm:right-8">
      {open && (
        <section
          className="mb-3 w-[min(22rem,calc(100vw-2.5rem))] overflow-hidden rounded-3xl border border-white/20 bg-[#171717]/95 shadow-2xl shadow-black/50 backdrop-blur-xl"
          role="dialog"
          aria-label="Portfolio assistant"
        >
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <div className="flex items-center gap-3">
              <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#0A0A0A]">
                <FiMessageCircle />
                <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-[#D97745] ring-2 ring-[#171717]" />
              </span>
              <div>
                <p className="text-sm font-medium">Isaiah&apos;s AI assistant</p>
                <p className="text-xs opacity-50">Choose an action to get started</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-full p-2 opacity-50 transition hover:bg-white/10 hover:opacity-100"
              aria-label="Close assistant"
            >
              <FiX />
            </button>
          </div>
          <div className="space-y-3 p-4">
            <div className="max-w-[17rem] rounded-2xl rounded-tl-md bg-white/[0.08] px-4 py-3 text-sm leading-6 opacity-80">
              Hi, I can help you find the right next step.
            </div>
            <div className="grid gap-2">
              {actions.map(({ label, description, icon: Icon, href, external, download }) => (
                <a
                  key={label}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noreferrer" : undefined}
                  download={download}
                  onClick={() => setOpen(false)}
                  className="group flex items-center gap-3 rounded-2xl border border-white/10 px-3 py-3 text-left transition hover:border-white/30 hover:bg-white/[0.08]"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/[0.08] transition group-hover:bg-white group-hover:text-[#0A0A0A]">
                    <Icon aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm">{label}</span>
                    <span className="block truncate text-xs opacity-45">{description}</span>
                  </span>
                  <FiArrowUpRight className="opacity-40 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </section>
      )}
      <div className="ml-auto flex items-center overflow-hidden rounded-full border border-white/25 bg-white text-sm font-medium text-[#0A0A0A] shadow-xl shadow-black/30 transition hover:-translate-y-1 hover:shadow-2xl">
        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          className="group flex items-center gap-2 px-4 py-3"
          aria-expanded={open}
          aria-label={open ? "Close portfolio assistant" : "Open portfolio assistant"}
        >
          {open ? <FiX /> : <FiMessageCircle />}
          <span className="hidden sm:inline">{open ? "Close" : "Ask me anything"}</span>
        </button>
        {showBackToTop && (
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 border-l border-[#0A0A0A]/15 px-3 py-3 transition hover:bg-[#0A0A0A] hover:text-white"
            aria-label="Back to top"
            title="Back to top"
          >
            <FiArrowUp />
            <span className="hidden sm:inline">Top</span>
          </button>
        )}
      </div>
    </div>
  );
}
