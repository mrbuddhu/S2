import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const cases = [
  {
    title: "MedicoBuddy",
    category: "Healthcare SaaS",
    stats: ["$120K Revenue", "1.8K+ Users"],
    description: "A comprehensive healthcare management system connecting doctors and patients.",
    gradient: "from-blue-600 to-cyan-500",
  },
  {
    title: "Interio",
    category: "Marketplace Platform",
    stats: ["$85K Revenue", "1.2K+ Users"],
    description: "An interior design marketplace streamlining the renovation process.",
    gradient: "from-purple-600 to-pink-500",
  },
  {
    title: "ChainWallet",
    category: "Web3 Fintech",
    stats: ["Secure SSO", "Crypto Integration"],
    description: "Modern crypto wallet platform with seamless SSO integration.",
    gradient: "from-emerald-600 to-teal-500",
  },
];

export function CaseStudies() {
  return (
    <section id="work" className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Featured Work
            </h2>
            <p className="text-xl text-muted-foreground max-w-xl">
              Real results. We build products that generate revenue and engage users.
            </p>
          </div>
          <Button variant="link" className="text-white text-lg p-0 h-auto hover:text-primary transition-colors">
            View All Projects <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {cases.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative rounded-2xl overflow-hidden aspect-[4/5] cursor-pointer"
            >
              {/* Background Gradient Placeholder */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-sm font-medium text-primary mb-2 block uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="text-3xl font-display font-bold text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-white/80 mb-6 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex gap-4 mb-6">
                    {project.stats.map((stat, i) => (
                      <div key={i} className="px-3 py-1 rounded-full bg-white/10 text-xs text-white font-medium border border-white/10">
                        {stat}
                      </div>
                    ))}
                  </div>

                  <span className="inline-flex items-center text-white font-medium group-hover:text-primary transition-colors">
                    View Case Study <ArrowRight className="ml-2 w-4 h-4" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
