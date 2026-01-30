interface Principle {
  title: string;
  explanation: string;
}

interface OurPrinciplesSectionProps {
  title?: string;
  principles: Principle[];
  highlightedIndex?: number; // Index of the principle to highlight (0-based)
  color: string;
}

export default function OurPrinciplesSection({
  title ,
  principles,color,
  highlightedIndex = 1, // Default to second principle (index 1)
}: OurPrinciplesSectionProps) {
  return (
    <section className="relative w-full bg-white py-20 md:py-32">
      <div className="mx-[7.5vw]">
        {/* Title */}
        <h2 className={`text-4xl  font-bold ${principles.length === 4 ? "text-2xl" : "sm:text-5xl md:text-6xl"} text-[#4B0082] mb-12 md:mb-16`}>
          {title}
        </h2>

        {/* Principles List */}
        <div className="space-y-8 md:space-y-12">
          {principles.map((principle, index) => {
            const isHighlighted = index === highlightedIndex;
            const number = String(index + 1).padStart(2, "0");

            return (
              <div
                key={index}
                className={`relative  w-full`}
              >
                <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-6 lg:gap-8  items-end">
                  {/* Number */}
                  <div className="flex-shrink-0 -ml-2 md:ml-0">
                    <div
                      className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-[500] leading-none"
                      style={{
                        background: `linear-gradient(to bottom, ${color}, #c1b9c7)`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",

                      }}
                    >
                      {number}
                    </div>
                  </div>

                  {/* Title */}
                  <div className="flex-shrink-0 md:w-64 lg:w-80">
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-[500] text-gray-900">
                      {principle.title}
                    </h3>
                  </div>

                  {/* Vertical Separator */}
                  <div className="hidden md:block w-[1px] bg-gray-300 flex-shrink-0 self-stretch"></div>


                  {/* Explanation */}
                  <div className="flex-1    md:pl-0 pl-0">
                    <p className="text-base  sm:text-lg md:text-2xl text-gray-600 leading-relaxed">
                      {principle.explanation}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

