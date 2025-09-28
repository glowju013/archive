import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import SiteHeader from "../../components/SiteHeader";

const dungGeunMo = localFont({
  src: "../../public/fonts/DungGeunMo.woff2",
  variable: "--font-dunggeunmo",
})

export const metadata: Metadata = {
  title: "GLOW",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png"/>
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png"/>
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png"/>
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png"/>
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png"/>
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png"/>
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png"/>
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png"/>
        <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/manifest.json"/>
        <meta name="msapplication-TileColor" content="#ffffff"/>
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png"/>
        <meta name="theme-color" content="#ffffff"/>
      </head>
      <body
        className={`${dungGeunMo.className} antialiased items-center min-h-screen w-full md:grid md:pl-20 md:pr-20 justify-items-center gap-16`}
      >
        <SiteHeader/>
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start w-full">
          {children}
        </main>
        <footer className="bottom-0 flex w-full items-center justify-between">
       
        <div>ⓒ 2025 LEE YUN JU</div>
        <div>013churrr@gmail.com</div>
      </footer>
      </body>
    </html>
  );
}
