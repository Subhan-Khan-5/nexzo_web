import SystemIntegrationAIHeroSection from "../../Components/SolutionPAges/SystemIntegrationAIPage/HeroSection";
import NotForEveryoneSection from "../../Components/SolutionPAges/ZohoAutomationPage/NotForEveryoneSection";
import HowItWorksSection from "../../Components/SolutionPAges/SystemIntegrationAIPage/HowItWorksSection";
import StopGuessingSection from "../../Components/SolutionPAges/SystemIntegrationAIPage/StopGuessingSection";
import TestimonialsSection from "../../Components/SolutionPAges/ZohoAutomationPage/TestimonialsSection";
import GetAQuoteSection from "../../Components/SolutionPAges/ZohoAutomationPage/GetAQuoteSection";
import OurPrinciplesSection from "@/app/Components/AboutComponents/OurPrinciplesSection";
import WhyTeamsChooseNexzoSection from "@/app/Components/HomeComponents/WhyTeamsChooseNexzoSection";
import WhatThisHelpsYouLaunchSection from "../../Components/SolutionPAges/SystemIntegrationAIPage/WhatThisHelpsYouLaunchSection";
import WeAlsoHandleSection from "@/app/Components/HomeComponents/WeAlsoHandleSection";
import RealProblemsRealResultsSection from "@/app/Components/HomeComponents/RealProblemsRealResultsSection";
import LetsBuildSection from "@/app/Components/HomeComponents/LetsBuildSection";

export default function SystemIntegrationAIPage() {
  return (
    <div className="min-h-screen">
      <SystemIntegrationAIHeroSection
        heading="Build a product that doesn't break after launch."
        subHeading="Full-stack web and mobile development for teams building production-grade software."
        optionalParagraph="If you're building a web platform or app, the risk isn't coding. It's delays, rework, unstable releases, and a team that disappears. We help you ship stable, scalable software with clear ownership from scope to support."
        buttonText="Get Your Free Audit"
        buttonLink="#"
        gradientColor="#3b5049"
        buttonColor="FFFFFF"
        buttonTextColor="white"
        imgSrc="/images/FullStackEllipse.png"
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
        color="#749182"
      />
      <WhatThisHelpsYouLaunchSection />
      <OurPrinciplesSection title="How delivery stays predictable
" color={"#749182"}  principles={[
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
                <RealProblemsRealResultsSection 
                  title="A few examples of systems we've delivered."
                  highlightedWords={["examples", "systems", "delivered"]}
                  highlightColor="#214E34"
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
      <WeAlsoHandleSection 
        heading="Built with modern, maintainable stacks" 
        description="Stacks are chosen based on product needs, not trends." 
        services={[
          "React",
          "Node",
          "Laravel",
          "Flutter",
          "Cloud & APIs"
        ]} 
        color="#214E34" 
        highlightedWords={["modern", "stacks"]}
      />
      <NotForEveryoneSection
        title="This Is Not For Everyone"
        items={[
          "Looking for the cheapest build",
          "No clarity on scope",
          "No involvement during build",
          "One-time build with no support"
        ]}
        variant="not-for-everyone"
        color="#214E34"
      />
 <LetsBuildSection headline="If your app needs to last, start with clarity." description="We'll review your app idea, risks, and roadmap before development begins." bgColor="#FFFFFF" buttonColor="#214E34" buttonTextColor="#FFFFFF" buttonText="Get Your Free Audit" buttonLink="#" variant="clarity" />

        <div className="bg-[#749182]">
      <GetAQuoteSection variant="Full Stack" color="FFFFFF" />

        </div>
    </div>
  );
}

