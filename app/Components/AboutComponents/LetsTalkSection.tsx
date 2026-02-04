export default function LetsTalkSection() {
  return (
    <section className="relative w-full bg-white py-20 md:py-32">
      <div className="mx-[7.5vw]">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 md:mb-8">
            Let's Talk About What You're{" "}
            <span className="text-[#4B0082]">Building</span>.
          </h2>

          {/* Description */}
          <p className="text-base sm:text-xl md:text-2xl text-gray-700 font-[00] mb-10 md:mb-12 leading-relaxed max-w-2xl">
            Book a 30-minute strategy call. <span className="text-[#4B0082]"> No pitch, no pressure—just a
            conversation about what you're trying to solve.</span>
          </p>

          {/* CTA Button */}
          <button
            className="rounded-xl px-8 py-4 md:px-10 md:py-5 text-base md:text-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            style={{
              background: "linear-gradient(to right, #3b155f, #4a1a6f)",
            }}
          >
            Get Your Free Audit
          </button>
        </div>
      </div>

      
  <h4 className="relative group px-5 py-2.5 border border-black/24 rounded-full font-medium text-black/75 overflow-hidden flex justify-center items-center w-[100px] text-[18px]">
    <span className="absolute left-0 bottom-[-100%] w-full h-full bg-black rounded-full transition-all duration-400 ease-in-out group-hover:bottom-0 group-hover:rounded-none"></span>
    <a href="#" className="relative z-10 text-black/75 transition-colors duration-400 ease-in-out group-hover:text-white">Work</a>
  </h4>

  

    </section>
  );
}

