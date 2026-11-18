/**
 * Privacy settings shared by the notice pages and forms.
 *
 * Bump PRIVACY_NOTICE_VERSION whenever the privacy notice
 * changes in a meaningful way.
 */

export const PRIVACY_NOTICE_VERSION = "2026-11-17";

export const PRIVACY_LAST_UPDATED = "17 November 2026";

/**
 * DPDP Act section 13:
 * Contact details of the person who answers privacy questions.
 *
 * Configure the real values in .env.local / Amplify:
 *
 * NEXT_PUBLIC_PRIVACY_EMAIL=privacy@rulingmindtech.com
 * NEXT_PUBLIC_GRIEVANCE_OFFICER="Full Name, Grievance Officer"
 */

export const PRIVACY_EMAIL =
  process.env.NEXT_PUBLIC_PRIVACY_EMAIL ||
  "hello@rulingmindtech.com";

export const GRIEVANCE_OFFICER =
  process.env.NEXT_PUBLIC_GRIEVANCE_OFFICER ||
  "Grievance Officer, RulingMindTech";