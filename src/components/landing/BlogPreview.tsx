import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import SectionHeading from "./SectionHeading";

export default function BlogPreview() {
  const posts = getAllPosts().slice(0, 2);

  if (posts.length === 0) return null;

  return (
    <section className="border-t border-misty bg-white py-16 md:py-24">
      <div className="mist-section">
        <SectionHeading eyebrow="Blog" title="Latest from the protocol." />
        <div className="grid gap-px border border-misty bg-misty sm:grid-cols-2">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white p-7 transition-colors hover:bg-baby"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink/50">
                {post.date}
              </p>
              <h3 className="mist-h3 mt-3 text-ink group-hover:text-cobalt">
                {post.title}
              </h3>
              <p className="mt-3 text-sm text-ink/70">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
