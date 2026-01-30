import Image from "next/image";
import Link from "next/link";

interface Testimonial {
  name: string;
  title: string;
  quote: string;
  profileImage: string;
  linkedinUrl?: string;
  projectUrl?: string;
  hasVideo?: boolean;
}

interface TestimonialsCarouselProps {
  title: string;
  description: string;
  testimonials: Testimonial[];
  carouselRef: React.RefObject<HTMLDivElement | null>;
  isDragging: boolean;
  onMouseDown: (e: React.MouseEvent) => void;
  onMouseMove: (e: React.MouseEvent) => void;
  onMouseUp: () => void;
  onMouseLeave: () => void;
  onTouchStart: (e: React.TouchEvent) => void;
  onTouchMove: (e: React.TouchEvent) => void;
  onTouchEnd: () => void;
  onScrollLeft: () => void;
  onScrollRight: () => void;
}

export default function TestimonialsCarousel({
  title,
  description,
  testimonials,
  carouselRef,
  isDragging,
  onMouseDown,
  onMouseMove,
  onMouseUp,
  onMouseLeave,
  onTouchStart,
  onTouchMove,
  onTouchEnd,
  onScrollLeft,
  onScrollRight,
}: TestimonialsCarouselProps) {
  return (
    <section className="relative w-full border-b-2 border-black  bg-[radial-gradient(circle_at_center,white,#A8BEC6)] py-20 md:py-32">
      {/* Grid pattern background */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle, #d1d5db 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      ></div>

      <div className="relative  z-10 mx-[7.5vw]">
        {/* Header Section */}
        <div className="mb-8 md:mb-12 text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        {/* Carousel with Navigation */}
        <div className="relative">
          {/* Navigation Arrows */}
          <div className="flex justify-end gap-2 mb-6">
            <button
              onClick={onScrollLeft}
              className="w-10 h-10 rounded-full border-2 border-black bg-transparent flex items-center justify-center hover:scale-[1.2] transition shadow-sm"
              aria-label="Previous"
            >
              <svg
                className="w-5 h-5 text-black"
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
              onClick={onScrollRight}
              className="w-10 h-10 rounded-full border-2 border-black bg-transparent flex items-center justify-center hover:scale-[1.2] transition shadow-sm"
              aria-label="Next"
            >
              <svg
                className="w-5 h-5 text-black"
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

          {/* Testimonial Cards Carousel */}
          <div 
            ref={carouselRef}
            className={`flex overflow-x-auto scrollbar-hide gap-6 md:gap-8 snap-x snap-mandatory scroll-smooth select-none ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseLeave}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="testimonial-card 
                

                
  bg-gradient-to-b
  from-[#F8F7F8]/60
  via-[#F8F7F8]/45
  to-[#F8F7F8]/65
  backdrop-blur-2xl
  shadow-[0_20px_60px_-15px_rgba(0,0,0,0.18)]
  rounded-xl border border-gray-200 p-6 md:p-8 hover:shadow-lg transition-shadow duration-300 shrink-0 w-full md:w-[500px] lg:w-[550px] snap-start"
                draggable={false}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Left Side - Image */}
                  <div className="relative w-full md:w-48 h-48 rounded-lg overflow-hidden shrink-0 border border-gray-200">
                  <div className="relative w-full h-full bg-[radial-gradient(circle_at_center,#73b6d1,white)] text-[#] flex items-center justify-center">
                  <div className="relative w-[90%] h-[90%] rounded-lg overflow-hidden ">
                   <Image
                      src={testimonial.profileImage}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                      draggable={false}
                    />
                   </div>
                  </div>
                    {/* Play Button Overlay */}
                    {testimonial.hasVideo && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                        <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                          <svg
                            className="w-8 h-8 text-gray-900 ml-1"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right Side - Text Content */}
                  <div className="flex-1 flex flex-col">
                    {/* Name and Icons */}
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-bold text-xl md:text-2xl text-black">
                        {testimonial.name}
                      </h3>
                      <div className="flex gap-2 items-center">
                        {/* LinkedIn Icon */}
                        {testimonial.linkedinUrl && (
                          <Link
                            href={testimonial.linkedinUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-5 h-5 bg-black rounded flex items-center justify-center hover:bg-gray-800 transition"
                          >
                            <span className="text-white text-xs font-bold">in</span>
                          </Link>
                        )}
                        {/* External Link Icon */}
                        {testimonial.projectUrl && (
                          <Link
                            href={testimonial.projectUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-5 h-5 text-gray-600 hover:text-gray-900 transition"
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
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                          </Link>
                        )}
                      </div>
                    </div>

                    {/* Title */}
                    <p className="text-sm md:text-base text-gray-600 mb-4">
                      {testimonial.title}
                    </p>

                    {/* Quote */}
                    <p className="text-gray-700 italic leading-relaxed mb-6 flex-1">
                      "{testimonial.quote}"
                    </p>

                    {/* View Project Link */}
                    {testimonial.projectUrl && (
                      <div className="mt-auto">
                        <Link
                          href={testimonial.projectUrl}
                          className="inline-flex items-center gap-2 text-black font-medium hover:text-[#4B0082] transition group"
                        >
                          <span>View Project</span>
                          <div className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center group-hover:border-[#4B0082] group-hover:bg-[#4B0082] transition">
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
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

