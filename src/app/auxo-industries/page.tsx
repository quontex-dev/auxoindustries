import Navbar from "@/components/Navbar";
import Hero from "@/sections/auxo-industries/Hero";
import Manufacturing from "@/sections/auxo-industries/manufacturing";
import ProductionCapabilities from "@/sections/auxo-industries/productioncapabilites";
import Contact from "@/components/Contact";

const page = () => {
  return (
    <div>
      <Navbar />
      {/* hero section */}
      <Hero />
      {/* manufacturing */}
      <Manufacturing />
      {/* productioncapabilities */}
      <ProductionCapabilities />
      {/* partners */}

      {/* Contact US */}
      <Contact />
    </div>
  );
};

export default page;
