"use client";

import { useEffect, useState } from "react";

export default function Cursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [active, setActive] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const move = (event: PointerEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
      const target = event.target;
      setHovering(target instanceof Element && Boolean(target.closest("a, button, input, [data-cursor]")));
    };
    const down = () => setActive(true);
    const up = () => setActive(false);

    window.addEventListener("pointermove", move);
    window.addEventListener("pointerdown", down);
    window.addEventListener("pointerup", up);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerdown", down);
      window.removeEventListener("pointerup", up);
    };
  }, []);

  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none fixed left-0 top-0 z-50 hidden h-3 w-3 rounded-full bg-[#9CA3AF] transition-transform duration-100 sm:block ${active ? "scale-75" : hovering ? "scale-[2.5]" : ""}`}
      style={{
        left: position.x - 6,
        top: position.y - 6,
      }}
    />
  );
}
