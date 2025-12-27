import { motion } from "framer-motion";
import { viewportOptions } from "@/lib/animations";

export function Problem() {
  return (
    <section className="py-32 bg-background border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOptions}
            className="text-4xl md:text-6xl font-display font-medium text-white mb-8"
          >
            <span className="text-gold-gradient">Broken systems</span> kill growth faster than bad ideas.
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOptions}
            transition={{ delay: 0.1 }}
            className="space-y-6 text-lg md:text-xl text-muted-foreground/90 font-sans font-normal leading-relaxed"
          >
            <p>
              When design, code, and marketing work in silos, you're not building a business—you're managing agencies.
            </p>
            <p className="text-white font-medium">
              We own the entire stack, integrate your systems, and build the growth engine that scales.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

