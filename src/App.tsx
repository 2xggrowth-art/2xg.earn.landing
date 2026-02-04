import { lazy, Suspense } from "react";
import { Layout } from "./components/Layout";
import { HeroSection } from "./components/HeroSection";
import ScrollStack, { ScrollStackItem } from "./components/ScrollStack";
import { ScrollToTop } from "./components/ScrollToTop";
import { BookingProvider } from "./context/BookingContext";
import { BookingModal } from "./components/BookingModal";

// Lazy load below-fold components for better initial load performance
const ProblemSolution = lazy(() => import("./components/ProblemSolution").then(m => ({ default: m.ProblemSolution })));
const EarnFormulaViz = lazy(() => import("./components/EarnFormulaViz").then(m => ({ default: m.EarnFormulaViz })));
const ROICalculator = lazy(() => import("./components/ROICalculator").then(m => ({ default: m.ROICalculator })));
const TimelineSection = lazy(() => import("./components/TimelineSection").then(m => ({ default: m.TimelineSection })));
const IncentiveDashboardPreview = lazy(() => import("./components/IncentiveDashboardPreview").then(m => ({ default: m.IncentiveDashboardPreview })));
const IndustriesSection = lazy(() => import("./components/IndustriesSection").then(m => ({ default: m.IndustriesSection })));
const PricingSection = lazy(() => import("./components/PricingSection").then(m => ({ default: m.PricingSection })));
const Testimonials = lazy(() => import("./components/Testimonials").then(m => ({ default: m.Testimonials })));
const FAQ = lazy(() => import("./components/FAQ").then(m => ({ default: m.FAQ })));
const CTASection = lazy(() => import("./components/CTASection").then(m => ({ default: m.CTASection })));
const Footer = lazy(() => import("./components/Footer").then(m => ({ default: m.Footer })));

// Loading fallback component
function SectionLoader() {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-emerald-200 border-t-emerald-500" />
    </div>
  );
}

export function App() {
  return (
    <>
      <BookingProvider>
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
              <Suspense fallback={<SectionLoader />}>
                <ProblemSolution />
              </Suspense>
            </ScrollStackItem>
            <ScrollStackItem itemClassName="bg-[#f6fbf7]">
              <Suspense fallback={<SectionLoader />}>
                <EarnFormulaViz />
              </Suspense>
            </ScrollStackItem>
            <ScrollStackItem itemClassName="bg-[#f6fbf7]">
              <Suspense fallback={<SectionLoader />}>
                <ROICalculator />
              </Suspense>
            </ScrollStackItem>
            <ScrollStackItem itemClassName="bg-[#f6fbf7]">
              <Suspense fallback={<SectionLoader />}>
                <TimelineSection />
              </Suspense>
            </ScrollStackItem>
            <ScrollStackItem itemClassName="bg-[#f6fbf7]">
              <Suspense fallback={<SectionLoader />}>
                <IncentiveDashboardPreview />
              </Suspense>
            </ScrollStackItem>
            <ScrollStackItem itemClassName="bg-[#f6fbf7]">
              <Suspense fallback={<SectionLoader />}>
                <IndustriesSection />
              </Suspense>
            </ScrollStackItem>
            <ScrollStackItem itemClassName="bg-[#f6fbf7]">
              <Suspense fallback={<SectionLoader />}>
                <PricingSection />
              </Suspense>
            </ScrollStackItem>
            <ScrollStackItem itemClassName="bg-[#f6fbf7]">
              <Suspense fallback={<SectionLoader />}>
                <Testimonials />
              </Suspense>
            </ScrollStackItem>
            <ScrollStackItem itemClassName="bg-[#f6fbf7]">
              <Suspense fallback={<SectionLoader />}>
                <FAQ />
              </Suspense>
            </ScrollStackItem>
            <div className="scroll-stack-card relative z-10 bg-[#f6fbf7]">
              <Suspense fallback={<SectionLoader />}>
                <CTASection />
                <Footer />
              </Suspense>
            </div>
          </ScrollStack>
        </Layout>
        <BookingModal />
        <ScrollToTop />
      </BookingProvider>
    </>
  );
}
