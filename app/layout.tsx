
import type { Metadata } from "next";
import { DM_Sans, Manrope } from "next/font/google";

import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Cookie consent components
import CookieConsent from "@/components/cookies/CookieConsent";
import ConsentScripts from "@/components/cookies/ConsentScripts";

const dm = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "600", "700", "800"],
});

const description =
  "Enterprise IT services: cloud, AI, software engineering, data and cybersecurity.";

export const metadata: Metadata = {
  metadataBase: new URL("https://rulingmindtech.com"),

  title: {
    default: "RulingMindTech | Innovate. Transform. Grow.",
    template: "%s | RulingMindTech",
  },

  description,

  openGraph: {
    title: "RulingMindTech | Innovate. Transform. Grow.",
    description,
    url: "https://rulingmindtech.com",
    siteName: "RulingMindTech",
    type: "website",
  },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "RulingMindTech",
  url: "https://rulingmindtech.com",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${dm.variable} ${manrope.variable}`}
    >
      <body className="font-sans text-ink">

        {/* Accessibility */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:bg-white focus:p-3"
        >
          Skip to content
        </a>

        {/* Website Header */}
        <Header />

        {/* Main Website Content */}
        <main id="main">
          {children}
        </main>

        {/* Website Footer */}
        <Footer />

        {/* Cookie Consent Banner */}
        <CookieConsent />

        {/* Consent-dependent scripts */}
        <ConsentScripts />

        {/* Organization Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(orgJsonLd),
          }}
        />

      </body>
    </html>
  );
}
