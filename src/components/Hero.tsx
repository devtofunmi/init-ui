import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  onCtaClick: () => void;
  showDisclaimer?: boolean;
}

const Hero: React.FC<HeroProps> = ({ 
  title = "Unlock Your Potential", 
  subtitle = "Experience the next generation of generative interfaces designed for efficiency and impact.", 
  ctaText = "Get Started", 
  onCtaClick = () => {},
  showDisclaimer = false
}) => {
  return (
    <div className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 flex flex-col items-center justify-center text-center overflow-hidden">
      
      {/* Dynamic Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-[-20%] left-[20%] w-[500px] h-[500px] bg-brand/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-[10%] right-[20%] w-[400px] h-[400px] bg-brand/10 rounded-full blur-[100px] delay-1000 animate-pulse" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto space-y-10 group">
        
        
        

        {/* Heading */}
        <h1 className="text-5xl mt-5 md:text-7xl font-black tracking-tighter leading-[0.9] md:leading-[0.85] text-gradient">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-zinc-400 font-medium max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>

        {/* Action Button */}
        <div className="pt-8 flex flex-col items-center">
          <button 
            onClick={onCtaClick}
            className="px-10 py-5 bg-brand text-white rounded-full text-lg font-black tracking-wide hover:scale-105 active:scale-95 transition-all duration-500 shadow-[0_0_60px_-15px_hsla(var(--brand-glow)/0.5)] flex items-center gap-3 brand-glow inner-glow group/btn overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000 skew-x-[-30deg]" />
            <span className="relative z-10">{ctaText}</span>
            <ArrowRight size={20} className="relative z-10 group-hover/btn:translate-x-1 transition-transform" />
          </button>
          
          {showDisclaimer && (
            <p className="mt-6 text-xs text-zinc-600 font-mono">
              No credit card required · Open Source
            </p>
          )}
        </div>
      </div>
      
      {/* Scroll indicator maybe? */}
      
    </div>
  );
};

export default Hero;