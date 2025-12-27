import { motion } from "framer-motion";
import { Palette, Smartphone, Cpu, Blocks, TrendingUp, ArrowUpRight } from "lucide-react";

const capabilities = [
  {
    icon: <Palette className="w-6 h-6" />,
    title: "Branding & Design",
    description: "Crafting unique identities. Visual languages that speak louder than words.",
    color: "text-pink-500"
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Web & Mobile Apps",
    description: "High-performance, scalable applications built with React, Native, and Node.",
    color: "text-blue-500"
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "Artificial Intelligence",
    description: "Automating workflows and predicting trends with custom AI integrations.",
    color: "text-purple-500"
  },
  {
    icon: <Blocks className="w-6 h-6" />,
    title: "Blockchain Solutions",
    description: "Secure, decentralized Web3, NFT, and DeFi platforms for the future economy.",
    color: "text-emerald-500"
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Growth Marketing",
    description: "Data-driven acquisition. SEO, paid ads, and funnels that convert.",
    color: "text-orange-500"
  }
];

export function CoreCapabilities() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16 md:flex md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-display font-medium text-white mb-6">
              <span className="text-gold-gradient">Core</span> <span className="italic font-serif-display text-gold-gradient">Capabilities</span>
            </h2>
            <p className="text-lg text-muted-foreground/90 font-sans font-normal">
              Beyond fixing broken brands, we build world-class digital products from scratch. 
              Our engineering DNA runs deep across these five pillars.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {capabilities.map((cap, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300"
            >
              <div className={`mb-4 p-3 rounded-xl bg-white/5 w-fit ${cap.color} group-hover:scale-110 transition-transform duration-300`}>
                {cap.icon}
              </div>
              <h3 className="text-lg font-display font-bold text-white mb-2 flex items-center justify-between">
                {cap.title}
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground" />
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {cap.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
