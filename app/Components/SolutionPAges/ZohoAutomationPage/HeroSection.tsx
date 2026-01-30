import WorkedWithSection from "../../HomeComponents/WorkedWithSection";
import InfiniteScrollLogos from "../../SubComponents/InfiniteScrollLogos";

export default function ZohoAutomationHeroSection() {

    const companies = [
        { name: "Company 1", logo: "/images/blacklogo1.png" },
        { name: "Company 2", logo: "/images/blacklogo2.svg" },
        { name: "Company 3", logo: "/images/blacklogo3.svg" },
        { name: "Company 4", logo: "/images/blacklogo4.svg" },
        { name: "Company 5", logo: "/images/blacklogo5.png" },
      ];
  return (
    <section className="pt-[10vh] pb-20 sm:px-6 md:px-[7.5vw] bg-gradient-to-b from-gray-100 via-purple-50 to-purple-100 relative overflow-hidden">
      {/* Grainy texture overlay */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        backgroundSize: '200px 200px'
      }}></div>
      
      <div className="  w-full  mt-20 flex justify-center ">
        {/* Background glow blobs */}
        <div className="absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full bg-purple-400/60 blur-[120px]" />
        <div className="absolute -bottom-36 -right-32 h-[420px] w-[420px] rounded-full bg-indigo-400/60 blur-[120px]" />

        {/* Glass Card */}
        <section
          className="
            relative z-10 min-w-[350px]  w-[65vw]  mx-4
            text-center
            rounded-[42px]
            px-8 pt-[9vh] pb-[5vh]
            absolute
            bg-white/30
            backdrop-blur-[22px] backdrop-saturate-150
            border border-white/40
            shadow-[0_30px_80px_rgba(88,28,135,0.25)]
          "
        >
          <h1 className=" text-3xl sm:text-5xl lg:text-6xl font-semibold text-gray-900 tracking-tight drop-shadow-sm w-[95%] mx-auto mb-[4vh]">
            Your Zoho Automations Are Costing You Revenue
          </h1>

          <p className="  md:mb-[3vh] text-[16px] md:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
            We audit and fix broken Zoho CRM automations so revenue stops leaking
            and teams can trust their data again.
          </p>

          

          <button
            className="
              mt-5 md:mt-10
              inline-flex items-center justify-center
              rounded-full
              px-8 py-4
              text-base font-semibold text-white
              bg-gradient-to-br from-purple-600 to-purple-700
              shadow-[0_12px_40px_rgba(126,34,206,0.55)]
              border border-white/30
              transition-all duration-300
              hover:-translate-y-1
              hover:shadow-[0_18px_55px_rgba(126,34,206,0.65)]
                mb-2
              "
          >
            Get Your Free Zoho Automation Audit
          </button>

          <div className="mt-3 text-sm text-gray-600">
            15 minutes. No pitch.
          </div>
        </section>
      </div>
        
       <div className="md:w-[95%] w-[90%] mx-auto">
       <div className="w-full h-[1px] bg-black mt-[5vh] mx-auto"></div>

{/* Below Card Text */}
<p className="text-center text-gray-600 my-4  text-sm sm:text-base md:text-lg relative z-10">
  Built by engineers who've fixed 50+ Zoho systems across sales, finance, and operations.
</p>

<InfiniteScrollLogos companies={companies} animationDuration={30} />
       </div>
    </section>
  );
}

