"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface CardProps {
  image: string;
  title: string;
  description: React.ReactNode;
  reverse?: boolean;
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Card: React.FC<CardProps> = ({ image, title, description, reverse }) => {
  return (
    <motion.div
      className={`flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } items-center gap-6 md:gap-10 bg-[#EBE4E4] shadow-lg rounded-2xl w-full max-w-[1340px] mx-auto px-4 sm:px-6 md:px-10 py-6`}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      data-aos="fade-up"
    >
      {/* Image */}
      <div
        className="w-full md:w-1/2 flex justify-center"
        data-aos={reverse ? "fade-left" : "fade-right"}
      >
        <Image
          src={image}
          alt={title}
          width={504}
          height={470}
          className="rounded-xl object-cover w-full max-w-[504px] h-auto"
          priority
        />
      </div>

      {/* Content */}
      <div
        className="w-full md:w-1/2 text-center md:text-left mt-4 md:mt-0 px-2 sm:px-0"
        data-aos={reverse ? "fade-right" : "fade-left"}
      >
        <h3 className="text-lg sm:text-xl md:text-2xl text-[#EB7A2E] font-medium mb-2 text-center md:text-left">
          {title}
        </h3>
        <div className="text-sm sm:text-base md:text-lg font-normal leading-relaxed">
          {description}
        </div>
      </div>
    </motion.div>
  );
};

export default function Hero() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="w-full px-4 sm:px-6 md:px-12 lg:px-24 pt-24 md:pt-28 pb-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="flex flex-col gap-8 sm:gap-10">
        {/* 1st card → Image Right */}
        <Card
          image="/images/career/career-1.png"
          title="Career at Auxo Industries"
          description={`Auxo industries is a young and dynamic organization that is one of India’s leading Plastic Injection Moulding Product companies offering unparalleled opportunities to its employees.
          We believe that our human capital is the key foundation of our strategies and the source of our business success.
          Therefore, we have built a work environment with no gender bias, market-leading compensation, and benefits that nurture innovative thinking and foster transparency, inclusiveness, and diversity.
          At Auxo Industries we provide unlimited opportunities, you choose your career path and make decisions to drive your career with people who are committed to including, developing, and engaging people, from a wide variety of backgrounds and who care as much about excellence as you do.
          At Auxo Industries, we enable technology and empower our employees to transcend boundaries and maximize their potential. We foster growth by investing in new age technology, processes and people.`}
          reverse
        />

        {/* 2nd card → Image Left */}
        <Card
          image="/images/career/career-2.png"
          title="Great People Make Great Workplace"
          description={`Our robust business model focused on injection moulding plastic product manufacturing, is based on the vision of achieving cost efficiencies by rationalizing CAPEX and operating expenses for customers and giving them faster time to market.
Delivering ‘Zero Defect High-Quality products, we remain the preferred OEMs partner in the country. Our state-of-the-art manufacturing facilities provide a competitive edge as we continue to provide quality products to our niche customers.
Auxo Industries gives you the space to grow and carve your own niche. We believe in the philosophy that ‘You challenge the process for innovation with new ideas and we support You’.
At Auxo Industries, we offer you leadership roles at an early stage in your career. Responsibility to have independent charge of managing a large product portfolio, multiple stakeholder expectations, environmental factors, and a large team on the ground – these are all variables of leadership that our employees would experience at a young age.
Transparent goals, ambitious targets, aspirational performance benchmarks, and multi entities, and plants spread team members operating from the remotest of locations, add to the overall leadership development of our people.`}
        />
      </div>
    </section>
  );
}
