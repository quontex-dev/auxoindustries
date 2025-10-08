// components/Footer.tsx
"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <footer className="bg-black text-gray-300 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col justify-between min-h-[652px]">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Left */}
          <div
            data-aos="fade-right"
            className="space-y-6 flex flex-col items-start text-[20px] text-white"
          >
            <h4 className="text-[20px] font-semibold ">Follow Us</h4>
            <div className="flex space-x-4">
              <Image
                src="/images/facebook.png"
                alt="Facebook"
                width={40}
                height={40}
              />
              <Image
                src="/images/twitter.png"
                alt="Twitter"
                width={40}
                height={40}
              />
              <Image
                src="/images/youtube.png"
                alt="Youtube"
                width={40}
                height={40}
              />
              <Image
                src="/images/instagram.png"
                alt="Instagram"
                width={40}
                height={40}
              />
            </div>
            <div className="flex flex-col items-center space-y-1">
              <p>+91 8171501052</p>
              <p>+91 8171501053</p>
              <p>+91 8171501055</p>
            </div>
          </div>

          {/* Middle - Nav Links */}
          <div
            data-aos="fade-up"
            className="flex flex-col items-center justify-center space-y-6"
          >
            <div className="grid grid-cols-2 gap-4 text-[20px] text-white">
              <Link href="/" className="hover:text-[#EB7A2E] transition">
                About Us
              </Link>
              <Link
                href="/auxo-industries"
                className="hover:text-[#EB7A2E] transition"
              >
                Auxo Industries
              </Link>
              <Link
                href="/products-customers"
                className="hover:text-[#EB7A2E] transition"
              >
                Products & Customers
              </Link>
              <Link
                href="/posts-news"
                className="hover:text-[#EB7A2E] transition"
              >
                Posts & News
              </Link>
              <Link href="/career" className="hover:text-[#EB7A2E] transition">
                Our People
              </Link>
            </div>
          </div>

          {/* Right - Logo + Emails */}
          <div
            data-aos="fade-left"
            className="flex flex-col items-center md:items-end space-y-6"
          >
            <Image
              src="/images/auxo-logo.png"
              alt="Logo"
              width={80}
              height={80}
            />
            <div className="text-center md:text-right">
              <p className="text-white text-[20px]">
                https://www.auxoindustries.com
              </p>
              <p className="text-white text-[20px]">
                Email: info@auxoindustries.com
              </p>
            </div>
          </div>
        </div>

        {/* Middle Row - Addresses */}
        <div
          data-aos="fade-up"
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-6 text-center md:text-center relative"
        >
          {/* First Column */}
          <div>
            <h5 className="text-[20px] font-semibold text-white mb-2">
              Auxo Industries Pvt. Ltd. Unit I
            </h5>
            <p className="text-[18px] text-white">
              Plot No. 138 A & B, Kh No 6 & 7, <br /> Shiv Ganga Industrial
              Estate
              <br /> Vill. Lakeshwari, Pargana – Bhagwanpur <br /> Roorkee,
              Haridwar, Uttarakhand 247 661 <br /> Web:
              https://www.auxoindustries.com
            </p>
          </div>

          {/* Vertical Line Between Columns (visible only on md+) */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-[1px]">
            <div className="h-full w-full bg-gradient-to-b from-transparent via-orange-500 to-transparent"></div>
          </div>

          {/* Second Column */}
          <div>
            <h5 className="text-[20px] font-semibold text-white mb-2">
              Auxo Industries Pvt. Ltd. Unit II
            </h5>
            <p className="text-[18px] text-white">
              Plot No. 10 & 11, Raipur Industrial Area <br /> Vill. Bhagwanpur,
              Haridwar
              <br /> Uttarakhand 247 661 <br /> Web:
              https://www.auxoindustries.com
            </p>
          </div>
        </div>

        {/* Bottom - Copyright */}
        <div className="border-t border-gray-700 pt-6 text-center text-white text-sm">
          © {new Date().getFullYear()} Auxo Industries Pvt. Ltd. All rights
          reserved | Powered by Quontex.in
        </div>
      </div>
    </footer>
  );
}
