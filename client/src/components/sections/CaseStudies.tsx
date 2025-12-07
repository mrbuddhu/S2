import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight, Maximize2 } from "lucide-react";
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
  return (
    <section id="work" className="py-32 bg-background relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-block px-3 py-1 mb-6 border border-primary/30 rounded-full bg-primary/5 text-primary text-xs font-bold uppercase tracking-widest"
            >
              Selected Work
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-display font-medium text-white mb-6 leading-[0.9]">
              We build <span className="italic font-serif-display text-muted-foreground">icons</span>, <br />
              not just interfaces.
            </h2>
            <p className="text-xl text-muted-foreground/80 max-w-xl font-light">
              From Series A startups to Fortune 500s. A curated selection of our most impactful deployments.
            </p>
          </div>
          <Button variant="outline" className="hidden md:flex rounded-full border-white/10 hover:bg-white/5 hover:border-white/20 h-12 px-6 text-base group">
            View All Projects <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[400px] gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`group relative rounded-3xl overflow-hidden border border-white/5 bg-card/20 cursor-pointer ${
                project.size === 'large' ? 'md:col-span-2' : 
                project.size === 'medium' ? 'row-span-2' : ''
              }`}
            >
              {/* Image with Zoom Effect */}
              <div className="absolute inset-0 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90" />
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex flex-wrap gap-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-2 py-1 rounded-md bg-white/10 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider text-white border border-white/10">
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
                    
                    <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0">
                      <ArrowUpRight className="w-6 h-6" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 rounded-3xl transition-colors duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        <div className="mt-12 md:hidden flex justify-center">
          <Button variant="outline" className="rounded-full border-white/10 hover:bg-white/5 hover:border-white/20 h-12 px-8 w-full text-base group">
            View All Projects <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}
