import Link from "next/link";
import { SITE } from "@/lib/site";

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white print:hidden">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5 font-serif text-lg font-semibold text-navy-900">
          <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden="true">
            <rect width="28" height="28" rx="6" className="fill-navy-900" />
            <path d="M8 14.5l4 4 8-9" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {SITE.name}
        </Link>

        <nav aria-label="Main">
          <ul className="flex items-center gap-1 text-sm font-medium text-slate-700">
            <li>
              <Link href="/#tool" className="rounded px-3 py-2 hover:bg-navy-50 hover:text-navy-900">
                Checklist tool
              </Link>
            </li>
            <li>
              <Link href="/blog" className="rounded px-3 py-2 hover:bg-navy-50 hover:text-navy-900">
                Blog
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
