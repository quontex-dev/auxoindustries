"use client";

import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

interface Header {
  name: string;
  icon: string;
}

interface TableProps {
  title: string;
  headers: Header[];
  rows: Record<string, string>[];
}

export default function Table({ title, headers, rows }: TableProps) {
  useEffect(() => {
    AOS.init({ duration: 700, once: true, offset: 120 });
  }, []);

  return (
    <section
      aria-labelledby={`${title.toLowerCase().replace(/\s+/g, "-")}-heading`}
      className="relative w-full py-20 px-6 bg-black text-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2
          id={`${title.toLowerCase().replace(/\s+/g, "-")}-heading`}
          className="text-3xl md:text-4xl font-bold text-center text-[#EB7A2E] mb-12"
          data-aos="fade-up"
        >
          {title}
        </h2>

        {/* Table */}
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
                  {headers.map((header, colIndex) => (
                    <td
                      key={colIndex}
                      className={`px-10 py-6 text-center text-sm md:text-base border-x border-t border-[#EB7A2E] whitespace-nowrap ${
                        rowIndex === rows.length - 1 ? "border-b" : ""
                      }`}
                    >
                      {row[header.name]}
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
