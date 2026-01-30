import NexzoButton from "../SubComponents/NexzoButton"

export default function HeroSection() {
    return (
        <div className="relative md:h-[100vh] w-full overflow-hidden bg-gradient-to-b from-gray-50 via-gray-100 to-purple-100">
            {/* Abstract Arc Shapes with Diagonal Stripes */}
            {/* Top Right Arc */}
            

           

            {/* Content */}
            <div className="relative z-10 mx-[7.5vw] pt-[20vh] pb-20">
                <div className="max-full">
                    {/* Headline */}
                    <h1 className="font-normal text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 leading-tight mb-6">
                        We don't just build software<br />
                        we engineer <span className="text-[#3b155f]">Growth.</span>
                    </h1>

                    {/* Description */}
                    <p className="text-base sm:text-lg md:text-xl mt-[5vh]  text-gray-700 leading-relaxed mb-[7vh] w-[55vw]">
                        Most agencies deliver projects. We deliver infrastructure that runs your business. Seamlessly integrated, built to evolve, and designed to perform from day one.
                    </p>

                    {/* CTA Button */}
                    <div className="mt-8">
                        <NexzoButton />
                    </div>
                </div>  
            </div>
            <div className="absolute -bottom-1/2 left-0 w-full h-full  ">
            <img src="/images/Ellipse.png" alt="" className="w-full max-w-[1000px] mx-auto h-full object-contain" />

            </div>
        </div>
    )
}