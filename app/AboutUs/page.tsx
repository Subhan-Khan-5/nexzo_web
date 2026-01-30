import AboutHeroSection from "../Components/AboutComponents/AboutHeroSection";
import AboutUsSection from "../Components/AboutComponents/AboutUsSection";
import HowWeMeasureGoodWorkSection from "../Components/AboutComponents/HowWeMeasureGoodWorkSection";
import LetsTalkSection from "../Components/AboutComponents/LetsTalkSection";
import OurPrinciplesSection from "../Components/AboutComponents/OurPrinciplesSection";

export default function AboutUsPage() {
    return (
        <div>
            <AboutHeroSection />
            <AboutUsSection />
            <OurPrinciplesSection
                title="Our Principles"
                color={"#3a0361"}
                principles={[
                    {
                        title: "Software should solve problems, not create new ones",
                        explanation: "If it makes your team's job harder, we built it wrong."
                    },
                    {
                        title: "Transparency beats surprise invoices",
                        explanation: "You'll know what things cost and why. No hidden fees, no scope creep disguised as 'necessary additions.'"
                    },
                    {
                        title: "Your team knows your business better than we ever will",
                        explanation: "Our job is to listen, translate technical possibilities into business outcomes, and build what you actually need."
                    },
                    {
                        title: "Post-launch support isn't optional",
                        explanation: "We don't disappear after deployment—we stick around to make sure things keep working."
                    },
                    {
                        title: "Good work compounds",
                        explanation: "We build infrastructure that gets better over time, not systems that need replacement in two years."
                    }
                ]}
                highlightedIndex={1}
            />
            <HowWeMeasureGoodWorkSection />
            <LetsTalkSection />
        </div>
    )
  }