import About from "@/components/About";
import BlogSection from "@/components/BlogSection";
import Cursor from "@/components/Cursor";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Work from "@/components/Work";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col px-6 sm:px-10">
      <Cursor />
      <Header />
      <Hero />
      <Stats />
      <Work />
      <About />
      <BlogSection />
      <Footer />
    </main>
  );
}
