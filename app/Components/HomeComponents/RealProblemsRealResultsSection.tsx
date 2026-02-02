"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";

interface RealProblemsRealResultsSectionProps {
  title?: string;
  subtitle?: string;
  highlightedWords?: string | string[];
  highlightColor?: string;
}

export default function RealProblemsRealResultsSection({
  title,
  subtitle,
  highlightedWords,
  highlightColor = "#214E34",
}: RealProblemsRealResultsSectionProps = {}) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  // Touch events for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!carouselRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !carouselRef.current) return;
    const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };
  const caseStudies = [
    {
      name: "Chris Fox",
      title: "Sales Executive",
      quote: "Professional, responsive, and delivered exactly what our business needed.",
      result: "67% faster processing, zero data entry errors.",
      tags: ["Healthcare", "Development"],
      profileImage: "/images/pic1.png",
    },
    {
      name: "Kate Lima",
      title: "Marketing Director",
      quote: "Professional, responsive, and delivered exactly what our business needed.",
      result: "Unified system, 40% reduction in stock errors.",
      tags: ["E-commerce", "Integration solutions"],
      profileImage: "/images/pic2.png",
    },
    {
      name: "Adam Fills",
      title: "CEO",
      quote: "Professional, responsive, and delivered exactly what our business needed.",
      result: "3.2x return on ad spend in 90 days",
      tags: ["Professional Services", "Growth Service"],
      profileImage: "/images/pic3.png",
    },
    {
      name: "Sarah Johnson",
      title: "Operations Manager",
      quote: "The automation solutions transformed our workflow completely. Highly recommend!",
      result: "85% reduction in manual tasks, 50% cost savings.",
      tags: ["Automation", "Operations"],
      profileImage: "/images/pic1.png",
    },
    {
      name: "Michael Chen",
      title: "CTO",
      quote: "Outstanding technical expertise and seamless integration with our existing systems.",
      result: "99.9% uptime, 3x faster API response times.",
      tags: ["Cloud Infrastructure", "API Development"],
      profileImage: "/images/pic2.png",
    },
    {
      name: "Emily Rodriguez",
      title: "Product Manager",
      quote: "They understood our vision and delivered beyond expectations. Truly exceptional work.",
      result: "2.5x user engagement, 60% increase in conversions.",
      tags: ["Digital Marketing", "Growth Service"],
      profileImage: "/images/pic3.png",
    },
    {
      name: "David Thompson",
      title: "Finance Director",
      quote: "The system integration was flawless. Our financial processes are now fully automated.",
      result: "90% faster reporting, zero calculation errors.",
      tags: ["System Integration", "Finance"],
      profileImage: "/images/pic1.png",
    },
  ];

  // Function to render text with highlighted words
  const renderTextWithHighlights = (text: string) => {
    if (!highlightedWords || !text) {
      return text;
    }
    
    const wordsToHighlight = Array.isArray(highlightedWords) ? highlightedWords : [highlightedWords];
    const regex = new RegExp(`\\b(${wordsToHighlight.map(w => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})\\b`, 'gi');
    const parts = text.split(regex);
    
    return parts.map((part, index) => {
      const isHighlighted = wordsToHighlight.some(highlightWord => 
        part.toLowerCase() === highlightWord.toLowerCase()
      );
      
      if (isHighlighted) {
        return (
          <span key={index} style={{ color: highlightColor }}>
            {part}
          </span>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  const defaultTitle = "Real Problems. Real Results.";
  const displayTitle = title || defaultTitle;
  
  // Determine if we should use highlighted title or default styling
  const useHighlightedTitle = highlightedWords && (title || subtitle);
  const titleToDisplay = title || subtitle || defaultTitle;

  return (
    <section id="case-studies" className="relative w-full bg-white py-20 md:py-32">
      <div className="mx-[7.5vw]">
        {/* Header with Navigation */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 md:mb-16 gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl text-black font-bold mb-4">
              {useHighlightedTitle ? (
                renderTextWithHighlights(titleToDisplay)
              ) : displayTitle.includes("Real Problems") ? (
                <>
                  Real <span className="text-[#3b155f]">Problems.</span> Real{" "}
                  <span className="text-[#3b155f]">Results.</span>
                </>
              ) : (
                displayTitle
              )}
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/CaseStudies"
              className="text-[#3b155f] font-medium hover:underline flex items-center gap-2"
            >
              All case studies
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
            <div className="flex gap-2">
              <button
                onClick={() => {
                  if (carouselRef.current) {
                    const firstCard = carouselRef.current.querySelector('.carousel-card') as HTMLElement;
                    if (firstCard) {
                      const cardWidth = firstCard.offsetWidth;
                      const gap = 24; // gap-6 = 1.5rem = 24px
                      const scrollAmount = cardWidth + gap;
                      carouselRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
                    }
                  }
                }}
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition"
                aria-label="Previous"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={() => {
                  if (carouselRef.current) {
                    const firstCard = carouselRef.current.querySelector('.carousel-card') as HTMLElement;
                    if (firstCard) {
                      const cardWidth = firstCard.offsetWidth;
                      const gap = 24; // gap-6 = 1.5rem = 24px
                      const scrollAmount = cardWidth + gap;
                      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
                    }
                  }
                }}
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition"
                aria-label="Next"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Case Study Cards Carousel */}
        <div 
          ref={carouselRef}
          className={`flex overflow-x-auto scrollbar-hide gap-6 md:gap-8 snap-x snap-mandatory scroll-smooth select-none ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="carousel-card bg-white rounded-xl border border-gray-200 p-6 md:p-8 hover:shadow-lg transition-shadow duration-300 shrink-0 w-full md:w-[500px] lg:w-[550px] snap-start"
              draggable={false}
            >
              {/* Profile Section */}
              <div className="flex items-start gap-4 mb-6">
                <div className="relative w-20 h-20 rounded-lg overflow-hidden shrink-0">
                  <Image
                    src={study.profileImage}
                    alt={study.name}
                    fill
                    className="object-cover"
                    draggable={false}
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-xl md:text-2xl text-black">{study.name}</h3>
                    <div className="flex gap-2 items-center">
                      {/* LinkedIn Icon */}
                      <div className="w-5 h-5 bg-black rounded flex items-center justify-center">
                        <span className="text-white text-xs font-bold">in</span>
                      </div>
                      {/* External Link Icon */}
                      <svg
                        className="w-5 h-5 text-gray-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </div>
                  </div>
                  <p className="text-sm md:text-base text-gray-600 mb-4">{study.title}</p>
                  {/* Quote */}
                  <p className="text-gray-700 leading-relaxed">
                    "{study.quote}"
                  </p>
                </div>
              </div>

              {/* Horizontal Separator */}
              <div className="border-t border-gray-200 my-6"></div>

              {/* Key Result */}
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-6">
                {study.result}
              </p>

              {/* Tags as Purple Underlined Links */}
              <div className="flex flex-wrap gap-4 mb-6">
                {study.tags.map((tag, tagIndex) => (
                  <Link
                    key={tagIndex}
                    href="/CaseStudies"
                    className="text-[#3b155f] font-medium underline underline-offset-4 hover:text-[#4a1a6f] transition"
                  >
                    {tag}
                  </Link>
                ))}
              </div>

              {/* View Case Study Link - Bottom Right */}
              <div className="flex justify-end mt-8">
                <Link
                  href="/CaseStudies"
                  className="inline-flex items-center gap-2 text-black font-medium hover:text-[#3b155f] transition group"
                >
                  <span>View case study</span>
                  <div className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center group-hover:border-[#3b155f] group-hover:bg-[#3b155f] transition">
                    <svg
                      className="w-3 h-3 text-gray-600 group-hover:text-white transition"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

