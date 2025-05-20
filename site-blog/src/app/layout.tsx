import { Metadata } from "next";

import { Layout } from "@/components/layout";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Site.set",
  description: "Venda os seus produtos como afiliado em um único lugar",
  robots: "index, follow",
  openGraph: {
    title: "Site.set",
    description: "Venda os seus produtos como afiliado em um único lugar",
    url: "https://rocketseat-formacao-nextjs.vercel.app/og-image.jpg",
    siteName: "Site.set",
    locale: "pt-BR",
    type: "website",
    images: {
      url: "https://rocketseat-formacao-nextjs.vercel.app/og-image.jpg",
      alt: "Site.set",
      height: 600,
      width: 800,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
