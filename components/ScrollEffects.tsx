"use client";

import { useEffect } from "react";

export default function ScrollEffects() {
  useEffect(() => {
    const revealTargets = document.querySelectorAll<HTMLElement>("main section, main article");
    revealTargets.forEach((element) => element.classList.add("scroll-reveal"));

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    revealTargets.forEach((element) => revealObserver.observe(element));

    const updateProgress = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
      document.documentElement.style.setProperty("--scroll-progress", `${progress * 100}%`);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });

    return () => {
      revealObserver.disconnect();
      window.removeEventListener("scroll", updateProgress);
    };
  }, []);

  return <span className="scroll-progress" aria-hidden="true" />;
}
