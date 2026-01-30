import Image from "next/image";

export default function HowWeWorkSection() {
  const steps = [
    {
      image: "/images/buld.png",
      title: "Discovery & Alignment",
      description: "We don't start building until we understand your operations, your goals, and what success actually looks like for you.",
    },
    {
      image: "/images/Strategy.png",
      title: "Strategic Design",
      description: "Every system, every feature—mapped to real business outcomes. No fluff, no over-engineering.",
    },
    {
      image: "/images/Interactive.png",
      title: "Iterative Development",
      description: "You see progress weekly, not months later. We build in phases so you can test, refine, and stay in control.",
    },
    {
      image: "/images/Sale.png",
      title: "Launch & Scale",
      description: "We don't disappear after deployment. Your system evolves as your business grows—we make sure it keeps working.",
    },
  ];

  return (
    <section className="relative w-full bg-white py-20 md:py-32">
      <div className="mx-[7.5vw]">
        {/* Header */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#3b155f] mb-12 md:mb-16">
          How We Work
        </h2>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center justify-center">
              {/* Image Circle */}
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#3b155f] flex items-center justify-center mb-6 shrink-0 overflow-hidden">
                <div className="relative w-12 h-12 md:w-16 md:h-16">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-contain p-2"
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl text-center  md:text-2xl font-bold text-black mb-4">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-base  text-center md:text-lg text-gray-700 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

