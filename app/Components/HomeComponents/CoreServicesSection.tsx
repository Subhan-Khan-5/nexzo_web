import Link from "next/link";

export default function CoreServicesSection() {
  const services = [
    {
      title: "Custom Software Development",
      description: "From concept to deployment, we create software that fits your operations—not the other way around.",
      linkText: "Explore Development",
      href: "/Solutions/zohoautomation",
    },
    {
      title: "System Integration & Automation",
      description: "Your tools should talk to each other. We connect your systems so data flows, tasks automate, and nothing breaks.",
      linkText: "See Integration Solutions",
      href: "/Solutions/systemintegrationai",
    },
    {
      title: "Digital Marketing & Growth",
      description: "We don't chase vanity metrics. Every campaign, every dollar—optimized to grow your bottom line.",
      linkText: "View Growth Services",
      href: "/Services",
    },
  ];

  return (
    <section id="core-services" className="relative w-full bg-white py-20 md:py-32 overflow-hidden">
      {/* Purple Gradient at Top and Bottom */}
      <div className="absolute top-0 left-0 right-0 h-32   pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-purple-900/30 to-transparent pointer-events-none" />

      <div className="relative z-10 mx-[7.5vw]">
        {/* Main Heading */}
        <h2 className="text-4xl sm:text-5xl md:text-5xl font-bold text-black mb-12 md:mb-16">
          Core Services
        </h2>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white flex justify-between items-start flex-col rounded-2xl border  border-black p-6 md:p-8 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Service Title */}
              <h3 className="text-2xl md:text-3xl font-bold text-[#3b155f] mb-4">
                {service.title}
              </h3>

              {/* Service Description */}
              <p className="text-base md:text-lg text-black mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Service Link */}
              <Link
                href={service.href}
                className="inline-flex items-center gap-2 text-[#3b155f] font-medium hover:gap-3 transition-all duration-300 group"
              >
                <span>{service.linkText}</span>
                <span className="text-xl">→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

