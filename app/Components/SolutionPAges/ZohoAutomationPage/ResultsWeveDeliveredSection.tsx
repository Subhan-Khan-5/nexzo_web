import CaseStudyCard from "./CaseStudyCard";

export default function ResultsWeveDeliveredSection() {
  const caseStudies = [
    {
      company: "Australian Dental Health",
      industry: "VIC",
      before:
        "Patient inquiries, dentist assignments, and billing were handled manually across disconnected systems, leading to delays, data errors, and heavy admin workload.",
      whatWeDid:
        "Designed an end-to-end dental operations system by integrating a custom patient app with Zoho to automate intake, approvals, dentist assignment, reporting, and billing.",
      result:
        "Faster patient onboarding, reduced administrative effort, and full visibility across clinic operations and revenue.",
      bgColor: "bg-white",
    },
    {
      company: "Panther Capital Group",
      industry: "Real Estate",
      before:
        "Buyer inquiries and property data were captured manually, causing slow follow-ups, poor lead filtering, and limited visibility into agent performance.",
      whatWeDid:
        "Built a Zoho CRM-driven real estate workflow by integrating the website and Google platforms to automate buyer intake, property approvals, follow-ups, communication tracking, and sales dashboards.",
      result:
        "Faster buyer response times, improved agent efficiency, and clear visibility into sales activity and performance.",
      bgColor: "bg-blue-50",
    },
    {
      company: "UC Path",
      industry: "Inventory Management",
      before:
        "Sales teams struggled with manual quotation handling, approval delays, and pricing inconsistencies across currencies, slowing down deal closures.",
      whatWeDid:
        "Built a streamlined sales system using Zoho CRM, integrations, and a custom customer portal to automate approvals, multi-currency pricing, and quotation workflows.",
      result:
        "Faster quote turnaround, fewer pricing errors, and a smoother sales process across inventory operations.",
      bgColor: "bg-purple-50",
    },
  ];

  return (<div className="relative  ">
    <div className="absolute  bg-cover bg-center h-[40vh] top-[40%] right-[0] z-0" > <img src="/images/grid.png" alt="grid"  /> </div>
    <div className="absolute  bg-cover bg-center h-[40vh] top-[60%] left-[0] z-0" > <img src="/images/grid.png" alt="grid"  /> </div>
  <section className="relative mt-[10vh] px-2 py-16 min-w-[380px] sm:w-[580px] md:w-[750px] lg:w-[850px] xl:w-[1000px] 2xl:w-[1200px] mx-auto md:px-6 md:px-[7.5vw] bg-white  bg-cover bg-center">
      {/* Grid pattern background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle, #d1d5db 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      ></div>

      <div className="relative z-10 min-w-[350px] mx-auto">
        {/* Title */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl  md:text-4xl font-bold text-[#4B0082] uppercase tracking-tight">
            Results We've Delivered
          </h2>
        </div>

        {/* Case Study Cards */}
        <div className="space-y-8 md:space-y-10">
          {caseStudies.map((study, index) => (
            <CaseStudyCard
              key={index}
              company={study.company}
              industry={study.industry}
              before={study.before}
              whatWeDid={study.whatWeDid}
              result={study.result}
              bgColor={study.bgColor}
              isGlassy={index === 0 || index === caseStudies.length - 1}
              hasGradient={index === 1}
            />
          ))}
        </div>
      </div>
    </section>
    </div>
  );
}


