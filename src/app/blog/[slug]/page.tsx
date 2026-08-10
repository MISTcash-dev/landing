import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import Badge from "@/components/landing/Badge";
import { getAllPosts, getPost, renderMarkdown } from "@/lib/blog";

interface BlogPostProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} — MIST Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostProps) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const html = renderMarkdown(post.content);

  return (
    <>
      <Navbar />
      <main id="main-content" className="min-h-screen">
        <article className="mist-section max-w-3xl py-16 md:py-24">
          <Badge tone="cobalt">Blog</Badge>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-ink/50">
            {post.date}
          </p>
          <h1
            className="mt-3 font-display text-4xl font-bold leading-tight tracking-[-0.02em] text-ink md:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {post.title}
          </h1>
          <div
            className="prose-blog mt-10 text-ink/80"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <p className="mt-14 border-t border-misty pt-6">
            <Link href="/blog" className="text-sm font-semibold text-cobalt hover:underline">
              All posts
            </Link>
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
