import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, BarChart3, Globe2, LayoutTemplate } from "lucide-react";
import heroBg from "@assets/generated_images/high-end_sophisticated_dark_mode_luxury_interface_background.png";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Luxury Digital Innovation Background"
          className="w-full h-full object-cover opacity-30 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/90 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-sm font-medium text-primary mb-10 mx-auto"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="tracking-widest uppercase text-xs font-bold">Fix Your Broken Brand</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-6xl md:text-8xl lg:text-9xl font-display font-medium tracking-tight text-white mb-8 leading-[1] drop-shadow-2xl"
        >
          Design. Code. <br className="hidden md:block" />
          <span className="italic font-serif-display premium-text-gradient">Marketing.</span> Done Right.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-xl md:text-2xl text-muted-foreground/80 max-w-3xl mx-auto mb-12 font-light leading-relaxed"
        >
          Most agencies over-design and underperform. We audit what's broken, rebuild what matters, and optimize every layer of your brand's system for <span className="text-white font-medium">real revenue</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-background rounded-none px-10 h-16 text-lg font-bold tracking-wide transition-all duration-300 transform hover:-translate-y-1 shadow-[0_0_20px_-5px_hsl(var(--primary)/0.5)]">
            Start Your Audit
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="outline" size="lg" className="border-white/10 text-white hover:bg-white/5 hover:border-white/20 rounded-none px-10 h-16 text-lg font-medium backdrop-blur-sm transition-all duration-300">
            Explore Services
          </Button>
        </motion.div>

        {/* Value Props */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto border-t border-white/5 pt-12"
        >
          {[
            { icon: ShieldCheck, label: "Codebase Fix", desc: "Stable & Scalable" },
            { icon: LayoutTemplate, label: "UX Rebuild", desc: "High-Converting" },
            { icon: BarChart3, label: "Funnel Revamp", desc: "Data-Driven" },
            { icon: Zap, label: "Performance", desc: "Speed Optimized" },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-3 group cursor-default">
              <div className="p-3 rounded-full bg-white/5 border border-white/5 group-hover:border-primary/30 transition-colors duration-500">
                <item.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors duration-500" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">{item.label}</h4>
                <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
