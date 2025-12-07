import { motion } from "framer-motion";
import { 
  ScanSearch, 
  Palette, 
  Code2, 
  Megaphone, 
  LineChart, 
  Rocket 
} from "lucide-react";

const services = [
  {
    icon: ScanSearch,
    title: "Brand / App / Campaign Audit",
    description: "A full teardown of your design, code, and marketing systems to identify what's not working — from UX flow and copy to funnel performance and ad strategy.",
    number: "01"
  },
  {
    icon: Palette,
    title: "Design & Experience Rebuild",
    description: "Redesign AI-generated or poorly structured visuals into a professional, high-converting brand identity and UI/UX system that actually makes users stay.",
    number: "02"
  },
  {
    icon: Code2,
    title: "Codebase Fix & Optimization",
    description: "Refactor broken or messy frontend/back-end code for speed, stability, and performance. Delivered clean, scalable, and production-ready.",
    number: "03"
  },
  {
    icon: Megaphone,
    title: "Marketing & Funnel Revamp",
    description: "Rebuild ad creatives, email flows, and landing pages with data-driven copy and modern funnel logic to increase conversions.",
    number: "04"
  },
  {
    icon: LineChart,
    title: "Conversion & Performance Testing",
    description: "Comprehensive testing of every stage — design, dev, and marketing — with analytics setup (GA4, Meta Pixel, etc.) and improvement reports.",
    number: "05"
  },
  {
    icon: Rocket,
    title: "Optional: Growth Kickstart",
    description: "A 30-day launch or re-launch campaign with optimized content, ad sets, and tracking dashboards to drive immediate traction.",
    number: "06"
  }
];

export function Services() {
  return (
    <section id="services" className="py-32 bg-background border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="mb-20 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-[1px] w-12 bg-primary"></div>
            <span className="text-primary font-medium tracking-widest uppercase text-sm">What's Included</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-display font-medium text-white mb-8">
            Comprehensive <span className="italic font-serif-display text-muted-foreground">Repair</span> System.
          </h2>
          <p className="text-xl text-muted-foreground/80 max-w-2xl font-light">
            We don't just patch holes. We rebuild the foundation. A holistic approach to fixing your digital presence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute -left-4 top-0 text-8xl font-display font-bold text-white/[0.02] -z-10 group-hover:text-primary/[0.05] transition-colors duration-500 select-none">
                {service.number}
              </div>
              
              <div className="mb-6 inline-flex p-4 rounded-none border border-white/10 bg-white/[0.02] backdrop-blur-sm group-hover:border-primary/40 transition-colors duration-300">
                <service.icon className="w-8 h-8 text-white/80 group-hover:text-primary transition-colors duration-300" />
              </div>
              
              <h3 className="text-2xl font-display font-medium text-white mb-4 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed font-light border-l border-white/10 pl-4 group-hover:border-primary/30 transition-colors duration-300">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
