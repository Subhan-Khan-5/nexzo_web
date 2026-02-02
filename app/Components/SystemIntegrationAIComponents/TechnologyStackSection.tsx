export default function TechnologyStackSection() {
  const technologies = [
    {
      category: "Integration Platforms",
      items: ["REST APIs", "GraphQL", "Webhooks", "Zapier", "Make.com", "Custom Middleware"]
    },
    {
      category: "AI & Machine Learning",
      items: ["OpenAI GPT", "Custom LLMs", "Predictive Analytics", "Natural Language Processing", "Computer Vision", "Recommendation Engines"]
    },
    {
      category: "Cloud Services",
      items: ["AWS", "Azure", "Google Cloud", "Serverless Functions", "API Gateways", "Message Queues"]
    },
    {
      category: "Data & Analytics",
      items: ["Real-time Data Pipelines", "ETL Processes", "Data Warehouses", "Business Intelligence", "Custom Dashboards"]
    }
  ];

  return (
    <section className="relative w-full py-20 md:py-32 bg-[#24004A]">
      <div className="mx-[7.5vw]">
        <div className="relative rounded-2xl py-10 md:py-20 px-10 md:px-20 bg-[#2A004A] md:p-12 lg:p-16 border-2 border-purple-500/20 overflow-hidden">
          {/* Blurred background shapes */}
          <div className="absolute -top-[30%] -rotate-[45deg] h-[22vh] w-[70vw] left-[-30%] md:h-[60vh] rounded-full blur-3xl opacity-20 bg-white">
            <div className="w-full h-full bg-gradient-to-bl from-white/30 to-transparent rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10">
            {/* Main Heading */}
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                Technologies We Work With
              </h2>
              <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
                We use the right tools for the job—whether that's established platforms or custom solutions
              </p>
            </div>

            {/* Technology Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <h3 className="text-xl md:text-2xl font-bold text-purple-300 mb-4">
                    {tech.category}
                  </h3>
                  <ul className="space-y-2">
                    {tech.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="text-base md:text-lg text-white/90 flex items-start"
                      >
                        <span className="text-purple-400 mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}










