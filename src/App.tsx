import { Layout } from "./components/Layout";
import { HeroSection } from "./components/HeroSection";
import { ProblemSolution } from "./components/ProblemSolution";
import { EarnFormulaViz } from "./components/EarnFormulaViz";
import { ROICalculator } from "./components/ROICalculator";
import { TimelineSection } from "./components/TimelineSection";
import { IncentiveDashboardPreview } from "./components/IncentiveDashboardPreview";
import { PricingSection } from "./components/PricingSection";
import { Testimonials } from "./components/Testimonials";
import { FAQ } from "./components/FAQ";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";
import ScrollStack, { ScrollStackItem } from "./components/ScrollStack";

export function App() {
  return (
    <Layout>
      <ScrollStack
        itemDistance={0}
        itemScale={0.1}
        itemStackDistance={0}
        stackPosition="0px"
        blurAmount={4}
      >
        <ScrollStackItem itemClassName="bg-[#f6fbf7]">
          <HeroSection />
        </ScrollStackItem>
        <ScrollStackItem itemClassName="bg-[#f6fbf7]">
          <ProblemSolution />
        </ScrollStackItem>
        <ScrollStackItem itemClassName="bg-[#f6fbf7]">
          <EarnFormulaViz />
        </ScrollStackItem>
        <ScrollStackItem itemClassName="bg-[#f6fbf7]">
          <ROICalculator />
        </ScrollStackItem>
        <ScrollStackItem itemClassName="bg-[#f6fbf7]">
          <TimelineSection />
        </ScrollStackItem>
        <ScrollStackItem itemClassName="bg-[#f6fbf7]">
          <IncentiveDashboardPreview />
        </ScrollStackItem>
        <ScrollStackItem itemClassName="bg-[#f6fbf7]">
          <PricingSection />
        </ScrollStackItem>
        <ScrollStackItem itemClassName="bg-[#f6fbf7]">
          <Testimonials />
        </ScrollStackItem>
        <ScrollStackItem itemClassName="bg-[#f6fbf7]">
          <FAQ />
        </ScrollStackItem>
        <div className="scroll-stack-card relative z-10 bg-[#f6fbf7]">
          <CTASection />
          <Footer />
        </div>
      </ScrollStack>
    </Layout>
  );
}
