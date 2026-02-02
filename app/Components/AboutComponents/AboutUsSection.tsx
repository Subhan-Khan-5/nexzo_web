'use client'

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface AboutUsSectionProps {
  paragraphs?: string[];
}

export default function AboutUsSection({
  paragraphs = [
    "We’ve seen businesses lose time, money, and momentum to tools that don’t connect, systems that can’t scale, and marketing that looks busy but doesn’t drive revenue.",
    "Nexzo was built to fix that.",
    "We engineer first.",
    "We build systems that survive real usage.",
    "We measure what actually moves the business."
  ],
}: AboutUsSectionProps) {


 

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  
    const runAnimation = () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '#about-us-section',
          start: 'top top',
          end: '+=200%',
          pin: true,
          scrub: true,
        },
      });
  
      tl.from('#words span', { opacity: 0.1, stagger: 0.08 })
        .from('#words1 span', { opacity: 0.1, stagger: 0.08 })
        .from('#words2 span', { opacity: 0.1, stagger: 0.08 })
        .from('#words3 span', { opacity: 0.1, stagger: 0.08 })
        .from('#words4 span', { opacity: 0.1, stagger: 0.08 });
    };
  
    // Delay to ensure DOM is mounted fully
    requestAnimationFrame(runAnimation);
  }, []);
  

  const paragraphsArray = paragraphs[0].split(" ");
  const paragraphsArray1= paragraphs[1].split(" ");
  const paragraphsArray2 = paragraphs[2].split(" ");
  const paragraphsArray3 = paragraphs[3].split(" ");
  const paragraphsArray4 = paragraphs[4].split(" ");
  return (
      <div id='about-us-section' className='w-full h-full'>
    <section id='about-us-section-content' className="relative w-full min-h-screen overflow-hidden bg-[#2A004A] flex flex-col items-center gap-16 justify-center">



    <h1 className='text-white/90 text-4xl sm:text-6xl font-bold'>
      About Us
    </h1>

      {/* Top radial glow */}
      <div className="absolute  -top-[35%] left-1/2 -translate-x-1/2 w-[1200px] h-[600px] rounded-full bg-purple-300/30 blur-[160px]" />

      {/* Noise overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
        />

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6 text-center space-y-8">
      <p
  id="words"
  className="text-white/90 text-xl sm:text-2xl flex flex-wrap justify-center items-center leading-relaxed"
>
  {paragraphsArray.map((word, index) => (
    <span key={index} className="mr-2 inline-block">
      {word} 
    </span>
  ))}
</p>


<p
  id="words1"
  className="text-white/90 text-xl sm:text-2xl flex flex-wrap justify-center items-center  leading-relaxed"
>
  {paragraphsArray1.map((word, index) => (
    <span key={index} className="mr-2 inline-block">
    {word}
  </span>
  
  ))}
</p>
<p
  id="words2"
  className="text-white/90 text-xl mb-0 sm:text-2xl flex flex-wrap justify-center items-center leading-relaxed"
>
  {paragraphsArray2.map((word, index) => (
    <span key={index} className="mr-2 inline-block">
    {word}
  </span>
  
  ))}
</p>
<p
  id="words3"
  className="text-white/90 text-xl sm:text-2xl flex flex-wrap justify-center items-center mb-0  leading-relaxed"
>
  {paragraphsArray3.map((word, index) => (
    <span key={index} className="mr-2 inline-block">
    {word}
  </span>
  
  ))}
</p>
<p
  id="words4"
  className="text-white/90 text-xl sm:text-2xl  flex flex-wrap justify-center items-center leading-relaxed"
>
  {paragraphsArray4.map((word, index) => (
    <span key={index} className="mr-2 inline-block">
    {word}
  </span>
  
  ))}
</p>


        {/* Accent divider */}
        <div className="mx-auto w-10 h-[2px] bg-purple-300 rounded-full" />
      </div>

      {/* Bottom arc */}
      <div className="absolute bottom-0 left-0 w-full h-[30vh] overflow-hidden">
        <svg viewBox="0 0 1200 400" className="w-full h-full" preserveAspectRatio="none">
          <path
            d="M 0 400 Q 300 200 600 260 Q 900 320 1200 220 L 1200 400 L 0 400 Z"
            fill="rgba(192,132,252,0.15)"
            />
        </svg>
      </div>
    </section>
            </div>
  );
}
