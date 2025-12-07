import { motion } from "framer-motion";
import { Play } from "lucide-react";
import landscapeThumb from "@assets/generated_images/professional_video_testimonial_thumbnail_landscape.png";
import portraitThumb from "@assets/generated_images/professional_video_testimonial_thumbnail_portrait.png";

// Mock data for video testimonials
// In a real app, these would be actual video URLs or poster images
const videos = [
  {
    id: 1,
    client: "Peedu Kass",
    role: "CEO, FinTech",
    orientation: "landscape",
    thumbnail: landscapeThumb, 
    duration: "1:24"
  },
  {
    id: 2,
    client: "Sarah Jenkins",
    role: "Founder, StyleAI",
    orientation: "portrait",
    thumbnail: portraitThumb,
    duration: "0:45"
  },
  {
    id: 3,
    client: "Marc Thompson",
    role: "Director, GreenEnergy",
    orientation: "landscape",
    thumbnail: landscapeThumb,
    duration: "2:10"
  },
  {
    id: 4,
    client: "Elena Rodriguez",
    role: "CMO, HealthPlus",
    orientation: "portrait",
    thumbnail: portraitThumb,
    duration: "0:58"
  },
  {
    id: 5,
    client: "David Chen",
    role: "Founder, BlockChainX",
    orientation: "portrait",
    thumbnail: portraitThumb,
    duration: "1:15"
  },
  {
    id: 6,
    client: "James Wilson",
    role: "CTO, DataFlow",
    orientation: "landscape",
    thumbnail: landscapeThumb,
    duration: "1:45"
  }
];

export function VideoTestimonials() {
  return (
    <section className="py-24 bg-black/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-medium text-white mb-6">
            Client <span className="italic font-serif-display text-primary">Love</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real stories from founders and leaders who transformed their businesses with SanganakHQ.
          </p>
        </div>

        {/* Masonry Layout using CSS Columns */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="break-inside-avoid relative group cursor-pointer rounded-2xl overflow-hidden border border-white/10 bg-card"
            >
              {/* Thumbnail Container */}
              <div className={`relative w-full ${video.orientation === 'portrait' ? 'aspect-[9/16]' : 'aspect-video'}`}>
                 <img 
                  src={video.thumbnail} 
                  alt={`Testimonial from ${video.client}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-60"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:scale-110 group-hover:bg-primary group-hover:border-primary transition-all duration-300 shadow-2xl">
                    <Play className="w-6 h-6 text-white fill-white ml-1" />
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute top-4 right-4 px-2 py-1 bg-black/60 backdrop-blur-md rounded text-xs font-mono text-white/90">
                  {video.duration}
                </div>

                {/* Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent pt-12">
                  <h4 className="text-lg font-bold text-white">{video.client}</h4>
                  <p className="text-sm text-primary/90">{video.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
