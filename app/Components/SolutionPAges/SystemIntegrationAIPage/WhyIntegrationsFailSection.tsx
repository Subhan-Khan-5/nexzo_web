interface WhyIntegrationsFailSectionProps {
  title: string;
  subtitle?: string;
  introText?: string;
  items: string[];
}

export default function WhyIntegrationsFailSection({
  title,
  subtitle,
  introText,
  items,
}: WhyIntegrationsFailSectionProps) {
  return (
    <section className="relative mt-[10vh] px-2 h-[50vh] sm:h-[50vh] md:h-[60vh] min-w-[380px] sm:w-[580px] md:w-[750px] lg:w-[850px] xl:w-[1000px] 2xl:w-[1200px] mx-auto md:px-6 md:px-[7.5vw] bg-white bg-[url('/images/backgroundgrid.svg')] bg-cover bg-center">
      {/* Grid pattern background */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle, #d1d5db 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      ></div>

      <div className="relative z-10 min-w-[350px] mx-auto">
        {/* Title Box */}
        <div className="mb-6 -mt-4 relative z-20 min-w-[330px] w-[70%] top-[6vh] mx-auto text-center">
          <div className="inline-block bg-white rounded-lg border border-gray-300 px-[15px] py-3 shadow-sm">
            <h2 className={`text-[16px] md:text-3xl font-medium py-4 ${title == "WHAT WE FIX" && "px-12"} text-gray-900 uppercase tracking-tight`}>
              {title}
            </h2>
          </div>
        </div>
        
        {/* Main Content Box */}
        <div className="bg-gradient-to-br to-[#74888f] min-w-[350px] sm:min-w-[450px] md:min-w-[550px] lg:min-w-[650px] xl:min-w-[750px] 2xl:min-w-[850px] from-[#cee6ee] backdrop-blur-sm rounded-2xl px-8 py-10 md:px-12 md:py-14 shadow-lg">
          {/* Subtitle */}
          {subtitle && (
            <h3 className="text-gray-800 text-lg md:text-xl font-bold mb-4">
              {subtitle}
            </h3>
          )}
          
          {/* Introductory Paragraph */}
          {introText && (
            <p className="text-gray-800 text-base md:text-lg leading-relaxed mb-8">
              {introText}
            </p>
          )}

          {/* Bullet Points */}
          <div className="space-y-4">
            {items.map((item, index) => (
              <div key={index} className="flex items-start">
                <span className="text-gray-800 mr-3 text-xl">→</span>
                <p className="text-gray-800 text-base md:text-lg flex-1">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}



