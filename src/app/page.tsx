import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/sections/home/Hero";
import About from "@/sections/home/About";
import MileStones from "@/sections/home/MileStones";
import ProductionDivision from "@/sections/home/ProductionDivision";
import MissionVision from "@/sections/home/MissionVision";
import Machine from "@/sections/home/Machine";
import Founders from "@/components/Founders";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "About Us - Auxo Industries | Auxo Polymers | Auxo Thermopack",
  description:
    "Learn about Auxo Industries Pvt. Ltd. — A leading injection moulding plastic products manufacturer with 3 plants in Roorkee, India.",
  openGraph: {
    title: "About Us - Auxo Industries | Auxo Polymers | Auxo Thermopack",
    description:
      "Auxo Industries Pvt. Ltd. — Trusted partner for automotive, packaging, and consumer product OEMs worldwide.",
    url: "https://auxoindustries.com/about",
    images: [
      {
        url: "/images/about-og.jpg", // 👈 save in public/images
        width: 1200,
        height: 630,
        alt: "Auxo Industries Manufacturing Facilities",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us - Auxo Industries | Auxo Polymers | Auxo Thermopack",
    description:
      "Auxo Industries Pvt. Ltd. — Global leader in plastic injection moulding solutions.",
    images: ["/images/about-og.jpg"],
  },
  alternates: {
    canonical: "https://auxoindustries.com/about",
  },
};

const page = () => {
  return (
    <div>
      <Navbar />
      {/* HERO SECTION */}
      <Hero />
      {/* ABOUT SECTION */}
      <About />
      {/* MILESTONES SECTION */}
      <MileStones />
      {/* PRODUCTION DIVISION SECTION */}
      <ProductionDivision />
      {/* MISSION VISION SECTION */}
      <MissionVision />
      {/* MACHINE SECTION */}
      <Machine />
      {/* FOUNDERS SECTION */}
      <Founders />
      {/* CONTACT SECTION */}
      <Contact />
    </div>
  );
};

export default page;
