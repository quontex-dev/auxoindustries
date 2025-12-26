"use client";

import { motion } from "framer-motion";

const Milestones = () => {
  const milestones = [
    {
      year: "2014 - 2015",
      descriptions: ["Auxo Polymers"],
      turnover: "177.16 INR",
    },
    {
      year: "2015 - 2016",
      descriptions: ["Auxo Polymers"],
      turnover: "255.13 INR",
    },
    {
      year: "2016 - 2017",
      descriptions: ["Auxo Polymers"],
      turnover: "136.35 INR",
    },
    {
      year: "2017 - 2018",
      descriptions: ["Auxo Polymers"],
      turnover: "760.44 INR",
    },
    {
      year: "2018 - 2019",
      descriptions: ["Auxo Polymers"],
      turnover: "1655.88 INR",
    },
    {
      year: "2019 - 2020",
      descriptions: [
        "Auxo Polymers : 2538.71 INR",
        "Auxo Thermopack : 763.97 INR",
      ],
      turnover: "3302.68 INR",
    },
    {
      year: "2020 - 2021",
      descriptions: [
        "Auxo Polymers : 2982.73 INR",
        "Auxo Thermopack : 1961.51 INR",
        "Auxo Industries pvt. Ltd : 1.50 INR",
      ],
      turnover: "4945.74 INR",
    },
    {
      year: "2021 - 2022",
      descriptions: [
        "Auxo Polymers : 4727.35 INR",
        "Auxo Thermopack : 3248.54 INR",
        "Auxo Industries pvt. Ltd : 598.72 INR",
      ],
      turnover: "8594.61 INR",
    },
    {
      year: "2022 - 2023",
      descriptions: [
        "Auxo Polymers : 5323.23 INR",
        "Auxo Thermopack : 4651.01 INR",
        "Auxo Industries pvt. Ltd : 1771.11 INR",
      ],
      turnover: "11745.35 INR",
    },
    {
      year: "2023 - 2024",
      descriptions: [
        "Auxo Polymers : 2440.77 INR",
        "Auxo Thermopack : 4007.42 INR",
        "Auxo Industries pvt. Ltd : 4673.00 INR",
      ],
      turnover: "11,121.19 INR",
    },
    {
      year: "2024 - 2025",
      descriptions: [
        "Auxo Polymers : 33.11 INR",
        "Auxo Thermopack : 4446.18 INR",
        "Auxo Industries pvt. Ltd : 8070.23 INR",
      ],
      turnover: "12,508.73 INR",
    },
  ];

  return (
    <section className="w-full bg-black text-white py-16 px-4">
      {/* Headings */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-[clamp(1.8rem,4vw,2.5rem)] font-bold">
          Our Journey
        </h2>
        <h3 className="text-[clamp(1.2rem,3vw,1.8rem)] text-orange-500 mt-2">
          Milestones Achieved in Lakhs
        </h3>
      </motion.div>

      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto">
        {/* Center Line */}
        <div className="absolute left-1/2 top-0 h-full border-l-2 border-dotted border-[#EB7A2E] -translate-x-1/2" />

        <div className="space-y-14">
          {milestones.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="relative flex items-start w-full gap-6"
            >
              {/* Left Turnover */}
              <motion.div
                initial={{ x: -40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="w-1/2 pr-4 text-right min-w-0"
              >
                <h4 className="font-semibold leading-snug text-[clamp(0.9rem,2.5vw,1.6rem)] break-words">
                  {item.turnover}
                </h4>
              </motion.div>

              {/* Center Dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="flex flex-col items-center"
              >
                <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-orange-500 z-10" />
              </motion.div>

              {/* Right Content */}
              <motion.div
                initial={{ x: 40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="w-1/2 pl-4 min-w-0"
              >
                <p className="text-[#EB7A2E] font-medium leading-tight text-[clamp(1rem,3vw,2.2rem)]">
                  {item.year}
                </p>

                <div className="mt-2 space-y-1">
                  {item.descriptions.map((desc, i) => (
                    <p
                      key={i}
                      className="text-gray-300 leading-snug text-[clamp(0.85rem,2.4vw,1.4rem)] break-words"
                    >
                      {desc}
                    </p>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Milestones;
