import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
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
      className="relative min-h-screen flex flex-col justify-between pt-16 md:pt-20 overflow-hidden"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/95" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.05)_0%,transparent_70%)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center pt-8 md:pt-12 flex-1 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.05, y: -2 }}
          className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-sm font-medium text-primary mb-3 md:mb-4 mx-auto cursor-default"
        >
          <motion.span 
            className="relative flex h-2 w-2"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </motion.span>
          <span className="tracking-widest uppercase text-xs font-bold">Fix Your Broken Brand or Build a New One</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-medium tracking-tight text-white mb-4 md:mb-6 leading-[1.1] drop-shadow-2xl"
        >
          Design. Code. <br className="hidden md:block" />
          <motion.span 
            className="italic font-serif-display premium-text-gradient inline-block pb-2 md:pb-3"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.05 }}
            style={{ overflow: 'visible', lineHeight: '1.2' }}
          >
            Marketing.
          </motion.span> Done Right.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-base md:text-lg lg:text-xl text-muted-foreground/80 max-w-3xl mx-auto mb-6 md:mb-8 font-light leading-relaxed"
        >
          We audit what's broken, rebuild what matters, and optimize every layer of your brand's system for <span className="text-white font-medium">real revenue</span>. <span className="text-muted-foreground/60">(We also build fresh from scratch — see services below.)</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-background rounded-full px-10 h-16 text-lg font-bold tracking-wide transition-all duration-300 transform hover:-translate-y-1 shadow-[0_0_20px_-5px_hsl(var(--primary)/0.5)]"
          >
            <a href="https://cal.com/sanganakhq" target="_blank" rel="noreferrer">
              <Phone className="mr-2 h-5 w-5 inline-block" />
              Book a Strategy Call
              <ArrowRight className="ml-2 h-5 w-5 inline-block" />
            </a>
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-white/10 text-white hover:bg-white/5 hover:border-white/20 rounded-full px-10 h-16 text-lg font-medium backdrop-blur-sm transition-all duration-300"
            onClick={() => {
              setProjectType("new-build");
              setContactOpen(true);
            }}
          >
            Send Your Brief
            <ArrowRight className="ml-2 h-5 w-5 inline-block" />
          </Button>
        </motion.div>
      </div>

      {/* Client Logos at Bottom */}
      <div className="relative z-10 w-full pb-8 md:pb-12">
        <div className="container mx-auto px-6">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-xs md:text-sm font-medium text-muted-foreground/60 uppercase tracking-widest text-center mb-4 md:mb-6"
          >
            Truly Global. Clientele Across 6 Continents.
          </motion.p>
          <div className="space-y-4">
            <div className="relative flex overflow-x-hidden">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="animate-marquee whitespace-nowrap flex items-center gap-8 md:gap-12 px-4"
              >
                {marqueeClients.map((client, i) => (
                  <span
                    key={`row1-${i}`}
                    className="text-lg md:text-xl lg:text-2xl font-display font-bold text-white/20 hover:text-white/40 transition-colors cursor-default"
                  >
                    {client}
                  </span>
                ))}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center gap-8 md:gap-12 px-4"
              >
                {marqueeClients.map((client, i) => (
                  <span
                    key={`row1b-${i}`}
                    className="text-lg md:text-xl lg:text-2xl font-display font-bold text-white/20 hover:text-white/40 transition-colors cursor-default"
                  >
                    {client}
                  </span>
                ))}
              </motion.div>
            </div>

            <div className="relative flex overflow-x-hidden">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="animate-marquee whitespace-nowrap flex items-center gap-8 md:gap-12 px-4"
              >
                {marqueeClients.map((client, i) => (
                  <span
                    key={`row2-${i}`}
                    className="text-lg md:text-xl lg:text-2xl font-display font-bold text-white/20 hover:text-white/40 transition-colors cursor-default"
                  >
                    {client}
                  </span>
                ))}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center gap-8 md:gap-12 px-4"
              >
                {marqueeClients.map((client, i) => (
                  <span
                    key={`row2b-${i}`}
                    className="text-lg md:text-xl lg:text-2xl font-display font-bold text-white/20 hover:text-white/40 transition-colors cursor-default"
                  >
                    {client}
                  </span>
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
