import ZohoAutomationHeroSection from "../../Components/SolutionPAges/ZohoAutomationPage/HeroSection";
import WhyAutomationsFailSection from "../../Components/SolutionPAges/ZohoAutomationPage/WhyAutomationsFailSection";
import ResultsWeveDeliveredSection from "../../Components/SolutionPAges/ZohoAutomationPage/ResultsWeveDeliveredSection";
import NotForEveryoneSection from "../../Components/SolutionPAges/ZohoAutomationPage/NotForEveryoneSection";
import HowItWorksSection from "../../Components/SolutionPAges/ZohoAutomationPage/HowItWorksSection";
import StopGuessingSection from "../../Components/SolutionPAges/ZohoAutomationPage/StopGuessingSection";
import TestimonialsSection from "../../Components/SolutionPAges/ZohoAutomationPage/TestimonialsSection";
import GetAQuoteSection from "../../Components/SolutionPAges/ZohoAutomationPage/GetAQuoteSection";
import WorkedWithSection from "../../Components/HomeComponents/WorkedWithSection";
import SystemIntegrationAIHeroSection from "@/app/Components/SolutionPAges/SystemIntegrationAIPage/HeroSection";

export default function ZohoAutomationPage() {
  return (
    <div className="min-h-screen">
      <SystemIntegrationAIHeroSection
        heading="Your Zoho Automations Are Costing You Revenue"
        subHeading="We audit and fix broken Zoho CRM automations so revenue stops leaking and teams can trust their data again."
        buttonText="Get Your Free Audit"
        buttonLink="#"
        bottomText="Built by engineers who've fixed 50+ Zoho systems across sales, finances, and operations."
        gradientColor="#A3BAC3"
        imgSrc="/images/zohoEllipse.png"
      />
      <WhyAutomationsFailSection
        title="Why Most Zoho Automations Fail"
        introText="Most companies treat Zoho like a checkbox exercise. They configure features without understanding how their revenue process actually works. The result is expensive software that creates more manual work, not less."
        items={[
          "Built for features, not real business outcomes",
          "CRM, finance, and operations designed in isolation",
          "Automations break as lead volume and complexity grow"
        ]}
      />
      <ResultsWeveDeliveredSection />
      <WhyAutomationsFailSection
        title="WHAT WE FIX"
        subtitle="What We Fix Inside Zoho."
        items={[
          "Broken lead routing and follow-ups",
          "CRM and finance data mismatches",
          "Manual reporting and duplicate data entry",
          "Fragile automations that fall at scale",
          "Sales teams working outside Zoho due to poor setup"
        ]}
      />
      <NotForEveryoneSection
        title="This Is Not For Everyone"
        highlightedWord="Everyone"
        items={[
          "If you're just exploring ideas with no intent to fix anything",
          "If you're looking for the cheapest option regardless of quality",
          "If you have fewer than 10 employees or use Zoho for personal projects",
          "If you expect results without implementation effort"
        ]}
      />
      <HowItWorksSection
        title="How It Works"
        highlightedWord="Works"
        steps={[
          {
            icon: "lightbulb",
            description: "Free Zoho Automation Audit"
          },
          {
            icon: "magnifying",
            description: "We map broken workflows and revenue leaks"
          },
          {
            icon: "checklist",
            description: "You get a clear fix plan with priorities"
          },
          {
            icon: "monitor",
            description: "Data migration from existing CRM"
          },
          {
            icon: "bug",
            description: "We implement and test the fixes"
          },
          {
            icon: "checkmark",
            description: "Your systems run clean and reliably"
          }
        ]}
      />
      <StopGuessingSection
        title="Stop Guessing. Start Fixing."
        description="Get a free audit that shows you exactly where money is leaking and how to fix it."
        targetAudience="For B2B companies using Zoho CRM with 10+ employees"
        buttonText="Get Your Free Zoho Automation Audit"
        disclaimerText="No sales pressure. Just clear answers about what's broken and how to fix it."
      />
      <TestimonialsSection
        testimonials={[
          {
            name: "Mina Lee",
            title: "Marketing Director",
            quote: "Exceptional Zoho CRM expertise that transformed our entire sales workflow.",
            profileImage: "/images/pic1.png",
            linkedinUrl: "#",
            projectUrl: "#",
            hasVideo: true
          },
          {
            name: "Chris Fin",
            title: "Sales Executive",
            quote: "Professional, responsive, and delivered exactly what our business needed.",
            profileImage: "/images/pic2.png",
            linkedinUrl: "#",
            projectUrl: "#",
            hasVideo: true
          },
          {
            name: "Sarah Johnson",
            title: "Operations Manager",
            quote: "The Zoho automation solutions transformed our workflow completely. Highly recommend!",
            profileImage: "/images/pic3.png",
            linkedinUrl: "#",
            projectUrl: "#",
            hasVideo: true
          },
          {
            name: "Michael Chen",
            title: "CTO",
            quote: "Outstanding technical expertise and seamless integration with our existing systems.",
            profileImage: "/images/pic1.png",
            linkedinUrl: "#",
            projectUrl: "#",
            hasVideo: true
          }
        ]}
      />
      <GetAQuoteSection />
      
      {/* Add your Zoho Automation content sections here */}
      
    </div>
  );
}

