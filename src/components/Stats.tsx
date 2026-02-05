import React from 'react';
import { cn } from '../lib/utils';

const Stats = ({ 
  stats = [
    { label: "Active Users", value: "250K+" },
    { label: "Transactions", value: "$1.2B" },
    { label: "Countries", value: "48+" },
    { label: "Uptime", value: "99.9%" }
  ] 
}) => {
  return (
    <div className="w-full py-12 md:py-24 px-6 md:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto glass-card noise premium-border py-12 md:py-24 px-6 md:px-12 rounded-[2.5rem] md:rounded-[4rem] shadow-2xl relative">
        {/* Subtle Background Glow */}
        <div className="absolute inset-0 bg-brand/5 blur-[80px] rounded-full pointer-events-none" />
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-16 relative z-10">
          {stats?.map((s, i) => (
            <div key={i} className="text-center space-y-3 group min-w-0">
              <div className={cn(
                "text-xl md:text-4xl font-black text-white tracking-tighter brand-gradient-text group-hover:scale-110 transition-transform duration-500 px-2 break-words",
                s.value?.length <= 5 && "whitespace-nowrap"
              )}>
                {s.value}
              </div>
              <div className="text-[9px] md:text-xs font-black uppercase tracking-[0.4em] text-zinc-500 group-hover:text-brand transition-colors duration-500 px-1 break-words line-clamp-2">
                {s.label}
              </div>
              {/* Decorative Dot */}
              <div className="w-1 h-1 rounded-full bg-brand/30 mx-auto group-hover:bg-brand group-hover:w-4 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
