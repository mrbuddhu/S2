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
    <section className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium tracking-widest uppercase mb-6"
          >
            The Architects
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-display font-medium text-white mb-6">
            Built by <span className="italic text-primary font-serif-display">Obsessives.</span>
          </h2>
          <p className="text-xl text-muted-foreground font-light leading-relaxed">
            No juniors. No outsourcing. Just a lean team of elite specialists who refuse to ship average work.
          </p>
        </div>

        {/* Founders */}
        <div className="grid md:grid-cols-2 gap-8 mb-24 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50, rotateY: -15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={viewportOptions}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            variants={cardHover}
            whileHover="hover"
            whileTap="tap"
            className="group relative bg-card/30 rounded-3xl border border-white/5 p-8 overflow-hidden cursor-pointer"
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <motion.div 
                className="relative w-32 h-32 md:w-40 md:h-40 shrink-0"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="absolute inset-0 bg-primary/20 rounded-full blur-2xl"
                  whileHover={{ 
                    backgroundColor: "rgba(212, 197, 154, 0.3)",
                    scale: 1.2
                  }}
                  transition={{ duration: 0.5 }}
                />
                <motion.img 
                  src={founder1} 
                  alt="Aryabhatta - Founder and Technical Lead of SanganakHQ" 
                  className="w-full h-full object-cover rounded-full border-2 border-white/10 relative z-10"
                  whileHover={{ rotate: [0, -5, 5, -5, 0] }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-display font-bold text-white mb-1">Aryabhatta</h3>
                <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">Founder & Technical Lead</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  "Code isn't just function; it's architecture. I build systems that scale effortlessly and perform instantly."
                </p>
                <div className="flex justify-center md:justify-start gap-4">
                  <motion.a 
                    href="#" 
                    className="p-2 rounded-full bg-white/5 text-white/60"
                    whileHover={{ 
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      color: "#fff",
                      scale: 1.2,
                      rotate: 360
                    }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Linkedin className="w-5 h-5" />
                  </motion.a>
                  <motion.a 
                    href="#" 
                    className="p-2 rounded-full bg-white/5 text-white/60"
                    whileHover={{ 
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      color: "#fff",
                      scale: 1.2,
                      rotate: 360
                    }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Twitter className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: 15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={viewportOptions}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            variants={cardHover}
            whileHover="hover"
            whileTap="tap"
            className="group relative bg-card/30 rounded-3xl border border-white/5 p-8 overflow-hidden cursor-pointer"
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <motion.div 
                className="relative w-32 h-32 md:w-40 md:h-40 shrink-0"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="absolute inset-0 bg-primary/20 rounded-full blur-2xl"
                  whileHover={{ 
                    backgroundColor: "rgba(212, 197, 154, 0.3)",
                    scale: 1.2
                  }}
                  transition={{ duration: 0.5 }}
                />
                <motion.img 
                  src={founder2} 
                  alt="Shabi - Co-Founder and Design Director of SanganakHQ" 
                  className="w-full h-full object-cover rounded-full border-2 border-white/10 relative z-10"
                  whileHover={{ rotate: [0, 5, -5, 5, 0] }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-display font-bold text-white mb-1">Shabi</h3>
                <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">Co-Founder & Design Director</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  "Design is the silent ambassador of your brand. We ensure it speaks the language of authority and trust."
                </p>
                <div className="flex justify-center md:justify-start gap-4">
                  <motion.a 
                    href="#" 
                    className="p-2 rounded-full bg-white/5 text-white/60"
                    whileHover={{ 
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      color: "#fff",
                      scale: 1.2,
                      rotate: 360
                    }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Linkedin className="w-5 h-5" />
                  </motion.a>
                  <motion.a 
                    href="#" 
                    className="p-2 rounded-full bg-white/5 text-white/60"
                    whileHover={{ 
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      color: "#fff",
                      scale: 1.2,
                      rotate: 360
                    }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Twitter className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Expertise Fields Grid */}
        <div className="max-w-6xl mx-auto">
          <h4 className="text-center text-white/40 text-sm font-medium uppercase tracking-widest mb-10">
            <span className="text-primary font-bold">10+</span> Experts Across All Fields
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {expertiseFields.map((field, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={viewportOptions}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.05,
                  type: "spring",
                  stiffness: 100
                }}
                variants={cardHover}
                whileHover="hover"
                whileTap="tap"
                className="group p-6 bg-white/[0.02] border border-white/5 rounded-2xl text-center cursor-pointer hover:border-primary/30 hover:bg-white/[0.05] transition-all"
              >
                <p className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                  {field}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
