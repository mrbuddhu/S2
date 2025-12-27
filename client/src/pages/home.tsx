import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Services } from "@/components/sections/Services";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { Team } from "@/components/sections/Team";
import { Pricing } from "@/components/sections/Pricing";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { VideoTestimonials } from "@/components/sections/VideoTestimonials";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
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
        <Pricing />
        <CaseStudies />
        <VideoTestimonials />
        <Testimonials />
        <Team />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
