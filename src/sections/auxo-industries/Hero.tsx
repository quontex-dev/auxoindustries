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
      } items-center gap-6 md:gap-10 bg-[#EBE4E4] shadow-lg rounded-2xl w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-10 py-6`}
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
          width={616}
          height={528}
          className="rounded-xl object-cover w-full h-auto max-w-[616px]"
        />
      </div>

      {/* Content */}
      <div
        className="w-full md:w-1/2 text-center md:text-left mt-4 md:mt-0 px-2 sm:px-0"
        data-aos={reverse ? "fade-right" : "fade-left"}
      >
        <h3 className="text-lg sm:text-xl md:text-2xl text-[#EB7A2E] font-medium mb-2">
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
        {/* 1st card */}
        <Card
          image="/images/auxo-industries/Hero-1.png"
          title="Auxo Industries Pvt. Ltd."
          description={`Auxo Industries Pvt. Ltd. has expertise in manufacturing large part moulding, insert moulding, thin wall part moulding, Thermocol moulding etc., which provides a competitive advantage for automotive, packaging, defence, marine, electrical, consumer products and appliances.
          We always believed in partnering with OEMs in the pursuit of world-class & competitive products in all the above sectors.
          It will strive to benchmark against global leaders to provide distinctive advantages to Indian and global manufacturers for increased productivity & maximizing returns. 
          AUXO strive for excellence by providing customized solutions, product & services that best satisfies requirements of our customers and continuously improve quality, reliability and service with the help of an effective quality management system.`}
          reverse
        />

        {/* 2nd card */}
        <Card
          image="/images/auxo-industries/Hero-2.png"
          title="Auxo Industries Pvt. Ltd."
          description={
            <div className="space-y-6">
              {/* Top text */}
              <p data-aos="fade-up" className="text-sm sm:text-base">
                Auxo Industries Pvt. Ltd. has two plants under separate entities to cater to the production of injection moulded plastic products, Thermocol manufacturing plants for packaging & engineering applications:
              </p>

              {/* Inner rows */}
              <div className="bg-transparent rounded-xl flex flex-col gap-4">
                <div
                  className="flex flex-col sm:flex-row items-center sm:items-start gap-4"
                  data-aos="zoom-in"
                >
                  <Image
                    src="/images/auxo-industries/hero-2-1.png"
                    alt="Inner feature 1"
                    width={80}
                    height={80}
                    className="rounded-lg object-cover"
                  />
                  <p className="text-sm sm:text-base md:text-lg font-medium text-center sm:text-left">
                    Auxo Industries Pvt. Ltd. Unit 1
                  </p>
                </div>

                <div
                  className="flex flex-col sm:flex-row items-center sm:items-start gap-4"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                >
                  <Image
                    src="/images/auxo-industries/hero-2-2.png"
                    alt="Inner feature 2"
                    width={80}
                    height={80}
                    className="rounded-lg object-cover"
                  />
                  <p className="text-sm sm:text-base md:text-lg font-medium text-center sm:text-left">
                    Auxo Industries Pvt. Ltd. Unit 2
                  </p>
                </div>
              </div>

              {/* Bottom text */}
              <p data-aos="fade-up" data-aos-delay="300" className="text-sm sm:text-base">
                Auxo Industries Pvt. Ltd. has a state-of-the-art production infrastructure to cater to the production of injection moulded plastic products, Thermocol manufacturing plants for packaging & engineering applications, and production of injection moulded plastic products and assembly lines.
              </p>
            </div>
          }
        />

        {/* 3rd card */}
        <Card
          image="/images/auxo-industries/Hero-3.png"
          title="Auxo Industries Pvt. Ltd."
          description={`At Auxo Industries Pvt. Ltd., our focus has always been on innovations, designing thinking, and developing best-in-class products for our customers across the globe.
          We are expanding our product portfolio into newer household items verticals.
          At Auxo, we work closely with our customers, suppliers, and other stakeholders to develop innovative products that not only address new industry opportunities but also meet customer needs with innovative design ideas in an increasingly technology-driven world.`}
          reverse
        />
      </div>
    </section>
  );
}
