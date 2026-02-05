import { Plus, Download, Filter, Share2, Search } from 'lucide-react';

const QuickActions = ({ 
  primaryText = "Execute Command",
  showSearch = true
}) => {
  return (
    <div className="w-full">
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-4 sm:gap-6">
        {showSearch && (
          <div className="flex-1 min-w-0 group relative">
            <div className="absolute -inset-1 bg-brand/30 blur-2xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-1000 rounded-3xl" />
            <div className="absolute left-5 sm:left-6 top-1/2 -translate-y-1/2 text-zinc-600 group-focus-within:text-brand transition-colors z-20">
              <Search size={18} className="sm:size-5" strokeWidth={3} />
            </div>
            <input 
              type="text" 
              placeholder="Search assets..." 
              className="w-full bg-zinc-950/80 backdrop-blur-3xl border border-white/5 rounded-[1.5rem] sm:rounded-[1.8rem] py-4 sm:py-6 pl-12 sm:pl-16 pr-6 sm:pr-8 text-sm sm:text-[15px] font-black text-white placeholder:text-zinc-700 outline-none focus:border-brand/40 focus:ring-4 focus:ring-brand/5 transition-all shadow-2xl relative z-10 noise italic tracking-tight"
            />
            {/* Visual Shortcut Hint - Hidden on touch devices/small screens */}
            <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden xl:flex items-center gap-1 opacity-20 group-focus-within:opacity-0 transition-opacity z-20">
               <span className="text-[10px] font-black border border-white/20 px-1.5 py-0.5 rounded-md text-white">⌘</span>
               <span className="text-[10px] font-black border border-white/20 px-1.5 py-0.5 rounded-md text-white">K</span>
            </div>
          </div>
        )}

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 shrink-0">
          <div className="flex items-center justify-between sm:justify-start gap-2 sm:gap-3 p-1.5 sm:p-2 bg-white/[0.02] border border-white/5 rounded-[1.2rem] sm:rounded-[1.8rem] backdrop-blur-xl shrink-0">
            {[Download, Filter, Share2].map((Icon, i) => (
              <button 
                key={i} 
                className="flex-1 sm:flex-none w-auto sm:w-12 h-10 sm:h-12 px-4 sm:px-0 rounded-[0.8rem] sm:rounded-[1.2rem] bg-zinc-900/50 border border-white/5 flex items-center justify-center text-zinc-500 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 shadow-xl group/btn"
                title={Icon.name}
              >
                <Icon size={16} className="sm:size-[18px] group-hover/btn:scale-110 transition-transform" />
              </button>
            ))}
          </div>
          
          <button className="flex-1 py-5 sm:flex-none px-6 sm:px-10 h-14 sm:h-[72px] bg-brand text-white rounded-[1.2rem] sm:rounded-[1.8rem] font-black text-[10px] sm:text-[12px] uppercase tracking-[0.2em] sm:tracking-[0.3em] shadow-[0_20px_50px_-10px_hsla(var(--brand-glow)/0.5)] brand-glow flex items-center justify-center gap-3 sm:gap-4 hover:scale-105 active:scale-95 transition-all relative overflow-hidden group/primary italic">
             <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/primary:translate-x-[100%] transition-transform duration-1000 skew-x-[-30deg]" />
             <Plus size={18} strokeWidth={3} className="sm:size-5 relative z-10" />
             <span className="relative z-10 whitespace-nowrap">{primaryText}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuickActions;
