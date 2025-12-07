import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

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
    subtitle: "Design or Code Fix",
    price: "$1,500",
    range: "$1.5k – $2.5k",
    description: "Perfect for early startups needing a specific fix.",
    features: [
      "Single Area Audit (Design or Code)",
      "UI/UX Polish or Frontend Fix",
      "Performance Optimization",
      "2-Week Turnaround",
      "Direct Founder Support"
    ],
    cta: "Get Started",
    popular: false
  },
  {
    name: "Standard",
    subtitle: "Design + Dev + Funnel",
    price: "$3,500",
    range: "$3.5k – $6k",
    description: "For funded startups needing a complete overhaul.",
    features: [
      "Full System Audit",
      "Complete Design Rebuild",
      "Frontend & Backend Refactor",
      "Funnel Optimization",
      "Analytics Setup (GA4/Pixel)",
      "4-Week Turnaround"
    ],
    cta: "Start Rebuild",
    popular: true
  },
  {
    name: "Elite",
    subtitle: "Full System Overhaul",
    price: "$8,000",
    range: "$8k – $15k+",
    description: "For growth-focused brands demanding perfection.",
    features: [
      "Enterprise-Grade Audit",
      "Premium Brand Identity System",
      "Scalable Architecture Rebuild",
      "Advanced Marketing Funnels",
      "CRO & A/B Testing Setup",
      "Priority 24/7 Support",
      "6-8 Week Turnaround"
    ],
    cta: "Contact for Quote",
    popular: false
  }
];

const retainerPlans: Plan[] = [
  {
    name: "Growth Partner",
    subtitle: "Ongoing Optimization",
    price: "$2,500",
    period: "/month",
    description: "Continuous improvement for stable growth.",
    features: [
      "Weekly Performance Audits",
      "Ongoing Design Iterations",
      "Code Maintenance & Updates",
      "Monthly Strategy Calls",
      "Priority Support"
    ],
    cta: "Start Retainer",
    popular: false
  },
  {
    name: "Scale Partner",
    subtitle: "Aggressive Growth",
    price: "$5,000",
    period: "/month",
    description: "Full-service team extension for rapid scaling.",
    features: [
      "Daily Optimization Sprints",
      "Full Stack Dev & Design Team",
      "Advanced Funnel Management",
      "Weekly Strategy Workshops",
      "Direct Slack Access",
      "Quarterly Business Reviews"
    ],
    cta: "Partner With Us",
    popular: true
  }
];

export function Pricing() {
  const [isRetainer, setIsRetainer] = useState(false);

  return (
    <section id="pricing" className="py-32 relative bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.05),transparent_50%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-display font-medium text-white mb-6">
            Transparent, <span className="italic text-primary">Value-Based</span> Pricing.
          </h2>
          <p className="text-xl text-muted-foreground mb-10">
            Whether you need a one-time rescue or a long-term growth partner, we have a model that fits your stage.
          </p>

          {/* Toggle Switch */}
          <div className="inline-flex items-center p-1 bg-white/5 border border-white/10 rounded-full backdrop-blur-md">
            <button
              onClick={() => setIsRetainer(false)}
              className={cn(
                "px-8 py-3 rounded-full text-sm font-bold tracking-wide transition-all duration-300",
                !isRetainer 
                  ? "bg-primary text-background shadow-lg" 
                  : "text-muted-foreground hover:text-white"
              )}
            >
              One-Off Projects
            </button>
            <button
              onClick={() => setIsRetainer(true)}
              className={cn(
                "px-8 py-3 rounded-full text-sm font-bold tracking-wide transition-all duration-300",
                isRetainer 
                  ? "bg-primary text-background shadow-lg" 
                  : "text-muted-foreground hover:text-white"
              )}
            >
              Monthly Retainer
            </button>
          </div>
        </div>

        <div className={cn(
          "grid gap-8 transition-all duration-500",
          isRetainer ? "md:grid-cols-2 max-w-4xl mx-auto" : "lg:grid-cols-3"
        )}>
          {(isRetainer ? retainerPlans : oneOffPlans).map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn(
                "relative p-8 md:p-10 flex flex-col h-full premium-card group",
                plan.popular ? "bg-card/60 border-primary/20" : "bg-card/20"
              )}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 -mt-3 -mr-3 px-4 py-1 bg-primary text-background text-xs font-bold uppercase tracking-wider rounded-full shadow-lg">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-sm text-primary font-medium uppercase tracking-wider mb-6">{plan.subtitle}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl md:text-5xl font-display font-medium text-white">
                    {plan.price}
                  </span>
                  {plan.range && <span className="text-sm text-muted-foreground ml-2">({plan.range})</span>}
                  {plan.period && <span className="text-sm text-muted-foreground">{plan.period}</span>}
                </div>
                <p className="text-muted-foreground mt-4 leading-relaxed">
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-white/80">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="leading-tight">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={cn(
                  "w-full h-14 text-base font-bold tracking-wide rounded-full transition-all duration-300 group-hover:translate-y-[-2px]",
                  plan.popular 
                    ? "bg-primary text-background hover:bg-primary/90 shadow-[0_0_20px_-5px_hsl(var(--primary)/0.3)]" 
                    : "bg-white/10 text-white hover:bg-white/20"
                )}
              >
                {plan.cta} <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
