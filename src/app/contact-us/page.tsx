import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Plants from "@/sections/contact-us/plants";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact Us - Auxo Industries | Auxo Polymers | Auxo Thermopack",
  description:
    "Connect with Auxo Industries. Call us at +91 8171501052 / 8171501053 / 8171501055 or email info@auxoindustries.com. We are happy to help with your enquiries.",
  keywords: [
    "contact auxo industries",
    "auxo industries contact number",
    "auxo polymers contact",
    "auxo thermopack contact",
    "industrial packaging contact india",
    "thermopack suppliers haridwar",
    "plastic packaging manufacturers contact",
    "auxo industries address roorkee",
    "auxo industries email",
    "auxo industries customer support",
    "packaging company enquiry form",
  ],
  alternates: {
    canonical: "https://auxoindustries.com/contact-us/",
  },
  openGraph: {
    type: "article",
    locale: "en_GB",
    url: "https://auxoindustries.com/contact-us/",
    title: "Contact Us - Auxo Industries | Auxo Polymers | Auxo Thermopack",
    description:
      "Connect with Auxo Industries. Call us at +91 8171501052 / 8171501053 / 8171501055 or email info@auxoindustries.com. We are happy to help with your enquiries.",
    siteName: "Auxo Industries | Auxo Polymers | Auxo Thermopack",
    images: [
      {
        url: "/images/contact-banner.jpg", // save as /public/images/contact-banner.jpg
        width: 1200,
        height: 630,
        alt: "Auxo Industries Contact Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us - Auxo Industries | Auxo Polymers | Auxo Thermopack",
    description:
      "Connect with Auxo Industries. We are happy to help with your enquiries.",
    images: ["/images/contact-banner.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
};

const page = () => {
  return (
    <div>
      {/* navbar */}
      <Navbar />
      {/* contactform */}
      <section className="mt-15 pt-15">
        <Contact />
      </section>

      {/* Plants */}
      <Plants />
    </div>
  );
};

export default page;
