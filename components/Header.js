import Link from "next/link";
import { SITE } from "@/lib/site";
import Image from "next/image";


export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white print:hidden">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-1 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5 font-serif text-lg font-semibold text-navy-900">
          <Image src="/logo.png" alt="Logo" width={50} height={50} className="object-contain" />

           <span className="text-base font-bold text-navy">
    UK eVisa  <span className="text-blue-800"> .com</span>
  </span>
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
