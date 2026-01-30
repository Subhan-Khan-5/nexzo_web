import SystemIntegrationAIHeroSection from "../../Components/SolutionPAges/SystemIntegrationAIPage/HeroSection";
import NotForEveryoneSection from "../../Components/SolutionPAges/ZohoAutomationPage/NotForEveryoneSection";
import HowItWorksSection from "../../Components/SolutionPAges/SystemIntegrationAIPage/HowItWorksSection";
import StopGuessingSection from "../../Components/SolutionPAges/SystemIntegrationAIPage/StopGuessingSection";
import TestimonialsSection from "../../Components/SolutionPAges/ZohoAutomationPage/TestimonialsSection";
import GetAQuoteSection from "../../Components/SolutionPAges/ZohoAutomationPage/GetAQuoteSection";
import OurPrinciplesSection from "@/app/Components/AboutComponents/OurPrinciplesSection";
import WhyTeamsChooseNexzoSection from "@/app/Components/HomeComponents/WhyTeamsChooseNexzoSection";

export default function SystemIntegrationAIPage() {
  return (
    <div className="min-h-screen">
      <SystemIntegrationAIHeroSection
        heading="Build a product that doesn't break after launch."
        subHeading="Full-stack web and mobile development for teams building production-grade software."
        optionalParagraph="If you're building a web platform or app, the risk isn't coding. It's delays, rework, unstable releases, and a team that disappears. We help you ship stable, scalable software with clear ownership from scope to support."
        buttonText="Get Your Free Audit"
        buttonLink="#"
      />
      
      <NotForEveryoneSection
        title="What usually goes wrong with product builds"
        items={[
          "Builds start fast and collapse under real complexity.",
          "MVP turns into permanent tech debt.",
          "Features ship, but performance degrades.",
          "Handoffs create delays and blame loops.",
          "No one owns the product after launch."
        ]}
        variant="product-builds"
        conclusion={{
          text: "Most products don't fail in development. They fail in execution and support.",
          boldWords: ["execution", "support"]
        }}
      />
      <OurPrinciplesSection title="How delivery stays predictable
" color={"#214E34"}  principles={[
                    {
                        title: "Product clarity",
                        explanation: "Scope, success criteria, and constraints defined upfront."
                    },
                    {
                        title: "Architecture & design",
                        explanation: "Systems designed for scale and maintenance.'"
                    },
                    {
                        title: "Build & QA",
                        explanation: "Development with testing built in."
                    },
                    {
                        title: "Launch & support",
                        explanation: "Deployment, stabilization, monitoring, and improvements."
                    }
                ]}/>
                <TestimonialsSection
        testimonials={[
          {
            name: "David Martinez",
            title: "Operations Director",
            quote: "Their system integration work connected our entire tech stack. Data now flows seamlessly across all platforms.",
            profileImage: "/images/pic1.png",
            linkedinUrl: "#",
            projectUrl: "#",
            hasVideo: true
          },
          {
            name: "Jennifer Kim",
            title: "CTO",
            quote: "The AI solutions they built understand our business context perfectly. Game-changing automation.",
            profileImage: "/images/pic2.png",
            linkedinUrl: "#",
            projectUrl: "#",
            hasVideo: true
          },
          {
            name: "Robert Chen",
            title: "VP of Sales",
            quote: "Finally, our CRM, marketing, and finance systems all talk to each other. No more manual data entry.",
            profileImage: "/images/pic3.png",
            linkedinUrl: "#",
            projectUrl: "#",
            hasVideo: true
          },
          {
            name: "Amanda Foster",
            title: "CEO",
            quote: "They modernized our legacy systems and connected them to modern platforms. Incredible transformation.",
            profileImage: "/images/pic1.png",
            linkedinUrl: "#",
            projectUrl: "#",
            hasVideo: true
          }
        ]}
      />
      <WhyTeamsChooseNexzoSection title="What makes this safe to build with us" 
      BottomLine="You should never feel unsure about what's happening or who owns what."
       benefits={[
        "Clear scope before build", 
        "FQuality checks during development", 
        "No silent handoffs",
         "Support after launch",
         "Cost-efficient delivery without chaos"]}
         backgroundColor={"#214E34"} />
      
      
      <GetAQuoteSection />
    </div>
  );
}

