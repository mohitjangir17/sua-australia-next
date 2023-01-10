import Script from "next/script";
import { GA_TRACKING_ID } from "../gtag";

const GoogleAnalytics = () => {
  return (
    <>
      <Script
        strategy="afterInteractive"
        // src="https://www.googletagmanager.com/gtag/js?id=G-MYDC4V9R56"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', '${GA_TRACKING_ID}');`}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
