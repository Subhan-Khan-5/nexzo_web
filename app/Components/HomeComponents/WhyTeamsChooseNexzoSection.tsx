interface WhyTeamsChooseNexzoSectionProps {
  title?: string;
  benefits?: string[];
  backgroundColor?: string;
  BottomLine?: string;
}

export default function WhyTeamsChooseNexzoSection({
  title = "Why Teams Choose Nexzo",
  benefits = [
    "We've been doing this for a while now",
    "Fixed-scope projects or dedicated teams—your call",
    "No offshoring surprises",
    "Post-launch support that actually responds",
    "Transparent pricing, no scope creep",
  ],
  backgroundColor = "#3b155f",
  BottomLine
}: WhyTeamsChooseNexzoSectionProps) {
  return (
    <section className="relative w-full bg-white py-20 md:py-32">
      <div className="mx-[7.5vw]">
        {/* Rounded Rectangle Container */}
        <div 
          className="rounded-3xl p-8 md:p-12 lg:p-16"
          style={{ backgroundColor }}
        >
          {/* Header */}
          <h2 className={` ${backgroundColor === "#214E34" ? "text-2xl text-black" : "text-4xl text-white sm:text-5xl md:text-6xl"} font-bold  mb-12 md:mb-16`}>
            {title}
          </h2>

          {/* Benefits List */}
          <div className="space-y-3">
            {benefits.map((benefit, index) => (
              <div key={index}>
                <div className={`flex items-center gap-4 py-6 border-2 ${backgroundColor === "#214E34" ? "border-black/30" : "border-white/30"} rounded-lg px-4`}>
                  {/* Checkmark Icon */}
                  <div 
                    className= {` ${backgroundColor === "#214E34" ? "text-2xl text-black" : "text-4xl text-white sm:text-5xl md:text-6xl"}w-6 h-6 rounded border-2  flex items-center justify-center shrink-0 mt-1`}
                    style={{ backgroundColor }}
                  >
                    <svg
                      className={` ${backgroundColor === "#214E34" ? "text-2xl text-black" : "text-4xl text-white sm:text-5xl md:text-6xl"}w-4 h-4`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>

                  {/* Benefit Text */}
                  <p className={`text-xl md:text-2xl lg:text-3xl ${backgroundColor === "#214E34" ? "text-black" : "text-white"} leading-relaxed flex-1`}>
                    {benefit}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {BottomLine && <p className="text-xl md:text-2xl mt-10 lg:text-xl text-black leading-relaxed flex-1">{BottomLine}</p>}
        </div>
      </div>
    </section>
  );
}

