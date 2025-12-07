import { Link } from "wouter";

export function Footer() {
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
            <div className="flex gap-4">
              {/* Social placeholders */}
              {['Twitter', 'LinkedIn', 'Instagram'].map((social) => (
                <a key={social} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-white transition-colors">
                  {social[0]}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-4">
              {['Branding', 'Web Development', 'Mobile Apps', 'AI Solutions', 'Blockchain'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground hover:text-white transition-colors">{item}</a>
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
