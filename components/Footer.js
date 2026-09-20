import Link from "next/link";
import { GOVUK, SITE } from "@/lib/site";

const linkClass = "text-slate-300 underline-offset-2 hover:text-white hover:underline";

export default function Footer() {
  return (
    <footer className="mt-16 bg-navy-950 text-slate-300 print:hidden">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[2fr_1fr_1fr]">
        <div>
          <p className="font-serif text-lg font-semibold text-white">{SITE.name}</p>
          <p className="mt-3 max-w-md text-sm leading-6">
            This is an independent information tool. It is not affiliated with, endorsed by, or connected to the UK
            Government, the Home Office or UK Visas and Immigration (UKVI). Content is general information only and
            is not legal or immigration advice. Always confirm requirements on GOV.UK.
          </p>
        </div>

        <nav aria-label="Site links">
          <p className="text-sm font-semibold text-white">Site</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/" className={linkClass}>Checklist tool</Link></li>
            <li><Link href="/blog" className={linkClass}>Blog</Link></li>
            <li><Link href="/privacy-policy" className={linkClass}>Privacy Policy</Link></li>
            <li><Link href="/disclaimer" className={linkClass}>Legal Disclaimer</Link></li>
            <li><a href={`mailto:${SITE.contactEmail}`} className={linkClass}>Contact</a></li>
          </ul>
        </nav>

        <nav aria-label="Official GOV.UK links">
          <p className="text-sm font-semibold text-white">Official sources</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href={GOVUK.createAccount} target="_blank" rel="noopener noreferrer" className={linkClass}>Create a UKVI account</a></li>
            <li><a href={GOVUK.viewAndProve} target="_blank" rel="noopener noreferrer" className={linkClass}>View and prove your status</a></li>
            <li><a href={GOVUK.aboutEvisa} target="_blank" rel="noopener noreferrer" className={linkClass}>About eVisas</a></li>
          </ul>
        </nav>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-4 py-5 text-xs text-slate-400 sm:px-6">
          © {new Date().getFullYear()} {SITE.name}. Guidance last reviewed {SITE.lastReviewed}.
        </p>
      </div>
    </footer>
  );
}
