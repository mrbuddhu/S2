import { Link } from "wouter";
import { Twitter, Linkedin, Instagram, Youtube, Music, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  const socials = [
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'TikTok', icon: Music, href: '#' },
    { name: 'YouTube', icon: Youtube, href: '#' },
  ];

  return (
    <footer className="py-20 border-t border-white/5 bg-black/20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <Link href="/">
              <span className="text-2xl font-display font-bold tracking-tighter text-white block mb-6 cursor-pointer">
                SANGANAK<span className="text-primary">HQ</span>
              </span>
            </Link>
            <p className="text-muted-foreground max-w-sm mb-8">
              A global innovation growth boutique. We help ambitious companies ship faster and lead their markets through superior design and technology.
            </p>
            <div className="flex gap-4 mb-8">
              {socials.map((social) => (
                <motion.a 
                  key={social.name} 
                  href={social.href} 
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-white transition-colors"
                  whileHover={{ 
                    backgroundColor: "rgba(212, 197, 154, 0.2)",
                    scale: 1.1,
                    rotate: 360
                  }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm">India</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm">Dubai</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-4">
              {['Branding & Design', 'Web + Mobile Dev', 'Blockchain', 'AI', 'Growth Engine'].map((item) => (
                <li key={item}>
                  <motion.a 
                    href="#" 
                    className="text-muted-foreground hover:text-white transition-colors block"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4">
              {['Work', 'About', 'Careers', 'Contact', 'Privacy Policy'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} SanganakHQ. All rights reserved.</p>
          <p>Designed with passion globally.</p>
        </div>
      </div>
    </footer>
  );
}
