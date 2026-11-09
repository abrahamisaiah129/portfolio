import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { SiWhatsapp } from "react-icons/si";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/15 py-16">
      <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-xl">
          <p className="text-sm uppercase tracking-[0.2em] opacity-50">Contact</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Have a product to build?
          </h2>
          <p className="mt-4 max-w-md leading-7 opacity-60">
            I&apos;m open to thoughtful collaborations, product work, and
            challenging software problems.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-[#0A0A0A] transition hover:-translate-y-0.5 hover:opacity-80"
            href="mailto:abrahamisaiah129@gmail.com"
          >
            Email me <FiArrowUpRight />
          </a>
          <a
            className="inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-3 text-sm font-medium transition hover:-translate-y-0.5 hover:bg-white hover:text-[#0A0A0A]"
            href="https://wa.me/2349132260101"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp <SiWhatsapp />
          </a>
        </div>
      </div>
      <div className="mt-16 flex flex-col gap-5 border-t border-white/10 pt-6 text-sm opacity-60 sm:flex-row sm:items-center sm:justify-between">
        <span>© 2026 Abraham Isaiah</span>
        <div className="flex items-center gap-3">
          <a className="rounded-full border border-white/15 p-2 transition hover:border-white/50 hover:bg-white hover:text-[#0A0A0A]" href="https://github.com/abrahamisaiah129" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FiGithub />
          </a>
          <a className="rounded-full border border-white/15 p-2 transition hover:border-white/50 hover:bg-white hover:text-[#0A0A0A]" href="https://linkedin.com/in/abraham-isaiah-066a18229" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FiLinkedin />
          </a>
          <a className="rounded-full border border-white/15 p-2 transition hover:border-white/50 hover:bg-white hover:text-[#0A0A0A]" href="mailto:abrahamisaiah129@gmail.com" aria-label="Email">
            <FiMail />
          </a>
          <a className="rounded-full border border-white/15 p-2 transition hover:border-white/50 hover:bg-white hover:text-[#0A0A0A]" href="https://wa.me/2349132260101" target="_blank" rel="noreferrer" aria-label="WhatsApp">
            <SiWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  );
}
