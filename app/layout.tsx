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
  description: "Helping AI startups grow through Twitter campaigns and creator partnerships.",
  verification: {
    google: "RThvhq5ba6Q0mLAOrO_CJKolDlxcHq_AwBmmBY_vbXg",
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
