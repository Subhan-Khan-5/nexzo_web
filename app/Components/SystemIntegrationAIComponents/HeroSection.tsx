import Link from "next/link";

interface HeroSectionProps {
  headline?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

export default function HeroSection({
  headline = "System Integration & AI: Where Your Tools Become Intelligent",
  description = "Connect your systems. Automate your workflows. Infuse AI into every process. We build integrations that don't just move data—they make your business smarter.",
  primaryButtonText = "Get Your Free Audit",
  primaryButtonLink = "#",
  secondaryButtonText = "See Our Solutions",
  secondaryButtonLink = "#",
}: HeroSectionProps) {
  return (
    <section className="relative pt-[10vh] w-full md:h-[100vh] overflow-hidden bg-[#2A004A] flex items-center justify-start px-2 md:px-[2.5vw]">
      {/* Blurred Translucent Shapes Overlay */}
      {/* Large curve from bottom left to top right */}
      <div className="fixed -top-[7%] md:-top-[30%] right-[0%] md:w-[30vw] w-[45vw] h-[22vh]  md:h-[60vh] rounded-full blur-3xl   bg-white">
        <div className="w-full h-full bg-gradient-to-br from-white/20 to-transparent rounded-full blur-3xl"></div>
      </div>
      
      {/* Smaller curve in top right */}
      <div className="fixed md:-top-[7%]   h-[22vh]   top-[10%] -left-[20%] w-[30vw] md:h-[60vh]  rounded-full blur-3xl opacity-30   bg-white">
        <div className="w-full h-full bg-gradient-to-bl from-white/30 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Additional subtle blur shapes */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] opacity-20">
        <div className="w-full h-full bg-gradient-to-r from-white/15 to-transparent rounded-full blur-2xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10  py-20 md:py-32 text-start">
        {/* Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-7xl md:w-[80vw] lg:text-8xl font-[500] text-white leading-tight mb-6 md:mb-8">
          {headline}
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-2xl md:w-[82vw]  lg:text-3xl text-white/90 leading-relaxed mb-10 md:mb-12  mx-auto">
          {description}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col  sm:flex-row items-center justify-start gap-4 md:gap-6">
          {/* Primary Button - White with purple text */}
          <Link
            href={primaryButtonLink}
            className="bg-white text-[#4B0082] font-semibold px-8 py-4 rounded-xl text-base md:text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 whitespace-nowrap"
          >
            {primaryButtonText}
          </Link>

          {/* Secondary Button - Link style */}
          <Link
            href={secondaryButtonLink}
            className="text-white font-semibold text-base md:text-lg underline underline-offset-4 hover:text-white/80 transition whitespace-nowrap"
          >
            {secondaryButtonText}
          </Link>
        </div>
      </div>
    </section>
  );
}
















