import Link from "next/link";
import { FiArrowUpRight, FiGithub, FiTrendingUp } from "react-icons/fi";

const stats = [
  { value: "7+", label: "Selected products shipped" },
  { value: "50k+", label: "Active users supported" },
  { value: "99.8%", label: "MVP uptime delivered" },
  { value: "5+", label: "Years building software" },
];

const githubStats = [
  { value: "49", label: "Public repositories" },
  { value: "5", label: "Stars received" },
  { value: "270", label: "Contributions this year" },
  { value: "3", label: "Followers" },
];

export default function Stats() {
  return (
    <section className="border-t border-white/15 py-16" aria-labelledby="impact-title">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="flex items-center gap-2 text-sm uppercase tracking-[0.2em] opacity-50">
            <FiTrendingUp aria-hidden="true" />
            By the numbers
          </p>
          <h2 id="impact-title" className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Built for real-world impact.
          </h2>
        </div>
        <Link
          href="https://github.com/abrahamisaiah129"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 self-start rounded-full border border-white/20 px-4 py-2.5 text-sm transition hover:bg-white hover:text-[#0A0A0A] sm:self-auto"
        >
          <FiGithub aria-hidden="true" />
          View GitHub
          <FiArrowUpRight aria-hidden="true" />
        </Link>
      </div>
      <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/15 bg-white/15 sm:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-[#111111] px-5 py-6 sm:px-6">
            <p className="text-3xl font-semibold tracking-tight">{stat.value}</p>
            <p className="mt-2 text-xs leading-5 opacity-50">{stat.label}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 flex items-center justify-between gap-4">
        <p className="text-sm uppercase tracking-[0.2em] opacity-50">GitHub activity</p>
        <Link href="https://github.com/abrahamisaiah129" target="_blank" rel="noreferrer" className="text-sm underline underline-offset-4 transition hover:text-[#D97745]">
          @abrahamisaiah129
        </Link>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {githubStats.map((stat) => (
          <div key={stat.label} className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-4">
            <p className="text-xl font-semibold">{stat.value}</p>
            <p className="mt-1 text-xs opacity-50">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
