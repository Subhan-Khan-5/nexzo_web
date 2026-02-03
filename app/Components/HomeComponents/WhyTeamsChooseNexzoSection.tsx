"use client";

import { useState } from "react";

interface BenefitItem {
  title: string;
  description?: string;
}

type Benefit = string | BenefitItem;

interface WhyTeamsChooseNexzoSectionProps {
  title?: string;
  benefits?: Benefit[];
  backgroundColor?: string;
  BottomLine?: string;
}

export default function WhyTeamsChooseNexzoSection({
  title = "Why Teams Choose Nexzo",
  benefits = [
    "We've been doing this for a while now",
    "Fixed-scope projects or dedicated teams—your call",
    "No offshoring surprises",
    "Post-launch support that actually responds",
    "Transparent pricing, no scope creep",
  ],
  backgroundColor = "#3b155f",
  BottomLine
}: WhyTeamsChooseNexzoSectionProps) {
  const [expandedIndices, setExpandedIndices] = useState<Set<number>>(new Set());

  // Helper function to normalize benefits
  const normalizeBenefit = (benefit: Benefit): { title: string; description?: string } => {
    if (typeof benefit === "string") {
      return { title: benefit };
    }
    return benefit;
  };

  const toggleExpand = (index: number) => {
    setExpandedIndices(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  // Create gradient from darker to lighter version of the color
  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  };

  const createGradient = (color: string) => {
    const rgb = hexToRgb(color);
    if (!rgb) return color;
    
    // Create lighter version (add 30% white)
    const lighterR = Math.min(255, Math.round(rgb.r + (255 - rgb.r) * 0.3));
    const lighterG = Math.min(255, Math.round(rgb.g + (255 - rgb.g) * 0.3));
    const lighterB = Math.min(255, Math.round(rgb.b + (255 - rgb.b) * 0.3));
    
    return `linear-gradient(to right, ${color}, rgb(${lighterR}, ${lighterG}, ${lighterB}))`;
  };

  const textColor = "text-white";
  const borderColor = "border-gray-300";

  return (
    <section className="relative w-full bg-white py-20 md:py-32">

{/* <div className={`absolute   -top-[15%]    left-[7%] opacity-80 w-[75vw] h-[62vh] bg-white blur-2xl rounded-full z-0`}></div>*/}
        <div className={`absolute bottom-[0%] -left-[0%]    w-[45vw] h-[42vh] bg-white blur-[125px] opacity-30 rounded-full z-0`}></div> 
        
      <div className=" mx-[7.5vw]">
        {/* Container with gradient background */}
        <div 
          className="rounded-3xl p-8 md:p-12 lg:p-16"
          style={{ 
            background: backgroundColor.includes("gradient") 
              ? backgroundColor 
              : createGradient(backgroundColor)
          }}
        >
          {/* Header */}
          <h2 className={`relative z-10 text-3xl md:text-4xl lg:text-5xl font-bold mb-12 md:mb-16 ${textColor}`}>
            {title}
          </h2>

          {/* Benefits List */}
          <div className="space-y-0">
            {benefits.map((benefit, index) => {
              const normalized = normalizeBenefit(benefit);
              const isExpanded = expandedIndices.has(index);
              const isLast = index === benefits.length - 1;
              const hasDescription = !!normalized.description;
              
              return (
                <div 
                  key={index}
                  className="relative"
                >
                  <div className="flex items-start gap-4 py-6">
                    {/* Checkmark Icon */}
                    <div className={`w-6 h-6 rounded border-2 ${borderColor} flex items-center justify-center shrink-0 mt-1 bg-white`}>
                      <svg
                        className="w-4 h-4 text-gray-800"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>

                    {/* Benefit Text */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <p className={`text-xl md:text-2xl ${textColor} leading-relaxed flex-1`}>
                          {normalized.title}
                        </p>
                        {/* Plus/Cancel Icon */}
                        {hasDescription && (
                          <button
                            onClick={() => toggleExpand(index)}
                            className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center shrink-0 hover:bg-gray-100 transition-colors duration-200"
                            aria-label={isExpanded ? "Collapse" : "Expand"}
                          >
                            {isExpanded ? (
                              <svg
                                className="w-5 h-5 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2.5}
                                  d="M6 18L18 6M6 6l12 12"
                                />
                              </svg>
                            ) : (
                              <svg
                                className="w-5 h-5 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2.5}
                                  d="M12 4v16m8-8H4"
                                />
                              </svg>
                            )}
                          </button>
                        )}
                      </div>
                      {/* Description on click */}
                      {normalized.description && (
                        <div 
                          className={`relative z-10 overflow-hidden transition-all duration-300 ease-in-out ${
                            isExpanded ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0"
                          }`}
                        >
                          <p className={`relative z-10 text-base md:text-lg ${textColor} opacity-80 leading-relaxed`}>
                            {normalized.description}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                  {/* Bottom border for all except the last one */}
                  {!isLast && (
                    <div className="h-px bg-gray-300 opacity-30"></div>
                  )}
                </div>
              );
            })}
          </div>

          {BottomLine && (
            <p className={`relative z-10 text-xl md:text-2xl mt-10 lg:text-xl ${textColor} leading-relaxed`}>
              {BottomLine}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

