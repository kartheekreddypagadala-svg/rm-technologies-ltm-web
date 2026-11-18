
/**
 * RulingMindTech Cookie Consent Management
 *
 * Stores cookie preferences, manages consent events,
 * and synchronizes consent records with the API.
 */

export type CookieCategory =
  | "functional"
  | "analytics"
  | "marketing";

export type ConsentChoices = {
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
};

export type ConsentMethod =
  | "accept_all"
  | "reject_all"
  | "custom";

export type ConsentRecord = {
  id: string;
  ts: string;
  v: number;
  method: ConsentMethod;
  choices: ConsentChoices;
};

export const CONSENT_VERSION = 1;

export const CONSENT_STORAGE_KEY = "rmt_consent";

export const CONSENT_COOKIE_NAME = "rmt_consent";

export const CONSENT_EVENT = "rmt:consent-changed";

export const OPEN_SETTINGS_EVENT = "rmt:open-cookie-settings";

export const CONSENT_EXPIRY_DAYS = 365;

export const ALL_OFF: ConsentChoices = {
  functional: false,
  analytics: false,
  marketing: false
};

export const ALL_ON: ConsentChoices = {
  functional: true,
  analytics: true,
  marketing: true
};

/**
 * Check whether code is running in the browser.
 */
function isBrowser(): boolean {
  return typeof window !== "undefined";
}

/**
 * Generate a consent record ID.
 */
function generateId(): string {
  if (
    isBrowser() &&
    typeof crypto !== "undefined" &&
    typeof crypto.randomUUID === "function"
  ) {
    return crypto.randomUUID();
  }

  return `${Date.now()}-${Math.random()
    .toString(36)
    .slice(2)}`;
}

/**
 * Validate stored consent data.
 */
function isValidConsent(
  value: unknown
): value is ConsentRecord {
  if (!value || typeof value !== "object") {
    return false;
  }

  const record = value as Partial<ConsentRecord>;

  return (
    typeof record.id === "string" &&
    typeof record.ts === "string" &&
    !Number.isNaN(Date.parse(record.ts)) &&
    record.v === CONSENT_VERSION &&
    (
      record.method === "accept_all" ||
      record.method === "reject_all" ||
      record.method === "custom"
    ) &&
    !!record.choices &&
    typeof record.choices.functional === "boolean" &&
    typeof record.choices.analytics === "boolean" &&
    typeof record.choices.marketing === "boolean"
  );
}

/**
 * Read consent from localStorage.
 */
export function readConsent(): ConsentRecord | null {
  if (!isBrowser()) {
    return null;
  }

  try {
    const stored = localStorage.getItem(
      CONSENT_STORAGE_KEY
    );

    if (!stored) {
      return null;
    }

    const parsed: unknown = JSON.parse(stored);

    if (!isValidConsent(parsed)) {
      localStorage.removeItem(CONSENT_STORAGE_KEY);
      return null;
    }

    const expiry =
      new Date(parsed.ts).getTime() +
      CONSENT_EXPIRY_DAYS * 24 * 60 * 60 * 1000;

    if (Date.now() > expiry) {
      localStorage.removeItem(CONSENT_STORAGE_KEY);
      return null;
    }

    return parsed;
  } catch (error) {
    console.error("Unable to read cookie consent:", error);
    return null;
  }
}

/**
 * Save consent to localStorage and a first-party cookie.
 */
export function saveConsent(
  choices: ConsentChoices,
  method: ConsentMethod
): ConsentRecord {
  const record: ConsentRecord = {
    id: generateId(),
    ts: new Date().toISOString(),
    v: CONSENT_VERSION,
    method,
    choices: {
      functional: choices.functional === true,
      analytics: choices.analytics === true,
      marketing: choices.marketing === true
    }
  };

  if (!isBrowser()) {
    return record;
  }

  try {
    localStorage.setItem(
      CONSENT_STORAGE_KEY,
      JSON.stringify(record)
    );

    const maxAge =
      CONSENT_EXPIRY_DAYS * 24 * 60 * 60;

    document.cookie =
      `${CONSENT_COOKIE_NAME}=${encodeURIComponent(
        JSON.stringify(record)
      )}; Max-Age=${maxAge}; Path=/; SameSite=Lax` +
      (window.location.protocol === "https:"
        ? "; Secure"
        : "");

    // Notify other components about the updated choice.
    window.dispatchEvent(
      new Event(CONSENT_EVENT)
    );

    // Save the consent record on the server.
    // Do not block the user's consent action.
    void fetch("/api/consent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(record),
      keepalive: true
    }).catch((error) => {
      console.error(
        "Consent synchronization failed:",
        error
      );
    });
  } catch (error) {
    console.error("Unable to save cookie consent:", error);
  }

  return record;
}

/**
 * Open cookie preferences from the footer button.
 */
export function openCookieSettings(): void {
  if (!isBrowser()) {
    return;
  }

  window.dispatchEvent(
    new Event(OPEN_SETTINGS_EVENT)
  );
}

/**
 * Check whether a particular cookie category is enabled.
 */
export function hasConsent(
  category: CookieCategory
): boolean {
  return readConsent()?.choices[category] === true;
}

/**
 * Remove the stored consent.
 * The next page visit will display the consent banner again.
 */
export function clearConsent(): void {
  if (!isBrowser()) {
    return;
  }

  try {
    localStorage.removeItem(CONSENT_STORAGE_KEY);

    document.cookie =
      `${CONSENT_COOKIE_NAME}=; Max-Age=0; Path=/; SameSite=Lax`;

    window.dispatchEvent(
      new Event(CONSENT_EVENT)
    );
  } catch (error) {
    console.error("Unable to clear consent:", error);
  }
}
