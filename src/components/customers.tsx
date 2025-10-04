"use client";

import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface CustomersProps {
  images: string[];
}

export default function Customers({ images }: CustomersProps) {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="w-full py-10 bg-white mb-15">
      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[50px] max-w-7xl mx-auto px-3">
        {images.map((src, index) => (
          <div
            key={index}
            className="w-full flex justify-center"
            data-aos="zoom-in"
            data-aos-delay={index * 150}
          >
            <Image
              src={src}
              alt={`Gallery image ${index + 1}`}
              width={588}
              height={391}
              className="w-full h-auto object-cover rounded-xl shadow-md"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
