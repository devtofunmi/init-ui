import React from 'react';
import { Check } from 'lucide-react';
import { cn } from '../lib/utils';

const Pricing = ({ 
  title = "Simple Pricing",
  plans = [
    { name: "Starter", price: "$0", features: ["Basic Analytics", "3 Projects", "Community Support"], recommended: false },
    { name: "Pro", price: "$29", features: ["Advanced AI", "Unlimited Projects", "Priority Support"], recommended: true },
    { name: "Enterprise", price: "$99", features: ["Custom Models", "Dedicated Account", "SLA Support"], recommended: false }
  ]
}) => {
  return (
    <div className="w-full py-24 md:py-32 px-6 md:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-20 md:space-y-24 relative z-10">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-[0.85] text-gradient">
            {title}
          </h2>
          <p className="text-zinc-500 text-lg md:text-xl font-medium leading-relaxed">
            Scalable architecture for visionary teams. Choose the path that fits your current intent.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {plans?.map((plan, i) => (
            <div key={i} className={cn(
              "glass-card noise premium-border p-8 md:p-12 rounded-[3.5rem] flex flex-col h-full transition-all duration-700 hover:-translate-y-2 relative",
              plan.recommended 
                ? "bg-white/[0.04] border-white/20 shadow-[0_0_80px_-20px_hsla(var(--brand-glow)/0.3)] lg:scale-110 z-10" 
                : "border-white/5"
            )}>
              {plan.recommended && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-brand text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] whitespace-nowrap shadow-2xl brand-glow">
                  Most Preferred
                </div>
              )}
              
              <div className="mb-12">
                <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-brand mb-6">{plan.name}</h3>
                <div className="flex items-baseline gap-2 flex-wrap min-w-0">
                  <span className="text-2xl xs:text-3xl md:text-4xl font-black tracking-tighter text-white">{plan.price}</span>
                  <span className="text-[10px] md:text-sm font-bold text-zinc-600 uppercase tracking-widest whitespace-nowrap">/ Month</span>
                </div>
              </div>
              
              <div className="space-y-8 flex-1 mb-12">
                <div className="h-px bg-gradient-to-r from-white/10 to-transparent w-full" />
                <ul className="space-y-5">
                  {plan.features?.map((f, j) => (
                    <li key={j} className="flex items-start gap-4 text-sm font-bold leading-tight group/item">
                      <div className="w-5 h-5 rounded-full bg-brand/10 flex items-center justify-center shrink-0 group-hover/item:bg-brand/20 transition-colors">
                        <Check size={12} className="text-brand" />
                      </div>
                      <span className="text-zinc-400 group-hover/item:text-white transition-colors">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <button className={cn(
                "w-full py-6 rounded-[2rem] font-black text-xs uppercase tracking-[0.2em] transition-all duration-500 active:scale-95 shadow-2xl overflow-hidden relative group/btn",
                plan.recommended 
                  ? "bg-brand text-white brand-glow" 
                  : "bg-white text-black hover:bg-zinc-200"
              )}>
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700 skew-x-[-20deg]" />
                <span className="relative z-10">Deploy {plan.name}</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
