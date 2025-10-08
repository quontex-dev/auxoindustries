"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Link from "next/link";
import { Star } from "lucide-react";

const Hero = () => {
  const slides = [
    "/images/home-hero-slider-1.png",
    "/images/home-hero-slider-2.png",
    "/images/home-hero-slider-3.png",
    "/images/home-hero-slider-4.png",
  ];

  const names = [
    "AMBER",
    "DIXON",
    "EASTMAN",
    "EXIDE",
    "PGEL",
    "MAHARAJA",
    "LUMINOUS",
    "SUN INDUSTRIES",
    "GENUS",
  ];

  return (
    <section className="relative w-full" id="#">
      {/* Fullscreen Slider */}
      <div className="h-[92vh]">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true}
          loop={true}
          className="h-full w-full"
        >
          {slides.map((src, i) => (
            <SwiperSlide key={i}>
              <div
                className="h-screen w-full bg-cover bg-center relative"
                style={{ backgroundImage: `url(${src})` }}
              >
                {/* Centered Overlay */}
                <div className="absolute inset-0  flex flex-col items-center justify-center text-center px-6">
                  <div className="max-w-5xl">
                    <h1 className="text-4xl md:text-[100px] font-[700] text-[#EB7A2E] drop-shadow-lg font-[playfair]">
                      AUXO
                    </h1>
                    <h1 className="text-[30px] md:text-[80px] font-[700] text-white mt-2 drop-shadow-lg font-[playfair] tracking-wider">
                      INDUSTRIES PVT LTD
                    </h1>
                    <p className="mt-4 text-white text-md md:text-[25px]">
                      Auxo Industries Pvt. Ltd., headquartered in Roorkee,
                      Uttarakhand, is a leading Injection Moulding Plastic
                      Products manufacturer with INR 150 Crore revenue. Founded
                      in 2015 as M/s Auxo Polymers, it has grown 150 times,
                      operating three ISO 9001:2008 certified plants, serving
                      global OEMs in automotive, packaging, defense, marine,
                      electrical, and consumer sectors.
                    </p>
                    <Link
                      href="#"
                      className="mt-6 inline-block px-8 py-3 rounded-lg bg-[#EB7A2E] hover:bg-orange-600 text-white font-semibold transition"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Names Section (below slider) */}
      <div className="w-full sm:h-[8vh] bg-[#EB7A2E] flex flex-wrap items-center justify-around gap-6 sm:px-6">
        {names.map((name, i) => (
          <div key={i} className="flex items-center space-x-2">
            <Star className="text-white w-5 h-5" />
            <span className="text-sm md:text-[20px] font-medium text-white">
              {name}
            </span>
          </div>
        ))}
      </div>

      {/* Custom styles for Swiper */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: #f97316; /* orange-500 */
          opacity: 0.7;
        }
        .swiper-pagination-bullet-active {
          background: #ea580c; /* orange-600 */
          opacity: 1;
        }
        .swiper-button-prev,
        .swiper-button-next {
          color: #f97316;
          transition: 0.3s;
        }
        .swiper-button-prev:hover,
        .swiper-button-next:hover {
          color: #ea580c;
        }
      `}</style>
    </section>
  );
};

export default Hero;
