import { Link } from "wouter";
import { Twitter, Linkedin, Instagram, Youtube } from "lucide-react";
import { SiTiktok, SiThreads } from "react-icons/si";

export function Footer() {
  const socials = [
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'TikTok', icon: SiTiktok, href: '#' },
    { name: 'Threads', icon: SiThreads, href: '#' },
    { name: 'YouTube', icon: Youtube, href: '#' },
  ];

  return (
    <footer className="py-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <div className="flex items-center gap-6">
            {socials.map((social) => (
              <a 
                key={social.name} 
                href={social.href} 
                className="text-muted-foreground/90 hover:text-white transition-colors"
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
          <div className="text-base text-muted-foreground/90 font-sans">
            India · Dubai
          </div>
        </div>

        <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground/90 font-sans">
            &copy; {new Date().getFullYear()} SanganakHQ. <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          </p>
          <Link href="/">
            <span className="text-lg font-display font-bold text-white">
              SANGANAK<span className="text-primary">HQ</span>
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
