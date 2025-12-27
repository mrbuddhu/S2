import { motion } from "framer-motion";
import { Linkedin, Twitter } from "lucide-react";
import { cardHover, viewportOptions } from "@/lib/animations";
import founder1 from "@assets/generated_images/professional_headshot_of_a_tech_founder_male.png";
import founder2 from "@assets/generated_images/professional_headshot_of_a_creative_director_female.png";

const expertiseFields = [
  "Brand Strategy", "UI/UX Design", "Web Development", 
  "Mobile Development", "AI Integration", "Blockchain",
  "Growth Marketing", "Content Strategy", "Product Management", "QA & Testing"
];

export function Team() {
  return (
    <section className="py-4 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium tracking-widest uppercase mb-6"
          >
            Who's Behind SanganakHQ
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-display font-medium text-white mb-8">
            <span className="text-gold-gradient">Founders</span> with <span className="italic text-gold-gradient font-serif-display">vision</span>.
          </h2>
          <div className="space-y-4 text-lg text-muted-foreground/90 font-sans font-normal leading-relaxed max-w-3xl mx-auto">
            <p>
              Started with a simple goal: help founders build products that don't just look good, but actually convert users and drive revenue.
            </p>
          </div>
        </div>

        {/* Founders */}
        <div className="max-w-7xl mx-auto space-y-6 mb-6">
          {/* Aryabhatta Row */}
          <div className="grid md:grid-cols-4 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewportOptions}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="flex justify-center"
            >
              <motion.div 
                className="relative w-48 h-48"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="absolute inset-0 bg-primary/20 rounded-full blur-3xl"
                  whileHover={{ 
                    backgroundColor: "rgba(198, 162, 85, 0.3)",
                    scale: 1.2
                  }}
                  transition={{ duration: 0.5 }}
                />
                <motion.img 
                  src={founder1} 
                  alt="Aryabhatta - Founder of SanganakHQ" 
                  className="w-full h-full object-cover rounded-full border-2 border-white/10 relative z-10"
                  whileHover={{ rotate: [0, -2, 2, -2, 0] }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewportOptions}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="md:col-span-3 space-y-4"
            >
              <div>
                <h3 className="text-3xl font-display font-bold text-white mb-2">Aryabhatta</h3>
                <p className="text-primary font-medium tracking-wide uppercase text-sm mb-6">Founder & Technical Lead</p>
              </div>
              <div className="space-y-2 text-muted-foreground/90 font-sans font-normal leading-relaxed text-lg">
                <p>Full-stack engineer with 8+ years building scalable products. Expert in React, Node.js, Python, and cloud architecture. Has helped 50+ startups launch and scale from MVP to enterprise-level systems.</p>
              </div>
              <div className="flex gap-6 pt-4">
                <motion.a 
                  href="#" 
                  className="p-3 rounded-full bg-white/5 text-white/60 hover:bg-white/10 hover:text-white transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin className="w-6 h-6" />
                </motion.a>
                <motion.a 
                  href="#" 
                  className="p-3 rounded-full bg-white/5 text-white/60 hover:bg-white/10 hover:text-white transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Twitter className="w-6 h-6" />
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Shabi Row */}
          <div className="grid md:grid-cols-4 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewportOptions}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="md:col-span-3 space-y-4"
            >
              <div>
                <h3 className="text-3xl font-display font-bold text-white mb-2">Shabi</h3>
                <p className="text-primary font-medium tracking-wide uppercase text-sm mb-6">Co-Founder & Design Director</p>
              </div>
              <div className="space-y-2 text-muted-foreground/90 font-sans font-normal leading-relaxed text-lg">
                <p>Design expert who turns complex ideas into beautiful, user-friendly interfaces. Expert in UI/UX design, brand identity, and creating experiences that drive conversions. Has worked with Fortune 500 companies and startups alike.</p>
              </div>
              <div className="flex gap-6 pt-4">
                <motion.a 
                  href="#" 
                  className="p-3 rounded-full bg-white/5 text-white/60 hover:bg-white/10 hover:text-white transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin className="w-6 h-6" />
                </motion.a>
                <motion.a 
                  href="#" 
                  className="p-3 rounded-full bg-white/5 text-white/60 hover:bg-white/10 hover:text-white transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Twitter className="w-6 h-6" />
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewportOptions}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="flex justify-center"
            >
              <motion.div 
                className="relative w-48 h-48"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="absolute inset-0 bg-primary/20 rounded-full blur-3xl"
                  whileHover={{ 
                    backgroundColor: "rgba(198, 162, 85, 0.3)",
                    scale: 1.2
                  }}
                  transition={{ duration: 0.5 }}
                />
                <motion.img 
                  src={founder2} 
                  alt="Shabi - Co-Founder of SanganakHQ" 
                  className="w-full h-full object-cover rounded-full border-2 border-white/10 relative z-10"
                  whileHover={{ rotate: [0, 2, -2, 2, 0] }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Divider */}
        <div className="max-w-4xl mx-auto mb-6">
          <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        </div>

        {/* Team Statement */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOptions}
            className="text-lg text-muted-foreground/90 font-sans font-normal leading-relaxed"
          >
            A dedicated team of experts across all fields to ensure your project gets the attention it deserves.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
