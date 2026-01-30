"use client";

import { useRef, useState } from "react";
import TestimonialsCarousel from "./TestimonialsCarousel";

interface Testimonial {
  name: string;
  title: string;
  quote: string;
  profileImage: string;
  linkedinUrl?: string;
  projectUrl?: string;
  hasVideo?: boolean;
}

interface TestimonialsSectionProps {
  title?: string;
  description?: string;
  testimonials: Testimonial[];
}

export default function TestimonialsSection({
  title = "Testimonials",
  description = "Trusted by clients across diverse industries for delivering reliable, scalable Zoho CRM solutions that streamline operations, automate workflows, and drive measurable business growth.",
  testimonials,
}: TestimonialsSectionProps) {
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
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

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

  const scrollCarousel = (direction: "left" | "right") => {
    if (!carouselRef.current) return;
    const firstCard = carouselRef.current.querySelector('.testimonial-card') as HTMLElement;
    if (firstCard) {
      const cardWidth = firstCard.offsetWidth;
      const gap = 24; // gap-6 = 1.5rem = 24px
      const scrollAmount = cardWidth + gap;
      carouselRef.current.scrollBy({ 
        left: direction === "left" ? -scrollAmount : scrollAmount, 
        behavior: 'smooth' 
      });
    }
  };

  return (
    <TestimonialsCarousel
      title={title}
      description={description}
      testimonials={testimonials}
      carouselRef={carouselRef}
      isDragging={isDragging}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onScrollLeft={() => scrollCarousel("left")}
      onScrollRight={() => scrollCarousel("right")}
    />
  );
}

