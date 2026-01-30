interface AboutUsSectionProps {
  title?: string;
  paragraphs?: string[];
}

export default function AboutUsSection({
  title = "About Us",
  paragraphs = [
    "Nexzo Solutions started when a group of developers realized something frustrating: most software agencies were building what looked good in demos, not what actually worked in daily operations.",
    "We'd seen too many businesses stuck with systems that broke under real-world use. Tools that didn't talk to each other. Marketing campaigns optimized for vanity metrics instead of revenue.",
    "So we started Nexzo with a different approach—engineer first, polish second. Build infrastructure that can handle growth. Make sure everything connects. Measure what actually matters.",
    "That's still how we work today."
  ],
}: AboutUsSectionProps) {
  return (
    <section className="relative w-full min-h-[90vh] overflow-hidden bg-[#2A004A]">
      {/* Subtle texture/noise overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px'
        }}
      ></div>

      {/* Decorative curved arc at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-[30vh] overflow-hidden">
        <svg
          viewBox="0 0 1200 400"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M 0 400 Q 200 200 400 250 Q 600 300 800 200 Q 1000 100 1200 150 L 1200 400 L 0 400 Z"
            fill="url(#aboutUsPurpleGradient)"
            opacity="0.5"
          />
          <defs>
            <linearGradient id="aboutUsPurpleGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#C084FC" stopOpacity="0.7" />
              <stop offset="50%" stopColor="#A855F7" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#9333EA" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-[7.5vw] py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Left Side - Heading */}
          <div className="pt-8">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white">
              {title}
            </h2>
          </div>

          {/* Right Side - Content Text */}
          <div className="space-y-6 md:space-y-8">
            {paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-base sm:text-lg md:text-xl text-white leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

