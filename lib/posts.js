import { GOVUK } from "./site";

/**
 * HOW TO ADD AN ARTICLE
 * ---------------------
 * 1. Copy any object in the `POSTS` array below and paste it at the top.
 * 2. Change slug (URL), title, description, date and content.
 * 3. Save. That's it: the blog index, article page, sitemap and metadata all update automatically.
 *
 * Content is an array of blocks:
 *   { type: "h2",      text: "Heading" }
 *   { type: "p",       text: "Paragraph. Links: [link text](https://example.com) or [internal](/blog/slug)" }
 *   { type: "ul",      items: ["Bullet one", "Bullet two"] }
 *   { type: "ol",      items: ["Step one", "Step two"] }
 *   { type: "callout", text: "Highlighted note" }
 */
const POSTS = [
  {
    slug: "how-to-update-passport-in-ukvi-account",
    title: "How to update your passport details in your UKVI account",
    description:
      "Renewed your passport? Here is how to link the new one to your UKVI account so your eVisa matches the document you travel with.",
    date: "2026-09-20",
    updated: "2026-09-20",
    readingMinutes: 3,
    content: [
      {
        type: "p",
        text: "Your eVisa is linked to a specific passport or travel document. When you renew your passport, your UKVI account should be updated to match. If it isn’t, airlines and border staff may struggle to connect you to your eVisa, which can cause delays when you travel.",
      },
      { type: "h2", text: "Before you start" },
      {
        type: "ul",
        items: [
          "Your UKVI account email address and access to the mobile number on the account",
          "Your new passport, open at the photo page",
          "A smartphone with the [UK Immigration: ID Check app](" + GOVUK.idCheckApp + "), in case you are asked to verify your identity again",
        ],
      },
      { type: "h2", text: "Steps" },
      {
        type: "ol",
        items: [
          "Sign in to your account through [View and prove](" + GOVUK.viewAndProve + ").",
          "Choose the option to update your details or travel document. The wording on screen can change, so follow the current GOV.UK instructions.",
          "Enter your new passport number, issue date, expiry date and issuing country exactly as shown on the photo page.",
          "Complete the identity check if you are asked to.",
          "Look for a confirmation email, then sign in again and check that the new passport appears on your account.",
        ],
      },
      {
        type: "callout",
        text: "Do this as soon as you receive your new passport, and always before you book or take a trip.",
      },
      { type: "h2", text: "If you can’t sign in or the update fails" },
      {
        type: "p",
        text: "Check that you are using the email address the account was created with. If the problem continues, [contact UKVI](" + GOVUK.contactUkvi + ") and explain what error you see. Avoid paying third-party websites: updating your details on GOV.UK is free.",
      },
      {
        type: "p",
        text: "The official guidance is here: [Update your UKVI account details](" + GOVUK.updateDetails + "). Not sure what else you need to do? Try our [free BRP to eVisa checklist](/#tool).",
      },
    ],
  },
  {
    slug: "expired-brp-create-ukvi-account-before-31-december-2026",
    title: "Expired BRP: create your UKVI account before 31 December 2026",
    description:
      "An expired BRP doesn’t mean your visa has ended. Here is the deadline for using it to create a UKVI account and what to do now.",
    date: "2026-09-20",
    updated: "2026-09-20",
    readingMinutes: 3,
    content: [
      {
        type: "p",
        text: "Your BRP card has expired, but your visa has not. The card was only ever a physical record of your permission. The permission itself is now recorded online as an eVisa, and you reach it through a UKVI account.",
      },
      { type: "h2", text: "The deadline that matters" },
      {
        type: "p",
        text: "Home Office guidance says you can use an expired BRP to create a UKVI account for up to 24 months after the expiry date printed on the card, or until 31 December 2026, whichever comes first. For most people whose card expired on 31 December 2024, both rules give the same date: 31 December 2026.",
      },
      {
        type: "callout",
        text: "This concession only helps you set up or access your account. It does not extend your visa, and you shouldn’t rely on an expired BRP to travel.",
      },
      { type: "h2", text: "What to do now" },
      {
        type: "ol",
        items: [
          "Find your expired BRP, or your visa application number (GWF or UAN) if you no longer have the card.",
          "Download the free [UK Immigration: ID Check app](" + GOVUK.idCheckApp + ").",
          "Create your account on [GOV.UK](" + GOVUK.createAccount + ").",
          "Link your current passport so your eVisa matches the document you travel with.",
          "Sign in through [View and prove](" + GOVUK.viewAndProve + ") and check that your details are correct.",
        ],
      },
      { type: "h2", text: "If you miss the deadline or can’t get in" },
      {
        type: "p",
        text: "Don’t panic, and don’t pay a third party. Read the current GOV.UK guidance and [contact UKVI](" + GOVUK.contactUkvi + ") to ask which options apply to you. If your right to work, rent or travel is at risk, speak to a solicitor or a regulated immigration adviser.",
      },
      {
        type: "p",
        text: "For a personalised list of steps, use our [free BRP to eVisa checklist](/#tool).",
      },
    ],
  },
  {
    slug: "evisa-share-codes-explained",
    title: "eVisa share codes explained: work, rent and how long they last",
    description:
      "How to prove your immigration status to an employer or landlord using a share code from your UKVI account.",
    date: "2026-09-20",
    updated: "2026-09-20",
    readingMinutes: 2,
    content: [
      {
        type: "p",
        text: "Employers and landlords can no longer ask to see a BRP card as proof of your status. Instead, you generate a share code in your UKVI account and give it to them, along with your date of birth. They use it to check your status on GOV.UK.",
      },
      { type: "h2", text: "Which code do you need?" },
      {
        type: "ul",
        items: [
          "A right to work code (starts with W) is for employers.",
          "A right to rent code (starts with R) is for landlords and letting agents.",
        ],
      },
      { type: "h2", text: "How to get one" },
      {
        type: "ol",
        items: [
          "Sign in through [View and prove](" + GOVUK.viewAndProve + ").",
          "Choose the type of check you need to prove.",
          "Copy the code and send it to the person who asked, with your date of birth.",
        ],
      },
      {
        type: "p",
        text: "Each code is valid for 90 days, and you can generate a new one whenever you need. Only share a code with someone who has a genuine reason to check your status, and never share your sign-in security codes.",
      },
      {
        type: "p",
        text: "You need a UKVI account first. If you don’t have one yet, start with our [BRP to eVisa checklist](/#tool).",
      },
    ],
  },
];

export function getAllPosts() {
  return [...POSTS].sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getPostBySlug(slug) {
  return POSTS.find((p) => p.slug === slug) ?? null;
}

export function formatDate(iso) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
