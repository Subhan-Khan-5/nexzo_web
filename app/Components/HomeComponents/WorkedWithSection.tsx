import InfiniteScrollLogos from "../SubComponents/InfiniteScrollLogos";

export default function WorkedWithSection() {
  // Company logos
  const companies = [
    { name: "Company 1", logo: "/images/logo1.png" },
    { name: "Company 2", logo: "/images/logo2.png" },
    { name: "Company 3", logo: "/images/logo3.svg" },
    { name: "Company 4", logo: "/images/logo4.png" },
    { name: "Company 5", logo: "/images/logo5.png" },
    { name: "Company 6", logo: "/images/logo6.png" },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#3b155f] py-8 sm:py-12 md:py-16 lg:py-20 ">
      <div className="absolute  blur-[150px] top-0 -left-30 rounded-full bg-amber-50 w-[70vw] -rotate-45 h-[400px]   "></div>
      <div className="relative z-10 mx-4 sm:mx-6 md:mx-[7.5vw]">
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 sm:mb-10 md:mb-12 lg:mb-16 text-center">
          We've Worked With
        </h2>

        {companies.length > 0 && (
            <InfiniteScrollLogos companies={companies} animationDuration={30} />
          )}
      </div>
    </section>
  );
}

