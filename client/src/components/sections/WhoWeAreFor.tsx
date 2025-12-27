import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { scrollReveal, viewportOptions } from "@/lib/animations";

export function WhoWeAreFor() {
  return (
    <section className="py-32 bg-background/50 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOptions}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium tracking-widest uppercase mb-6"
          >
            Who We're Built For
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-display font-medium text-white mb-6">
            We work with <span className="text-gold-gradient">serious operators</span> only.
          </h2>
          <p className="text-lg text-muted-foreground/90 font-sans font-normal mb-8">
            You're a fit if:
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOptions}
            className="premium-card p-8"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="p-2 rounded-full bg-primary/20">
                <Check className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-display font-medium text-white mb-2">You're preparing to scale or raise</h3>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOptions}
            className="premium-card p-8"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="p-2 rounded-full bg-primary/20">
                <Check className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-display font-medium text-white mb-2">Your product has traction but systems are breaking</h3>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOptions}
            className="premium-card p-8"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="p-2 rounded-full bg-primary/20">
                <Check className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-display font-medium text-white mb-2">You're tired of managing multiple agencies</h3>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOptions}
            className="premium-card p-8"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="p-2 rounded-full bg-primary/20">
                <Check className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-display font-medium text-white mb-2">You want a premium digital presence that converts</h3>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOptions}
          className="mt-12 text-center"
        >
          <p className="text-lg text-muted-foreground/90 font-sans font-normal">
            We're not a fit for bargain work or one-off logo jobs.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

