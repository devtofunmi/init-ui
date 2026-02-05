import React, { useState } from 'react';
import { Settings, Bell, ShieldCheck, Mail, LogOut } from 'lucide-react';

const UserOverview = ({ 
  name = "Neural Commander", 
  role = "System Admin",
  status = "Active Sync",
  lastActive = "Just now",
  avatar = ""
}) => {
  const [imgError, setImgError] = useState(false);
  
  const avatarUrl = avatar?.startsWith('http') 
    ? avatar 
    : `https://api.dicebear.com/7.x/notionists/svg?seed=${avatar || name}&backgroundColor=b6e3f4,c0aede,d1d4f9`;

  const initials = name
    .split(' ')
    .filter(Boolean)
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className="w-full">
      <div className="glass-card noise premium-border rounded-[2rem] md:rounded-[2.5rem] relative overflow-hidden group transition-all duration-500 hover:shadow-[0_0_50px_-10px_hsla(var(--brand-glow)/0.2)]">
        {/* Dynamic Background */}
        <div className="absolute top-0 right-1/2 w-full h-[300px] bg-brand/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />
        
        <div className="flex flex-col lg:flex-row items-stretch relative z-10 divide-y lg:divide-y-0 lg:divide-x divide-white/5">
          {/* User Section */}
          <div className="p-6 sm:p-8 lg:p-10 flex lg:flex-1 items-center gap-4 sm:gap-6 group/user cursor-pointer">
            <div className="relative shrink-0">
              <div className="absolute -inset-1.5 bg-brand/30 blur-xl rounded-full opacity-0 group-hover/user:opacity-100 transition-opacity duration-700" />
              <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-[1.5rem] sm:rounded-[2rem] border-2 border-white/10 relative z-10 bg-zinc-950 shadow-2xl overflow-hidden transform group-hover/user:rotate-3 transition-transform duration-500 flex items-center justify-center p-0.5 sm:p-1">
                {!imgError ? (
                  <img 
                    src={avatarUrl} 
                    alt={name}
                    onError={() => setImgError(true)}
                    className="w-full h-full rounded-[1.3rem] sm:rounded-[1.8rem] object-cover"
                  />
                ) : (
                  <div className="w-full h-full rounded-[1.3rem] sm:rounded-[1.8rem] bg-brand/20 flex items-center justify-center border border-brand/30">
                    <span className="text-xl sm:text-2xl font-black text-brand italic tracking-tighter">{initials}</span>
                  </div>
                )}
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 sm:w-6 sm:h-6 bg-emerald-500 border-[3px] sm:border-4 border-zinc-950 rounded-lg sm:rounded-xl z-20 shadow-lg animate-pulse" />
            </div>

            <div className="space-y-1 sm:space-y-1.5 min-w-0 text-left">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tighter uppercase italic truncate max-w-full">{name}</h2>
                <div className="px-2 py-0.5 bg-brand/10 border border-brand/20 rounded-md sm:rounded-lg shrink-0">
                  <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-widest text-brand">{role}</span>
                </div>
              </div>
              
              <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-zinc-500">
                 <div className="flex items-center gap-1.5 sm:gap-2">
                   <ShieldCheck size={10} className="text-emerald-500 sm:size-3" />
                   <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-[0.2em]">{status}</span>
                 </div>
                 <div className="hidden xs:block w-1 h-1 rounded-full bg-zinc-800" />
                 <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-[0.2em] truncate opacity-60">Session {lastActive}</span>
              </div>
            </div>
          </div>

          {/* Stats QuickView (Visible from MD up, hidden on mobile) */}
          <div className="hidden md:flex p-8 lg:p-10 items-center justify-center lg:justify-start gap-8 lg:gap-12 bg-white/[0.01]">
             {[
               { label: "Alerts", val: "04", icon: Bell },
               { label: "Msg", val: "12", icon: Mail }
             ].map((stat, i) => (
               <div key={i} className="flex items-center gap-3 sm:gap-5 group/stat cursor-pointer">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-zinc-900 border border-white/5 flex items-center justify-center text-zinc-500 group-hover/stat:text-brand group-hover/stat:border-brand/30 transition-all duration-500 shadow-xl group-hover/stat:scale-110">
                     <stat.icon size={18} className="sm:size-5" />
                  </div>
                  <div className="hidden sm:block">
                    <div className="text-[8px] sm:text-[9px] font-black text-zinc-600 uppercase tracking-widest leading-none mb-1 text-left">{stat.label}</div>
                    <div className="text-lg sm:text-xl font-black text-white leading-none tracking-tight">{stat.val}</div>
                  </div>
               </div>
             ))}
          </div>

          {/* Action Area */}
          <div className="p-6 sm:p-8 lg:p-10 flex items-center justify-center lg:justify-start gap-3 sm:gap-4 shrink-0">
             <button className="w-12 h-12 sm:w-14 sm:h-14 rounded-[1rem] sm:rounded-[1.2rem] bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 hover:border-brand/30 transition-all duration-500 shadow-xl group/btn hover:scale-110 active:scale-90">
                <Settings size={20} className="sm:size-[22px] group-hover/btn:rotate-90 transition-transform duration-700" />
             </button>
             <button className="flex-1 sm:flex-none px-6 sm:px-8 h-12 sm:h-14 rounded-[1rem] sm:rounded-[1.2rem] bg-zinc-900 border border-white/10 flex items-center justify-center gap-2 sm:gap-3 text-zinc-500 hover:text-rose-500 hover:border-rose-500/30 transition-all duration-500 shadow-xl font-black text-[9px] sm:text-[10px] uppercase tracking-widest group/logout hover:scale-110 active:scale-90">
                <LogOut size={16} className="sm:size-[18px]" />
                <span>Exit</span>
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserOverview;
