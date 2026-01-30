interface NotForEveryoneSectionProps {
  title: string;
  highlightedWord?: string;
  items: string[];
  variant?: "default" | "product-builds";
  conclusion?: {
    text: string;
    boldWords?: string[];
  };
}

export default function NotForEveryoneSection({
  title,
  highlightedWord,
  items,
  variant = "default",
  conclusion,
}: NotForEveryoneSectionProps) {
  // Split title to highlight a specific word if provided
  const titleParts = highlightedWord ? title.split(highlightedWord) : [title];
  const isProductBuildsVariant = variant === "product-builds";

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
    <section className={`relative mt-[10vh] px-2 min-w-[380px] w-full mx-auto ${isProductBuildsVariant ? "md:px-0 md:px0" : " bg-white"}`}>
      <div className={`relative  z-10 min-w-[350px] mx-auto py-12 md:py-16 flex flex-col justify-center ${isProductBuildsVariant ? "pl-2 sm:pl-10 w-full bg-gradient-to-r from-green-800/20 via-green-100/30 to-green-50/40 rounded-lg items-start" : "items-center"}`}>
        {/* Title */}
        <div className="mb-6 md:mb-8 ">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-[500] text-gray-900">
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
        <div className={`space-y-4 md:space-y-6 max-w-3xl  ${isProductBuildsVariant && conclusion ? "mb-8" : ""}`}>
          {items.map((item, index) => (
            <div key={index} className="flex mb-1 items-center">
              {isProductBuildsVariant ? (
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
              <p className="text-gray-800 text-base md:text-lg lg:text-xl flex-1">
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



