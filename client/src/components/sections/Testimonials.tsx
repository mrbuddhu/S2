import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Aryabhatta and SanganakHQ have consistently delivered outstanding results... Their Growth Package is truly exceptional driving real impact and measurable success.",
    author: "Peedu Kass",
    role: "Client",
    handle: "@PeeduKass",
  },
  {
    quote: "Excellent experience working with team Sanganak... Completed the whole project in less than 3 days, clearly shows how fast and efficient they are.",
    author: "Vishal Chauhan",
    role: "Founder, MotorAxle",
    handle: "@MotorAxle",
  },
  {
    quote: "Fast, clean, and exactly what we needed. We've since kept them on retainer for SEO and email campaigns, and the results speak for themselves.",
    author: "Rahul Kumar Rajak",
    role: "Founder, DizIDice",
    handle: "@DizIDice",
  },
  {
    quote: "I had the opportunity to collab with Aryabhata on AI-powered SaaS development... His ability to translate complex ideas into working products truly stands out.",
    author: "Rahul Kumar Rajak",
    role: "SaaS Founder",
    handle: "@DizIDice",
  },
  {
    quote: "Aryabhatta designed a premium and clean website for us in only a week. Very professional and good at his craft.",
    author: "Vinit Kumar",
    role: "DBS Bank",
    handle: "@DBS Bank",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Client Success Stories
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it. Hear from the visionaries we've worked with.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="h-full glass-card p-8 rounded-2xl flex flex-col justify-between">
                  <div>
                    <Quote className="w-8 h-8 text-primary mb-4 opacity-50" />
                    <p className="text-lg text-white/90 mb-6 italic">
                      "{testimonial.quote}"
                    </p>
                  </div>
                  <div>
                    <p className="font-bold text-white">{testimonial.author}</p>
                    <p className="text-sm text-primary">{testimonial.handle}</p>
                    <p className="text-xs text-muted-foreground mt-1">{testimonial.role}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-4 mt-8">
            <CarouselPrevious className="static translate-y-0" />
            <CarouselNext className="static translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
