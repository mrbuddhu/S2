import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { scrollReveal, viewportOptions } from "@/lib/animations";

const comparison = [
  {
    feature: "Project Timeline",
    otherAgencies: "3-6 months",
    sanganak: "2-8 weeks",
    sanganakHighlight: true
  },
  {
    feature: "Support & Maintenance",
    otherAgencies: "Limited support",
    sanganak: "Dedicated support",
    sanganakHighlight: true
  },
  {
    feature: "Technology Stack",
    otherAgencies: "Outdated tech",
    sanganak: "Cutting-edge",
    sanganakHighlight: true
  },
  {
    feature: "Design Quality",
    otherAgencies: "Template-based",
    sanganak: "Bespoke luxury",
    sanganakHighlight: true
  },
  {
    feature: "Project Management",
    otherAgencies: "Poor communication",
    sanganak: "Transparent process",
    sanganakHighlight: true
  }
];

export function WhyChoose() {
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
            Why Choose SanganakHQ
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-display font-medium text-white mb-6">
            See how we deliver <span className="italic font-serif-display text-primary">3x faster</span> launches and 30% conversion lifts vs traditional agencies
          </h2>
          <p className="text-lg text-muted-foreground">
            We don't just build/design Products—we create digital experiences that drive results. Our premium approach ensures your project stands out in today's competitive landscape.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOptions}
            className="premium-card overflow-hidden"
          >
            <div className="grid grid-cols-3 gap-0 border-b border-white/5">
              {/* Header */}
              <div className="p-6 bg-white/[0.02] border-r border-white/5">
                <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Features</h3>
              </div>
              <div className="p-6 bg-white/[0.02] border-r border-white/5">
                <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Other Agencies</h3>
              </div>
              <div className="p-6 bg-primary/10 border-primary/20">
                <h3 className="text-sm font-bold text-primary uppercase tracking-wider">SanganakHQ Premium</h3>
              </div>
            </div>

            {/* Rows */}
            {comparison.map((row, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewportOptions}
                transition={{ delay: index * 0.1 }}
                className="grid grid-cols-3 gap-0 border-b border-white/5 last:border-b-0 hover:bg-white/[0.02] transition-colors"
              >
                <div className="p-6 border-r border-white/5">
                  <p className="text-white font-medium">{row.feature}</p>
                </div>
                <div className="p-6 border-r border-white/5 flex items-center gap-2">
                  <X className="w-4 h-4 text-destructive" />
                  <p className="text-muted-foreground text-sm">{row.otherAgencies}</p>
                </div>
                <div className={`p-6 flex items-center gap-2 ${row.sanganakHighlight ? 'bg-primary/5' : ''}`}>
                  <Check className="w-4 h-4 text-primary" />
                  <p className="text-white font-medium text-sm">{row.sanganak}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

