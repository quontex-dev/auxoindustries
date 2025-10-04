"use client";

import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Plants() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="w-full py-16 bg-white">
      {/* Heading */}
      <h2
        className="text-center text-3xl md:text-4xl font-bold mb-12 text-[#EB7A2E]"
        data-aos="fade-up"
      >
        Our Plants!
      </h2>

      {/* Two Columns Wrapper */}
      <div className="relative container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6 md:px-12">
        {/* Column 1 */}
        <div
          className="flex flex-col items-center text-center"
          data-aos="fade-right"
        >
          <Image
            src="/images/contact-us/plants-1.png"
            alt="Auxo Industries Unit I"
            width={300}
            height={250}
            className="rounded-lg mb-6"
          />
          <h3 className="text-3xl font-bold text-black mb-4">
            Auxo Industries Pvt. Ltd. Unit I
          </h3>
          <p className=" text-2xl text-black  leading-relaxed">
            Plot No. 138 A & B, Kh No 6 & 7,<br /> Shiv Ganga Industrial Estate <br />Vill.
            Lakeshwari, Pargana – Bhagwanpur <br />Roorkee, Haridwar, Uttarakhand 247
            661 <br />Web: https://www.auxoindustries.com
          </p>
        </div>

        {/* Column 2 */}
        <div
          className="flex flex-col items-center text-center"
          data-aos="fade-left"
        >
          <Image
            src="/images/contact-us/plants-2.png"
            alt="Auxo Industries Unit II"
            width={300}
            height={250}
            className="rounded-lg mb-6"
          />
          <h3 className="text-3xl font-bold text-black mb-4">
            M/S. Auxo Industries Pvt. Ltd. Unit II
          </h3>
          <p className=" text-2xl text-black  leading-relaxed">
            Plot No. 10 & 11, Raipur Industrial Area <br /> Vill. Bhagwanpur, Haridwar <br />
            Uttarakhand 247 661 <br /> Web: https://www.auxoindustries.com
          </p>
        </div>

        {/* Vertical Line Between Columns (visible only on md+) */}
        <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 h-full w-[2px]">
          <div className="h-full w-full bg-gradient-to-b from-transparent via-orange-500 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
