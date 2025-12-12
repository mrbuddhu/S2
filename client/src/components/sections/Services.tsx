import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { 
  ScanSearch, 
  Palette, 
  Code2, 
  Megaphone, 
  LineChart, 
  Rocket,
  Crown,
  Sparkles,
  Blocks,
  Cpu,
  TrendingUp,
  Check,
  ArrowRight
} from "lucide-react";
import { scrollReveal, cardHover, viewportOptions } from "@/lib/animations";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Crown,
    title: "Luxury Branding",
    headline: "Become a Category King with premium branding that drives 30% higher conversions and commands premium pricing.",
    description: "Strategic brand positioning, signature visual identity, comprehensive brand guidelines, and conversion-optimized copywriting.",
    number: "01",
    features: [
      "Strategic Brand Positioning - Dominate your market segment with authority",
      "Signature Visual Identity - Premium perception that converts 30% better",
      "Comprehensive Brand Guidelines - Cohesive, timeless brand consistency",
      "Conversion-Optimized Copywriting - Persuasion that drives measurable results"
    ],
    benefit: "30% higher conversions, premium pricing power"
  },
  {
    icon: Sparkles,
    title: "Elite Design",
    headline: "Convert 25% more visitors into customers with premium design that builds trust, drives engagement, and maximizes revenue.",
    description: "Bespoke website & app design, conversion-optimized user journeys, interactive prototypes, and premium design systems.",
    number: "02",
    features: [
      "Bespoke Website & App Design - Luxury aesthetics that convert visitors to customers",
      "Conversion-Optimized User Journeys - Designed to maximize revenue and reduce bounce rates",
      "Interactive Prototypes - Experience your product before it's built, reducing development costs",
      "Premium Design System - Consistent luxury across all touchpoints for brand authority"
    ],
    benefit: "25% more conversions, reduced bounce rates"
  },
  {
    icon: Code2,
    title: "Bespoke Applications",
    headline: "Launch 3x faster with custom software that scales with your growth, handles enterprise traffic, and delivers measurable ROI.",
    description: "No-code solutions, custom code development, e-commerce mastery, and SaaS product development.",
    number: "03",
    features: [
      "No-Code Solutions - Webflow for web, Flutterflow for mobile, launch in 2 weeks",
      "Custom Code Development - Next.js for web, React Native for mobile, built to scale",
      "E-Commerce Mastery - Increase average order value by 40% with premium UX",
      "SaaS Product Development - Future-proof architecture that grows with your business"
    ],
    benefit: "3x faster launches, 40% higher AOV"
  },
  {
    icon: Blocks,
    title: "Blockchain Innovation",
    headline: "Lead the Web3 revolution with blockchain solutions that create new revenue streams, reduce costs by 60%, and future-proof your business.",
    description: "Smart contract development, next-gen DApps, enterprise blockchain integration, and tokenomics strategy.",
    number: "04",
    features: [
      "Smart Contract Development - Automate processes with absolute security and transparency",
      "Next-Gen DApps - Redefine user experiences with decentralized applications",
      "Enterprise Blockchain Integration - Elevate your business with Web3 infrastructure",
      "Tokenomics & Strategy - Design sustainable blockchain ecosystems that drive adoption"
    ],
    benefit: "60% cost reduction, new revenue streams"
  },
  {
    icon: Cpu,
    title: "AI-Powered Intelligence",
    headline: "Increase efficiency by 80% and reduce operational costs by 50% with AI solutions that predict, optimize, and automate your business processes.",
    description: "Custom AI models & machine learning, AI-driven business insights, process automation, and computer vision & NLP.",
    number: "05",
    features: [
      "Custom AI Models & Machine Learning - Predict customer behavior, optimize operations, automate workflows",
      "AI-Driven Business Insights - Data-powered growth strategies that increase revenue by 35%",
      "Process Automation - Scale smarter, work faster, reduce manual tasks by 80%",
      "Computer Vision & NLP - Cutting-edge AI experiences that delight customers and drive engagement"
    ],
    benefit: "80% efficiency increase, 50% cost reduction"
  },
  {
    icon: TrendingUp,
    title: "Growth Engine",
    headline: "Grow revenue by 200% and reduce customer acquisition costs by 40% with data-driven marketing strategies that scale your business.",
    description: "SEO & content marketing, social media strategy, paid ads, email marketing, and performance analytics.",
    number: "06",
    features: [
      "SEO & Content Marketing - Rank higher, build compounding inbound traffic, increase organic revenue by 150%",
      "Social Media Strategy & Management - Grow engagement by 300%, build brand authority, drive qualified leads",
      "Paid Ads (Google, Meta, LinkedIn) - Acquire customers with profitable CAC, scale profitable campaigns",
      "Email Marketing & Automations - Nurture leads, increase LTV by 60%, automate customer journeys",
      "Performance Analytics & Reporting - Track ROI, optimize monthly, make data-driven decisions"
    ],
    benefit: "200% revenue growth, 40% lower CAC"
  }
];

export function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section 
      ref={sectionRef}
      id="services" 
      className="py-32 bg-background border-t border-white/5"
    >
      <div className="container mx-auto px-6">
        <div className="mb-20 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-[1px] w-12 bg-primary"></div>
            <span className="text-primary font-medium tracking-widest uppercase text-sm">Premium Services</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-display font-medium text-white mb-8">
            Build New. Fix Broken. <span className="italic font-serif-display text-primary">Scale Fast.</span>
          </h2>
          <p className="text-xl text-muted-foreground/80 max-w-2xl font-light mb-4">
            We don't just build products—we create digital experiences that drive measurable results. Available as standalone or ongoing retainer for continuous growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: -10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={viewportOptions}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1]
                }}
                variants={cardHover}
                whileHover="hover"
                style={{ y: index % 2 === 0 ? y : undefined }}
                className="group relative premium-card p-8 cursor-pointer"
                onClick={() => setExpandedIndex(isExpanded ? null : index)}
              >
                <div className="absolute -left-2 top-0 text-7xl font-display font-bold text-white/[0.02] -z-10 group-hover:text-primary/[0.05] transition-colors duration-500 select-none">
                  {service.number}
                </div>
                
                <motion.div 
                  className="mb-6 inline-flex p-4 rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-sm"
                  whileHover={{ 
                    borderColor: "rgba(212, 197, 154, 0.4)",
                    scale: 1.1,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <service.icon className="w-6 h-6 text-primary" />
                </motion.div>
                
                <h3 className="text-2xl font-display font-medium text-white mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-sm text-primary/80 font-medium mb-4 leading-relaxed">
                  {service.headline}
                </p>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Features - Always visible but can expand */}
                <div className="space-y-2 mb-4">
                  {service.features.slice(0, isExpanded ? service.features.length : 2).map((feature, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-start gap-2 text-xs text-muted-foreground"
                    >
                      <Check className="w-3 h-3 text-primary shrink-0 mt-1" />
                      <span>{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {service.features.length > 2 && (
                  <motion.button
                    className="text-xs text-primary hover:text-primary/80 font-medium flex items-center gap-1 mt-2"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {isExpanded ? "Show Less" : `+${service.features.length - 2} More Features`}
                    <ArrowRight className={`w-3 h-3 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                  </motion.button>
                )}

                {/* Benefit Badge */}
                <div className="mt-6 pt-4 border-t border-white/5">
                  <p className="text-xs font-medium text-primary/90">
                    {service.benefit}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
