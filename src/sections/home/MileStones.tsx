"use client";

const Milestones = () => {
  const milestones = [
    { year: "2014 - 2015", description: "Start", turnover: "177.16 INR" },
    {
      year: "2015 - 2016",
      description: "Ventured into Production",
      turnover: "255.13 INR",
    },
    {
      year: "2016 - 2017",
      description: "Certified With ISO 9001 Appreciated by Customers",
      turnover: "136.35 INR",
    },
    {
      year: "2017 - 2018",
      description: " Achieved 8 CR Turnover and started supply chain with OEMs",
      turnover: "760.44 INR",
    },
    { year: "2018 - 2019", description: "", turnover: "1655.88 INR" },
    { year: "2019 - 2020", description: "", turnover: "302.68 INR" },
    { year: "2020 - 2021", description: "", turnover: "4945.74 INR" },
    { year: "2021 - 2022", description: "", turnover: "8594.61 INR" },
    { year: "2022 - 2023", description: "", turnover: "11745.35 INR" },
    { year: "2023 - 2024", description: "", turnover: "11,121.19 INR" },
    { year: "2024 - 2025", description: "", turnover: "12,508.73 INR" },
  ];

  return (
    <section className="w-full bg-black text-white py-16 px-6">
      {/* Headings */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Our Journey</h2>
        <h3 className="text-xl md:text-2xl text-orange-500 mt-2">
          Milestones Achieved in Lakhs
        </h3>
      </div>

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto">
        {/* Center line */}
        <div className="absolute left-1/2 top-0 h-full border-l-2 border-dotted border-[#EB7A2E] transform -translate-x-1/2"></div>

        <div className="space-y-16">
          {milestones.map((item, index) => (
            <div
              key={index}
              className="relative flex items-center w-full sm:gap-20"
            >
              {/* Left Turnover */}
              <div className="w-1/2 pr-8 text-right">
                <h4 className="text-lg md:text-[25px] font-semibold">
                  {item.turnover}
                </h4>
              </div>

              {/* Middle dot */}
              <div className="w-0 flex flex-col items-center">
                <div className="w-5 h-5 rounded-full bg-orange-500  z-10"></div>
              </div>

              {/* Right Year */}
              <div className="w-1/2 pl-8">
                <p className="text-[#EB7A2E] text-base md:text-[35px] font-medium">
                  {item.year}
                </p>
                <p className="text-gray-300 text-base md:text-[25px] font-medium">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Milestones;
