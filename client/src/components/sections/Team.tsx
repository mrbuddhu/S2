import { motion } from "framer-motion";
import { Linkedin, Twitter, ArrowUpRight } from "lucide-react";
import founder1 from "@assets/generated_images/professional_headshot_of_a_tech_founder_male.png";
import founder2 from "@assets/generated_images/professional_headshot_of_a_creative_director_female.png";

const teamMembers = [
  "Lead Engineer", "Senior Designer", "Growth Strategist", 
  "Backend Architect", "UX Researcher", "Content Lead",
  "Frontend Specialist", "AI Engineer", "Product Manager", "QA Lead"
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
            No juniors. No outsourcing. Just a lean team of 12 elite engineers and designers who refuse to ship average work. We don't just build; we craft.
          </p>
        </div>

        {/* Founders */}
        <div className="grid md:grid-cols-2 gap-8 mb-24 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative bg-card/30 rounded-3xl border border-white/5 p-8 hover:border-primary/30 transition-all duration-500 overflow-hidden"
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="relative w-32 h-32 md:w-40 md:h-40 shrink-0">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl group-hover:bg-primary/30 transition-colors duration-500" />
                <img 
                  src={founder1} 
                  alt="Aryabhatta" 
                  className="w-full h-full object-cover rounded-full border-2 border-white/10 relative z-10"
                />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-display font-bold text-white mb-1">Aryabhatta</h3>
                <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">Founder & Technical Lead</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  "Code isn't just function; it's architecture. I build systems that scale effortlessly and perform instantly."
                </p>
                <div className="flex justify-center md:justify-start gap-4">
                  <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative bg-card/30 rounded-3xl border border-white/5 p-8 hover:border-primary/30 transition-all duration-500 overflow-hidden"
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="relative w-32 h-32 md:w-40 md:h-40 shrink-0">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl group-hover:bg-primary/30 transition-colors duration-500" />
                <img 
                  src={founder2} 
                  alt="Co-Founder" 
                  className="w-full h-full object-cover rounded-full border-2 border-white/10 relative z-10"
                />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-display font-bold text-white mb-1">Elena</h3>
                <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">Co-Founder & Design Director</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  "Design is the silent ambassador of your brand. We ensure it speaks the language of authority and trust."
                </p>
                <div className="flex justify-center md:justify-start gap-4">
                  <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Team Grid */}
        <div className="max-w-6xl mx-auto">
          <h4 className="text-center text-white/40 text-sm font-medium uppercase tracking-widest mb-10">
            Backed by 10 Elite Specialists
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {teamMembers.map((role, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group p-4 bg-white/[0.02] border border-white/5 rounded-2xl text-center hover:bg-white/[0.05] transition-colors"
              >
                <div className="w-12 h-12 mx-auto bg-gradient-to-br from-white/10 to-white/5 rounded-full mb-3 flex items-center justify-center text-xs font-bold text-white/30 group-hover:text-primary transition-colors">
                  {role.split(' ').map(w => w[0]).join('')}
                </div>
                <p className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                  {role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
