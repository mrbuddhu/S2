import { motion } from "framer-motion";
import { Globe2, Users, CheckCircle, MapPin } from "lucide-react";

const stats = [
  {
    value: "50+",
    label: "Projects Delivered",
    icon: CheckCircle
  },
  {
    value: "15+",
    label: "Global Clients",
    icon: Users
  },
  {
    value: "6",
    label: "Continents Served",
    icon: Globe2
  },
  {
    value: "100%",
    label: "Success Rate",
    icon: MapPin
  }
];

export function Stats() {
  return (
    <section className="py-12 border-y border-white/5 bg-white/[0.02]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center text-center group"
            >
              <div className="mb-3 p-3 rounded-full bg-white/5 group-hover:bg-primary/10 transition-colors duration-300">
                <stat.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              </div>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-1 group-hover:text-primary transition-colors duration-300">
                {stat.value}
              </h3>
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
