export default function LetsBuildSection() {
  return (
    <section className="relative w-full bg-gradient-to-r from-[#3b155f] mb-[20vh] to-[#4a1f6f] py-20 md:py-32">
      <div className="mx-[7.5vw]">
        <div className="text-left max-w-4xl">
          {/* Main Heading */}
          <h2 className="text-4xl sm:text-5xl md:text-5xl font-bold text-white mb-6 md:mb-8">
            Let's Build Something That Works.
          </h2>

          {/* Description */}
          <p className="min-w-[350px] max-w-[600px] text-base md:text-xl text-gray-300 mb-10 md:mb-12 leading-relaxed">
            Book a 30-minute strategy call. No pitch, no pressure— just a conversation about what you're trying to solve.
          </p>

          {/* CTA Button */}
          <div className="flex justify-start">
            <button className="rounded-lg bg-white px-8 py-4 md:px-10 md:py-5 text-[#3b155f] font-bold text-base md:text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg">
              Get Your Free Audit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

