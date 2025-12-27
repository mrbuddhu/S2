import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ContactForm } from "./ContactForm";

export function Hero() {
  const [contactOpen, setContactOpen] = useState(false);
  const [projectType, setProjectType] = useState("");

  // TODO: Replace with real client names/logos (15+ clients)
  const clientNames = [
    "Client 1", "Client 2", "Client 3", "Client 4", "Client 5",
    "Client 6", "Client 7", "Client 8", "Client 9", "Client 10",
    "Client 11", "Client 12", "Client 13", "Client 14", "Client 15",
    "Client 16", "Client 17", "Client 18"
  ];
  // Duplicated for seamless marquee loop
  const marqueeClients = [...clientNames, ...clientNames];

  return (
    <section 
      className="relative h-screen flex flex-col justify-between pt-16 md:pt-20 overflow-hidden"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/95" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.05)_0%,transparent_70%)]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center flex-1 flex flex-col justify-between py-2 md:py-4">
        {/* Main Content */}
        <div className="flex-1 flex flex-col justify-center space-y-1 sm:space-y-2 md:space-y-3">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-medium tracking-tight text-white leading-[1.2] drop-shadow-2xl max-w-5xl mx-auto flex items-start justify-center gap-2 sm:gap-3 md:whitespace-nowrap"
          >
            <span className="flex items-baseline gap-2 sm:gap-3 flex-wrap md:flex-nowrap justify-center">
              <span className="whitespace-normal sm:whitespace-nowrap">We fix broken growth systems.</span>
              
              <motion.a
                href="https://sanganak.ai"
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.1 }}
                className="relative inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 group cursor-pointer flex-shrink-0 self-start -mt-4 sm:-mt-6 md:-mt-8 lg:-mt-10"
              >
                {/* Rotating Circle with Text */}
                <motion.div
                  className="absolute inset-0"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 100 100"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#c6a255" />
                        <stop offset="50%" stopColor="#e9d5a1" />
                        <stop offset="100%" stopColor="#c6a255" />
                      </linearGradient>
                      <path
                        id="circle-path-hero"
                        d="M 50, 50 m -42, 0 a 42,42 0 1,1 84,0 a 42,42 0 1,1 -84,0"
                      />
                    </defs>
                    <text
                      fontSize="9"
                      fontWeight="800"
                      fill="url(#goldGradient)"
                      letterSpacing="0.06em"
                    >
                      <textPath href="#circle-path-hero" startOffset="0%">
                        POWERED BY SANGANAK AI • SANGANAK HQ • 
                      </textPath>
                    </text>
                  </svg>
                </motion.div>
                {/* Pulse Effect */}
                <motion.div
                  className="absolute inset-0 rounded-full border border-[#c6a255]/30"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.a>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gold-gradient max-w-3xl mx-auto font-display font-medium leading-relaxed mt-6"
          >
            Design, technology, and acquisition — done right!
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-sm sm:text-base md:text-lg text-muted-foreground/90 max-w-2xl mx-auto font-sans font-normal leading-relaxed mt-4"
          >
            Founder-led execution for startups, brands, and operators who want results — not coordination headaches.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 md:gap-4 pt-1 sm:pt-2"
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-[#c6a255] via-[#e9d5a1] to-[#c6a255] hover:from-[#d4b575] hover:via-[#f0dfb8] hover:to-[#d4b575] text-background rounded-full px-5 sm:px-6 md:px-8 h-10 sm:h-12 md:h-14 text-xs sm:text-sm md:text-base font-bold tracking-wide transition-all duration-300 transform hover:-translate-y-1 shadow-[0_0_20px_-5px_rgba(198,162,85,0.5)]"
            >
              <a href="https://cal.com/sanganakhq" target="_blank" rel="noreferrer">
                Book a Strategy Call
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 inline-block" />
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white/10 text-white hover:bg-primary/5 hover:border-primary/30 hover:text-gold-gradient rounded-full px-5 sm:px-6 md:px-8 h-10 sm:h-12 md:h-14 text-xs sm:text-sm md:text-base font-medium backdrop-blur-sm transition-all duration-300"
              onClick={() => {
                setProjectType("new-build");
                setContactOpen(true);
              }}
            >
              Send Your Brief
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 inline-block" />
            </Button>
          </motion.div>
        </div>

        {/* Client Logos at Bottom */}
        <div className="relative z-10 w-full pb-1 sm:pb-2 md:pb-3">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="text-[9px] sm:text-[10px] md:text-xs font-medium text-muted-foreground/80 uppercase tracking-widest text-center mb-4 sm:mb-6 md:mb-8"
            >
              Trusted by teams across 6 continents
            </motion.p>
            <div className="relative flex overflow-x-hidden">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="animate-marquee whitespace-nowrap flex items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 px-2 sm:px-4"
              >
                {marqueeClients.map((client, i) => (
                  <motion.span
                    key={`row1-${i}`}
                    className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-display font-bold text-white/40 hover:text-white/80 transition-all cursor-default"
                    whileHover={{ scale: 1.15 }}
                  >
                    {client}
                  </motion.span>
                ))}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 px-2 sm:px-4"
              >
                {marqueeClients.map((client, i) => (
                  <motion.span
                    key={`row1b-${i}`}
                    className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-display font-bold text-white/40 hover:text-white/80 transition-all cursor-default"
                    whileHover={{ scale: 1.15 }}
                  >
                    {client}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee Animation Styles */}
      <style>{`
        .animate-marquee {
          animation: marquee 45s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 45s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee2 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0%); }
        }
      `}</style>

      <ContactForm 
        open={contactOpen} 
        onOpenChange={setContactOpen}
        defaultProjectType={projectType}
      />
    </section>
  );
}
