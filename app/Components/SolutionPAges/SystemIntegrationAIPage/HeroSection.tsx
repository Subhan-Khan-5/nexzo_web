import Link from "next/link";
import InfiniteScrollLogos from "../../SubComponents/InfiniteScrollLogos";

interface SystemIntegrationAIHeroSectionProps {
  heading?: string;
  subHeading?: string;
  optionalParagraph?: string;
  buttonText?: string;
  buttonLink?: string;
  bottomText?: string;
  showLogos?: boolean;
  companies?: Array<{ name: string; logo: string }>;
}

export default function SystemIntegrationAIHeroSection({
  heading = "Your Systems Are Disconnected. AI Can Fix That.",
  subHeading = "We connect your tools, automate workflows, and infuse AI into every process so your business runs intelligently—not manually.",
  optionalParagraph,
  buttonText = "Get Your Free Integration & AI Audit",
  buttonLink = "#",
  bottomText = "Built by engineers who've integrated 100+ systems and built AI solutions across industries.",
  showLogos = true,
  companies = [
    { name: "Company 1", logo: "/images/blacklogo1.png" },
    { name: "Company 2", logo: "/images/blacklogo2.svg" },
    { name: "Company 3", logo: "/images/blacklogo3.svg" },
    { name: "Company 4", logo: "/images/blacklogo4.svg" },
    { name: "Company 5", logo: "/images/blacklogo5.png" },
  ],
}: SystemIntegrationAIHeroSectionProps) {
  
  return (
    <section className="h-[85vh] md:h-[100vh] pb-20 sm:px-6 md:px-[7.5vw] flex justify-end items-start flex-col bg-gradient-to-b from-[#3b5049] to-white relative overflow-hidden min-h-[70vh]">
      {/* Subtle curved translucent white shapes */}
      <div className="absolute top-0 left-0 w-[35vw] h-[60vh] rounded-full bg-white/90 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-white/50 blur-3xl "></div>
      <div className="absolute  top-0 -right-[20vw] w-[35vw] h-[60vh] rounded-full bg-white/50 blur-3xl "></div>
      <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] rounded-full bg-white/30 blur-2xl "></div>
      <div className="absolute   -bottom-1/2 left-0 w-full h-full  ">
            <img src="/images/FullStackEllipse.png"  alt="" className=" w-full max-w-[1000px] mx-auto h-full object-contain" />

            </div>
      <div className="relative z-10 w-full px-4 md:px-8">
        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl w-[70vw] lg:text-6xl font-semibold  text-gray-900  tracking-tight mb-6 drop-shadow-sm">
          {heading}
        </h1>

        {/* Sub Heading */}
        <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-6 leading-relaxed max-w-4xl drop-shadow-sm">
          {subHeading}
        </p>

        {/* Optional Paragraph */}
        {optionalParagraph && (
          <p className="text-md md:text-md text-gray-600 mb-10 leading-relaxed max-w-4xl drop-shadow-sm">
            {optionalParagraph}
          </p>
        )}

        {/* CTA Button - White with dark text */}
        {buttonText && (
          <Link
            href={buttonLink}
            className="
              inline-block
              bg-white
              text-gray-900
              font-semibold
              px-8 py-4
              rounded-xl
              text-base md:text-lg
              shadow-lg
              hover:shadow-xl
              transition-all duration-300
              transform hover:-translate-y-1
            "
          >
            {buttonText}
          </Link>
        )}
      </div>
        
      {(bottomText || showLogos) && (
        <div className="relative z-10 mt-10 md:w-[95%] w-[90%] mx-auto">
          <div className="w-full h-px bg-black mt-[5vh] mx-auto"></div>

          {/* Bottom Text */}
          {bottomText && (
            <p className="text-center text-gray-600 my-4 text-sm ">
              {bottomText}
            </p>
          )}

          {/* Logos */}
          {showLogos && companies.length > 0 && (
            <InfiniteScrollLogos companies={companies} animationDuration={30} />
          )}
        </div>
      )}
    </section>
  );
}

