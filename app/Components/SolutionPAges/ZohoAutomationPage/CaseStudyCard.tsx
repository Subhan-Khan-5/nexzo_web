"use client";

import { useState } from "react";

interface CaseStudyCardProps {
  company: string;
  industry: string;
  before: string;
  whatWeDid: string;
  result: string;
  bgColor?: string;
  isGlassy?: boolean;
  hasGradient?: boolean;
}

function truncateText(text: string, wordCount: number = 8): string {
  const words = text.split(" ");
  if (words.length <= wordCount) return text;
  return words.slice(0, wordCount).join(" ") + "...";
}

export default function CaseStudyCard({
  company,
  industry,
  before,
  whatWeDid,
  result,
  bgColor = "bg-white",
  isGlassy = false,
  hasGradient = false,
}: CaseStudyCardProps) {
  const [expandedSections, setExpandedSections] = useState({
    before: false,
    whatWeDid: false,
    result: false,
  });

  const toggleSection = (section: "before" | "whatWeDid" | "result") => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const glassyClasses = isGlassy
    ? "bg-white/30 backdrop-blur-[22px] backdrop-saturate-150 border-2 border-white/40 shadow-[0_30px_80px_rgba(88,28,135,0.25)]"
    : hasGradient
    ? "bg-gradient-to-br to-[#74888f] from-[#cee6ee] backdrop-blur-sm shadow-lg"
    : `${bgColor} border-2  shadow-lg`;

  return (
    <div
      className={`${glassyClasses} rounded-2xl p-6 md:p-8`}
    >
      {/* Company Header */}
      <h3 className="text-xl md:text-2xl font-semibold text-[#4B0082] mb-6">
        {company} ({industry})
      </h3>

      {/* BEFORE Section */}
      <div className="mb-6">
        <h4 className="text-base md:text-lg font-semibold text-[#4B0082] mb-2">
          BEFORE:
        </h4>
        <p className="text-sm md:text-base text-gray-700 leading-relaxed">
          <span className="hidden sm:inline">{before}</span>
          <span className="sm:hidden">
            {expandedSections.before ? before : truncateText(before)}
            {before.split(" ").length > 8 && (
              <button
                onClick={() => toggleSection("before")}
                className="text-gray-700 font-semibold ml-1 hover:underline"
              >
                {expandedSections.before ? " less" : "more"}
              </button>
            )}
          </span>
        </p>
      </div>

      {/* WHAT WE DID Section */}
      <div className="mb-6">
        <h4 className="text-base md:text-lg font-semibold text-[#4B0082] mb-2">
          WHAT WE DID:
        </h4>
        <p className="text-sm md:text-base text-gray-700 leading-relaxed">
          <span className="hidden sm:inline">{whatWeDid}</span>
          <span className="sm:hidden">
            {expandedSections.whatWeDid ? whatWeDid : truncateText(whatWeDid)}
            {whatWeDid.split(" ").length > 8 && (
              <button
                onClick={() => toggleSection("whatWeDid")}
                className="text-gray-700 font-semibold ml-1 hover:underline"
              >
                {expandedSections.whatWeDid ? " less" : "more"}
              </button>
            )}
          </span>
        </p>
      </div>

      {/* RESULT Section */}
      <div>
        <h4 className="text-base md:text-lg font-semibold text-[#4B0082] mb-2">
          RESULT:
        </h4>
        <p className="text-sm md:text-base text-gray-700 leading-relaxed font-medium">
          <span className="hidden sm:inline">{result}</span>
          <span className="sm:hidden">
            {expandedSections.result ? result : truncateText(result)}
            {result.split(" ").length > 8 && (
              <button
                onClick={() => toggleSection("result")}
                className="text-gray-700 font-semibold ml-1 hover:underline"
              >
                {expandedSections.result ? " less" : "more"}
              </button>
            )}
          </span>
        </p>
      </div>
    </div>
  );
}


