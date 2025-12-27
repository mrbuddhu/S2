import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { 
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { cardHover, viewportOptions } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Design",
    headline: "Clear positioning and conversion-focused design that builds trust and drives action.",
    cta: "Fix Design",
    features: [
      "Brand positioning & identity",
      "UI/UX for web and products",
      "Scalable design systems"
    ]
  },
  {
    title: "Code",
    headline: "Fast, scalable, production-ready systems built to grow without technical debt.",
    cta: "Fix Tech",
    features: [
      "Websites & web apps",
      "Mobile apps & SaaS platforms",
      "AI-powered internal tools & automation"
    ]
  },
  {
    title: "Marketing",
    headline: "Predictable acquisition systems focused on measurable ROI.",
    cta: "Fix Growth",
    features: [
      "Funnels & CRO",
      "Paid ads, SEO, lifecycle systems",
      "Analytics & experimentation"
    ]
  }
];

export function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

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
            <span className="text-primary font-medium tracking-widest uppercase text-sm">What We Do</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-display font-medium text-white mb-6">
            We don't sell isolated services.
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground/90 font-sans font-normal leading-relaxed">
            We build and repair <span className="text-white">growth systems</span> — or fix individual parts when needed.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
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
              className={cn(
                "relative p-8 md:p-10 flex flex-col h-full premium-card group"
              )}
            >
              <div className="mb-6">
                <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">{service.title}</h3>
                <p className="text-lg text-muted-foreground/90 font-sans font-normal leading-relaxed mb-6">
                  {service.headline}
                </p>
              </div>

              <ul className="space-y-3 flex-grow">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-white/90 font-sans">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
