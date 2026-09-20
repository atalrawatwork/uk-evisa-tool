import { GOVUK } from "./site";

/**
 * Questionnaire definition. To add a question, add an entry here and
 * handle its value in buildChecklist() below.
 */
export const QUESTIONS = [
  {
    id: "brp",
    legend: "What is your current BRP card status?",
    hint: "BRP means biometric residence permit, the plastic card issued with many UK visas.",
    options: [
      { value: "valid", label: "Valid BRP", help: "The expiry date on the card has not passed." },
      { value: "expired", label: "Expired BRP", help: "The expiry date on the card has passed." },
      { value: "lost", label: "Lost/Damaged BRP", help: "Lost, stolen, damaged or unreadable." },
    ],
  },
  {
    id: "ukvi",
    legend: "Do you already have a UKVI account?",
    hint: "A UKVI account is the free online account where you view and prove your eVisa.",
    options: [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" },
    ],
  },
  {
    id: "passport",
    legend: "Is your passport linked to your current visa status up-to-date?",
    hint: "Your eVisa is tied to a passport or travel document. If you have renewed your passport since your last visa application or account update, choose No.",
    options: [
      { value: "yes", label: "Yes", help: "The passport linked to my visa is still valid." },
      { value: "no", label: "No – expired or changed", help: "It has expired, or I now have a new passport." },
    ],
  },
];

/**
 * Turns the three answers into a structured checklist.
 * Returns { summary, alerts, steps }. The UI only renders this shape.
 */
export function buildChecklist({ brp, ukvi, passport }) {
  const hasAccount = ukvi === "yes";
  const passportStale = passport === "no";
  const alerts = [];
  const steps = [];

  // ---------- Alerts (shown before the steps) ----------
  if (brp === "expired") {
    alerts.push({
      tone: "warning",
      title: "You can still use your expired BRP to create your UKVI account, but not for long",
      text: "An expired BRP does not mean your visa has ended. Home Office guidance lets you use an expired BRP to create a UKVI account for up to 24 months after the expiry date printed on the card, or until 31 December 2026, whichever comes first. For most people whose card expired on 31 December 2024, that date is 31 December 2026. Link your new, valid passport to your account so you don’t run into problems when you travel. Don’t rely on the expired card itself as a travel document.",
    });
  }
  if (brp === "valid") {
    alerts.push({
      tone: "info",
      title: "Don’t wait for your card to run out",
      text: "Even if your BRP still shows a future date, the Home Office is moving everyone to online eVisas. Setting up your UKVI account now means you can prove your status whatever happens to the card.",
    });
  }
  if (brp === "lost") {
    alerts.push({
      tone: "info",
      title: "You don’t need the physical card to get your eVisa",
      text: "Your eVisa is your proof of status, so a lost or damaged card does not stop you. You can use your visa application number (GWF or UAN) or your BRP number, if you know it.",
    });
  }
  if (passportStale) {
    alerts.push({
      tone: "warning",
      title: "Link your new passport before you travel",
      text: "Your eVisa is linked to a passport or travel document. If the linked passport has expired or been replaced, airlines and border staff may not be able to match you to your eVisa, which can delay or stop your journey.",
    });
  }

  // ---------- Steps ----------
  steps.push({
    id: "gather",
    title: "Gather what you need",
    items: [
      passportStale ? "Your new, valid passport: the one you will travel with" : "Your current passport",
      brp === "valid"
        ? "Your BRP card, or the BRP number printed on it"
        : brp === "expired"
          ? "Your expired BRP. Keep it: its number can be used to create your account within the deadline above"
          : hasAccount
            ? "Nothing from your BRP: you sign in to your existing account with your email address and a security code"
            : "Your BRP number if you remember it, or your visa application number (GWF or UAN) from Home Office emails or your decision letter",
      "An email address and mobile number you can use to receive security codes",
      "A smartphone for the free UK Immigration: ID Check app (you can borrow one)",
    ],
  });

  if (brp === "lost" && !hasAccount) {
    steps.push({
      id: "reference",
      title: "Find a reference number",
      description:
        "Search your email for messages from the Home Office or UKVI about your visa application. The visa application number (a GWF reference or a 16-digit UAN) is what you need. If you can’t find any reference, contact UKVI before creating an account.",
      links: [{ label: "Contact UKVI", href: GOVUK.contactUkvi }],
    });
  }

  if (!hasAccount) {
    const documentItem =
      brp === "expired"
        ? "When asked for a document, enter your expired BRP number. This is allowed until the deadline above."
        : brp === "valid"
          ? "Enter your BRP details when asked."
          : "Enter your visa application number (GWF/UAN) or BRP number, whichever you have.";

    steps.push({
      id: "create",
      title: "Create your UKVI account",
      description: "The account is free and is created on GOV.UK. Never pay a third-party site to do this for you.",
      items: [
        "Open the GOV.UK page below and start the eVisa access service.",
        documentItem,
        "Enter your email address and mobile number, then confirm the security codes you receive.",
        "Confirm your identity with the UK Immigration: ID Check app by scanning your document and your face.",
        "If you see an error message, check that your details match your visa documents and try again. If it keeps failing, wait a few weeks or contact UKVI.",
        "Wait for confirmation. Some eVisas do not appear straight away.",
        ...(passportStale
          ? ["Where possible, use your new passport for the identity check, then confirm that it appears on your account."]
          : []),
      ],
      links: [
        { label: "Create your UKVI account (GOV.UK)", href: GOVUK.createAccount },
        { label: "UK Immigration: ID Check app (GOV.UK)", href: GOVUK.idCheckApp },
      ],
    });
  } else {
    steps.push({
      id: "signin",
      title: "Sign in and check your eVisa",
      items: [
        "Sign in through View and prove, using your email address and the security code sent to you.",
        "Check your name, date of birth, type of permission, expiry date and conditions.",
        "If anything is wrong, report it through your account, not through a third party.",
        ...(brp === "expired" ? ["You no longer need your expired BRP to prove your status. Your eVisa does that."] : []),
      ],
      links: [{ label: "View and prove your immigration status (GOV.UK)", href: GOVUK.viewAndProve }],
    });
  }

  if (passportStale) {
    steps.push({
      id: "passport",
      title: "Link your new passport to your UKVI account",
      description: hasAccount ? "Do this straight after signing in." : "Do this once your account has been created.",
      items: [
        "Sign in and choose the option to update your details or travel document.",
        "Enter your new passport number, issue and expiry dates exactly as they appear on the photo page.",
        "You may be asked to verify your identity again with the UK Immigration: ID Check app.",
        "Check for a confirmation email, then confirm that the new passport is shown on your account.",
      ],
      links: [
        { label: "Update your UKVI account details (GOV.UK)", href: GOVUK.updateDetails },
        { label: "UK Immigration: ID Check app (GOV.UK)", href: GOVUK.idCheckApp },
      ],
    });
  }

  steps.push({
    id: "prove",
    title: "Check you can view and prove your status",
    items: [
      "Open View and prove and confirm that your eVisa displays without errors.",
      "Know how share codes work: a right to work code starts with W and a right to rent code starts with R. Each lasts 90 days, and you only need one when an employer or landlord asks.",
      "Note which email address your account uses. Never share your security codes with anyone.",
    ],
    links: [{ label: "View and prove your immigration status (GOV.UK)", href: GOVUK.viewAndProve }],
  });

  steps.push({
    id: "travel",
    title: "Before you travel",
    items: [
      "Carry the same passport that is linked to your account.",
      "Check your eVisa details a few days before you travel, so there is time to fix any problem.",
      "Carriers may check your eVisa online before boarding, so make sure you can sign in from your phone.",
      ...(brp === "expired" || brp === "lost"
        ? ["Don’t rely on an old or missing BRP card for travel. Your eVisa is what counts."]
        : []),
      "Update your account whenever your passport, email address or phone number changes.",
    ],
    links: [{ label: "About eVisas (GOV.UK)", href: GOVUK.aboutEvisa }],
  });

  const answers = { brp, ukvi, passport };
  const summary = QUESTIONS.map((q) => ({
    question: q.legend,
    answer: q.options.find((o) => o.value === answers[q.id])?.label ?? "",
  }));

  return { summary, alerts, steps };
}
