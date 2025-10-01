import Navbar from "@/components/Navbar";
import Hero from "@/sections/auxo-industries/Hero";
import Manufacturing from "@/sections/auxo-industries/manufacturing";
import ProductionCapabilities from "@/sections/auxo-industries/productioncapabilites";

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
    </div>
  );
};

export default page;
