"use client";

import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function MissionVision() {
  useEffect(() => {
    AOS.init({ duration: 700, once: true, offset: 120 });
  }, []);

  return (
    <section
      aria-labelledby="mission-vision-heading"
      className="relative w-full py-5 px-6 text-white"
      style={{
        backgroundImage: "url('/images/background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/92 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Main Heading */}
        <h2
          id="mission-vision-heading"
          className="text-3xl md:text-4xl text-[#EB7A2E] font-bold text-center mb-5"
        >
          Our Mission & Vision
        </h2>

        {/* Mission + Vision cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
          <div data-aos="fade-right" className="rounded-2xl p-8 text-center">
            <Image
              src="/images/mission-vision-icon-1.png"
              alt="Target"
              width={200}
              height={200}
              className="w-[200px] h-[170px] mx-auto mb-4"
            />
            <p className="text-black text-[22px] leading-relaxed">
              Auxo Group strives for excellence by providing:
              <br /> • Customized solutions, products and services <br /> • Best
              practices that satisfy customer requirements <br /> • Continuous
              improvement in quality, reliability, and service with an effective
              quality management system
            </p>
          </div>
          <div data-aos="fade-left" className="rounded-2xl p-8 text-center">
            <Image
              src="/images/mission-vision-icon-2.png"
              alt="Eye"
              width={200}
              height={200}
              className="w-[200px] h-[170px] mx-auto mb-4"
            />
            <p className="text-black text-[22px] leading-relaxed">
              AUXO Group has always believed in partnering with OEMs in the
              pursuit of world-class & competitive products in the plastic
              sector. We strive to benchmark against global leaders to provide a
              distinctive advantage to Indian & global manufacturers for
              increased productivity & maximizing returns.
            </p>
          </div>
        </div>

        {/* Sub-sections */}
        <div className="space-y-20">
          {/* Section 1 */}
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-center mb-12 text-[#EB7A2E]">
              Building Our Future From Ground Up!
            </h3>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div
                data-aos="fade-right"
                className="md:w-1/2 w-full h-[380px] md:h-[460px] relative rounded-xl overflow-hidden shadow-lg"
              >
                <Image
                  src="/images/mission-vision-1.png"
                  alt="Core Values"
                  fill
                  sizes="(max-width: 670px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                  className="rounded-xl"
                />
              </div>
              <div
                data-aos="fade-left"
                className="md:w-1/2 text-center md:text-left"
              >
                <p className="text-black leading-relaxed text-[20px]">
                  Our productions and operations are strategically located at
                  Roorkee, Uttarakhand, India. Our plant has state-of-the-art
                  infrastructure. At Auxo, our focus has always been on
                  innovation, design thinking, and developing best-in-class
                  products for our customers across the globe along with
                  expanding our product portfolio into newer household items
                  verticals.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-center mb-12 text-[#EB7A2E]">
              Locally Made with Industry&apos;s Experience!
            </h3>
            <div className="flex flex-col md:flex-row-reverse items-center gap-8">
              <div
                data-aos="fade-left"
                className="md:w-1/2 w-full h-[380px] md:h-[460px] relative rounded-xl overflow-hidden shadow-lg"
              >
                <Image
                  src="/images/mission-vision-2.png"
                  alt="Commitment"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                  className="rounded-xl"
                />
              </div>
              <div
                data-aos="fade-right"
                className="md:w-1/2 text-center md:text-left"
              >
                <p className="text-black leading-relaxed text-[20px]">
                  Auxo Industries Pvt. Ltd. is one of India’s largest Injection
                  Moulding Plastic product manufacturers. Every day we gain
                  industry experience and earn confidence. Becoming a preferred
                  partner of OEMs takes time & trust — and we work hard to gain
                  it daily.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-center mb-12 text-[#EB7A2E]">
              Our Manufacturing Capabilities
            </h3>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div
                data-aos="fade-right"
                className="md:w-1/2 w-full h-[360px] relative rounded-xl overflow-hidden shadow-lg"
              >
                <Image
                  src="/images/mission-vision-3.png"
                  alt="Future"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                  className="rounded-xl"
                />
              </div>
              <div
                data-aos="fade-left"
                className="md:w-1/2 text-center md:text-left"
              >
                <p className="text-black leading-relaxed text-[20px] mb-6">
                  Auxo Industries Pvt. Ltd. has state-of-the-art manufacturing
                  capabilities with the latest technology-driven machines and
                  production capability area.
                </p>

                {/* Key Points List */}
                <ul className="space-y-3 text-center ">
                  {" "}
                  {/* reduced gap */}
                  {[
                    "Number of Plants: #2",
                    "Plants' Covered Area: 12,000 Square Feet",
                    "Number of Machines: #30 + #19 machines for Thermopack",
                    "Injection Moulding Machines: 100-1250 Ton",
                  ].map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3 ">
                      <Image
                        src={`/images/mission-vision-sec3-icon-${idx + 1}.png`}
                        alt="icon"
                        width={40}
                        height={40}
                      />
                      <span className="text-black text-sm sm:text-base md:text-lg mt-2">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
