import React from 'react';
import { History, ChevronLeft } from 'lucide-react';
import { HeaderProps } from '../../types';

export const Header: React.FC<HeaderProps> = ({ 
  isHistoryOpen, 
  setHistoryOpen, 
  isSidebarOpen, 
  setSidebarOpen,
  isPending,
  onBack
}) => {
  return (
    <header className="h-20 border-b py-8 border-white/5 flex items-center justify-between px-8 bg-zinc-950/50 backdrop-blur-2xl z-[40] relative noise">
      <div className="flex items-center gap-6">
        <button 
          onClick={onBack}
          className="flex items-center gap-3 group px-4 py-2 rounded-xl hover:bg-white/5 transition-all border border-transparent hover:border-white/5"
        >
          <ChevronLeft size={18} className="text-zinc-500 group-hover:text-brand transition-colors" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 group-hover:text-white transition-colors">Return</span>
        </button>
        
        <div className="h-6 w-px bg-white/10" />
        
        <div className="flex items-center gap-4">
          {!isHistoryOpen && (
            <button 
              onClick={() => setHistoryOpen(true)} 
              className="p-2.5 rounded-xl transition-all bg-white/[0.03] text-zinc-500 hover:text-brand hover:bg-brand/10 border border-white/5 hover:border-brand/20 brand-glow"
              title="View History"
            >
              <History size={18} />
            </button>
          )}
          
        </div>
      </div>

      <div className="flex items-center gap-6">

        
        {!isSidebarOpen && (
          <button 
            onClick={() => setSidebarOpen(true)} 
            className="p-2.5 rounded-xl transition-all bg-brand text-white hover:scale-105 active:scale-95 shadow-xl brand-glow border border-brand/20"
          >
            <ChevronLeft size={18} />
          </button>
        )}
      </div>

      {/* Decorative Bottom Shine */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent opacity-50" />
    </header>
  );
};
