import Image from "next/image";
import { FiArrowUpRight, FiMail } from "react-icons/fi";

export default function Hero() {
  return (
    <section className="grid flex-1 items-center gap-12 py-16 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
      <div>
        <p className="mb-6 flex items-center gap-2 text-sm opacity-60">
          <span className="h-2 w-2 rounded-full bg-[#9CA3AF]" />
          Full-Stack Software Engineer
        </p>
        <h1 className="max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl">
          Building reliable software for ambitious products.
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8 opacity-65">
          I&apos;m Abraham Isaiah, a Full-Stack Software Engineer specializing
          in complex web and mobile applications. I work across JavaScript,
          TypeScript, React, Next.js, Node.js, and MongoDB.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-[#0A0A0A] transition hover:-translate-y-0.5 hover:opacity-80"
            href="#work"
          >
            See my work <FiArrowUpRight />
          </a>
          <a
            className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-3 text-sm font-medium transition hover:-translate-y-0.5 hover:bg-white hover:text-[#0A0A0A]"
            href="mailto:abrahamisaiah129@gmail.com"
          >
            Get in touch <FiMail />
          </a>
          <a
            className="text-sm underline underline-offset-4 transition hover:text-[#D97745]"
            href="/Abraham_Isaiah_Resume.pdf"
            download
          >
            Download resume
          </a>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-sm">
        <div className="absolute -inset-3 rounded-[2rem] border border-[#D97745]/25" aria-hidden="true" />
        <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-white/20 bg-[#171717] shadow-2xl shadow-black/40">
          <Image
            src="/abraham-isaiah.jpg"
            alt="Abraham Isaiah, software developer"
            fill
            priority
            sizes="(max-width: 1024px) 80vw, 36vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
