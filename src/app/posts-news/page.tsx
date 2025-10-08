import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Certificates from "@/sections/posts-news/certificates";
import CustomerSection from "@/sections/posts-news/customers";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Posts & News - Auxo Industries | Auxo Polymers | Auxo Thermopack",
  description:
    "Congratulations Team Auxo Industries! We have achieved 100 Crore TURNOVER. Number of moulding machines increased from 18 to 30. New Factory set up — Auxo Industries Pvt Ltd production started from March 2022. We are ISO 9001:2008 Certified! For more details, connect with us.",
  keywords: [
    "Auxo Industries news",
    "Auxo Polymers updates",
    "Auxo Thermopack news",
    "Auxo Industries achievements",
    "Auxo Industries blog",
    "auxo industries news",
    "auxo polymers updates",
    "industrial manufacturing news india",
    "auxo thermopack achievements",
    "auxo industries factory expansion",
    "iso certified polymer company",
    "industrial packaging blog",
    "plastic manufacturing updates",
    "auxo industries turnover",
    "auxo industries milestones",
  ],
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  alternates: {
    canonical: "https://auxoindustries.com/posts-news/",
  },
  openGraph: {
    title: "Posts & News - Auxo Industries | Auxo Polymers | Auxo Thermopack",
    description:
      "Catch up with the latest updates, achievements, and milestones from Auxo Industries. Discover our growth journey and announcements.",
    url: "https://auxoindustries.com/posts-news/",
    siteName: "Auxo Industries | Auxo Polymers | Auxo Thermopack",
    locale: "en_GB",
    type: "article",
    images: [
      {
        url: "/images/Auxo-Polymers.jpg",
        width: 1200,
        height: 630,
        alt: "Auxo Polymers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Posts & News - Auxo Industries | Auxo Polymers | Auxo Thermopack",
    description:
      "Latest updates and announcements from Auxo Industries and its divisions.",
    images: ["/images/Auxo-Polymers.jpg"],
  },
};

const page = () => {
  return (
    <div>
      {/* navbar */}
      <Navbar />
      {/* achievements */}
      <Certificates />
      {/* customers */}
      <CustomerSection />
      {/* contactform */}
      <Contact />
    </div>
  );
};

export default page;
