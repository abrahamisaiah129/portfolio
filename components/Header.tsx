"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FiBriefcase,
  FiBookOpen,
  FiHome,
  FiMail,
  FiMenu,
  FiUser,
  FiX,
} from "react-icons/fi";

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [pill, setPill] = useState({ left: 0, width: 0 });
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const pathname = usePathname();
  const links = [
    { href: "/", label: "Home", icon: FiHome },
    { href: pathname === "/" ? "#work" : "/#work", label: "Work", icon: FiBriefcase },
    { href: pathname === "/" ? "#about" : "/#about", label: "About", icon: FiUser },
    { href: pathname === "/" ? "#blog" : "/blog", label: "Blog", icon: FiBookOpen },
    { href: pathname === "/" ? "#contact" : "/#contact", label: "Contact", icon: FiMail },
  ];

  const movePill = (label: string) => {
    const link = linkRefs.current[label];
    if (link) setPill({ left: link.offsetLeft, width: link.offsetWidth });
  };

  useEffect(() => {
    movePill("Contact");
  }, [pathname]);

  return (
    <header className="sticky top-0 z-30 -mx-6 flex items-center justify-between border-b border-white/10 bg-[#0A0A0A]/75 px-6 py-4 backdrop-blur-xl sm:-mx-10 sm:px-10">
      <div className="flex items-center gap-3">
        <button
          type="button"
          className="rounded-full border border-white/20 p-2 transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-black hover:text-[#E3DACC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D97745] sm:hidden"
          onClick={() => setSidebarOpen((open) => !open)}
          aria-label={sidebarOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={sidebarOpen}
        >
          {sidebarOpen ? <FiX size={18} /> : <FiMenu size={18} />}
        </button>
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-xs text-[#0A0A0A]">AI</span>
          <span>Abraham Isaiah</span>
        </Link>
      </div>

      <nav
        className="relative hidden items-center gap-1 rounded-full border border-white/20 bg-white/10 p-1 text-sm shadow-lg shadow-black/20 backdrop-blur-xl sm:flex"
        aria-label="Primary navigation"
        onMouseLeave={() => movePill("Contact")}
      >
        <span
          className="pointer-events-none absolute bottom-1 top-1 rounded-full bg-black shadow-md shadow-black/30 transition-all duration-500 ease-out"
          style={{ left: pill.left, width: pill.width }}
          aria-hidden="true"
        />
        {links.slice(1).map(({ href, label }) => (
          <Link
            ref={(element) => { linkRefs.current[label] = element; }}
            className="relative z-10 rounded-full px-4 py-2 transition duration-500 hover:-translate-y-0.5 hover:text-white focus-visible:text-white"
            href={href}
            key={label}
            onMouseEnter={() => movePill(label)}
            onFocus={() => movePill(label)}
          >
            {label}
          </Link>
        ))}
      </nav>
      <div className="hidden items-center gap-2 text-xs opacity-60 sm:flex">
        <span className="h-2 w-2 rounded-full bg-[#9CA3AF]" />
        Open to work
      </div>

      {sidebarOpen && (
        <>
          <button
            type="button"
            className="fixed inset-0 z-10 min-h-screen w-full bg-black/60 backdrop-blur-xl backdrop-saturate-150 transition-opacity duration-300"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close navigation backdrop"
          />
          <aside className="fixed inset-x-4 top-4 z-20 flex min-h-[calc(100vh-2rem)] w-auto flex-col rounded-3xl border border-white/20 bg-[#171717]/90 px-5 pb-8 pt-24 shadow-2xl shadow-black/40 backdrop-blur-xl sm:inset-y-4 sm:left-4 sm:right-auto sm:top-4 sm:min-h-0 sm:w-72">
          <nav className="grid gap-2 text-sm" aria-label="Mobile navigation">
            {links.map(({ href, label, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                className="flex items-center gap-3 rounded-lg px-3 py-3 transition duration-300 ease-out hover:translate-x-1 hover:bg-black hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D97745]"
                onClick={() => setSidebarOpen(false)}
              >
                <Icon size={18} aria-hidden="true" />
                {label}
              </Link>
            ))}
          </nav>
          <button
            type="button"
            className="mt-8 flex items-center gap-3 self-start rounded-lg px-3 py-3 text-sm opacity-60 transition duration-300 ease-out hover:translate-x-1 hover:bg-black hover:text-white hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D97745]"
            onClick={() => setSidebarOpen(false)}
          >
            <FiX size={18} aria-hidden="true" />
            Close menu
          </button>
          </aside>
        </>
      )}
    </header>
  );
}
