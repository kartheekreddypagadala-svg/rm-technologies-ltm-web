
import type { MetadataRoute } from "next";
import {
  articles,
  caseStudies,
  industries,
  services,
  solutions,
} from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://rulingmindtech.com";

  const pages = [
    "",
    "/about",
    "/investors",
    "/brand",
    "/newsroom",
    "/partners",
    "/insights",
    "/esg",
    "/dei",
    "/services",
    "/industries",
    "/solutions",
    "/our-work",
    "/careers",
    "/contact",
  ];

  const dynamicPages = [
    ...services.map((s) => `/services/${s.slug}`),
    ...industries.map((s) => `/industries/${s.slug}`),
    ...solutions.map((s) => `/solutions/${s.slug}`),
    ...caseStudies.map((c) => `/our-work/${c.slug}`),
    ...articles.map((a) => `/insights/${a.slug}`),
  ];

  return [...pages, ...dynamicPages].map((page) => ({
    url: base + page,
  }));
}
