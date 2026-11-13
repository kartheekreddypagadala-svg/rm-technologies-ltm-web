
import { services } from "@/lib/content";

export const SERVICES: string[] = [
  ...services.map((s) => s.title),
  "Careers",
  "Other",
];

export type ContactInput = {
  name: string;
  firstName?: string;
  lastName?: string;
  email: string;
  company?: string;
  jobTitle?: string;
  country?: string;
  service: string;
  message: string;
};

type Result =
  | { ok: true; spam: boolean; data: ContactInput }
  | { ok: false; error: string };

const str = (v: unknown) =>
  typeof v === "string" ? v.trim() : "";

export function parseContact(body: unknown): Result {
  const b = (body ?? {}) as Record<string, unknown>;

  const firstName = str(b.firstName);
  const lastName = str(b.lastName);

  const name =
    firstName || lastName
      ? `${firstName} ${lastName}`.trim()
      : str(b.name);

  const data: ContactInput = {
    name,
    firstName: firstName || undefined,
    lastName: lastName || undefined,
    email: str(b.email).toLowerCase(),
    company: str(b.company) || undefined,
    jobTitle: str(b.jobTitle) || undefined,
    country: str(b.country) || undefined,
    service: str(b.service),
    message: str(b.message),
  };

  if (!firstName && !lastName && !name) {
    return { ok: false, error: "Please enter your name." };
  }

  if (name.length > 100) {
    return { ok: false, error: "Your name is too long." };
  }

  if (
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) ||
    data.email.length > 254
  ) {
    return { ok: false, error: "Please enter a valid email." };
  }

  if (data.company && data.company.length > 150) {
    return { ok: false, error: "Company name is too long." };
  }

  if (data.jobTitle && data.jobTitle.length > 100) {
    return { ok: false, error: "Job title is too long." };
  }

  if (data.country && data.country.length > 80) {
    return { ok: false, error: "Country name is too long." };
  }

  if (!SERVICES.includes(data.service)) {
    return { ok: false, error: "Please choose a valid enquiry type." };
  }

  if (data.message.length < 5 || data.message.length > 4000) {
    return {
      ok: false,
      error: "Message must be 5 to 4000 characters.",
    };
  }

  // Hidden honeypot field to identify automated submissions.
  return {
    ok: true,
    spam: str(b.website) !== "",
    data,
  };
}
