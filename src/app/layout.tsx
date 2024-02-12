import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import "./css/globals.css";

const comfortaaa = Comfortaa({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "nothowstorygoes.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/nothowstorygoes.dev/manifest.webmanifest" />

        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="nhsg.dev" />
        <meta name="apple-mobile-web-app-title" content="nhsg.dev" />
        <meta name="theme-color" content="#120c21" />
        <meta name="msapplication-navbutton-color" content="#120c21" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="msapplication-starturl" content="/nothowstorygoes.dev/" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="description"
          content="Pio Alessandro Esposito, BSc Computer Science student, Web Developer"
        />
      </head>
      <body className={comfortaaa.className}>{children}</body>
    </html>
  );
}
