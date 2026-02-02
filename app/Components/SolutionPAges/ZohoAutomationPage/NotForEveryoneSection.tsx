interface NotForEveryoneSectionProps {
  title: string;
  highlightedWord?: string;
  items: string[];
  variant?: "default" | "product-builds" | "not-for-everyone";
  conclusion?: {
    text: string;
    boldWords?: string[];
  };
  color?: string;
  porp2?: boolean;
}

export default function NotForEveryoneSection({
  title,
  highlightedWord,
  items,
  variant = "default",
  conclusion,
  color,
  porp2 = false,
}: NotForEveryoneSectionProps) {
  // Split title to highlight a specific word if provided
  const titleParts = highlightedWord ? title.split(highlightedWord) : [title];
  const isProductBuildsVariant = variant === "product-builds";
  const isNotForEveryoneVariant = variant === "not-for-everyone";
  
  // Default colors
  const defaultProductBuildsColor = "#214E34"; // green
  const defaultNotForEveryoneColor = "#214E34"; // green
  const sectionColor = color || (isProductBuildsVariant ? defaultProductBuildsColor : defaultNotForEveryoneColor);
  

  // Helper function to render conclusion text with bold words
  const renderConclusion = (text: string, boldWords?: string[]) => {
    if (!boldWords || boldWords.length === 0) {
      return text;
    }

    // Split text by words and check if each word (without punctuation) should be bold
    const words = text.split(/(\s+)/);
    return words.map((word, index) => {
      const trimmedWord = word.trim().toLowerCase();
      const shouldBold = boldWords.some(boldWord => 
        trimmedWord === boldWord.toLowerCase() || 
        trimmedWord.includes(boldWord.toLowerCase())
      );
      
      if (shouldBold && trimmedWord) {
        return <strong key={index} className="font-bold">{word}</strong>;
      }
      return <span key={index}>{word}</span>;
    });
  };

  return (
    <section className={`relative bg-white  ${isNotForEveryoneVariant ? "py-12 md:py-16 lg:py-20" : isProductBuildsVariant ? "mt-[10vh] min-w-[380px] w-full mx-auto md:px-0 md:px0" : "mt-[10vh] px-2 min-w-[380px] w-full bg-white"}`}>
      <div 
        className={`relative  z-10 overflow-hidden ${isNotForEveryoneVariant ? "w-full py-8 md:py-12 " : "shadow-2xl  shadow-black/50 min-w-[350px] mx-auto py-12 md:py-16"} flex flex-col justify-center ${isProductBuildsVariant ? "pl-2 sm:pl-10 w-full  items-start" : isNotForEveryoneVariant ? "items-start px-6 md:px-8 lg:px-12 rounded-2xl" : "rounded-2xl items-center"}`}
        style={
          ((isProductBuildsVariant || isNotForEveryoneVariant) && !porp2) && sectionColor
          ? { backgroundColor: sectionColor }
          : porp2 ? { backgroundColor: "transparent" } : undefined
        }
      >
        <div className={`absolute  z-[-1] ${color === "#749182" ? "-top-1/2 -right-[30%] " : " -top-[40%] -left-[15%] " } w-[65vw] h-[62vh] bg-white blur-2xl rounded-full z-0`}></div>
        <div className={`absolute  ${color === "#749182" ? "bottom-[10%] -left-[35%] " :  " bottom-[10%] -right-[35%]"}  z-[-1] w-[45vw] h-[42vh] bg-white blur-[125px] rounded-full z-0`}></div>
        
        {/* Title */}
        <div className={`mb-6 md:mb-8 ${isNotForEveryoneVariant ? "mb-8 md:mb-10" : ""}`}>
          <h2 className={`${isNotForEveryoneVariant ? "text-3xl md:text-4xl lg:text-5xl font-bold" : "text-2xl md:text-3xl lg:text-4xl font-[500]"} text-gray-900`}>
            {highlightedWord ? (
              <>
                {titleParts[0]}
                <span className="text-[#4B0082]">{highlightedWord}</span>
                {titleParts[1]}
              </>
            ) : (
              title
            )}
          </h2>
        </div>

        {/* Bullet Points */}
        <div className={`space-y-4 md:space-y-6 ${isNotForEveryoneVariant ? "max-w-4xl" : "max-w-3xl"} ${isProductBuildsVariant && conclusion ? "mb-8" : ""}`}>
          {items.map((item, index) => (
            <div key={index} className="flex mb-1 items-start">
              {isNotForEveryoneVariant ? (
                <div 
                  className="flex-shrink-0 w-6 h-6 md:w-7 md:h-7 rounded-full flex items-center justify-center mt-1 mr-4"
                  style={{ backgroundColor: sectionColor }}
                >
                  <svg 
                    className="w-3 h-3 md:w-4 md:h-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    style={{ color: 'rgba(255, 255, 255, 0.9)' }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              ) : isProductBuildsVariant ? (
                <span className="text-[#4B0082] mr-4 text-xl md:text-2xl mt-1 shrink-0">
                  <div className="w-6 h-6 md:w-7 md:h-7 rounded-full border-2 border-black  flex items-center justify-center">
                    <span className="text-black text-sm md:text-base font-bold">!</span>
                  </div>
                </span>
              ) : (
                <span className="text-[#4B0082] mr-4 text-xl md:text-2xl mt-1">
                  <img src="/images/Vector.svg" alt="Right Arrow" className="w-6 h-6" />
                </span>
              )}
              <p className={`${isNotForEveryoneVariant ? "text-black" : "text-gray-800"} text-base md:text-lg lg:text-xl flex-1`}>
                {item}
              </p>
            </div>
          ))}
        </div>

        {/* Concluding Statement - only for product-builds variant */}
        {isProductBuildsVariant && conclusion && (
          <div className="mt-4 font-bold text-center max-w-3xl ">
            <p className="text-gray-800 text-base md:text-lg lg:text-xl">
              {renderConclusion(conclusion.text, conclusion.boldWords)}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}



