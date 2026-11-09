import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowLeft } from "react-icons/fi";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { blogs } from "@/lib/blogs";

export function generateStaticParams() {
  return blogs.map((post) => ({ slug: post.slug }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogs.find((entry) => entry.slug === params.slug);
  if (!post) notFound();

  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col px-6 sm:px-10">
      <Header />
      <article className="mx-auto w-full max-w-3xl py-20 sm:py-28">
        <Link href="/blog" className="mb-12 inline-flex items-center gap-2 text-sm opacity-60 transition hover:opacity-100"><FiArrowLeft /> All posts</Link>
        <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.16em] opacity-50">
          <span>{post.category}</span>
          <span>·</span>
          <time dateTime={post.date}>{post.date}</time>
          <span>·</span>
          <span>{post.readTime}</span>
        </div>
        <div className={`mt-10 flex h-56 flex-col justify-end rounded-2xl bg-gradient-to-br ${post.image} p-6 text-[#E3DACC] sm:h-72`} role="img" aria-label={`${post.title} cover image`}>
          <p className="text-3xl font-semibold tracking-tight">{post.title}</p>
          <p className="mt-1 text-xs uppercase tracking-[0.16em] opacity-70">Notes from the build</p>
        </div>
        <h1 className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl">{post.title}</h1>
        <p className="mt-8 text-xl leading-8 opacity-60">{post.excerpt}</p>
        <div className="mt-12 space-y-6 border-t border-white/15 pt-10 text-lg leading-8 opacity-80">
          {post.content.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <section className="mt-16 border-t border-white/15 pt-8" aria-labelledby={`${post.slug}-gallery`}>
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] opacity-50">Visual notes</p>
              <h2 id={`${post.slug}-gallery`} className="mt-3 text-2xl font-semibold tracking-tight">Inside the process.</h2>
            </div>
            <span className="text-xs opacity-40">03 images</span>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {post.gallery.map((image, index) => (
              <div
                key={`${post.slug}-${image}`}
                role="img"
                aria-label={`${post.title} visual note ${index + 1}`}
                className={`flex aspect-[4/3] items-end rounded-2xl bg-gradient-to-br ${image} p-4 text-sm text-[#E3DACC]`}
              >
                <span className="opacity-70">Visual note 0{index + 1}</span>
              </div>
            ))}
          </div>
        </section>
      </article>
      <Footer />
    </main>
  );
}
