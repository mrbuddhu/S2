import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Services } from "@/components/sections/Services";
import { Team } from "@/components/sections/Team";
import { VideoTestimonials } from "@/components/sections/VideoTestimonials";
import { Pricing } from "@/components/sections/Pricing";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { StructuredData } from "@/components/seo/StructuredData";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <StructuredData />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <WhyChoose />
        <Team /> {/* Added Team Section here for flow: Services -> Who does it -> Proof */}
        <Pricing />
        <CaseStudies />
        <VideoTestimonials />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
