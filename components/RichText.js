import Link from "next/link";

const LINK_RE = /\[([^\]]+)\]\(([^)\s]+)\)/g;
const linkClass = "font-medium text-navy-700 underline underline-offset-2 hover:text-navy-900";

/**
 * Renders a string containing [label](url) links.
 * URLs starting with "/" become internal <Link>s; everything else opens in a new tab.
 */
export default function RichText({ text }) {
  const nodes = [];
  let last = 0;

  for (const match of text.matchAll(LINK_RE)) {
    const [full, label, href] = match;
    if (match.index > last) nodes.push(text.slice(last, match.index));

    nodes.push(
      href.startsWith("/") ? (
        <Link key={match.index} href={href} className={linkClass}>
          {label}
        </Link>
      ) : (
        <a key={match.index} href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
          {label}
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      ),
    );
    last = match.index + full.length;
  }

  if (last < text.length) nodes.push(text.slice(last));
  return <>{nodes}</>;
}
