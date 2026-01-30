export default function HowWeMeasureGoodWorkSection() {
  return (
    <section className="relative w-full py-20 md:py-32 ">
      <div className="mx-[7.5vw]">
        <div 
          className=" relative rounded-2xl py-10 md:py-20 px-10 md:px-20 bg-[#24004A] md:p-12 lg:p-16 border-2 overflow-hidden"
          
        >
             <div className="absolute -top-[30%]  -rotate-[45deg] h-[22vh] w-[70vw] left-[-30%] md:h-[60vh]  rounded-full blur-3xl opacity-20   bg-white">
        <div className="w-full h-full bg-gradient-to-bl from-white/30 to-transparent rounded-full blur-3xl"></div>
      </div>
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Left Side - Large Text */}
            <div className="flex-shrink-0 lg:w-1/3">
              <div className="text-white">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-2">
                  How We Measure  Good Work
                </h2>
              </div>
            </div>

            {/* Vertical Separator */}
            <div className="hidden lg:block w-[1px] bg-gray-400 flex-shrink-0"></div>

            {/* Right Side - Content */}
            <div className="flex-1 lg:pl-8">
              <div className="space-y-6 text-white">
                <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                  We don't celebrate launch dates. We celebrate what happens after launch.
                </p>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                  Success means your team is using the system daily without calling us for help. It means data flows between platforms without manual intervention. It means your marketing spend has a clear ROI and your operations team has their time back.
                </p>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                  If we built something you never think about because it just works—that's the goal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

