import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./css/globals.css";

const inter = Inter({ subsets: ["latin"] });

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
        <link rel="manifest" type="application/manifest+JSON" href="/nothowstorygoes.dev/manifest.webmanifest" />
        <meta name="description" content="Pio Alessandro Esposito, BSc Computer Science student, Web Developer"/>
      </head> 
      <body className={inter.className}>{children}</body>
    </html>
  );
}
