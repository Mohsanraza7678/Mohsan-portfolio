import Script from "next/script";
 import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mohsan Raza | AI Startup Growth Partner",

  description:
    "Helping AI startups grow through Twitter campaigns, creator partnerships and brand awareness.",

  verification: {
    google: "RThvhq5ba6Q0mLAOrO_CJKolDlxcHq_AwBmmBY_vbXg",
  },

  openGraph: {
    title: "Mohsan Raza | AI Startup Growth Partner",
    description:
      "Helping AI startups grow through Twitter campaigns, creator partnerships and brand awareness.",
    url: "https://mohsan-portfolio-six.vercel.app",
    siteName: "Mohsan Raza",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mohsan Raza - AI Startup Growth Partner",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Mohsan Raza | AI Startup Growth Partner",
    description:
      "Helping AI startups grow through Twitter campaigns, creator partnerships and brand awareness.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >

      <Script
  src="https://www.googletagmanager.com/gtag/js?id=G-PDSSKX74Z4"
  strategy="afterInteractive"
/>

<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-PDSSKX74Z4');
  `}
</Script>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
