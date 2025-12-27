import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight, Maximize2 } from "lucide-react";
import { scrollReveal, cardHover, viewportOptions } from "@/lib/animations";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import project1 from "@assets/generated_images/saas_dashboard_dark_mode.png";
import project2 from "@assets/generated_images/mobile_app_crypto_wallet.png";
import project3 from "@assets/generated_images/e-commerce_fashion_store.png";
import project4 from "@assets/generated_images/ai_chat_interface.png";
import project5 from "@assets/generated_images/real_estate_platform.png";
import project6 from "@assets/generated_images/health_tech_wearable_app.png";

// Reusing images for the "dozen" feel, in a real app these would be unique
const projects = [
  {
    title: "FinDash",
    category: "SaaS Dashboard",
    image: project1,
    size: "large", // spans 2 cols
    tags: ["Fintech", "React", "D3.js"]
  },
  {
    title: "CoinFlow",
    category: "Crypto Wallet",
    image: project2,
    size: "small",
    tags: ["Web3", "Mobile", "Solidity"]
  },
  {
    title: "LuxeMode",
    category: "E-Commerce",
    image: project3,
    size: "small",
    tags: ["Shopify", "Liquid", "GSAP"]
  },
  {
    title: "NeurChat",
    category: "AI Interface",
    image: project4,
    size: "medium", // tall
    tags: ["OpenAI", "Next.js", "Tailwind"]
  },
  {
    title: "EstateX",
    category: "Real Estate",
    image: project5,
    size: "small",
    tags: ["Marketplace", "Mapbox"]
  },
  {
    title: "PulseFit",
    category: "Health Tech",
    image: project6,
    size: "small",
    tags: ["HealthKit", "React Native"]
  },
  // Doubling up to reach "dozen" scale with varied layouts
  {
    title: "AlphaTrade",
    category: "Trading Platform",
    image: project1,
    size: "small",
    tags: ["Finance", "Real-time"]
  },
  {
    title: "NeoBank",
    category: "Banking App",
    image: project2,
    size: "large",
    tags: ["Banking", "Security"]
  },
  {
    title: "VogueVault",
    category: "Fashion Marketplace",
    image: project3,
    size: "medium",
    tags: ["Fashion", "Social"]
  },
  {
    title: "MindMeld",
    category: "AI Assistant",
    image: project4,
    size: "small",
    tags: ["AI", "Voice"]
  },
  {
    title: "UrbanLiving",
    category: "PropTech",
    image: project5,
    size: "small",
    tags: ["Property", "Booking"]
  },
  {
    title: "BioTrack",
    category: "MedTech",
    image: project6,
    size: "large",
    tags: ["Medical", "Compliance"]
  }
];

export function CaseStudies() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section 
      ref={sectionRef}
      id="work" 
      className="py-32 bg-background relative z-10"
      style={{ opacity }}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium tracking-widest uppercase mb-6"
          >
            Selected Work
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-display font-medium text-white mb-6">
            We <span className="text-gold-gradient">build</span> <span className="italic text-gold-gradient font-serif-display">icons</span> — not just <span className="text-gold-gradient">interfaces</span>.
          </h2>
          <p className="text-xl text-muted-foreground/90 font-sans font-normal leading-relaxed">
            Most of our work falls into three categories: SaaS & Platforms, Marketplaces & Fintech, and Premium Digital Products.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[400px] gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={viewportOptions}
              transition={{ duration: 0.6, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
              variants={cardHover}
              whileHover="hover"
              whileTap="tap"
              onClick={() => setSelectedProject(index)}
              className={`group relative rounded-3xl overflow-hidden border border-white/5 bg-card/20 cursor-pointer ${
                project.size === 'large' ? 'md:col-span-2' : 
                project.size === 'medium' ? 'row-span-2' : ''
              }`}
            >
              {/* Image with Zoom Effect */}
              <motion.div 
                className="absolute inset-0 overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1, opacity: 0.8 }}
                  whileHover={{ scale: 1.15, opacity: 0.6 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90" />
              </motion.div>

              {/* Content Overlay */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex flex-wrap gap-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider text-white border border-white/10 transition-all duration-300 hover:bg-white/20 hover:border-primary/30">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-primary text-xs font-bold uppercase tracking-widest mb-2">
                        {project.category}
                      </p>
                      <h3 className="text-3xl font-display font-medium text-white mb-2">
                        {project.title}
                      </h3>
                    </div>
                    
                    <motion.div 
                      className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center"
                      initial={{ opacity: 0, x: 20, rotate: -45 }}
                      whileHover={{ 
                        opacity: 1, 
                        x: 0, 
                        rotate: 0,
                        scale: 1.1,
                        transition: { duration: 0.3 }
                      }}
                    >
                      <ArrowUpRight className="w-6 h-6" />
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 rounded-3xl transition-colors duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      <Dialog open={selectedProject !== null} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-background border-white/10 p-4 sm:p-6 md:p-8">
          {selectedProject !== null && (
            <>
              <DialogHeader className="pb-4">
                <DialogTitle className="text-2xl sm:text-3xl md:text-4xl font-display font-medium text-white">
                  {projects[selectedProject].title}
                </DialogTitle>
                <DialogDescription className="text-primary font-medium uppercase tracking-wider text-xs sm:text-sm pt-2">
                  {projects[selectedProject].category}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-4 sm:space-y-6 mt-2 sm:mt-4">
                {/* Project Image */}
                <div className="rounded-lg overflow-hidden border border-white/10">
                  <img 
                    src={projects[selectedProject].image} 
                    alt={projects[selectedProject].title}
                    className="w-full h-auto object-cover"
                  />
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {projects[selectedProject].tags.map((tag, i) => (
                    <span key={i} className="px-2 sm:px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/90 text-[10px] sm:text-xs font-medium font-sans">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Placeholder Content Sections - Add your content here */}
                <div className="space-y-4 sm:space-y-6 pt-4 border-t border-white/5">
                  <div>
                    <h3 className="text-lg sm:text-xl font-display font-medium text-white mb-2 sm:mb-3">Overview</h3>
                    <p className="text-sm sm:text-base text-muted-foreground/90 font-sans font-normal leading-relaxed">
                      {/* Add project overview here */}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-display font-medium text-white mb-2 sm:mb-3">Challenge</h3>
                    <p className="text-sm sm:text-base text-muted-foreground/90 font-sans font-normal leading-relaxed">
                      {/* Add challenge description here */}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-display font-medium text-white mb-2 sm:mb-3">Solution</h3>
                    <p className="text-sm sm:text-base text-muted-foreground/90 font-sans font-normal leading-relaxed">
                      {/* Add solution description here */}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-display font-medium text-white mb-2 sm:mb-3">Results</h3>
                    <p className="text-sm sm:text-base text-muted-foreground/90 font-sans font-normal leading-relaxed">
                      {/* Add results/metrics here */}
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
