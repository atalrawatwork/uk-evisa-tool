import Link from "next/link";
import AdSlot from "@/components/AdSlot";
import ChecklistTool from "@/components/ChecklistTool";
import { formatDate, getAllPosts } from "@/lib/posts";
import { GOVUK, SITE } from "@/lib/site";

const OFFICIAL_LINKS = [
  { label: "Create your UKVI account", href: GOVUK.createAccount },
  { label: "UK Immigration: ID Check app", href: GOVUK.idCheckApp },
  { label: "View and prove your status", href: GOVUK.viewAndProve },
  { label: "Update your account details", href: GOVUK.updateDetails },
];

const FAQ = [
  {
    q: "Does an expired BRP mean my visa has ended?",
    a: "No. The card was only a physical record of your permission. Your visa lasts until the date on your decision letter or shown in your eVisa, whatever the date printed on the card.",
  },
  {
    q: "Is a UKVI account free?",
    a: "Yes. Creating and using a UKVI account costs nothing on GOV.UK. Be wary of any website that charges you to do it, and check that the address ends in gov.uk before entering personal details.",
  },
  {
    q: "Does this tool store my answers?",
    a: "No. Your answers are processed in your browser to build the checklist and are not sent to our servers or saved.",
  },
  {
    q: "Is this an official government service?",
    a: "No. This is an independent tool that links to official GOV.UK pages. It gives general information, not legal advice, so always confirm the current rules on GOV.UK.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: `${SITE.name}: BRP to eVisa checklist tool`,
  description: SITE.description,
  url: SITE.url,
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Any",
  inLanguage: "en-GB",
  offers: { "@type": "Offer", price: "0", priceCurrency: "GBP" },
};

export default function HomePage() {
  const latest = getAllPosts().slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />

      {/* ---------- Hero ---------- */}
      <section className="relative overflow-hidden bg-navy-900 text-white">
        {/* Decorative nod to a passport’s machine-readable zone. Pure CSS/text, no image to load. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 select-none overflow-hidden whitespace-nowrap font-mono text-5xl leading-none tracking-widest text-white/[0.06] sm:text-7xl"
        >
          {"<".repeat(140)}
        </div>
        <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <h1 className="max-w-2xl font-serif text-3xl font-semibold leading-tight sm:text-5xl sm:leading-[1.1]">
            From BRP card to eVisa, one clear checklist
          </h1>
          <p className="mt-4 max-w-xl text-base leading-7 text-navy-100 sm:text-lg">
            Answer three questions about your BRP, UKVI account and passport. You get a step-by-step list you can tick
            off or print.
          </p>
          <p className="mt-3 text-sm text-navy-200">
            Free, no sign-up, and your answers stay in your browser. Guidance last reviewed {SITE.lastReviewed}.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        {/* <!-- ADSENSE BANNER PLACEMENT --> above the tool */}
        <AdSlot slot={SITE.slots.top} position="Above the tool" minHeight={100} className="mb-8" />

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
          <ChecklistTool />

          {/* ---------- Sidebar ---------- */}
          <aside aria-label="Sidebar" className="space-y-6 print:hidden">
            {/* <!-- ADSENSE BANNER PLACEMENT --> in the sidebar */}
            <AdSlot slot={SITE.slots.sidebar} position="Sidebar" minHeight={250} />

            <section className="rounded-lg border border-slate-200 bg-white p-5">
              <h2 className="font-serif text-lg font-semibold text-navy-900">Official GOV.UK pages</h2>
              <ul className="mt-3 space-y-2 text-sm">
                {OFFICIAL_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-navy-700 underline underline-offset-2 hover:text-navy-900"
                    >
                      {link.label}
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-lg border border-slate-200 bg-white p-5">
              <h2 className="font-serif text-lg font-semibold text-navy-900">Latest guides</h2>
              <ul className="mt-3 space-y-3 text-sm">
                {latest.map((post) => (
                  <li key={post.slug}>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="font-medium text-navy-700 underline underline-offset-2 hover:text-navy-900"
                    >
                      {post.title}
                    </Link>
                    <p className="mt-0.5 text-xs text-slate-500">{formatDate(post.date)}</p>
                  </li>
                ))}
              </ul>
            </section>
          </aside>
        </div>

        {/* ---------- Explainer content (useful, original text helps AdSense approval) ---------- */}
        <section aria-labelledby="explainer-title" className="mt-14 max-w-3xl print:hidden">
          <h2 id="explainer-title" className="font-serif text-2xl font-semibold text-navy-900">
            What changed for BRP holders?
          </h2>
          <div className="mt-4 space-y-4 leading-7">
            <p>
              The Home Office is replacing physical immigration documents, including biometric residence permits
              (BRPs), with eVisas: an online record of your immigration permission and any conditions attached to it.
              For most people, the BRP card stopped being the way to prove status at the end of 2024, but the visa
              behind the card did not end.
            </p>
            <p>
              To see or prove your status, you sign in to a UKVI account. From there you can view your eVisa and
              generate a share code, which lets an employer or landlord check your status on GOV.UK.
            </p>
            <p>
              Your eVisa is linked to your passport or travel document. When you renew your passport, update your
              account too, otherwise airlines and border staff may not be able to match you to your record. Our{" "}
              <Link href="/blog/how-to-update-passport-in-ukvi-account" className="font-medium text-navy-700 underline underline-offset-2">
                guide to updating your passport
              </Link>{" "}
              walks through it.
            </p>
          </div>

          <h2 className="mt-10 font-serif text-2xl font-semibold text-navy-900">Common questions</h2>
          <div className="mt-4 divide-y divide-slate-200 rounded-lg border border-slate-200 bg-white">
            {FAQ.map((item) => (
              <details key={item.q} className="group p-4">
                <summary className="cursor-pointer font-semibold text-navy-900">{item.q}</summary>
                <p className="mt-2 text-sm leading-6 text-slate-700">{item.a}</p>
              </details>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
