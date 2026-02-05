import React from 'react';

const CTA = ({ 
  title = "Ready to start?", 
  subtitle = "Join 10,000+ others already using our platform.",
  buttonText = "Launch Workspace",
  onLaunch
}) => {
  return (
    <div className="w-full py-16 md:py-32 px-4 md:px-6">
      <div className="relative overflow-hidden bg-zinc-950 rounded-[2.5rem] md:rounded-[5rem] p-8 md:p-32 text-center border border-white/5 mesh-gradient noise group shadow-[0_0_120px_-30px_hsla(var(--brand-glow)/0.2)]">
        {/* Dynamic Atmospheric Orbs */}
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-brand/10 blur-[150px] rounded-full animate-pulse group-hover:scale-110 transition-transform duration-[3000ms] pointer-events-none" />
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-brand/5 blur-[150px] rounded-full animate-pulse group-hover:scale-110 transition-transform duration-[3000ms] delay-1000 pointer-events-none" />
        
        <div className="max-w-4xl mx-auto space-y-8 md:space-y-14 relative z-10">
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-4xl sm:text-5xl md:text-7xl  font-black text-white tracking-[-0.05em] leading-[1.2] text-gradient">
              {title}
            </h2>
            <p className="text-zinc-500 font-medium text-lg md:text-2xl max-w-2xl mx-auto leading-tight md:leading-snug">
              {subtitle}
            </p>
          </div>
          
          <div className="pt-2 md:pt-4 flex flex-col items-center justify-center">
            <button 
              onClick={onLaunch}
              className="w-full sm:w-auto px-10 md:px-16 py-5 md:py-7 bg-brand text-white rounded-[1.5rem] md:rounded-[2.5rem] font-black text-sm md:text-base  hover:scale-105 transition-all duration-500 active:scale-95 shadow-[0_20px_50px_-10px_hsla(var(--brand-glow)/0.5)] flex items-center justify-center gap-3 md:gap-4 group brand-glow inner-glow relative overflow-hidden"
            >
               <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 skew-x-[-30deg]" />
              <span className="relative z-10">{buttonText}</span>
               </button>
          </div>
        </div>
        
        {/* Decorative Bottom Line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand/30 to-transparent opacity-50" />
      </div>
    </div>
  );
};

export default CTA;
