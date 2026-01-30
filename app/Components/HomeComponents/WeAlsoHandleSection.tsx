export default function WeAlsoHandleSection() {
  const services = [
    "Cloud Infrastructure",
    "API Development",
    "Legacy System Modernization",
    "Data Analytics & BI",
    "Mobile App Development",
    "Technical Consulting",
    "Ongoing Maintenance & Support",
  ];

  return (
    <section className="relative w-full bg-white py-20 md:py-32">
      <div className="mx-[7.5vw]">
        {/* Header */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-12 md:mb-16">
          We Also <span className="text-[#3b155f]">Handle</span>
        </h2>

        {/* Services List */}
        <div className="flex flex-wrap gap-4">
  {services.map((service, index) => (
    <div
      key={index}
      className="flex items-center gap-4"
    >
      <p className="text-md md:text-3xl text-black leading-relaxed">
        {service}
      </p>
      <div className="w-3 h-3 rounded-full bg-[#3b155f] shrink-0" />
    </div>
  ))}
</div>

      </div>
    </section>
  );
}

