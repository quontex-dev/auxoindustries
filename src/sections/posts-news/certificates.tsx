import Image from "next/image";

export default function Certificates() {
  return (
    <section className="w-full py-12 pt-14 mt-14">
      {/* Heading */}
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-8 text-[#EB7A2E]">
        Congratulations Team Auxo Industries! We have
      </h2>

      {/* Images */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-0 w-full">
        {/* Left Image */}
        <div
          className="w-full md:w-1/2 flex justify-center"
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          <Image
            src="/images/posts-news/post-1.png"
            alt="Left"
            width={433}
            height={505}  
            className="rounded-lg object-contain"
          />
        </div>

        {/* Right Image */}
        <div
          className="w-full md:w-1/2 flex justify-center"
          data-aos="fade-left"
          data-aos-duration="1200"
        >
          <Image
            src="/images/posts-news/post-2.png"
            alt="Right"
            width={650}  
            height={660} 
            className="rounded-lg shadow-md object-contain"
          />
        </div>
      </div>
    </section>
  );
}
