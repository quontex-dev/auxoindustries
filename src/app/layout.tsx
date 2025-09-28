import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://auxoindustries.com"),
  title: {
    default: "Auxo Industries | Auxo Polymers | Auxo Thermopack",
    template: "%s | Auxo Industries",
  },
  description:
    "Auxo Industries Pvt. Ltd. is one of India's largest Injection Moulding Plastic Products manufacturers, headquartered in Roorkee, Uttarakhand, serving automotive, packaging, defense, marine, and consumer product OEMs worldwide.",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://auxoindustries.com",
    siteName: "Auxo Industries",
    title: "Auxo Industries | Auxo Polymers | Auxo Thermopack",
    description:
      "Auxo Industries Pvt. Ltd. — Trusted partner for injection moulded plastic products, packaging, and thermocol solutions.",
    images: [
      {
        url: "/images/home-og.jpg", // 👈 save in public/images
        width: 1200,
        height: 630,
        alt: "Auxo Industries Factory and Products",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Auxo Industries | Auxo Polymers | Auxo Thermopack",
    description:
      "Auxo Industries Pvt. Ltd. — Global leader in plastic injection moulding solutions.",
    images: ["/images/home-og.jpg"],
  },
  alternates: {
    canonical: "https://auxoindustries.com",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* ✅ JSON-LD Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Auxo Industries Pvt. Ltd.",
              url: "https://auxoindustries.com",
              logo: "https://auxoindustries.com/images/logo.png",
              sameAs: [
                "https://www.linkedin.com/company/auxo-industries",
                "https://www.facebook.com/auxoindustries",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-XXXXXXXXXX",
                contactType: "Customer Service",
                areaServed: "IN",
                availableLanguage: "English",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${playfair.variable} ${geistSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
