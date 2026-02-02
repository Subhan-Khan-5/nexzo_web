export default function WeAlsoHandleSection({services, color, heading, description, highlightedWords}: {services: string[], color: string, heading: string, description?: string, highlightedWords?: string | string[]}) {
  
  // Function to render heading with highlighted words
  const renderHeading = () => {
    if (!highlightedWords) {
      return heading;
    }
    
    const wordsToHighlight = Array.isArray(highlightedWords) ? highlightedWords : [highlightedWords];
    // Split by word boundaries to handle punctuation correctly
    const regex = new RegExp(`\\b(${wordsToHighlight.map(w => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})\\b`, 'gi');
    const parts = heading.split(regex);
    
    return parts.map((part, index) => {
      const isHighlighted = wordsToHighlight.some(highlightWord => 
        part.toLowerCase() === highlightWord.toLowerCase()
      );
      
      if (isHighlighted) {
        return (
          <span key={index} style={{ color: color }}>
            {part}
          </span>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <section className="relative w-full bg-white py-20 md:py-32">
      <div className="mx-[7.5vw]">
        {/* Header */}
        <h2 className="text-4xl sm:text-3xl font-bold text-black mb-6 md:mb-8">
          {renderHeading()}
        </h2>
        {description && (
          <p className="text-base md:text-lg text-black mb-12 md:mb-16">{description}</p>
        )}

        {/* Services List */}
        <div className="flex flex-wrap gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex items-center gap-4"
            >
              <p className="text-md md:text-2xl text-black leading-relaxed">
                {service}
              </p>
              <div 
                className="w-3 h-3 rounded-full shrink-0" 
                style={{ backgroundColor: color }}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

