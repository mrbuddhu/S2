import { motion } from "framer-motion";

const clients = [
  "NFTCollect",
  "GlobalEats",
  "Interio",
  "MedicoBuddy",
  "Burgerrr",
  "CreatorsHome",
  "Realtor",
  "Beam",
];

export function TrustedBy() {
  return (
    <section className="py-12 border-y border-white/5 bg-black/20">
      <div className="container mx-auto px-6 mb-8 text-center">
        <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
          Trusted by innovative companies worldwide
        </p>
      </div>
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-16 px-8">
          {[...clients, ...clients].map((client, i) => (
            <span
              key={i}
              className="text-2xl font-display font-bold text-white/30 hover:text-white/80 transition-colors cursor-default"
            >
              {client}
            </span>
          ))}
        </div>
        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center gap-16 px-8">
          {[...clients, ...clients].map((client, i) => (
            <span
              key={i}
              className="text-2xl font-display font-bold text-white/30 hover:text-white/80 transition-colors cursor-default"
            >
              {client}
            </span>
          ))}
        </div>
      </div>
      
      {/* Add custom keyframes for marquee if not in tailwind config */}
      <style>{`
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 25s linear infinite;
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
    </section>
  );
}
