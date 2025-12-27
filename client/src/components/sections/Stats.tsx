import { motion } from "framer-motion";
import { Globe2, Users, CheckCircle, MapPin } from "lucide-react";

const stats = [
  {
    value: "50+",
    label: "Projects Delivered",
    icon: CheckCircle
  },
  {
    value: "Founder-Led",
    label: "Execution",
    icon: Users
  },
  {
    value: "Global",
    label: "Clients",
    icon: Globe2
  }
];

export function Stats() {
  return (
    <section className="py-12 border-y border-white/5 bg-white/[0.02]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.05
              }}
              className="flex flex-col items-center justify-center text-center"
            >
              <div className="mb-3 p-3 rounded-full bg-white/5">
                <stat.icon className="w-6 h-6 text-muted-foreground" />
              </div>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-1">
                {stat.value}
              </h3>
              <p className="text-sm font-medium text-muted-foreground/90 font-sans uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
