import Prose from "@/components/Prose";
import { SITE } from "@/lib/site";

export const metadata = {
  title: "Privacy Policy",
  description: `How ${SITE.name} handles your data, cookies and advertising.`,
  alternates: { canonical: "/privacy-policy" },
};

// TODO: have this reviewed for your exact setup (analytics, consent tool, hosting) before launch.
const LAST_UPDATED = "20 September 2026";

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <h1 className="font-serif text-3xl font-semibold text-navy-900 sm:text-4xl">Privacy Policy</h1>
      <p className="mt-2 text-sm text-slate-500">Last updated: {LAST_UPDATED}</p>

      <div className="mt-8">
        <Prose>
          <p>
            This policy explains what information {SITE.name} (“we”, “us”) collects when you use this website, how we
            use it, and the choices you have. We aim to comply with the UK GDPR, the Data Protection Act 2018 and the
            Privacy and Electronic Communications Regulations (PECR).
          </p>

          <h2>Who we are</h2>
          <p>
            {SITE.name} is an independent information website. We are not part of the UK Government, the Home Office
            or UKVI. For privacy questions, contact us at <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>.
          </p>

          <h2>The checklist tool</h2>
          <p>
            The answers you select in the checklist tool are processed only in your web browser to build your
            checklist. They are not sent to our servers, stored in a database or attached to your identity. If you
            close or refresh the page, they are gone.
          </p>

          <h2>Information we collect</h2>
          <ul>
            <li>
              <strong>Technical data.</strong> Like most websites, our hosting provider may log your IP address,
              browser type, device type and the pages requested, for security and reliability.
            </li>
            <li>
              <strong>Analytics data.</strong> If we enable an analytics service, we will use it to understand which
              pages are useful, in aggregated form. Where analytics uses cookies, it only runs with your consent.
            </li>
            <li>
              <strong>Messages you send us.</strong> If you email us, we keep your message and address so we can reply.
            </li>
          </ul>
          <p>We do not ask for, and you should never send us, passport numbers, visa reference numbers or other identity documents.</p>

          <h2>Cookies and advertising</h2>
          <p>
            This site shows advertisements provided by Google AdSense. Third-party vendors, including Google, use
            cookies and similar technologies to serve ads based on your previous visits to this and other websites.
            Google’s use of advertising cookies enables it and its partners to serve ads to you based on your visit to
            this site and/or other sites on the internet.
          </p>
          <p>
            Where required by law, we ask for your consent before setting non-essential cookies, including advertising
            cookies. You can change your choice at any time using the cookie settings link on this site (where
            available) or through your browser settings.
          </p>
          <p>You can opt out of personalised advertising by visiting:</p>
          <ul>
            <li>
              <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">Google Ads Settings</a>
            </li>
            <li>
              <a href="https://www.aboutads.info" target="_blank" rel="noopener noreferrer">aboutads.info</a>
            </li>
          </ul>
          <p>
            You can read how Google uses data from sites that use its services at{" "}
            <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer">
              policies.google.com/technologies/partner-sites
            </a>
            . Opting out of personalised ads does not remove ads; they will simply be less relevant to you.
          </p>

          <h2>Our lawful bases</h2>
          <ul>
            <li>Consent, for non-essential cookies such as advertising and analytics cookies.</li>
            <li>Legitimate interests, for keeping the site secure and working, and for replying to your messages.</li>
          </ul>

          <h2>Who we share data with</h2>
          <p>
            We share data only with service providers that help us run the site, such as our hosting provider and
            advertising partners like Google. Some of these providers may process data outside the UK, under
            appropriate safeguards. We do not sell your personal information.
          </p>

          <h2>How long we keep data</h2>
          <p>
            Server logs are kept for a short period for security purposes. Emails you send us are kept for as long as
            needed to deal with your enquiry, then deleted.
          </p>

          <h2>Your rights</h2>
          <p>
            Under UK data protection law you have the right to access, correct or erase your personal data, to restrict
            or object to its use, to data portability, and to withdraw consent at any time. To exercise these rights,
            email <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>. You also have the right to complain
            to the Information Commissioner’s Office at{" "}
            <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">ico.org.uk</a>.
          </p>

          <h2>External links</h2>
          <p>
            We link to GOV.UK and other websites. We are not responsible for their content or privacy practices, so
            please read their policies.
          </p>

          <h2>Children</h2>
          <p>This website is not directed at children under 13, and we do not knowingly collect their personal data.</p>

          <h2>Changes to this policy</h2>
          <p>We may update this policy from time to time. The date at the top shows when it last changed.</p>
        </Prose>
      </div>
    </div>
  );
}
