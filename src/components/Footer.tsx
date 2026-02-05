import { cn } from '../lib/utils';

const Footer = ({ 
  logoText = "INTENT", 
  links = [],
  socials = [
    { label: 'G', href: 'https://github.com/devtofunmi/intent-ui' },
    { label: 'X', href: '#' },
    { label: 'L', href: '#' }
  ],
  showLegal = true,
  showBottomBar = true
}) => {
  const handleScroll = (e, href) => {
    if (href?.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="w-full px-4 md:px-10 pb-12 mt-32 relative group/footer">
      <div className="max-w-7xl mx-auto glass-card noise premium-border p-10 md:p-24 rounded-[3rem] md:rounded-[5rem] relative overflow-hidden shadow-2xl transition-all duration-1000 hover:shadow-[0_0_100px_-20px_hsla(var(--brand-glow)/0.1)]">
        {/* Extreme Background Atmosphere */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand/5 blur-[150px] rounded-full pointer-events-none group-hover/footer:bg-brand/10 transition-colors duration-1000" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className={cn(
          "grid grid-cols-1 2xl:grid-cols-12 gap-16 2xl:gap-24 relative z-10",
          showBottomBar ? "mb-20 xl:mb-40" : "mb-0"
        )}>
          <div className="col-span-1 2xl:col-span-5 space-y-12">
            <div className="space-y-6">
              <div className="text-4xl font-black tracking-[-0.05em] text-white brand-gradient-text uppercase leading-none">
                {logoText}
              </div>
              <p className="text-zinc-500 text-xl md:text-2xl font-medium leading-tight max-w-md balance-text">
                Architecting the next generation of human-machine intent interfaces.
              </p>
            </div>
            
            <div className="flex gap-4">
               {socials.map((s, i) => (
                <a 
                  key={i} 
                  href={s.href}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-zinc-500 hover:text-brand hover:border-brand/50 transition-all duration-500 hover:scale-110 active:scale-95 shadow-xl glass-card group/social overflow-hidden relative"
                >
                   <div className="absolute inset-0 bg-brand/10 opacity-0 group-hover/social:opacity-100 transition-opacity" />
                   <span className="text-xs font-black uppercase tracking-widest relative z-10">{s.label}</span>
                </a>
              ))}
            </div>
          </div>
          
          <div className="col-span-1 2xl:col-span-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-20">
            {links?.filter(group => showLegal || group.title !== "Legal").map((group, i) => (
              <div key={`footer-group-${group.title || i}`} className="space-y-10">
                <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-brand/80 ml-1">
                  {group.title}
                </h4>
                <ul className="space-y-6">
                  {group.items?.map((item, id) => {
                    const label = typeof item === 'string' ? item : item.label;
                    const href = typeof item === 'string' ? `#${item.toLowerCase().replace(/\s+/g, '-')}` : item.href;
                    return (
                      <li key={`footer-item-${label || id}`}>
                        <a 
                          href={href} 
                          onClick={(e) => handleScroll(e, href)}
                          target={href?.startsWith('http') ? "_blank" : undefined}
                          rel={href?.startsWith('http') ? "noopener noreferrer" : undefined}
                          className="text-zinc-500 hover:text-white transition-all duration-500 text-lg md:text-xl font-bold tracking-tight inline-block hover:translate-x-2 relative group/link"
                        >
                          {label}
                          <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-brand opacity-0 group-hover/link:opacity-100 transition-all duration-500" />
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        {showBottomBar && (
          <div className="pt-16 border-t border-white/5 flex flex-col lg:flex-row justify-between items-center gap-10 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
              <p className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.4em]">
                © 2024 {logoText} TECHNOLOGIES CO.
              </p>
              <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-brand/20" />
              <p className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.4em]">
                Neural Core Enabled
              </p>
            </div>
            
            <div className="flex gap-10">
              {['Protocol', 'Security', 'Status'].map((s) => (
                <a key={s} href="#" className="text-zinc-600 hover:text-white transition-all duration-300 text-[10px] font-black uppercase tracking-[0.4em] hover:tracking-[0.6em]">
                  {s}
                </a>
              ))}
            </div>
          </div>
        )}
        
        {/* Subtle Watermark */}
         <div className="absolute bottom-8 right-12 opacity-[0.02] pointer-events-none select-none">
            <div className="text-[120px] font-black tracking-tighter leading-none italic uppercase">Intent</div>
         </div>
      </div>
    </footer>
  );
};

export default Footer;
