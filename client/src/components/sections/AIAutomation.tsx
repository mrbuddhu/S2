import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Workflow, Brain } from "lucide-react";
import { viewportOptions } from "@/lib/animations";

const automationFeatures = [
  {
    icon: Zap,
    title: "Lead & operations automation",
  },
  {
    icon: Workflow,
    title: "Internal tools & copilots",
  },
  {
    icon: Brain,
    title: "Intelligent workflows & reporting",
  },
];

export function AIAutomation() {
  return (
    <section className="py-32 bg-background/50 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOptions}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-6xl font-display font-medium text-white mb-6">
              <span className="text-gold-gradient">AI & Automation</span> Layer
            </h2>
            <p className="text-xl text-muted-foreground/90 font-sans font-normal leading-relaxed mb-4">
              Where it makes sense, we deploy automation to remove manual work and compound results.
            </p>
            <p className="text-lg text-gold-gradient font-sans font-semibold">
              AI is not a product we sell — it's how we execute faster and smarter across design, engineering, and growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {automationFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOptions}
                transition={{ delay: index * 0.1 }}
                className="premium-card p-6 text-center"
              >
                <feature.icon className="w-8 h-8 text-gold-gradient mx-auto mb-4" />
                <p className="text-sm text-white/90 font-sans font-medium">{feature.title}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button
              variant="outline"
              className="border-white/10 hover:bg-primary/5 hover:border-primary/30 hover:text-gold-gradient text-white transition-all"
              onClick={() => {
                window.location.href = '#contact';
              }}
            >
              See how automation fits your system <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

