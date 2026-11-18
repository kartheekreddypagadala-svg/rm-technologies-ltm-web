"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import {
  CONSENT_EVENT,
  readConsent
} from "../../lib/cookie-consent";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function ConsentScripts() {
  const [analytics, setAnalytics] = useState(false);

  useEffect(() => {
    const sync = () => {
      const allowed =
        readConsent()?.choices.analytics === true;

      setAnalytics(allowed);

      if (GA_ID) {
        (
          window as unknown as Record<string, unknown>
        )[`ga-disable-${GA_ID}`] = !allowed;
      }
    };

    sync();

    window.addEventListener(CONSENT_EVENT, sync);

    return () =>
      window.removeEventListener(CONSENT_EVENT, sync);
  }, []);

  if (!GA_ID || !analytics) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />

      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}