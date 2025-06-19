import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Parem Temizlik Hizmetleri - Elazığ'da Profesyonel Temizlik",
  description: "Elazığ'da ev, ofis, işyeri temizliği ve dezenfeksiyon hizmetleri. 10 yıllık tecrübe, güvenilir ekip, uygun fiyatlar. 7/24 hizmet. Hemen teklif alın!",
  keywords: "Elazığ temizlik, ev temizliği, ofis temizliği, dezenfeksiyon, inşaat sonrası temizlik, profesyonel temizlik hizmetleri",
  authors: [{ name: "Parem Temizlik Hizmetleri" }],
  creator: "Parem Temizlik Hizmetleri",
  publisher: "Parem Temizlik Hizmetleri",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://paremtemizlik.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Parem Temizlik Hizmetleri - Elazığ'da Profesyonel Temizlik",
    description: "Elazığ'da ev, ofis, işyeri temizliği ve dezenfeksiyon hizmetleri. 10 yıllık tecrübe, güvenilir ekip, uygun fiyatlar.",
    url: 'https://paremtemizlik.com',
    siteName: 'Parem Temizlik Hizmetleri',
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Parem Temizlik Hizmetleri - Elazığ'da Profesyonel Temizlik",
    description: "Elazığ'da ev, ofis, işyeri temizliği ve dezenfeksiyon hizmetleri. 10 yıllık tecrübe, güvenilir ekip, uygun fiyatlar.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  other: {
    'contact-email': 'zeynepvural53@gmail.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
