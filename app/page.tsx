import Image from "next/image";
import HeroSection from "./Components/HomeComponents/HeroSection";
import CoreServicesSection from "./Components/HomeComponents/CoreServicesSection";
import WorkedWithSection from "./Components/HomeComponents/WorkedWithSection";
import HowWeWorkSection from "./Components/HomeComponents/HowWeWorkSection";
import RealProblemsRealResultsSection from "./Components/HomeComponents/RealProblemsRealResultsSection";
import WhyTeamsChooseNexzoSection from "./Components/HomeComponents/WhyTeamsChooseNexzoSection";
import WeAlsoHandleSection from "./Components/HomeComponents/WeAlsoHandleSection";
import LetsBuildSection from "./Components/HomeComponents/LetsBuildSection";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <CoreServicesSection/>
      <WorkedWithSection/>
      <HowWeWorkSection/>
      <RealProblemsRealResultsSection/>
      <WhyTeamsChooseNexzoSection/>
      <WeAlsoHandleSection/>
      <LetsBuildSection/>
    </div>
  );
}
