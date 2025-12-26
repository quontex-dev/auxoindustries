// // components/Founders.tsx
// "use client";

// import { useEffect } from "react";
// import Image from "next/image";
// import AOS from "aos";
// import "aos/dist/aos.css";

// export default function Founders() {
//   useEffect(() => {
//     AOS.init({ duration: 800, once: true, offset: 120, easing: "ease-in-out" });
//   }, []);

//   const founders = [
//     {
//       name: "Mr. Harpal Singh",
//       designation: "Managing Director",
//       image: "/images/founder-1.png",
//     },
//     {
//       name: "Mr. Pabitra Mohan Dash",
//       designation: "Director",
//       image: "/images/founder-2.png",
//     },
//     {
//       name: "Mr. Gurudev Singh",
//       designation: "Director",
//       image: "/images/founder-3.png",
//     },
//     {
//       name: "Mr. BrishSankar Mohanty",
//       designation: "Director",
//       image: "/images/founder-4.png",
//     },
//   ];

//   return (
//     <section
//       aria-labelledby="founders-heading"
//       className="relative w-full py-20 px-6 bg-white"
//     >
//       <div className="max-w-7xl mx-auto">
//         <h2
//           id="founders-heading"
//           className="text-3xl md:text-4xl font-bold text-center text-[#EB7A2E] mb-16"
//           data-aos="fade-up"
//         >
//           Our Founders
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
//           {founders.map((founder, idx) => (
//             <div
//               key={idx}
//               data-aos="zoom-in"
//               data-aos-delay={idx * 100}
//               className="bg-[#EB7A2E33]  rounded-xl shadow-lg p-6 text-center transform transition-all duration-500 ease-in-out hover:-translate-y-4 hover:shadow-2xl w-[313px] h-[476px] flex flex-col items-center"
//             >
//               <div className="w-[260px] h-[260px] relative mb-6">
//                 <Image
//                   src={founder.image}
//                   alt={founder.name}
//                   fill
//                   className="rounded-full object-cover border-4 border-[#EB7A2E] transition-transform duration-500 ease-in-out hover:scale-105"
//                 />
//               </div>

//               <div className="mt-auto">
//                 <h3 className="text-[35px] font-semibold text-gray-900 mb-2">
//                   {founder.name}
//                 </h3>
//                 <p className="text-[30px]">{founder.designation}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Founders() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 120, easing: "ease-in-out" });
  }, []);

  const founders = [
    {
      name: "Mr. Harpal Dhanda",
      designation: "Director",
      image: "/images/founder-1.png",
    },
    {
      name: "Mr. Pabitra Mohan Dash",
      designation: "Director",
      image: "/images/founder-2.png",
    },
    {
      name: "Mr. Biraj Sankar Mohanty",
      designation: "Director",
      image: "/images/founder-4.png",
    },
    {
      name: "Mr. Gurudev Singh",
      designation: "Director",
      image: "/images/founder-3.png",
    },
  ];

  return (
    <section
      aria-labelledby="founders-heading"
      className="w-full py-20 px-6 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          id="founders-heading"
          className="text-3xl md:text-4xl font-bold text-center text-[#EB7A2E] mb-16"
          data-aos="fade-up"
        >
          Our Founders
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-center">
          {founders.map((founder, idx) => (
            <article
              key={idx}
              data-aos="zoom-in"
              data-aos-delay={idx * 100}
              className="w-[313px] h-[476px] bg-[#EB7A2E1A] rounded-xl shadow-lg p-6 flex flex-col items-center text-center transition-transform duration-500 ease-in-out hover:-translate-y-4 hover:shadow-2xl"
            >
              <div className="w-[259px] h-[259px] relative mb-6">
                <Image
                  src={founder.image}
                  alt={`Photo of ${founder.name}, ${founder.designation}`}
                  width={259}
                  height={259}
                  className="rounded-full object-cover border-4 border-[#EB7A2E] transition-transform duration-500 ease-in-out hover:scale-105 bg-white"
                />
              </div>

              <h3 className="text-[35px] font-semibold text-gray-900 mb-1">
                {founder.name}
              </h3>
              <p className="text-[30px] text-gray-700">{founder.designation}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
