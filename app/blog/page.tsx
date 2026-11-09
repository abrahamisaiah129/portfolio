import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import BlogCard from "@/components/BlogCard";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { blogs } from "@/lib/blogs";

export default function BlogPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col px-6 sm:px-10">
      <Header />
      <section className="py-20 sm:py-28">
        <Link href="/" className="mb-8 inline-flex items-center gap-2 text-sm opacity-60 transition hover:opacity-100"><FiArrowLeft /> Back home</Link>
        <p className="text-sm uppercase tracking-[0.2em] opacity-50">Writing</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight sm:text-7xl">Notes from the build.</h1>
        <p className="mt-6 max-w-xl text-lg leading-8 opacity-60">Ideas on software engineering, product systems, and the details that make digital work feel better.</p>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {blogs.map((post) => <BlogCard key={post.slug} post={post} />)}
        </div>
      </section>
      <Footer />
    </main>
  );
}
