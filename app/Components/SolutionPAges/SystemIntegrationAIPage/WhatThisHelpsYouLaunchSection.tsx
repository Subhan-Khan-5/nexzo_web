interface WhatThisHelpsYouLaunchSectionProps {
  color?: string;
  heading?: string;
  introParagraph?: string;
  bulletPoints?: string[];
  boxes?: Array<{ title: string; description: string }>;
}

export default function WhatThisHelpsYouLaunchSection({
  color = "#749182",
  heading = "What this helps you launch",
  introParagraph = "If you're building a digital product, the challenge isn't development. It's reaching production without unstable code, missed timelines, or endless rework.",
  bulletPoints = [
    "A product that works beyond version one.",
    "Architecture that won't collapse under real users.",
    "A team that stays involved after launch."
  ],
  boxes = [
    {
      title: "A reliable web product",
      description: "For SaaS platforms, internal tools, or customer-facing systems that must stay fast, secure, and maintainable."
    },
    {
      title: "A mobile app users can trust",
      description: "Built for performance and stability, whether it's an MVP or a production-grade app."
    },
    {
      title: "A backend that doesn't fight you later",
      description: "Clean APIs and scalable systems designed for growth and integrations."
    }
  ]
}: WhatThisHelpsYouLaunchSectionProps = {}) {
  return (
    <section className="relative w-full bg-white py-12 md:py-16 lg:py-20">
      <div className="mx-4 sm:mx-6 md:mx-[7.5vw] overflow-hidden">
        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 md:mb-8">
          {heading}
        </h2>

        {/* Introductory Paragraph */}
        <p className="text-base md:text-lg lg:text-xl text-black mb-8 md:mb-10 lg:mb-12 leading-relaxed max-w-4xl">
          {introParagraph || "If you're building a mobile app, the challenge isn't coding. It's shipping something you can confidently update, scale, and support."}
        </p>

        {/* Bullet Points */}
        <div className="mb-12 md:mb-16 lg:mb-20 space-y-4 md:space-y-5">
          {bulletPoints.map((point, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="flex-shrink-0 w-6 h-6 md:w-7 md:h-7 rounded-full bg-black flex items-center justify-center mt-1">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-base md:text-lg lg:text-xl text-black font-medium">
                {point}
              </p>
            </div>
          ))}
        </div>
<div className="relative">
<div className="absolute -top-[10%]  -left-[100%] w-[130%] h-[130%] z-20 blur-[50px]">
  <div
    className="w-[200%] h-[100%] bg-white"
    style={{
      clipPath:
        "polygon(70% 0%, 30% 50%, 70% 100%, 85% 85%, 55% 50%, 85% 15%)",
    }}
  ></div>
</div>


        {/* Three Product Boxes */}
        <div className="flex-col justify-center items-center mb-12 md:mb-16 lg:mb-20">
          {boxes.map((box, index) => (
            <div 
            key={index}
            className={`rounded-2xl p-6 md:p-8 border border-gray-200 ${index > 0 ? 'my-6' : ''}`}
            style={{ background: `${color}` }}
            >
              <h3 className="relative z-30 text-2xl md:text-3xl  font-bold text-black mb-4">
                {box.title}
              </h3>
              <p className="relative z-30 text-base md:text-lg text-black leading-relaxed">
                {box.description}
              </p>
            </div>
          ))}
          </div>
        </div>

        {/* Concluding Statement */}
        <p className="text-lg md:text-lg xl:text-2xl text-black leading-relaxed max-w-4xl">
          We don't start with tools. We start with understanding what you're launching and what failure looks like.
        </p>
      </div>
    </section>
  );
}

