import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Partners from "@/components/partners";
import Hero from "@/sections/auxo-industries/Hero";
import Manufacturing from "@/sections/auxo-industries/manufacturing";
import ProductionCapabilities from "@/sections/auxo-industries/productioncapabilites";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Auxo Industries - Auxo Industries | Auxo Polymers | Auxo Thermopack",
  description:
    "Auxo Industries Pvt. Ltd. specializes in large part moulding, insert moulding, thin wall part moulding, and Thermocol moulding for sectors like automotive, packaging, defence, and more. We deliver innovative, high-quality solutions through world-class manufacturing and customer-focused excellence.",
  alternates: {
    canonical: "https://auxoindustries.com/auxo-industries/",
  },
  openGraph: {
    type: "article",
    locale: "en_GB",
    url: "https://auxoindustries.com/auxo-industries/",
    siteName: "Auxo Industries | Auxo Polymers | Auxo Thermopack",
    title:
      "Auxo Industries - Auxo Industries | Auxo Polymers | Auxo Thermopack",
    description:
      "Auxo Industries Pvt. Ltd. has state-of-the-art production infrastructure for injection moulding, Thermocol manufacturing, and more — serving automotive, packaging, defence, and consumer industries with innovation and precision.",
    images: [
      {
        url: "/images/Photo-17.jpg",
        width: 612,
        height: 408,
        alt: "Auxo Industries manufacturing process",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Auxo Industries - Auxo Industries | Auxo Polymers | Auxo Thermopack",
    description:
      "Auxo Industries Pvt. Ltd. — manufacturing excellence in moulding, Thermocol, and advanced production solutions for multiple industries.",
    images: ["/images/Photo-17.jpg"],
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
      <Navbar />
      {/* hero section */}
      <Hero />
      {/* manufacturing */}
      <Manufacturing />
      {/* productioncapabilities */}
      <ProductionCapabilities />
      {/* partners */}
      <Partners />
      {/* <Partners/> */}
      {/* contact us */}
      <Contact />
    </div>
  );
};

export default page;
