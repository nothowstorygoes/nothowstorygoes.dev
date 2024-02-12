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
        <link rel="manifest" type="application/manifest+JSON" href="/nothowstorygoes.dev/manifest.webmanifest" />
        <meta name="description" content="Pio Alessandro Esposito, BSc Computer Science student, Web Developer"/>
      </head> 
      <body className={comfortaaa.className}>{children}</body>
    </html>
  );
}
