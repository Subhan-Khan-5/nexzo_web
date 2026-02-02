import SystemIntegrationAIHeroSection from "../../Components/SolutionPAges/SystemIntegrationAIPage/HeroSection";
import NotForEveryoneSection from "../../Components/SolutionPAges/ZohoAutomationPage/NotForEveryoneSection";
import OurPrinciplesSection from "@/app/Components/AboutComponents/OurPrinciplesSection";
import WhyTeamsChooseNexzoSection from "@/app/Components/HomeComponents/WhyTeamsChooseNexzoSection";
import WeAlsoHandleSection from "@/app/Components/HomeComponents/WeAlsoHandleSection";
import RealProblemsRealResultsSection from "@/app/Components/HomeComponents/RealProblemsRealResultsSection";
import WhatThisHelpsYouLaunchSection from "../../Components/SolutionPAges/SystemIntegrationAIPage/WhatThisHelpsYouLaunchSection";
import GetAQuoteSection from "../../Components/SolutionPAges/ZohoAutomationPage/GetAQuoteSection";
import LetsBuildSection from "@/app/Components/HomeComponents/LetsBuildSection";

export default function FlutterPage() {
  return (
    <div className="min-h-screen">
      <SystemIntegrationAIHeroSection
        heading="Launch a mobile app users actually keep."
        subHeading="Flutter app development for scalable, production-ready mobile products."
        optionalParagraph="If you're building a mobile app, the risk isn't coding. It's performance issues, unstable releases, and scaling problems. We help you ship Flutter apps that stay fast, stable, and maintainable after launch."
        buttonText="Get Your Free Audit"
        buttonLink="#"
        bottomText="Built by engineers who've fixed 50+ Zoho systems across sales, finances, and operations."
        gradientColor="#5182E3"
        imgSrc="/images/FlutterEllipse.png"
      />
      
      <NotForEveryoneSection
        title="Why many mobile apps struggle after launch"
        items={[
          "Apps look good but crash under real usage.",
          "MVPs turn into long-term tech debt.",
          "Performance drops as features grow.",
          "No clear ownership after app store release.",
          "Updates become slow and risky."
        ]}
        variant="product-builds"
        conclusion={{
          text: "Most mobile apps don't fail at launch. They fail in maintenance and scale.",
          boldWords: ["maintenance", "scale"]
        }}
        color="#5182E3"
      />
      
      <WhatThisHelpsYouLaunchSection 
        color="#5182E3"
        heading="What this helps you put into users' hands"
        introParagraph="If you're building a mobile app, the challenge isn't coding. It's shipping something you can confidently update, scale, and support."
        bulletPoints={[
          "An app that performs consistently across devices",
          "A single codebase that doesn't become fragile",
          "A team that stays involved post-launch"
        ]}
        boxes={[
          {
            title: "Stable cross-platform app",
            description: "One Flutter codebase for iOS and Android without compromising performance or UX."
          },
          {
            title: "Clean architecture for growth",
            description: "Apps structured so features can grow without rewrites or slowdowns."
          },
          {
            title: "Reliable releases and updates",
            description: "App store submissions, updates, and fixes handled with stability in mind."
          }
        ]}
      />
      
      <OurPrinciplesSection 
        title="How delivery stays predictable" 
        color="#5182E3" 
        principles={[
          {
            title: "Product clarity and app scope",
            explanation: "Define what the app needs to do, who it's for, and what success looks like before writing code."
          },
          {
            title: "UX flow and Flutter architecture",
            explanation: "Design user flows and technical structure that support performance and future growth."
          },
          {
            title: "Development with testing built in",
            explanation: "Build features with quality checks at every stage to catch issues before users do."
          },
          {
            title: "App store launch and ongoing support",
            explanation: "Handle submissions, monitor stability, and provide support for updates and improvements."
          }
        ]}
      />
      
      <RealProblemsRealResultsSection 
        title="A few examples of systems we've delivered."
        highlightedWords={["examples", "systems", "delivered"]}
        highlightColor="#5182E3"
      />
      
      <WhyTeamsChooseNexzoSection 
        title="What makes this safe to build with us" 
        BottomLine="You should never feel unsure about what's happening or who owns what."
        benefits={[
          {
            title: "Performance considered from day one.",
            description: "We architect your Flutter app with performance in mind from the start, ensuring smooth animations, fast load times, and efficient memory usage across all devices."
          },
          {
            title: "Clean Flutter architecture, not quick hacks.",
            description: "Our code follows Flutter best practices and clean architecture principles, making it maintainable, testable, and scalable as your app grows."
          },
          {
            title: "Predictable updates and releases.",
            description: "We establish clear release processes, testing protocols, and deployment pipelines to ensure updates go smoothly without breaking changes or surprises."
          },
          {
            title: "Long-term maintainability.",
            description: "Your app is built with future growth in mind, making it easy to add features, fix issues, and adapt to changing requirements as your product evolves."
          },
          {
            title: "Cost-efficient delivery without instability.",
            description: "We deliver quality work within budget, avoiding costly rewrites and technical debt that plagues many projects, while maintaining stability and reliability."
          }
        ]}
        backgroundColor="#5182E3"
      />
      
      <WeAlsoHandleSection 
        heading="Built with modern, maintainable stacks" 
        description="Stacks are chosen based on product needs, not trends." 
        services={[
          "Flutter",
          "Dart",
          "Firebase",
          "REST APIs",
          "State Management"
        ]} 
        color="#5182E3" 
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
        color="#5182E3"
        porp2={true}
      />
      <LetsBuildSection headline="If your app needs to last, start with clarity." description="We'll review your app idea, risks, and roadmap before development begins." bgColor="#5182E3" buttonColor="white" buttonTextColor="#5182E3" buttonText="Get Your Free Audit" buttonLink="#" variant="clarity" />

      <div className="pb-24">

      <div className="bg-[#5182E3] ">
      <GetAQuoteSection variant="Full Stack" color="FFFFFF" />

        </div>
    </div>
      </div>
  );
}

