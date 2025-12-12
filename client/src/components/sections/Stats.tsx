import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Globe2, Users, CheckCircle, MapPin } from "lucide-react";
import { scrollReveal, viewportOptions } from "@/lib/animations";

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
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  return (
    <section 
      ref={sectionRef}
      className="py-12 border-y border-white/5 bg-white/[0.02]"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const y = useTransform(scrollYProgress, [0, 1], [0, -30 * (index % 2 === 0 ? 1 : -1)]);
            const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1]);
            
            return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.5 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={viewportOptions}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              style={{ y, scale }}
              whileHover={{ 
                scale: 1.1, 
                y: -10,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center justify-center text-center group cursor-pointer"
            >
              <motion.div 
                className="mb-3 p-3 rounded-full bg-white/5"
                whileHover={{ 
                  backgroundColor: "rgba(212, 197, 154, 0.1)",
                  scale: 1.2,
                  rotate: 360
                }}
                transition={{ duration: 0.5 }}
              >
                <stat.icon className="w-6 h-6 text-muted-foreground" />
              </motion.div>
              <motion.h3 
                className="text-3xl md:text-4xl font-display font-bold text-white mb-1"
                whileHover={{ color: "#d4c59a", scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                {stat.value}
              </motion.h3>
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          )})}
        </div>
      </div>
    </section>
  );
}
