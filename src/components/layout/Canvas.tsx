import React from 'react';

export const Canvas = ({ thread, canvasItems, onTryExample }) => {
  console.log("Rendering Canvas with items:", canvasItems.map(i => i.name));
  
  if (!thread) {
    return (
      <div className="flex-1 flex items-center justify-center bg-black/20">
        <div className="flex flex-col items-center gap-4">
          <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
          <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold">Initializing Canvas...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto overflow-x-hidden relative scrollbar-hide flex flex-col">
      {/* Fixed Immersive Layer */}
      <div className="fixed inset-0 pointer-events-none mesh-gradient noise z-0" />
      
      {/* Dynamic Environment Orbs (Fixed) */}
      <div className="fixed top-0 right-1/4 w-[800px] h-[800px] bg-brand/5 blur-[150px] rounded-full pointer-events-none opacity-30 animate-pulse z-0" />
      <div className="fixed bottom-0 left-1/4 w-[800px] h-[800px] bg-brand/3 blur-[150px] rounded-full pointer-events-none opacity-20 animate-pulse delay-1000 z-0" />

      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col relative z-20 px-6 py-12 md:px-10 md:py-24">
        {canvasItems.length === 0 ? (
          <div className="flex-1 min-h-[400px] flex flex-col items-center justify-center text-center space-y-12 animate-in fade-in duration-1000">
            <div className="relative group">
              <div className="absolute -inset-8 bg-brand/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              
            </div>

            <div className="space-y-6 max-w-2xl mx-auto">
              <h2 className="text-5xl font-black text-white text-gradient">
                Living <br /> Interface
              </h2>
              <p className="text-xl text-zinc-500 font-medium  max-w-lg mx-auto">
                The canvas is primed. Use the neural controller to synthesize high-energy components.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl">
              <button 
                onClick={() => onTryExample("Synthesize a full-scale personal finance dashboard. Include a UserOverview, a MetricGrid, QuickActions, and a DataSummary showing 'Monthly Spending' as the mainMetric with a value of '$4,200' and several secondary metrics for 'Rent', 'Groceries', and 'Savings', a Table and ActivityFeed.")}
                className="group p-4 glass-card noise premium-border rounded-3xl text-left hover:scale-[1.02] active:scale-95 transition-all duration-500 hover:border-brand/40 relative overflow-hidden"
              >
                <div className="flex flex-col gap-0.5 mb-3">
                  <span className="text-[8px] font-black text-brand uppercase tracking-[0.4em]">Synthesize</span>
                  <h3 className="text-lg font-black text-white tracking-tighter uppercase italic group-hover:text-brand transition-colors">Personal Finance</h3>
                </div>
                <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest leading-relaxed">Synthesis of a full-scale dashboard.</p>
              </button>

              <button 
                onClick={() => onTryExample("Build a complete high-energy Gym landing page. Include a Nav, a bold Hero, Stats about members, specialized Training Features, Membership Pricing, Testimonials from athletes, and a Footer.")}
                className="group p-4 glass-card noise premium-border rounded-3xl text-left hover:scale-[1.02] active:scale-95 transition-all duration-500 hover:border-brand/40 relative overflow-hidden"
              >
               
                <div className="flex flex-col gap-0.5 mb-3">
                  <span className="text-[8px] font-black text-brand uppercase tracking-[0.4em]">Construct</span>
                  <h3 className="text-lg font-black text-white tracking-tighter uppercase italic group-hover:text-brand transition-colors">Gym Landing Page</h3>
                </div>
                <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest leading-relaxed">High-energy marketing site synthesis.</p>
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start pb-10">
            {canvasItems
              .sort((a, b) => {
                const order = ['Nav', 'UserOverview', 'QuickActions', 'MetricGrid', 'Hero', 'DataSummary', 'Dashboard', 'ActivityFeed', 'Table', 'Stats', 'Features', 'Testimonials', 'Pricing', 'CTA', 'Footer'];
                const indexA = order.indexOf(a.name);
                const indexB = order.indexOf(b.name);
                
                if (indexA !== -1 && indexB !== -1) return indexA - indexB;
                if (indexA !== -1) return -1;
                if (indexB !== -1) return 1;
                return 0;
              })
              .map((item) => {
              const isFullWidth = ['Hero', 'Nav', 'CTA', 'Pricing', 'Testimonials', 'Features', 'Footer', 'Stats', 'UserOverview', 'QuickActions', 'MetricGrid', 'Table', 'DataSummary', 'Dashboard'].includes(item.name);
              const isMedium = false; // Graph was here previously
              const isSmall = ['Metric'].includes(item.name);
              
              let colSpan = 'md:col-span-4'; 
              if (isFullWidth) colSpan = 'md:col-span-12';
              if (isMedium) colSpan = 'md:col-span-8';
              if (item.name === 'ActivityFeed') colSpan = 'md:col-span-12';
              if (isSmall) colSpan = 'md:col-span-4';
              
              return (
                <div 
                  key={item.id} 
                  id={item.name.toLowerCase()}
                  className={`${colSpan} w-full transition-all duration-1000 animate-in fade-in slide-in-from-bottom-12 zoom-in-95`}
                >
                  <div className="relative group/comp">
                    <div className="absolute -inset-1 bg-brand/20 blur-xl opacity-0 group-hover/comp:opacity-100 transition-opacity duration-700 rounded-[2.5rem]" />
                    <div className="relative">
                      {item.component}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
