import { motion } from "framer-motion";
import { Palette, Smartphone, Cpu, Blocks, TrendingUp, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: <Palette className="w-8 h-8 text-pink-500" />,
    title: "Branding & Design",
    description: "Crafting unique identities that resonate. We build visual languages that speak louder than words.",
  },
  {
    icon: <Smartphone className="w-8 h-8 text-blue-500" />,
    title: "Web & Mobile Apps",
    description: "High-performance, scalable applications built with cutting-edge tech stacks (React, Native, Node).",
  },
  {
    icon: <Cpu className="w-8 h-8 text-purple-500" />,
    title: "Artificial Intelligence",
    description: "Leveraging AI to automate workflows, predict trends, and create smarter user experiences.",
  },
  {
    icon: <Blocks className="w-8 h-8 text-emerald-500" />,
    title: "Blockchain",
    description: "Secure, decentralized solutions for the next generation of the internet (Web3, NFTs, DeFi).",
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-orange-500" />,
    title: "Growth Marketing",
    description: "Data-driven strategies to acquire, retain, and monetize users. SEO, paid ads, and funnels.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Our Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            We don't just build software; we build businesses. Our holistic approach ensures every pixel and line of code drives growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 rounded-2xl group cursor-pointer"
            >
              <div className="mb-6 p-4 rounded-xl bg-white/5 w-fit group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-3 flex items-center gap-2">
                {service.title}
                <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground" />
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
