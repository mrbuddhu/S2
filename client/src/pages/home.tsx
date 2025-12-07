import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { Services } from "@/components/sections/Services";
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
        <TrustedBy />
        <Services />
        <Pricing />
        <CaseStudies />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
