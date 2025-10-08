import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import CareerPath from "@/sections/career/career-path";
import Hero from "@/sections/career/hero";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Our People - Auxo Industries | Auxo Polymers | Auxo Thermopack",
  description:
    "Explore career opportunities at Auxo Industries — a leading Plastic Injection Moulding company that empowers innovation and growth. Join our dynamic team, shape your future, and be part of an organization that values inclusiveness, transparency, and excellence.",
  keywords: [
    "Auxo Industries careers",
    "Auxo Polymers jobs",
    "Auxo Thermopack careers",
    "injection moulding jobs",
    "plastic industry career",
    "Auxo recruitment",
  ],
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  alternates: {
    canonical: "https://auxoindustries.com/career/",
  },
  openGraph: {
    title: "Our People - Auxo Industries | Auxo Polymers | Auxo Thermopack",
    description:
      "Auxo Industries is a young and dynamic organization offering rewarding career opportunities in the plastic injection moulding industry. Join us to innovate, lead, and grow with transparency and inclusiveness.",
    url: "https://auxoindustries.com/career/",
    siteName: "Auxo Industries | Auxo Polymers | Auxo Thermopack",
    locale: "en_GB",
    type: "article",
    images: [
      {
        url: "/images/20943839.jpg",
        width: 1200,
        height: 1200,
        alt: "Career at Auxo Industries",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our People - Auxo Industries | Auxo Polymers | Auxo Thermopack",
    description:
      "Join Auxo Industries — a leading name in plastic injection moulding. Empower your career with innovation and growth opportunities.",
    images: ["/images/20943839.jpg"],
  },
};

const page = () => (
  <div>
    {/* navbar */}
    <Navbar />
    {/* hero */}
    <Hero />
    {/* careerpath */}
    <CareerPath />
    {/* contactform */}
    <Contact />
  </div>
);

export default page;
