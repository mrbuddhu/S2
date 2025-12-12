import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { ContactForm } from "@/components/sections/ContactForm";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Work", href: "#work" },
    { name: "Services", href: "#services" },
    { name: "Pricing", href: "#pricing" },
    { name: "About", href: "#about" },
  ];

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.1], [0, -5]);
  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 0.98]);

  return (
    <motion.nav
      style={{ y, scale }}
      className={cn(
        "fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500",
        "w-[95%] max-w-7xl"
      )}
    >
      <div
        className={cn(
          "relative rounded-full transition-all duration-500",
          "backdrop-blur-2xl border",
          "shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]",
          "shadow-[0_0_0_1px_rgba(255,255,255,0.05)_inset]",
          isScrolled
            ? "bg-white/5 border-white/10 py-3 px-6"
            : "bg-white/[0.03] border-white/5 py-4 px-8"
        )}
        style={{
          background: isScrolled
            ? "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)"
            : "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
          boxShadow: isScrolled
            ? "0 8px 32px 0 rgba(0,0,0,0.37), 0 0 0 1px rgba(255,255,255,0.05) inset, 0 2px 8px rgba(212,197,154,0.1)"
            : "0 12px 40px 0 rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.05) inset, 0 4px 16px rgba(212,197,154,0.15)",
        }}
      >
        {/* Glassmorphism overlay */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/10 to-transparent opacity-20 pointer-events-none" />
        
        {/* 3D highlight effect */}
        <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full pointer-events-none" />
        
        <div className="relative flex items-center justify-between">
        <Link href="/">
            <motion.span 
              className="text-2xl font-display font-bold tracking-tight text-white cursor-pointer"
              whileHover={{ scale: 1.05, opacity: 0.9 }}
              transition={{ duration: 0.2 }}
            >
            SANGANAK<span className="text-primary italic font-serif-display">HQ</span>
            </motion.span>
        </Link>

        {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
              <motion.a
              key={link.name}
              href={link.href}
                className="text-sm font-medium text-white/60 uppercase tracking-widest text-xs relative"
                whileHover={{ 
                  color: "#fff",
                  scale: 1.05
                }}
                transition={{ duration: 0.2 }}
            >
              {link.name}
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                asChild
                className="bg-primary hover:bg-primary/90 text-background rounded-full px-6 font-bold tracking-wide transition-all shadow-[0_0_20px_-5px_hsl(var(--primary)/0.5)]"
              >
                <a href="https://cal.com/sanganakhq" target="_blank" rel="noreferrer">
                  Book a Strategy Call
                </a>
              </Button>
            </motion.div>
        </div>

        {/* Mobile Menu Toggle */}
          <motion.button
            className="md:hidden text-white p-2 rounded-full hover:bg-white/10 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden absolute top-full left-0 right-0 mt-4 rounded-2xl backdrop-blur-2xl bg-white/5 border border-white/10 p-8 flex flex-col gap-6 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
            boxShadow: "0 8px 32px 0 rgba(0,0,0,0.37), 0 0 0 1px rgba(255,255,255,0.05) inset"
          }}
        >
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="text-2xl font-display font-medium text-white hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              {link.name}
            </motion.a>
          ))}
          <Button 
            asChild
            className="w-full bg-primary text-background hover:bg-primary/90 rounded-full h-12 font-bold tracking-wide mt-4"
          >
            <a href="https://cal.com/sanganakhq" target="_blank" rel="noreferrer">
              Book a Strategy Call
            </a>
          </Button>
        </motion.div>
      )}
      <ContactForm open={contactOpen} onOpenChange={setContactOpen} />
    </motion.nav>
  );
}
