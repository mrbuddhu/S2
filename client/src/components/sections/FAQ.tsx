import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "What sets SanganakHQ apart from other digital agencies?",
    a: "We pair engineering-first execution with premium design and conversion strategy. You get senior talent on every project, measurable ROI targets, and transparent delivery with zero fluff."
  },
  {
    q: "How do you ensure the success of digital projects?",
    a: "Clear goals, weekly delivery cadence, and instrumentation from day one. We ship in validated increments, measure adoption and revenue impact, and course-correct fast with data."
  },
  {
    q: "What industries do you specialize in?",
    a: "Premium D2C, SaaS, fintech, health, e‑commerce, and emerging tech (AI/Web3). The common thread: high-stakes experiences where design, performance, and trust all matter."
  },
  {
    q: "How do you handle project timelines and budgets?",
    a: "We scope by outcomes and complexity, then fix milestones with weekly demos. No surprise overages—changes are estimated up front, and we keep a transparent burn and backlog."
  },
  {
    q: "What ongoing support do you provide after launch?",
    a: "Stability, optimizations, and growth. We monitor performance, ship iterative improvements, and keep design/engineering on retainer so you don’t lose momentum post-launch."
  }
];

export function FAQ() {
  return (
    <section id="faq" className="py-32 bg-background border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium tracking-widest uppercase mb-6"
          >
            Questions
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-display font-medium text-white mb-6">
            <span className="text-gold-gradient">Everything</span> you need to know about <span className="italic text-gold-gradient font-serif-display">working with us</span>.
          </h2>
          <p className="text-xl text-muted-foreground/90 font-sans font-normal leading-relaxed">
            Clear answers to the questions founders ask most about our process and partnership.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="premium-card p-6 md:p-8"
          >
            <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-6 flex items-center gap-3">
              <div className="h-1 w-8 bg-primary"></div>
              Everything you need to know
            </h3>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-white/5">
                  <AccordionTrigger className="text-left text-white hover:text-primary transition-colors">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground/90 font-sans font-normal leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="premium-card p-6 md:p-8">
              <p className="text-sm font-medium text-primary uppercase tracking-widest mb-2">
                Not Sure Where to Start?
              </p>
              <p className="text-muted-foreground/90 font-sans font-normal">
                Book a strategy call. We'll audit your current setup and tell you — honestly — what to fix, what to ignore, and what will move revenue fastest.
              </p>
            </div>
            <div className="flex justify-center">
              <a
                href="https://cal.com/sanganakhq"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-[#c6a255] via-[#e9d5a1] to-[#c6a255] hover:from-[#d4b575] hover:via-[#f0dfb8] hover:to-[#d4b575] text-background font-semibold transition-all shadow-[0_0_20px_-5px_rgba(198,162,85,0.5)]"
              >
                Book a Strategy Call
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

