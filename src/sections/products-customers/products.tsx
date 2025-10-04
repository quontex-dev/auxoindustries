"use client";

import Image from "next/image";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";

interface FeatureCard {
  image: string;
  title: string;
  description: string;
}

interface FeatureSectionProps {
  features?: FeatureCard[];
}

export default function Products({
  features = [
    {
      image: "/images/products-customers/manufacturing-1.png",
      title: "Auxo Industries Pvt. Ltd.",
      description: "Thermocol Manufacturing Plant",
    },
    {
      image: "/images/products-customers/manufacturing-2.png",
      title: "Auxo Industries Pvt. Ltd.",
      description: "Injection Moulded Plastic Products & Assembly Line",
    },
    {
      image: "/images/products-customers/manufacturing-3.png",
      title: "Auxo Industries Pvt. Ltd.",
      description: "Injection Moulded Plastic Products",
    },
  ],
}: FeatureSectionProps) {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="w-full py-10 bg-white">
      {/* Feature Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-10 lg:gap-5 max-w-8xl mx-auto px-4 sm:px-6 lg:px-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center"
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            {/* Image Wrapper */}
            <div className="flex items-center justify-center w-full max-w-[420px] h-[250px] sm:h-[300px] lg:h-[363px]">
              <Image
                src={feature.image}
                alt={feature.title}
                width={420}
                height={363}
                className="object-contain w-full h-full"
              />
            </div>

            {/* Title */}
            <h3 className="text-[25px] font-[700] text-center text-[#EB7A2E] leading-[120%] tracking-wide max-w-[90%] mx-auto mt-4">
              {feature.title}
            </h3>

            {/* Description */}
            <p className="text-[20px] text-[#000000] font-bold mt-4 max-w-[50%] mx-auto break-words">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
