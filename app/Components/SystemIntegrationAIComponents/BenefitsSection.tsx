export default function BenefitsSection() {
  return (
    <section className="relative w-full py-20 md:py-32 bg-[#24004A]">
      <div className="mx-[7.5vw]">
        <div 
          className="relative rounded-2xl py-10 md:py-20 px-10 md:px-20 bg-[#2A004A] md:p-12 lg:p-16 border-2 border-purple-500/20 overflow-hidden"
        >
          {/* Blurred background shapes */}
          <div className="absolute -top-[30%] -rotate-[45deg] h-[22vh] w-[70vw] left-[-30%] md:h-[60vh] rounded-full blur-3xl opacity-20 bg-white">
            <div className="w-full h-full bg-gradient-to-bl from-white/30 to-transparent rounded-full blur-3xl"></div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 relative z-10">
            {/* Left Side - Large Text */}
            <div className="flex-shrink-0 lg:w-1/3">
              <div className="text-white">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-2">
                  Why Integration & AI Matter
                </h2>
              </div>
            </div>

            {/* Vertical Separator */}
            <div className="hidden lg:block w-[1px] bg-gray-400/30 flex-shrink-0"></div>

            {/* Right Side - Content */}
            <div className="flex-1 lg:pl-8">
              <div className="space-y-6 text-white">
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-2 text-purple-300">
                    Time Back in Your Day
                  </h3>
                  <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                    Stop copying data between systems. Stop running the same reports manually. Stop doing work that software should handle.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-2 text-purple-300">
                    Decisions Based on Data, Not Guesswork
                  </h3>
                  <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                    AI analyzes your data across all systems to surface insights you'd never find manually. Know what's working, what's not, and what to do next.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-2 text-purple-300">
                    Systems That Scale With You
                  </h3>
                  <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                    As your business grows, your integrations adapt. Add new tools, handle more volume, expand to new markets—your infrastructure keeps up.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-2 text-purple-300">
                    One Source of Truth
                  </h3>
                  <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                    When all your systems talk to each other, data stays consistent. No more conflicting reports. No more "which number is right?" conversations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}















