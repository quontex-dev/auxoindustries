"use client";

import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Machine() {
  useEffect(() => {
    AOS.init({ duration: 700, once: true, offset: 120 });
  }, []);

  const headers = [
    { name: "Serial No.", icon: "/images/machine-icon-1.png" },
    { name: "Machine Type", icon: "/images/machine-icon-2.png" },
    { name: "No. of Machine", icon: "/images/machine-icon-3.png" },
    { name: "Make", icon: "/images/machine-icon-4.png" },
  ];

  const rows = [
    {
      "Serial No.": "1",
      "Machine Type": "Injection moulding machine 1250 ton",
      "No. of Machine": "1",
      Make: "Asian plastics",
    },
    {
      "Serial No.": "2",
      "Machine Type": "Injection moulding machine 1120 ton",
      "No. of Machine": "1",
      Make: "Asian plastics",
    },
    {
      "Serial No.": "3",
      "Machine Type": "Injection moulding machine  1000 ton",
      "No. of Machine": "1",
      Make: "JSW",
    },
    {
      "Serial No.": "4",
      "Machine Type": "Injection moulding machine  850ton",
      "No. of Machine": "1",
      Make: "Asian plastics",
    },
    {
      "Serial No.": "5",
      "Machine Type": "Injection moulding machine 680 ton",
      "No. of Machine": "1",
      Make: "Asian plastics",
    },
    {
      "Serial No.": "6",
      "Machine Type": "Injection moulding machine 560 ton",
      "No. of Machine": "9",
      Make: "Asian plastics",
    },
    {
      "Serial No.": "7",
      "Machine Type": "Injection moulding machine  500 ton",
      "No. of Machine": "4",
      Make: "JSW",
    },
    {
      "Serial No.": "8",
      "Machine Type": "Injection moulding machine  480 ton",
      "No. of Machine": "4",
      Make: "Asian plastics",
    },
    {
      "Serial No.": "9",
      "Machine Type": "Injection moulding machine 450 ton",
      "No. of Machine": "1",
      Make: "Asian plastics",
    },
    {
      "Serial No.": "10",
      "Machine Type": "Injection moulding machine 400 ton",
      "No. of Machine": "1",
      Make: "Asian plastics",
    },
    {
      "Serial No.": "11",
      "Machine Type": "Injection moulding machine 350 ton",
      "No. of Machine": "2",
      Make: "Asian plastics",
    },
    {
      "Serial No.": "12",
      "Machine Type": "Injection moulding machine 250 ton",
      "No. of Machine": "2",
      Make: "Asian plastics",
    },
    {
      "Serial No.": "13",
      "Machine Type": "Injection moulding machine 150 ton",
      "No. of Machine": "6",
      Make: "Asian plastics",
    },
    {
      "Serial No.": "14",
      "Machine Type": "Injection moulding machine 120 ton",
      "No. of Machine": "1",
      Make: "Asian plastics",
    },
    {
      "Serial No.": "15",
      "Machine Type": "DGSET 600 KVA",
      "No. of Machine": "3",
      Make: "KIRLOSKAR & CATER PILAR",
    },
  ];

  return (
    <section
      aria-labelledby="machine-heading"
      className="relative w-full py-20 px-6 bg-black text-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2
          id="machine-heading"
          className="text-3xl md:text-4xl font-bold text-center text-[#EB7A2E] mb-12"
          data-aos="fade-up"
        >
          Our Machines
        </h2>

        {/* Table Wrapper with Scrollbar */}
        <div className="w-full overflow-x-auto">
          <table className="w-full border-separate border-spacing-0 min-w-[800px]">
            <thead>
              <tr>
                {headers.map((header, idx) => (
                  <th
                    key={idx}
                    scope="col"
                    className="bg-[#EB7A2E] text-white text-lg md:text-xl font-semibold px-6 py-6 border border-[#EB7A2E] text-center whitespace-nowrap"
                  >
                    <div className="flex items-center justify-center gap-2">
                      <Image
                        src={header.icon}
                        alt={header.name}
                        width={28}
                        height={28}
                        className="w-7 h-7"
                        loading="lazy"
                      />
                      {header.name}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="min-h-[1430px]">
              {rows.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className="hover:bg-[#EB7A2E]/20 transition-colors"
                  data-aos="fade-up"
                  data-aos-delay={rowIndex * 50}
                >
                  {Object.values(row).map((cell, colIndex) => (
                    <td
                      key={colIndex}
                      className={`px-6 py-6 text-center text-sm md:text-base border-x border-t border-[#EB7A2E] whitespace-nowrap ${
                        rowIndex === rows.length - 1 ? "border-b" : ""
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
