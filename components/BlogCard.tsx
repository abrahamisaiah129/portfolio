import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import type { BlogPost } from "@/lib/blogs";

export default function BlogCard({ post, featured = false }: { post: BlogPost; featured?: boolean }) {
  return (
    <article className={`group rounded-2xl border border-white/15 bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/35 ${featured ? "sm:p-8" : ""}`}>
      <div className={`relative mb-6 flex h-44 flex-col justify-end overflow-hidden rounded-xl bg-gradient-to-br ${post.image} p-5 text-[#E3DACC] ${featured ? "sm:h-56" : ""}`} role="img" aria-label={`${post.title} cover image`}>
        <span className="absolute right-4 top-4 text-xs uppercase tracking-[0.16em] opacity-60">Essay</span>
        <p className="max-w-md text-2xl font-semibold tracking-tight">{post.title}</p>
        <p className="mt-1 text-xs uppercase tracking-[0.16em] opacity-70">Notes from the build</p>
      </div>
      <div className="flex items-center justify-between gap-4 text-xs uppercase tracking-[0.16em] opacity-50">
        <span>{post.category}</span>
        <span>{post.readTime}</span>
      </div>
      <h2 className={`mt-8 font-semibold tracking-tight ${featured ? "text-3xl sm:text-4xl" : "text-2xl"}`}>{post.title}</h2>
      <p className="mt-4 max-w-xl leading-7 opacity-60">{post.excerpt}</p>
      <div className="mt-8 flex items-center justify-between gap-4 text-sm">
        <time dateTime={post.date}>{post.date}</time>
        <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-2 underline underline-offset-4 transition hover:text-[#D97745]">
          Read article <FiArrowUpRight className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Link>
      </div>
    </article>
  );
}
