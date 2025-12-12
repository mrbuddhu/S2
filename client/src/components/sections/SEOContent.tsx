import { motion } from "framer-motion";
import { 
  Palette, 
  Smartphone, 
  Code2, 
  Cpu, 
  Blocks, 
  TrendingUp,
  CheckCircle2 
} from "lucide-react";

// SEO/AEO optimized content blocks for each category
const categoryContent = [
  {
    icon: Palette,
    title: "Brand Identity & Design Services",
    slug: "brand-identity-design",
    keywords: ["brand design", "logo design", "brand identity", "visual identity", "design system"],
    description: "Professional brand identity design and visual systems that command attention and build trust. From logo creation to complete brand guidelines.",
    services: [
      "Logo Design & Brand Identity",
      "Visual Identity Systems",
      "Brand Guidelines & Style Guides",
      "UI/UX Design Systems",
      "Rebranding & Brand Refresh",
      "AI-Generated Design Fixes"
    ],
    benefits: [
      "Increased brand recognition and trust",
      "Consistent visual language across all touchpoints",
      "Professional design that converts",
      "Scalable design systems"
    ],
    pricing: "Starting at $1,500 for logo refresh, $3,500-$8,000 for complete brand systems"
  },
  {
    icon: Smartphone,
    title: "Web & Mobile App Development",
    slug: "web-mobile-development",
    keywords: ["web development", "mobile app development", "React development", "Next.js", "React Native"],
    description: "Custom web applications and mobile apps built with modern technologies. Scalable, fast, and production-ready.",
    services: [
      "Custom Web Application Development",
      "Mobile App Development (iOS & Android)",
      "E-Commerce Platforms",
      "SaaS Application Development",
      "Progressive Web Apps (PWA)",
      "Codebase Refactoring & Optimization"
    ],
    benefits: [
      "High-performance, scalable applications",
      "Cross-platform mobile apps",
      "Modern tech stack (React, Next.js, Node.js)",
      "Production-ready code"
    ],
    pricing: "Starting at $1,500 for fixes, $3,500-$15,000+ for new builds"
  },
  {
    icon: Cpu,
    title: "AI Integration & Automation",
    slug: "ai-integration-automation",
    keywords: ["AI integration", "artificial intelligence", "AI automation", "chatbot development", "machine learning"],
    description: "Custom AI solutions and automation to streamline workflows, enhance user experiences, and drive efficiency.",
    services: [
      "AI Chatbot Development",
      "Workflow Automation",
      "Predictive Analytics Integration",
      "Custom AI Model Integration",
      "AI-Powered Search & Recommendations",
      "Content Generation Systems"
    ],
    benefits: [
      "Automated workflows and processes",
      "Enhanced user experiences",
      "Data-driven insights and predictions",
      "Scalable AI infrastructure"
    ],
    pricing: "Starting at $3,500 for basic AI integration, $8,000-$15,000+ for complex AI systems"
  },
  {
    icon: Blocks,
    title: "Blockchain & Web3 Development",
    slug: "blockchain-web3-development",
    keywords: ["blockchain development", "Web3", "NFT marketplace", "DeFi", "smart contracts", "crypto"],
    description: "Secure, decentralized Web3 platforms, NFT marketplaces, and DeFi applications built for the future economy.",
    services: [
      "NFT Marketplace Development",
      "DeFi Platform Development",
      "Smart Contract Development",
      "Web3 Application Development",
      "Blockchain Integration",
      "Crypto Wallet Integration"
    ],
    benefits: [
      "Secure, decentralized architecture",
      "Future-proof Web3 solutions",
      "Smart contract security",
      "Scalable blockchain infrastructure"
    ],
    pricing: "Starting at $5,000 for smart contracts, $8,000-$15,000+ for full platforms"
  },
  {
    icon: TrendingUp,
    title: "Growth Marketing & SEO",
    slug: "growth-marketing-seo",
    keywords: ["SEO", "growth marketing", "conversion optimization", "funnel optimization", "AEO", "answer engine optimization"],
    description: "Data-driven growth marketing, SEO, and conversion optimization that drives real results and measurable ROI.",
    services: [
      "SEO & Technical SEO",
      "Answer Engine Optimization (AEO)",
      "Conversion Rate Optimization (CRO)",
      "Funnel Optimization",
      "Paid Advertising Campaigns",
      "Email Marketing Automation",
      "Analytics Setup & Tracking"
    ],
    benefits: [
      "20-40% conversion rate improvements",
      "Increased organic traffic",
      "Data-driven marketing decisions",
      "Measurable ROI and results"
    ],
    pricing: "Starting at $1,500 for audits, $3,500-$8,000 for complete revamps, $2,500+/month retainers"
  },
  {
    icon: Code2,
    title: "Audit & Optimization Services",
    slug: "audit-optimization",
    keywords: ["brand audit", "code audit", "website audit", "performance optimization", "technical audit"],
    description: "Comprehensive audits of design, code, and marketing systems to identify issues and optimize for performance, conversions, and revenue.",
    services: [
      "Brand & Design Audit",
      "Codebase & Technical Audit",
      "Marketing & Funnel Audit",
      "Performance Optimization",
      "Security Audit",
      "SEO Audit"
    ],
    benefits: [
      "Identify what's broken",
      "Prioritized improvement roadmap",
      "Performance and conversion gains",
      "Actionable insights and recommendations"
    ],
    pricing: "Starting at $1,500 for single-area audits, $3,500+ for comprehensive audits"
  }
];

export function SEOContent() {
  return (
    <section className="py-32 bg-background/50 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium tracking-widest uppercase mb-6"
          >
            Our Services
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-display font-medium text-white mb-6">
            Premium Digital Services <span className="italic font-serif-display text-primary">Across All Categories</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From brand design to blockchain development, we deliver world-class solutions across every digital category.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryContent.map((category, index) => (
            <motion.article
              key={category.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="premium-card p-8 group"
              itemScope
              itemType="https://schema.org/Service"
            >
              <div className="mb-6">
                <div className="mb-4 p-3 rounded-xl bg-white/5 w-fit group-hover:bg-primary/10 transition-colors">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-3" itemProp="name">
                  {category.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed" itemProp="description">
                  {category.description}
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3">Services Include:</h4>
                <ul className="space-y-2">
                  {category.services.map((service, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3">Key Benefits:</h4>
                <ul className="space-y-2">
                  {category.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-white/5">
                <p className="text-xs text-primary font-medium mb-2">Pricing:</p>
                <p className="text-sm text-muted-foreground">{category.pricing}</p>
              </div>

              {/* Hidden keywords for SEO */}
              <div className="hidden" aria-hidden="true">
                {category.keywords.join(", ")}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

