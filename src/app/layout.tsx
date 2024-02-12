import type { Metadata, Viewport } from "next";
import { Comfortaa } from "next/font/google";
import "./css/globals.css";

const comfortaaa = Comfortaa({ subsets: ["latin"] });

const APP_NAME = "nhsg.dev";
const APP_DEFAULT_TITLE = "nothowstorygoes.dev";
const APP_TITLE_TEMPLATE = "%s - PWA App";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  manifest: "/nothowstorygoes.dev/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#120c21",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="manifest.json" />

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
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />

        <link rel="icon" href="/nothowstorygoes.dev/ico192.png" />
        <link rel="apple-touch-icon" href="/nothowstorygoes.dev/ico192.png" />
        <meta
          name="description"
          content="Pio Alessandro Esposito, BSc Computer Science student, Web Developer"
        />
      </head>
      <body className={comfortaaa.className}>{children}</body>
    </html>
  );
}
