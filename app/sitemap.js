import { getAllPosts } from "@/lib/posts";
import { SITE } from "@/lib/site";

// Served at /sitemap.xml. New blog posts are included automatically.
export default function sitemap() {
  const base = SITE.url.replace(/\/$/, "");

  return [
    { url: `${base}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/blog`, changeFrequency: "weekly", priority: 0.8 },
    ...getAllPosts().map((post) => ({
      url: `${base}/blog/${post.slug}`,
      lastModified: post.updated || post.date,
      changeFrequency: "monthly",
      priority: 0.7,
    })),
    { url: `${base}/privacy-policy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/disclaimer`, changeFrequency: "yearly", priority: 0.3 },
  ];
}
