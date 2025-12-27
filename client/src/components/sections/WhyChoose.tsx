import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { scrollReveal, viewportOptions } from "@/lib/animations";

const comparison = [
  {
    feature: "Timeline",
    otherAgencies: "3-6 months",
    sanganak: "2-8 weeks",
    sanganakHighlight: true
  },
  {
    feature: "Communication",
    otherAgencies: "Account managers",
    sanganak: "Founder-led",
    sanganakHighlight: true
  },
  {
    feature: "Tech Stack",
    otherAgencies: "Outdated",
    sanganak: "Modern",
    sanganakHighlight: true
  },
  {
    feature: "Design",
    otherAgencies: "Templates",
    sanganak: "Design-first thinking",
    sanganakHighlight: true
  },
  {
    feature: "Focus",
    otherAgencies: "Deliverables",
    sanganak: "Outcomes",
    sanganakHighlight: true
  },
  {
    feature: "Speed",
    otherAgencies: "Slow with quality",
    sanganak: "Fast with quality",
    sanganakHighlight: true
  }
];

export function WhyChoose() {
  return (
    <section className="py-32 bg-background/50 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium tracking-widest uppercase mb-6"
          >
            The Advantage
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-display font-medium text-white mb-6">
            <span className="text-gold-gradient">Founder-led.</span> Senior execution. <span className="italic text-gold-gradient font-serif-display">Results owned.</span>
          </h2>
          <p className="text-xl text-muted-foreground/90 font-sans font-normal leading-relaxed">
            You work directly with experienced operators who refuse to ship average work.
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
                  <p className="text-white font-sans font-medium">{row.feature}</p>
                </div>
                <div className="p-6 border-r border-white/5 flex items-center gap-2">
                  <X className="w-4 h-4 text-destructive" />
                  <p className="text-muted-foreground/90 text-sm font-sans">{row.otherAgencies}</p>
                </div>
                <div className={`p-6 flex items-center gap-2 ${row.sanganakHighlight ? 'bg-primary/5' : ''}`}>
                  <Check className="w-4 h-4 text-primary" />
                  <p className="text-white font-sans font-medium text-sm">{row.sanganak}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

