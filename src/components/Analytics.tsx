"use client";

import Script from "next/script";
import { useCookieConsent } from "./CookieConsentContext";

/**
 * Carrega Google Tag (Consent Mode) e Meta Pixel SOMENTE após o
 * consentimento do usuário no CookieBanner, e somente se os IDs
 * estiverem configurados nas variáveis de ambiente abaixo.
 *
 * TODO: preencher em .env.local
 *   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXX
 *   NEXT_PUBLIC_META_PIXEL_ID=XXXXXXXXXXXXXXX
 */
const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

export default function Analytics() {
  const { consent } = useCookieConsent();

  if (!consent) return null;

  return (
    <>
      {consent.analytics && GA_ID && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
          <Script id="ga-consent-mode" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                analytics_storage: 'granted',
                ad_storage: '${consent.marketing ? "granted" : "denied"}',
                ad_user_data: '${consent.marketing ? "granted" : "denied"}',
                ad_personalization: '${consent.marketing ? "granted" : "denied"}'
              });
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `}
          </Script>
        </>
      )}

      {consent.marketing && META_PIXEL_ID && (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
            n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
            document,'script','https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${META_PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>
      )}
    </>
  );
}
