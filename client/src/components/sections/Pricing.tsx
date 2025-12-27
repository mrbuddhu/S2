import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { cardHover, viewportOptions } from "@/lib/animations";
import { ContactForm } from "./ContactForm";

// Define a unified interface for the plan
interface Plan {
  name: string;
  subtitle: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  popular: boolean;
  // Optional properties
  range?: string;
  period?: string;
}

const oneOffPlans: Plan[] = [
  {
    name: "Starter",
    subtitle: "Focused design or code fixes",
    price: "From $1,500",
    range: "",
    description: "Focused design or code fixes",
    features: [
      "Single area audit & fix",
      "UI/UX or frontend improvements",
      "Performance optimization",
      "2-week turnaround"
    ],
    cta: "View Project Scope",
    popular: false
  },
  {
    name: "Standard",
    subtitle: "Full system rebuild",
    price: "From $3,500",
    range: "",
    description: "Full system rebuild",
    features: [
      "Complete system audit",
      "Design, development, funnel optimization",
      "Analytics & tracking setup",
      "4-week turnaround"
    ],
    cta: "View Project Scope",
    popular: true
  },
  {
    name: "Elite",
    subtitle: "Enterprise-grade systems",
    price: "From $8,000",
    range: "",
    description: "Enterprise-grade systems",
    features: [
      "Advanced architecture",
      "Premium brand & design system",
      "Advanced CRO & funnels",
      "Priority delivery"
    ],
    cta: "View Project Scope",
    popular: false
  }
];

const retainerPlans: Plan[] = [
  {
    name: "Ongoing Optimization",
    subtitle: "Continuous improvement for stable growth",
    price: "$2,500",
    period: "/month",
    description: "Continuous improvement for stable growth",
    features: [
      "Weekly performance audits",
      "Ongoing design iterations",
      "Code maintenance & updates",
      "Monthly strategy calls",
      "Includes automation and AI-assisted workflows"
    ],
    cta: "View Retainer Scope",
    popular: false
  },
  {
    name: "Scale Partner",
    subtitle: "Full-stack team extension for aggressive scaling",
    price: "$5,000",
    period: "/month",
    description: "Full-stack team extension for aggressive scaling",
    features: [
      "Daily optimization sprints",
      "Full-stack dev & design team",
      "Advanced automation, funnels",
      "Direct founder access",
      "Weekly strategy workshops",
      "Quarterly business reviews"
    ],
    cta: "View Retainer Scope",
    popular: true
  }
];

export function Pricing() {
  const [isRetainer, setIsRetainer] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section 
      ref={sectionRef}
      id="pricing" 
      className="py-32 relative bg-background"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.05),transparent_50%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium tracking-widest uppercase mb-6"
          >
            Investment
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-display font-medium text-white mb-6">
            <span className="text-gold-gradient">Transparent</span>, <span className="italic text-gold-gradient font-serif-display">Value-Based</span> <span className="text-gold-gradient">Pricing</span>.
          </h2>
          <p className="text-xl text-muted-foreground/90 font-sans font-normal leading-relaxed">
            We price for outcomes, not hours.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <motion.div 
            className="inline-flex items-center p-1 bg-white/5 border border-white/10 rounded-full backdrop-blur-md"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewportOptions}
            transition={{ duration: 0.5 }}
          >
          <motion.button
            onClick={() => setIsRetainer(false)}
            className={cn(
              "px-8 py-3 rounded-full text-sm font-bold tracking-wide transition-all font-sans",
              !isRetainer 
                ? "bg-gradient-to-r from-[#c6a255] via-[#e9d5a1] to-[#c6a255] text-background shadow-lg" 
                : "text-muted-foreground/90 hover:text-gold-gradient"
            )}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            One-Off Projects
          </motion.button>
          <motion.button
            onClick={() => setIsRetainer(true)}
            className={cn(
              "px-8 py-3 rounded-full text-sm font-bold tracking-wide transition-all font-sans",
              isRetainer 
                ? "bg-gradient-to-r from-[#c6a255] via-[#e9d5a1] to-[#c6a255] text-background shadow-lg" 
                : "text-muted-foreground/90 hover:text-gold-gradient"
            )}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            Monthly Retainer
          </motion.button>
          </motion.div>
        </div>

        <div className={cn(
          "grid gap-8 transition-all duration-500",
          isRetainer ? "md:grid-cols-2 max-w-4xl mx-auto" : "lg:grid-cols-3"
        )}>
          {(isRetainer ? retainerPlans : oneOffPlans).map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={viewportOptions}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
              variants={cardHover}
              whileHover="hover"
              whileTap="tap"
              style={{ y: index % 2 === 0 ? y : undefined }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={cn(
                "relative p-8 md:p-10 flex flex-col h-full premium-card group cursor-pointer",
                plan.popular ? "bg-card/60 border-primary/20" : "bg-card/20"
              )}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 -mt-3 -mr-3 px-4 py-1 bg-gradient-to-r from-[#c6a255] via-[#e9d5a1] to-[#c6a255] text-background text-xs font-bold uppercase tracking-wider rounded-full shadow-lg">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-sm text-primary font-medium uppercase tracking-wider mb-6">{plan.subtitle}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl md:text-5xl font-display font-medium text-white">
                    {plan.price}
                  </span>
                  {plan.period && <span className="text-sm text-muted-foreground">{plan.period}</span>}
                </div>
                <p className="text-muted-foreground/90 font-sans font-normal mt-4 leading-relaxed">
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 flex-grow mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-white/90 font-sans">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant="outline"
                className={cn(
                  "w-full px-8 py-3 rounded-full text-sm font-bold tracking-wide transition-all font-sans border-white/10 hover:bg-primary/5 hover:border-primary/30 hover:text-gold-gradient text-white",
                  hoveredIndex === index && "bg-gradient-to-r from-[#c6a255] via-[#e9d5a1] to-[#c6a255] text-background shadow-lg border-none hover:shadow-lg hover:shadow-[#c6a255]/25"
                )}
                onClick={() => {
                  setSelectedPlan(plan.name);
                  setContactOpen(true);
                }}
              >
                Book a Call <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
      <ContactForm 
        open={contactOpen} 
        onOpenChange={setContactOpen}
        defaultProjectType={selectedPlan ? `pricing-${selectedPlan.toLowerCase()}` : ""}
      />
    </section>
  );
}
