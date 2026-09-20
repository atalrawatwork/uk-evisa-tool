import Link from "next/link";
import AdSlot from "@/components/AdSlot";
import { formatDate, getAllPosts } from "@/lib/posts";
import { SITE } from "@/lib/site";

export const metadata = {
  title: "UK eVisa guides",
  description: "Plain-English guides on BRPs, UKVI accounts, eVisas, share codes and passport updates.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <h1 className="font-serif text-3xl font-semibold text-navy-900 sm:text-4xl">UK eVisa guides</h1>
      <p className="mt-3 max-w-xl text-lg leading-7 text-slate-700">
        Plain-English explanations of BRPs, UKVI accounts, eVisas and share codes, each linking to the official
        GOV.UK pages.
      </p>

      <ul className="mt-10 divide-y divide-slate-200 border-y border-slate-200">
        {posts.map((post) => (
          <li key={post.slug}>
            <article className="py-6">
              <h2 className="font-serif text-xl font-semibold leading-snug text-navy-900 sm:text-2xl">
                <Link href={`/blog/${post.slug}`} className="hover:text-navy-700 hover:underline">
                  {post.title}
                </Link>
              </h2>
              <p className="mt-2 leading-7 text-slate-700">{post.description}</p>
              <p className="mt-2 text-sm text-slate-500">
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                {" – "}
                {post.readingMinutes} min read
              </p>
            </article>
          </li>
        ))}
      </ul>

      <AdSlot slot={SITE.slots.article} position="Blog index" minHeight={250} className="mt-10" />
    </div>
  );
}
