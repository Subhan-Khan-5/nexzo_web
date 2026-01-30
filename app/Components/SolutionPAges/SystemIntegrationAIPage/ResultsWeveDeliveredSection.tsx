import CaseStudyCard from "../ZohoAutomationPage/CaseStudyCard";

export default function ResultsWeveDeliveredSection() {
  const caseStudies = [
    {
      company: "TechFlow Solutions",
      industry: "SaaS",
      before:
        "Customer data was scattered across CRM, support, and billing systems. Sales and support teams worked with conflicting information, leading to poor customer experience and lost revenue.",
      whatWeDid:
        "Integrated Salesforce, Zendesk, and Stripe with real-time data synchronization. Built AI-powered customer insights dashboard that unified all customer touchpoints and automated support ticket routing based on customer history.",
      result:
        "Single source of truth for all customer data, 40% reduction in support response time, and AI-driven insights that increased upsell rates by 25%.",
      bgColor: "bg-white",
    },
    {
      company: "Global Manufacturing Co",
      industry: "Manufacturing",
      before:
        "Legacy ERP system couldn't communicate with modern inventory, shipping, and e-commerce platforms. Manual data entry caused delays, errors, and inventory discrepancies across channels.",
      whatWeDid:
        "Built custom middleware to connect legacy ERP with Shopify, ShipStation, and QuickBooks. Implemented AI-powered demand forecasting and automated inventory reordering across all sales channels.",
      result:
        "Real-time inventory sync across all platforms, 60% reduction in manual data entry, and AI predictions that reduced stockouts by 45%.",
      bgColor: "bg-blue-50",
    },
    {
      company: "HealthCare Plus",
      industry: "Healthcare",
      before:
        "Patient records, scheduling, billing, and insurance verification were handled in separate systems. Staff spent hours manually transferring information, causing appointment delays and billing errors.",
      whatWeDid:
        "Integrated Epic EHR with scheduling software, insurance portals, and payment processors. Developed AI chatbot for patient inquiries and automated insurance verification workflows.",
      result:
        "Seamless patient data flow, automated insurance verification, and AI chatbot handling 70% of routine inquiries, freeing staff for complex cases.",
      bgColor: "bg-purple-50",
    },
  ];

  return (
    <div className="relative">
      <div className="absolute bg-cover bg-center h-[40vh] top-[40%] right-[0] z-0">
        <img src="/images/grid.png" alt="grid" />
      </div>
      <div className="absolute bg-cover bg-center h-[40vh] top-[60%] left-[0] z-0">
        <img src="/images/grid.png" alt="grid" />
      </div>
      <section className="relative mt-[10vh] px-2 py-16 min-w-[380px] sm:w-[580px] md:w-[750px] lg:w-[850px] xl:w-[1000px] 2xl:w-[1200px] mx-auto md:px-6 md:px-[7.5vw] bg-white bg-cover bg-center">
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#4B0082] uppercase tracking-tight">
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



