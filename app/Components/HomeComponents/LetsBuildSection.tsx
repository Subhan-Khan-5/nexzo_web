interface LetsBuildSectionProps {
  headline?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  variant?: "default" | "clarity";
  bgColor?: string;
  buttonColor?: string;
  textColor?: string;
  buttonTextColor?: string;
}

export default function LetsBuildSection({
  headline = "Let's Build Something That Works.",
  description = "Book a 30-minute strategy call. No pitch, no pressure— just a conversation about what you're trying to solve.",
  buttonText = "Get Your Free Audit",
  buttonLink = "#",
  variant = "default",
  bgColor,
  buttonColor,
  textColor,
  buttonTextColor,
}: LetsBuildSectionProps) {
  const isClarityVariant = variant === "clarity";

  // Default colors based on variant if not provided
  const defaultBgColor = isClarityVariant 
    ? "bg-white" 
    : "bg-gradient-to-r from-[#3b155f] mb-[20vh] to-[#4a1f6f]";
  
  const defaultTextColor = isClarityVariant ? "text-black" : "text-white";
  const defaultDescriptionColor = isClarityVariant ? "text-black" : "text-gray-300";
  const defaultButtonColor = isClarityVariant ? "#214E34" : "#ffffff";
  const defaultButtonTextColor = isClarityVariant ? "#ffffff" : "#3b155f";

  // Use provided colors or fall back to defaults
  const sectionBgColor = bgColor 
    ? { backgroundColor: bgColor } 
    : {};
  const sectionBgClass = bgColor 
    ? "" 
    : defaultBgColor;
  
  const headingColor = textColor || defaultTextColor;
  const descriptionColor = textColor || defaultDescriptionColor;
  const btnColor = buttonColor || defaultButtonColor;
  const btnTextColor = buttonTextColor || defaultButtonTextColor;

  return (
    <section 
      className={`relative overflow-hidden w-full ${sectionBgClass} ${isClarityVariant ? "py-12 md:py-16 lg:py-20" : "py-20 md:py-32"}`}
      style={sectionBgColor}
    >

     
      <div className={`${isClarityVariant ? "mx-4 sm:mx-6 md:mx-[7.5vw]" : "mx-[7.5vw]"} `}>
      <div className={`absolute  h-[40vh] bg-white rounded-full  ${variant == "default"? "w-[80%] blur-[130px] opacity-60 " :"w-[50%]"} top-[-20%] blur-2xl  w-[50%]  left-[-20%] z-[1] `}></div>
      <div className={`absolute  h-[40vh] bg-white rounded-full  bottom-[-50%] blur-[110px]  w-[50%]  right-[-20%] z-[1] `}></div>

        <div className={`relative z-[2] text-left ${isClarityVariant ? "max-w-4xl" : "max-w-4xl"}`}>
          {/* Main Heading */}
          <h2 className={`${isClarityVariant ? "text-2xl font-bold" : "text-4xl sm:text-5xl md:text-5xl font-bold"} ${headingColor} mb-6 md:mb-8`}>
            {headline}
          </h2>

          {/* Description */}
          <p className={`min-w-[350px] max-w-[600px] text-2xl ${descriptionColor} mb-10 md:mb-12 leading-relaxed`}>
            {description}
          </p>

          {/* CTA Button */}
          <div className="flex justify-start">
            {isClarityVariant ? (
              <a
                href={buttonLink}
                className="rounded-lg px-8 py-4 md:px-10 md:py-5 font-bold text-base md:text-lg transition-all duration-300 shadow-lg hover:opacity-90"
                style={{ 
                  backgroundColor: btnColor,
                  color: btnTextColor
                }}
              >
                {buttonText}
              </a>
            ) : (
              <button 
                className="rounded-lg px-8 py-4 md:px-10 md:py-5 font-bold text-base md:text-lg transition-all duration-300 shadow-lg hover:opacity-90"
                style={{ 
                  backgroundColor: btnColor,
                  color: btnTextColor
                }}
              >
                {buttonText}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

