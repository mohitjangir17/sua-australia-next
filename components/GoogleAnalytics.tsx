import Script from "next/script";

const GoogleAnalytics = () => {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-MYDC4V9R56"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-MYDC4V9R56');`}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
