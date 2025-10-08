// components/ProductionDivision.tsx
"use client";

import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

type Division = {
  title: string;
  subtitle: string;
  image: string;
  reverse?: boolean;
};

const divisions: Division[] = [
  {
    title: "Auxo Industries Pvt. Ltd.",
    subtitle: "Injection Moulded Plastic Products",
    image: "/images/production-division-1.png",
    reverse: false,
  },
  {
    title: "Auxo Industries Pvt. Ltd.",
    subtitle: "Thermacol Manufacturing Plant",
    image: "/images/production-division-2.png",
    reverse: true,
  },
  {
    title: "Auxo Industries Pvt. Ltd.",
    subtitle: "Injection Moulded Plastic Product & Assembly Line",
    image: "/images/production-division-3.png",
    reverse: false,
  },
];

const cardVariants = {
  hiddenLeft: { opacity: 0, x: -40, scale: 0.98 },
  visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.6 } },
  hiddenRight: { opacity: 0, x: 40, scale: 0.98 },
};

export default function ProductionDivision() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      offset: 120,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section
      aria-labelledby="production-heading"
      className="relative w-full py-10 px-6 text-white"
      // Background image is fixed and subtle: use inline style so tailwind doesn't need custom config
      style={{
        backgroundImage: "url('/images/background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark overlay for contrast and readability */}
      <div className="absolute inset-0 bg-white/92 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading */}
        <h2
          id="production-heading"
          className=" text-[#EB7A2E] text-3xl md:text-[35px] font-bold text-center mb-16"
        >
          Our Production Divisions
        </h2>

        {/* Cards container */}
        <div className="flex flex-col gap-y-12">
          {divisions.map((division, idx) => {
            const isReverse = !!division.reverse;

            // choose AOS animation + framer initial variant based on zig-zag
            const aos = isReverse ? "fade-left" : "fade-right";
            const initialVariant = isReverse ? "hiddenRight" : "hiddenLeft";

            return (
              <motion.article
                key={idx}
                // Framer motion animates when in view
                initial={initialVariant}
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                variants={cardVariants}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  isReverse ? "md:flex-row-reverse" : ""
                }`}
                data-aos={aos} // AOS as complementary animation (keeps performance-friendly)
                aria-labelledby={`division-${idx}-title`}
              >
                {/* Image side */}
                <div className="md:w-1/2 w-full">
                  <div className="w-full h-[220px] md:h-[320px] relative rounded-2xl overflow-hidden shadow-xs">
                    <Image
                      src={division.image}
                      alt={`${division.title} image`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      style={{ objectFit: "cover" }}
                      priority={false}
                      loading="lazy"
                      quality={75}
                    />
                  </div>
                </div>

                {/* Content side */}
                <div className="md:w-1/2 w-full text-center md:text-left">
                  <h3
                    id={`division-${idx}-title`}
                    className="text-2xl md:text-3xl font-semibold mb-3 text-[#EB7A2E]"
                  >
                    {division.title}
                  </h3>

                  <p className=" text-base md:text-[25px] mb-6 text-black font-bold">
                    {division.subtitle}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
