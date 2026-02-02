import Image from "next/image";
import HeroSection from "./Components/HomeComponents/HeroSection";
import CoreServicesSection from "./Components/HomeComponents/CoreServicesSection";
import WorkedWithSection from "./Components/HomeComponents/WorkedWithSection";
import HowWeWorkSection from "./Components/HomeComponents/HowWeWorkSection";
import RealProblemsRealResultsSection from "./Components/HomeComponents/RealProblemsRealResultsSection";
import WhyTeamsChooseNexzoSection from "./Components/HomeComponents/WhyTeamsChooseNexzoSection";
import WeAlsoHandleSection from "./Components/HomeComponents/WeAlsoHandleSection";
import LetsBuildSection from "./Components/HomeComponents/LetsBuildSection";
import SystemIntegrationAIHeroSection from "./Components/SolutionPAges/SystemIntegrationAIPage/HeroSection";

export default function Home() {
  return (
    <div className="bg-white">
        <SystemIntegrationAIHeroSection
        heading="We don't just build software we engineer Growth."
        subHeading="Most agencies deliver projects. We deliver infrastructure that runs your business. Seamlessly integrated, built to evolve, and designed to perform from day one."
        buttonText="Get Your Free Audit"
        buttonLink="#"
        buttonColor="4B0082"
        gradientColor="#9580A5"
        buttonTextColor="white"
        imgSrc="/images/Ellipse.png"
      />
      <CoreServicesSection/>
      <WorkedWithSection/>
      <HowWeWorkSection/>
      <RealProblemsRealResultsSection/>
      <WhyTeamsChooseNexzoSection benefits={[
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
        ]}/>
      <WeAlsoHandleSection 
        heading="We Also Handle" 
        color="#3b155f" 
        highlightedWords="Handle"
        services={[
          "Cloud Infrastructure",
          "API Development",
          "Legacy System Modernization",
          "Data Analytics & BI",
          "Mobile App Development",
          "Technical Consulting",
          "Ongoing Maintenance & Support",
        ]}
      />
      <LetsBuildSection/>
    </div>
  );
}
