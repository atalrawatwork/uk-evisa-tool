// Central site configuration. Edit values here, not across components.

export const SITE = {
  name: "UK eVisa Checklist",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  description:
    "Free BRP to eVisa checklist. Answer three questions and get a printable, step-by-step plan for creating or fixing your UKVI account.",
  contactEmail: "contact@your-domain.co.uk", // TODO: replace with a real, monitored inbox
  // Update this date each time you re-check the GOV.UK guidance.
  lastReviewed: "20 September 2026",

  // Google AdSense. Leave empty in development: visible placeholders render instead.
  adsenseClient: process.env.NEXT_PUBLIC_ADSENSE_CLIENT || "", // e.g. "ca-pub-1234567890123456"
  slots: {
    top: process.env.NEXT_PUBLIC_ADSENSE_SLOT_TOP || "",
    sidebar: process.env.NEXT_PUBLIC_ADSENSE_SLOT_SIDEBAR || "",
    result: process.env.NEXT_PUBLIC_ADSENSE_SLOT_RESULT || "",
    article: process.env.NEXT_PUBLIC_ADSENSE_SLOT_ARTICLE || "",
  },
};

// Official GOV.UK pages. Click-test these after any Home Office site change.
export const GOVUK = {
  createAccount: "https://www.gov.uk/get-access-evisa",
  idCheckApp: "https://www.gov.uk/guidance/using-the-uk-immigration-id-check-app",
  viewAndProve: "https://www.gov.uk/view-prove-immigration-status",
  updateDetails: "https://www.gov.uk/update-uk-visas-immigration-account-details",
  aboutEvisa: "https://www.gov.uk/evisa",
  contactUkvi: "https://www.gov.uk/contact-ukvi-inside-outside-uk",
};
