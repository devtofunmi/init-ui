import React from 'react';
import { Star } from 'lucide-react'; // Assuming Star is available or use unicode

interface TestimonialItem {
  name: string;
  role: string;
  quote: string;
  rating: number;
  avatar: string;
}

interface TestimonialsProps {
  title: string;
  items: TestimonialItem[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ 
  title = "What Users Say", 
  items = [] 
}) => {
  return (
    <div className="py-24 relative">
      <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items?.map((item, idx) => (
          <div key={idx} className="p-8 rounded-3xl bg-zinc-900/40 backdrop-blur-sm border border-white/5 flex flex-col gap-6 hover:border-white/10 hover:bg-zinc-900/60 transition-all duration-300 group">
            <div className="flex gap-1 text-brand">
              {[...Array(Math.max(0, Math.floor(item.rating || 0)))].map((_, i) => (
                 <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>
            <blockquote className="text-xl leading-relaxed text-zinc-300 group-hover:text-white transition-colors">"{item.quote}"</blockquote>
            <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/5">
              <img src={item.avatar} alt={item.name} className="w-10 h-10 rounded-full bg-zinc-800" />
              <div>
                <div className="font-semibold text-white">{item.name}</div>
                <div className="text-sm text-zinc-500">{item.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
