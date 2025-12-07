import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b",
        isScrolled
          ? "bg-background/90 backdrop-blur-xl border-white/5 py-4"
          : "bg-transparent border-transparent py-8"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/">
          <span className="text-2xl font-display font-bold tracking-tight text-white cursor-pointer hover:opacity-80 transition-opacity">
            SANGANAK<span className="text-primary italic font-serif-display">HQ</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/60 hover:text-white transition-colors uppercase tracking-widest text-xs"
            >
              {link.name}
            </a>
          ))}
          <Button className="bg-primary hover:bg-primary/90 text-background rounded-none px-6 font-bold tracking-wide transition-all shadow-[0_0_15px_-5px_hsl(var(--primary)/0.4)]">
            Start Audit
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-white/10 p-8 flex flex-col gap-6 animate-in slide-in-from-top-5 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-2xl font-display font-medium text-white hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button className="w-full bg-primary text-background hover:bg-primary/90 rounded-none h-12 font-bold tracking-wide mt-4">
            Start Audit
          </Button>
        </div>
      )}
    </nav>
  );
}
