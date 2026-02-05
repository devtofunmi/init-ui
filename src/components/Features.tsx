import { Shield, Zap, BarChart3, Globe, Activity, Heart, Dumbbell, Target, Clock, Star } from 'lucide-react';
import { cn } from '../lib/utils';

const Features = ({ 
  title = "Powerful Features",
  features = [
    { title: "Real-time Tracking", description: "Monitor your data as it happens.", icon: "Zap" },
    { title: "Advanced Analytics", description: "Deep dive into your performance metrics.", icon: "BarChart3" },
    { title: "Secure by Design", description: "Bank-level encryption for your peace of mind.", icon: "Shield" }
  ]
}) => {
  const iconMap = { Shield, Zap, BarChart3, Globe, Activity, Heart, Dumbbell, Target, Clock, Star };

  return (
    <div className="w-full py-24 md:py-32 px-6 md:px-8 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl space-y-6">
            <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-[0.9] text-gradient">
              {title}
            </h2>
            <p className="text-zinc-500 text-lg md:text-xl font-medium max-w-lg leading-relaxed">
              Experience the convergence of artificial intelligence and high-fidelity interface design.
            </p>
          </div>
         
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {features?.map((f, i) => {
            const Icon = iconMap[f.icon] || Zap;
            const isFullWidth = i === 2 && features.length === 3;
            const isLarge = (i === 0 || i === 3) && !isFullWidth;
            
            return (
              <div 
                key={i} 
                className={cn(
                  "glass-card noise premium-border p-8 md:p-12 rounded-[2.5rem] flex flex-col justify-center group h-auto min-h-[380px] transition-all duration-700",
                  isFullWidth ? "md:col-span-12" : isLarge ? "md:col-span-12 lg:col-span-7" : "md:col-span-12 lg:col-span-5"
                )}
              >
                <div className="space-y-8 w-full max-w-none">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-brand/10 flex items-center justify-center group-hover:bg-brand/20 transition-all duration-500 brand-glow border border-brand/20">
                    <Icon size={28} className="text-brand group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight group-hover:text-brand transition-colors duration-500">
                      {f.title}
                    </h3>
                    <p className="text-zinc-500 leading-relaxed font-medium text-lg md:text-xl">
                      {f.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Features;