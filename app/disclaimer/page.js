import Link from "next/link";
import Prose from "@/components/Prose";
import { GOVUK, SITE } from "@/lib/site";

export const metadata = {
  title: "Legal Disclaimer",
  description: `Important information about the limits of the guidance on ${SITE.name}.`,
  alternates: { canonical: "/disclaimer" },
};

export default function DisclaimerPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <h1 className="font-serif text-3xl font-semibold text-navy-900 sm:text-4xl">Legal Disclaimer</h1>
      <p className="mt-2 text-sm text-slate-500">Guidance last reviewed: {SITE.lastReviewed}</p>

      <div className="mt-8">
        <Prose>
          <h2>Not an official government website</h2>
          <p>
            {SITE.name} is an independent website. It is not affiliated with, endorsed by, or operated by the UK
            Government, the Home Office or UK Visas and Immigration (UKVI). The official service for creating and using
            a UKVI account is on GOV.UK:{" "}
            <a href={GOVUK.createAccount} target="_blank" rel="noopener noreferrer">gov.uk/get-access-evisa</a>.
          </p>

          <h2>Not legal or immigration advice</h2>
          <p>
            The checklist, guides and other content on this site are general information only. They are not legal or
            immigration advice and do not create an adviser–client relationship. Your circumstances may differ from the
            examples described. If your right to work, rent, study or travel could be affected, speak to a solicitor or
            an immigration adviser regulated by the Immigration Advice Authority (formerly the OISC).
          </p>

          <h2>Accuracy and changes</h2>
          <p>
            Immigration rules, deadlines and online services change, sometimes at short notice. We try to keep our
            content accurate and note when it was last reviewed, but we cannot guarantee that it is complete or
            up to date. Always check the current position on GOV.UK before you act.
          </p>

          <h2>No fees, no affiliation with paid services</h2>
          <p>
            Creating and using a UKVI account is free on GOV.UK. We do not charge for immigration services and do not
            process applications. Be cautious of any website that asks you to pay to create an account or access your
            eVisa.
          </p>

          <h2>External links</h2>
          <p>
            We link to GOV.UK and other third-party websites for your convenience. We do not control those sites and are
            not responsible for their content or availability.
          </p>

          <h2>Advertising</h2>
          <p>
            This site is funded by advertising, including Google AdSense. Advertisements are clearly labelled and are
            not recommendations or endorsements by us. Advertisers do not influence our checklist or guides. See our{" "}
            <Link href="/privacy-policy">Privacy Policy</Link> for how advertising cookies work and how to opt out.
          </p>

          <h2>Limitation of liability</h2>
          <p>
            To the fullest extent permitted by law, we accept no liability for any loss or damage arising from your use
            of, or reliance on, this website. Nothing in this disclaimer excludes liability that cannot be excluded
            under the law of England and Wales, including for death or personal injury caused by negligence, or for
            fraud.
          </p>

          <h2>Contact</h2>
          <p>
            Spotted something out of date? Please email <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>.
          </p>
        </Prose>
      </div>
    </div>
  );
}
