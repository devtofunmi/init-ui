import { TrendingUp, Zap } from 'lucide-react';
import { cn } from '../lib/utils';

const Metric = ({ title = "Metric", value = "$0", trend = "0%", className = "" }) => {
  const isPositive = trend.includes('+') || !trend.includes('-');
  
  return (
    <div className={cn(
      "glass-card noise premium-border p-6 md:p-8 rounded-[2.5rem] flex flex-col justify-between group h-full transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_40px_80px_-20px_hsla(var(--brand-glow)/0.4)] shadow-2xl overflow-hidden relative",
      className
    )}>
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-brand/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-brand/20 transition-all duration-700" />
      <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-brand/5 blur-[100px] rounded-full pointer-events-none group-hover:scale-150 transition-transform duration-1000" />

      <div>
        <div className="flex items-start justify-between mb-8 relative z-10">
          <div className="flex flex-col gap-3">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-600 group-hover:text-brand transition-colors duration-500">{title}</span>
            <div className={cn(
              "flex items-center gap-2 text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-xl w-fit backdrop-blur-3xl shadow-xl",
              isPositive ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" : "bg-rose-500/10 text-rose-400 border border-rose-500/20"
            )}>
              {isPositive ? <TrendingUp size={12} strokeWidth={3} /> : <TrendingUp size={12} strokeWidth={3} className="rotate-180" />}
              {trend}
            </div>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-white/5 flex items-center justify-center group-hover:scale-110 group-hover:bg-brand/10 group-hover:border-brand/30 transition-all duration-500 shadow-2xl backdrop-blur-xl group/icon">
            <Zap size={20} strokeWidth={2.5} className="text-zinc-600 group-hover:text-brand transition-all duration-500 group-hover:drop-shadow-[0_0_8px_hsla(var(--brand-glow)/0.8)]" />
          </div>
        </div>
        
        <div className="relative z-10">
          <span className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none italic brand-gradient-text uppercase drop-shadow-2xl">
            {value}
          </span>
        </div>
      </div>
      
      {/* Dynamic Sparkline Visualizer */}
      <div className="mt-10 flex gap-1.5 h-16 items-end relative z-10">
        {[20, 50, 30, 70, 40, 60, 35, 85, 55, 75, 50, 100].map((h, i) => (
          <div 
            key={i} 
            className="flex-1 bg-white/[0.04] rounded-t-md group-hover:bg-brand/40 transition-all duration-700 relative overflow-hidden"
            style={{ 
              height: `${h}%`,
              transitionDelay: `${i * 30}ms`
            }}
          >
             <div className="absolute inset-0 bg-brand/20 translate-y-full group-hover:translate-y-0 transition-transform duration-1000" />
          </div>
        ))}
      </div>

      {/* Extreme Visual Polish */}
      <div className="absolute inset-0 bg-gradient-to-tr from-brand/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand/40 to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-1000" />
    </div>
  );
};

export default Metric;
