export default function FeaturesSection() {
  const features = [
    {
      title: "API Integration & Data Flow",
      description: "Seamlessly connect your CRM, ERP, marketing platforms, and custom systems. Real-time data synchronization without manual intervention.",
      icon: "🔗"
    },
    {
      title: "AI-Powered Automation",
      description: "Intelligent workflows that learn from your processes. Automate repetitive tasks, predict needs, and make decisions based on your business logic.",
      icon: "🤖"
    },
    {
      title: "Custom AI Solutions",
      description: "Build AI models tailored to your industry. From customer service chatbots to predictive analytics, we create AI that understands your business.",
      icon: "🧠"
    },
    {
      title: "Legacy System Modernization",
      description: "Connect old systems with new platforms. We bridge the gap between legacy infrastructure and modern cloud services without disrupting operations.",
      icon: "🔧"
    },
    {
      title: "Real-Time Analytics & Insights",
      description: "Transform data into actionable intelligence. Dashboards that show what's happening now, not what happened last week.",
      icon: "📊"
    },
    {
      title: "Scalable Architecture",
      description: "Build integrations that grow with you. Our solutions handle increased volume, new systems, and changing requirements without breaking.",
      icon: "📈"
    }
  ];

  return (
    <section className="relative w-full bg-white py-20 md:py-32 overflow-hidden">
      {/* Purple Gradient at Top and Bottom */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-purple-900/30 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-purple-900/30 to-transparent pointer-events-none" />

      <div className="relative z-10 mx-[7.5vw]">
        {/* Main Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-4">
            What We Build
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Integration and AI solutions that transform how your business operates
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white flex flex-col rounded-2xl border border-black p-6 md:p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="text-5xl mb-4">{feature.icon}</div>

              {/* Feature Title */}
              <h3 className="text-2xl md:text-3xl font-bold text-[#3b155f] mb-4">
                {feature.title}
              </h3>

              {/* Feature Description */}
              <p className="text-base md:text-lg text-black leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}















