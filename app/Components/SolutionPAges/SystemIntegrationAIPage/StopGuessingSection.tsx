interface StopGuessingSectionProps {
  title: string;
  description: string;
  targetAudience?: string;
  buttonText: string;
  disclaimerText?: string;
}

export default function StopGuessingSection({
  title,
  description,
  targetAudience,
  buttonText,
  disclaimerText,
}: StopGuessingSectionProps) {
  return (
    <section className="relative mt-[10vh] px-2 min-w-[380px] w-full mx-auto md:px-6 md:px-[7.5vw] bg-white">
      {/* Grid pattern background */}
      <div className="absolute bg-cover bg-center h-[40vh] top-[50%] -translate-y-1/2 right-[0] z-0">
        <img src="/images/grid2.png" alt="grid" />
      </div>
      <div className="absolute bg-cover bg-center h-[40vh] top-[70%] -translate-y-1/2 left-[0] z-0">
        <img src="/images/grid2.png" alt="grid" />
      </div>
    
      <div className="relative z-10 min-w-[350px] mx-auto py-12 md:py-16">
        {/* Main Card */}
        <div
          className="
            bg-gradient-to-b
            from-[#F8F7F8]/85
            via-[#F8F7F8]/75
            to-[#F8F7F8]/90
            backdrop-blur-xl
            rounded-[60px]
            py-10
            md:py-16
            border border-[#4B0082]
            max-w-4xl
            mx-auto
          "
        >
          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-center">
            {title}
          </h2>

          {/* First Paragraph */}
          <p className="text-gray-800 text-base md:text-lg lg:text-xl leading-relaxed mb-6 text-center mx-auto">
            {description}
          </p>

          {/* Target Audience Paragraph */}
          {targetAudience && (
            <p className="text-gray-800 text-base md:text-lg lg:text-xl leading-relaxed mb-6 text-center mx-auto">
              {targetAudience}
            </p>
          )}

          {/* Call to Action Button */}
          <div className="flex justify-center mb-6">
            <button className="bg-[#4B0082] hover:bg-[#5a0099] text-white font-semibold px-8 py-4 rounded-xl text-base md:text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              {buttonText}
            </button>
          </div>

          {/* Disclaimer Text */}
          {disclaimerText && (
            <p className="text-gray-500 text-xs md:text-sm text-center">
              {disclaimerText}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}



