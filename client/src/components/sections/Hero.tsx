import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle } from "lucide-react";
import heroBg from "@assets/generated_images/futuristic_abstract_digital_network_background.png";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Digital Innovation Background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-primary mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Global Innovation Growth Boutique
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight text-white mb-6 leading-[1.1]"
        >
          Ship faster, lift <br className="hidden md:block" />
          <span className="text-gradient-primary">conversions</span>, and lead.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          Elite solutions delivered in weeks, not months. We build branding, apps, and growth engines for market leaders.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button size="lg" className="bg-white text-black hover:bg-gray-200 rounded-full px-8 h-14 text-lg font-medium w-full sm:w-auto">
            Book Strategy Call
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 rounded-full px-8 h-14 text-lg font-medium w-full sm:w-auto">
            View Case Studies
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 grid grid-cols-3 gap-8 max-w-3xl mx-auto border-t border-white/10 pt-8"
        >
          <div>
            <h3 className="text-3xl font-display font-bold text-white">15+</h3>
            <p className="text-sm text-muted-foreground mt-1">Global Clients</p>
          </div>
          <div>
            <h3 className="text-3xl font-display font-bold text-white">6</h3>
            <p className="text-sm text-muted-foreground mt-1">Continents</p>
          </div>
          <div>
            <h3 className="text-3xl font-display font-bold text-white">50+</h3>
            <p className="text-sm text-muted-foreground mt-1">Deliveries</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
