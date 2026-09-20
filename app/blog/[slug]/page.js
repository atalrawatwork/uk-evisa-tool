import Link from "next/link";
import { notFound } from "next/navigation";
import AdSlot from "@/components/AdSlot";
import ArticleBody from "@/components/ArticleBody";
import { formatDate, getAllPosts, getPostBySlug } from "@/lib/posts";
import { SITE } from "@/lib/site";

// Every article is pre-rendered at build time: instant loads, no server work per request.
export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

// In Next.js 15+, `params` is a Promise.
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      modifiedTime: post.updated || post.date,
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getAllPosts()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updated || post.date,
    inLanguage: "en-GB",
    mainEntityOfPage: `${SITE.url}/blog/${post.slug}`,
    publisher: { "@type": "Organization", name: SITE.name },
  };

  return (
    <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />

      <nav aria-label="Breadcrumb" className="text-sm text-slate-600">
        <Link href="/blog" className="underline underline-offset-2 hover:text-navy-900">
          Blog
        </Link>
      </nav>

      <h1 className="mt-4 max-w-[24ch] font-serif text-3xl font-semibold leading-tight text-navy-900 sm:text-4xl sm:leading-tight">
        {post.title}
      </h1>
      <p className="mt-3 text-sm text-slate-500">
        Updated <time dateTime={post.updated || post.date}>{formatDate(post.updated || post.date)}</time>
        {" – "}
        {post.readingMinutes} min read
      </p>

      <div className="mt-8">
        <ArticleBody blocks={post.content} />
      </div>

      <AdSlot slot={SITE.slots.article} position="End of article" minHeight={250} className="mt-10" />

      <p className="mt-8 max-w-[68ch] border-t border-slate-200 pt-4 text-sm leading-6 text-slate-600">
        This article is general information, not legal or immigration advice. Rules change, so confirm the current
        position on GOV.UK. See our <Link href="/disclaimer" className="underline">legal disclaimer</Link>.
      </p>

      <section aria-labelledby="related-title" className="mt-12 rounded-lg border border-slate-200 bg-white p-6">
        <h2 id="related-title" className="font-serif text-xl font-semibold text-navy-900">
          Get your personalised checklist
        </h2>
        <p className="mt-2 text-slate-700">
          Answer three questions and we’ll list the exact steps for your situation.
        </p>
        <Link
          href="/#tool"
          className="mt-4 inline-block rounded-md bg-navy-800 px-5 py-2.5 text-sm font-semibold text-white hover:bg-navy-900"
        >
          Open the checklist tool
        </Link>

        {related.length > 0 && (
          <>
            <h3 className="mt-8 text-sm font-semibold text-slate-700">More guides</h3>
            <ul className="mt-2 space-y-2 text-sm">
              {related.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/blog/${p.slug}`}
                    className="font-medium text-navy-700 underline underline-offset-2 hover:text-navy-900"
                  >
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}
      </section>
    </article>
  );
}
