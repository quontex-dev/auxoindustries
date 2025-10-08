import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Partners from "@/components/partners";
import CustomerSection from "@/sections/products-customers/Customers";
import Products from "@/sections/products-customers/products";
import React from "react";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Products & Customers - Auxo Industries | Auxo Polymers | Auxo Thermopack",
  description:
    "Explore Auxo Industries’ product portfolio and key customers. From innovative plastic moulding to Thermocol packaging solutions, we deliver excellence to leading industries worldwide.",
  keywords: [
    "auxo polymers products",
    "auxo thermopack solutions",
    "polymer moulded components",
    "industrial packaging products",
    "plastic moulding manufacturer",
    "custom polymer parts",
    "thermopack packaging india",
    "auxo industrial solutions",
    "eco friendly polymer materials",
    "packaging innovation india",
  ],
  alternates: {
    canonical: "https://auxoindustries.com/product-customers/",
  },
  openGraph: {
    type: "article",
    locale: "en_GB",
    url: "https://auxoindustries.com/product-customers/",
    siteName: "Auxo Industries | Auxo Polymers | Auxo Thermopack",
    title:
      "Products & Customers - Auxo Industries | Auxo Polymers | Auxo Thermopack",
    description:
      "Our extensive product portfolio includes precision moulded components, packaging products, and Thermocol-based solutions trusted by global OEMs and partners.",
    images: [
      {
        url: "/images/flexia-preview.jpg",
        width: 1200,
        height: 800,
        alt: "Auxo Industries product and customer showcase",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Products & Customers - Auxo Industries | Auxo Polymers | Auxo Thermopack",
    description:
      "View Auxo Industries’ products and customer collaborations — innovation, reliability, and quality for every manufacturing need.",
    images: ["/images/flexia-preview.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  category: "Manufacturing",
};

const page = () => {
  return (
    <div>
      {/* navbar */}
      <Navbar />
      {/* partners */}
      <Partners heading=" Our Product portfolio!" />
      {/* poductsection */}
      <Products />
      {/* customersection */}
      <CustomerSection />
      {/* contact */}
      <Contact />
    </div>
  );
};

export default page;
