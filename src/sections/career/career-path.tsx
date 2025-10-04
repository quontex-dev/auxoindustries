"use client";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function CareerPath() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="w-full py-16 bg-white overflow-hidden">
      {/* Content Wrapper */}
      <div className="container mx-auto flex flex-col md:flex-row items-center  md:px-12">
        {/* Left Side: Description */}
        <div
          className="w-full flex flex-col justify-between text-center md:text-left h-full pl-10 pr-10"
          data-aos="fade-right"
        >
          <div>
            <h3 className="text-center md:text-3xl font-bold text-[#EB7A2E] mb-6">
              We Grow Our People with Right Career Path
            </h3>
            <p className="text-black-600 text-lg leading-relaxed">
              At Auxo Industries, we invest heavily in people’s training & development
              of your skills and competencies and offer you great opportunities to build
              your career, and take it to new heights.
              <br />
              As an organization, we remain committed to building talent and providing our
              employees an opportunity to grow into larger roles with higher accountabilities.
              <br />
              We have well-defined career paths and development interventions including
              technological skills enhancement that, is designed for individuals who are driven,
              enthusiastic, and have the potential to grow to larger leadership roles.
              <br />
              Our career framework works on the guiding principles of providing cross-functional,
              cross-product portfolio exposure, challenging roles in varying entities and plants,
              and an opportunity to grow as an individual contributor with subject matter expertise
              with large teams.
            </p>
          </div>

          {/* Button at bottom center */}
          {/* <div className="mt-8 flex justify-center">
            <button className="px-6 py-3 bg-[#EB7A2E] text-white font-semibold rounded-4xl shadow-md hover:bg-[#d56a1d] transition">
              Find jobs
            </button>
          </div> */}
        </div>

        {/* Right Side: Image */}
        <div
          className="w-full md:w-1/2 flex justify-center md:justify-end md:ml-6"
          data-aos="fade-left"
        >
          <Image
            src="/images/career/career-3.png"
            alt="Why Choose Us"
            width={400}
            height={350}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}
