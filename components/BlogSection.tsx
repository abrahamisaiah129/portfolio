import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import BlogCard from "@/components/BlogCard";
import { blogs } from "@/lib/blogs";

export default function BlogSection() {
  const featuredPost = blogs[0];

  return (
    <section id="blog" className="border-t border-white/15 py-20">
      <div className="mb-10 flex items-end justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] opacity-50">Featured writing</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Notes from the build.</h2>
        </div>
        <Link href="/blog" className="hidden items-center gap-2 text-sm underline underline-offset-4 transition hover:text-[#D97745] sm:inline-flex">
          View all posts <FiArrowUpRight />
        </Link>
      </div>
      <BlogCard post={featuredPost} featured />
      <Link href="/blog" className="mt-6 inline-flex items-center gap-2 text-sm underline underline-offset-4 transition hover:text-[#D97745] sm:hidden">
        View all posts <FiArrowUpRight />
      </Link>
    </section>
  );
}
