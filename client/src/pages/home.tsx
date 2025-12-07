import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { Services } from "@/components/sections/Services";
import { CoreCapabilities } from "@/components/sections/CoreCapabilities";
import { Team } from "@/components/sections/Team";
import { VideoTestimonials } from "@/components/sections/VideoTestimonials";
import { Pricing } from "@/components/sections/Pricing";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Testimonials } from "@/components/sections/Testimonials";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <TrustedBy />
        <Services />
        <Team /> {/* Added Team Section here for flow: Services -> Who does it -> Proof */}
        <CoreCapabilities />
        <Pricing />
        <CaseStudies />
        <VideoTestimonials />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
