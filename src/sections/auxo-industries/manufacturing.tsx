"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ComplexCardProps {
  heading?: string;
  mainImage?: string;
  items?: { image: string; text: string }[];
}

export default function Manufacturing({
  heading = "Our Manufacturing Excellence!",
  mainImage = "/images/auxo-industries/hero-4.png",
  items = [
    { image: "/images/auxo-industries/hero-4-1.png", text: "Plants # 2 | Machines # 49" },
    { image: "/images/auxo-industries/hero-4-2.png", text: "Plant's Covered Area: 12,000 Square Feet" },
    { image: "/images/auxo-industries/hero-4-3.png", text: "Injection Moulding Machine # 100 to 1250Ton" },
    { image: "/images/auxo-industries/hero-4-4.png", text: "People Capability:~500+" },
  ],
}: ComplexCardProps) {
  return (
    <motion.div
      className="w-full max-w-7xl mx-auto bg-white rounded-2xl p-4 sm:p-6 md:p-10 flex flex-col gap-10 sm:gap-12 md:gap-14"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Heading */}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center text-[#EB7A2E] underline decoration-[#EB7A2E] underline-offset-4">
        {heading}
      </h2>

      {/* Main content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
        {/* Left: Responsive Image */}
        <div className="flex justify-center">
          <Image
            src={mainImage}
            alt={heading}
            width={729}
            height={512}
            className="object-cover w-full h-auto max-w-[729px]"
          />
        </div>

        {/* Right: Description Grid */}
        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:gap-8">
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-3 sm:gap-4">
              <Image
                src={item.image}
                alt={`Item ${index + 1}`}
                width={89}
                height={63}
                className="object-contain w-[60px] h-[45px] sm:w-[70px] sm:h-[50px] md:w-[89px] md:h-[63px]"
              />
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black font-medium">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
