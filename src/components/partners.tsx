"use client";

import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface PartnersProps {
  heading?: string;
}

export default function Partners({
  heading = "Our Manufacturing Excellence!",
}: PartnersProps) {
  const logos = [
    "/images/auxo-industries/hero-5-1.png",
    "/images/auxo-industries/hero-5-2.png",
    "/images/auxo-industries/hero-5-3.png",
    "/images/auxo-industries/hero-5-4.png",
    "/images/auxo-industries/hero-5-5.png",
    "/images/auxo-industries/hero-5-6.png",
  ];

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="w-full py-16 mt-10 bg-white overflow-hidden">
      {/* Heading */}
      <h2
        className="text-[35px] md:text-3xl font-bold text-center text-[#EB7A2E] mb-12"
        data-aos="fade-up"
      >
        {heading}
      </h2>

      {/* Marquee wrapper */}
      <div className="relative overflow-hidden">
        <div
          className="marquee-track"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {logos.concat(logos).map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center px-8"
            >
              <Image
                src={logo}
                alt={`Company logo ${index + 1}`}
                width={180}
                height={100}
                className="h-20 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
