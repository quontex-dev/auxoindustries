"use client";

import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <section className="w-full bg-white py-16 px-6">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
        About
        <span className="text-[#EB7A2E]"> Auxo </span>
        Industries Pvt. Ltd.
      </h2>

      {/* Images */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
        <div className="w-full md:w-[650px] h-auto aspect-[650/401] relative">
          <Image
            src="/images/about-1.png"
            alt="About Image 1"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-[650px] h-auto aspect-[650/401] relative">
          <Image
            src="/images/about-2.png"
            alt="About Image 2"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Div A + Div B */}
      <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto border-[#EB7A2E]">
        {/* Div A */}
        <div className="flex flex-col items-center justify-center flex-1 border-b  md:border-b-10 md:border-r-10 border-[#EB7A2E] py-8 px-6">
          <span className="text-[150px] sm:text-[200px] md:text-[280px] font-bold leading-none text-orange-500">
            11
          </span>
          <p className="text-lg md:text-xl font-medium text-gray-700 -mt-4">
            Years of Experience
          </p>
        </div>

        {/* Div B */}
        <div className="flex flex-col justify-center flex-1 border-t md:border-t-10 border-[#EB7A2E] py-8 px-6 text-center">
          <p className="text-gray-600 text-base md:text-[25px] mb-4 ">
            Auxo Industries began its journey in 2015 with M/S. Auxo Polymers.
            Since 2015, Auxo Industries has been on a continuous growth
            trajectory, entering into newer products and offerings for various
            Injection moulding plastic products OEMs across India.
          </p>

          {/* Centered Button */}
          <div className="flex justify-center">
            <Link
              href="#services"
              className="inline-block text-center px-6 py-3 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-semibold transition md:text-[25px] w-[200px]"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Para Divs */}
      <div className="max-w-[1260px] mx-auto text-[18px] sm:text-[20px] md:text-[25px] gap-[40px] flex flex-col mt-12 px-2 sm:px-4 md:px-6">
        <div>
          Auxo Industries Pvt. Ltd. represents the Injection Moulding Plastic
          Products manufacturing, an INR 150 Crore (Revenue) conglomerate
          headquartered in Roorkee, Uttarakhand, India, and having manufacturing
          facilities across the Industrial Area of Bhagawanpur, Roorkee,
          Haridwar, serving all the major automotive, packaging, defense,
          marine, electrical, consumer products and appliances OEMs across the
          World successfully for the past 7 years.
        </div>
        <div className="font-semibold text-[20px] sm:text-[24px] md:text-[30px]">
          Since 2015, Auxo Industries has
          <span className="text-[#EB7A2E]">
            {" "}
            grown 150 times in revenue
          </span>{" "}
          and crossed revenue of{" "}
          <span className="text-[#EB7A2E]"> INR 150 Crore </span> in FY 2024-25.
          Currently, Auxo Industries has 2 plants under 1 entity spread across
          all major industrial areas in Roorkee in India. All Auxo Industries
          plants are ISO 9001:2008 certified.
        </div>
        <div>
          Auxo Industries Pvt. Ltd. has expertise in manufacturing large part
          moulding, insert moulding, thin wall part moulding, Thermocol moulding
          etc., which provides a competitive advantage for automotive,
          packaging, defence, marine, electrical, consumer products and
          appliances.
        </div>
        <div>
          Auxo Group has three plants under separate three entities to cater for
          the production of injection moulded plastic products, assembly lines,
          and Thermocol manufacturing plants for packaging & engineering
          applications.
        </div>
        <div>
          <h1 className="text-center font-semibold text-[22px] md:text-[26px] mb-2">
            Auxo Industries Private Limited
          </h1>
          <p>
            We always believed in partnering with OEMs in the pursuit of
            world-class & competitive products in all the above sectors. It will
            strive to benchmark against global leaders to provide distinctive
            advantages to Indian and global manufacturers for increased
            productivity & maximizing returns.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
