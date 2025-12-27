import { motion } from "framer-motion";
import { useState } from "react";
import { Quote, ChevronDown, ChevronUp } from "lucide-react";
import { viewportOptions } from "@/lib/animations";

const testimonials = [
  {
    quote: "Aryabhatta and SanganakHQ delivered real impact — not just deliverables. Their systems changed how we scale.",
    author: "",
    role: "SaaS Founder",
    title: "CEO",
  },
  {
    quote: "Fast, clean, and exactly what we needed. We kept them on retainer after the first project.",
    author: "",
    role: "Founder",
    title: "D2C Brand",
  },
  {
    quote: "Aryabhatta and SanganakHQ have consistently delivered outstanding results... Their Growth Package is truly exceptional driving real impact and measurable success.",
    author: "Peedu Kass",
    role: "SaaS Founder",
    title: "CEO",
  },
  {
    quote: "Excellent experience working with team Sanganak... Completed the whole project in less than 3 days, clearly shows how fast and efficient they are.",
    author: "Vishal Chauhan",
    role: "Founder",
    title: "MotorAxle",
  },
  {
    quote: "Fast, clean, and exactly what we needed. We've since kept them on retainer for SEO and email campaigns, and the results speak for themselves.",
    author: "Rahul Kumar Rajak",
    role: "Founder",
    title: "DizIDice",
  },
  {
    quote: "I had the opportunity to collab with Aryabhata on AI-powered SaaS development... His ability to translate complex ideas into working products truly stands out.",
    author: "Rahul Kumar Rajak",
    role: "SaaS Founder",
    title: "",
  },
  {
    quote: "Aryabhatta designed a premium and clean website for us in only a week. Very professional and good at his craft.",
    author: "Vinit Kumar",
    role: "Director",
    title: "DBS Bank",
  },
];

export function Testimonials() {
  const [showAll, setShowAll] = useState(false);
  const displayedTestimonials = showAll ? testimonials : testimonials.slice(0, 2);

  return (
    <section className="py-24 bg-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium tracking-widest uppercase mb-6"
          >
            Social Proof
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-display font-medium text-white mb-6">
            <span className="text-gold-gradient">Real results</span> from <span className="italic text-gold-gradient font-serif-display">real founders</span>.
          </h2>
          <p className="text-xl text-muted-foreground/90 font-sans font-normal leading-relaxed">
            Don't take our word for it — see what founders and leaders say about working with us.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
          {displayedTestimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOptions}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="premium-card p-8 rounded-2xl flex flex-col h-full"
            >
              <div className="flex-grow">
                <Quote className="w-8 h-8 text-primary mb-4 opacity-50" />
                <p className="text-base text-white/90 mb-6 leading-relaxed font-sans font-normal">
                  "{testimonial.quote}"
                </p>
              </div>
              <div>
                {testimonial.author && <p className="font-sans font-bold text-white">{testimonial.author}</p>}
                <p className="text-sm text-gold-gradient font-sans font-medium">
                  — {testimonial.role}{testimonial.title && `, ${testimonial.title}`}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {testimonials.length > 2 && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 text-sm text-gold-gradient hover:text-gold-gradient/80 font-sans font-medium transition-colors"
            >
              {showAll ? (
                <>
                  View Less <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  View More Testimonials <ChevronDown className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
