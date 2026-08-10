import type { Metadata } from "next";
import Link from "next/link";
import Badge from "@/components/landing/Badge";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — MIST",
  description:
    "Notes from the MIST protocol: architecture, proving performance, and the story behind the stack.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <section className="mist-section py-16 md:py-24">
          <Badge tone="cobalt">Blog</Badge>
          <h1
            className="mt-6 font-display text-4xl font-bold tracking-[-0.02em] text-ink md:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Notes from the protocol.
          </h1>
          <p className="mt-4 max-w-xl text-lg text-ink/70">
            Architecture, proving performance, and the story behind the stack.
          </p>

          <div className="mt-12 grid gap-px border border-misty bg-misty md:grid-cols-2">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white p-8 transition-colors hover:bg-baby"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink/50">
                  {post.date}
                </p>
                <h2 className="mist-h3 mt-3 text-ink group-hover:text-cobalt">
                  {post.title}
                </h2>
                <p className="mt-3 text-sm text-ink/70">{post.excerpt}</p>
                {post.tags.length > 0 && (
                  <p className="mt-4 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-misty bg-baby px-2 py-0.5 text-xs text-ink/70"
                        style={{ borderRadius: "var(--radius)" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </p>
                )}
              </Link>
            ))}
          </div>
        </section>
  );
}
