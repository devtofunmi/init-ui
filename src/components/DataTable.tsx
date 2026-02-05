import { MoreHorizontal, ArrowDownLeft, ArrowUpRight } from 'lucide-react';
import { cn } from '../lib/utils';

const DataTable = ({ title = "Interface Ledger" }) => {
  const data = [
    { id: 1, name: "Node Activation", date: "05 FEB 2026", amount: "Ξ 1.240", status: "Success", type: "in" },
    { id: 2, name: "Protocol Sync", date: "05 FEB 2026", amount: "-Ξ 0.082", status: "Pending", type: "out" },
    { id: 3, name: "Core Uplink", date: "04 FEB 2026", amount: "Ξ 15.000", status: "Success", type: "in" },
    { id: 4, name: "Neural Cache", date: "04 FEB 2026", amount: "-Ξ 0.420", status: "Success", type: "out" },
  ];

  return (
    <div className="w-full">
      <div className="glass-card noise premium-border rounded-[2.5rem] overflow-hidden shadow-2xl relative group">
        {/* Header decoration */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand/30 to-transparent" />
        
        <div className="p-8 md:p-10 flex items-center justify-between bg-zinc-950/40 relative z-10">
          <div className="flex items-center gap-4">
            <div className="w-2 h-2 rounded-full bg-brand animate-pulse" />
            <h3 className="text-sm font-black uppercase tracking-[0.5em] text-white italic">
              {title}
            </h3>
          </div>
          <div className="hidden md:block px-3 py-1 bg-white/5 border border-white/10 rounded-lg">
            <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Auto-Refetching</span>
          </div>
        </div>

        <div className="overflow-x-auto relative z-10 scrollbar-hide">
          <table className="w-full text-left min-w-[700px]">
            <thead className="bg-white/5 border-b border-white/5">
              <tr>
                {["Operation", "Timestamp", "Resource Value", "State", ""].map((h, i) => (
                  <th key={h} className={cn(
                    "px-10 py-6 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600",
                    i === 4 ? "text-right" : ""
                  )}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.03]">
              {data.map((item) => (
                <tr key={item.id} className="group hover:bg-brand/[0.02] transition-all duration-500 cursor-pointer">
                  <td className="px-10 py-8">
                    <div className="flex items-center gap-4">
                       <div className={cn(
                         "w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-500",
                         item.type === 'in' 
                          ? 'bg-emerald-500/10 border-emerald-500/10 text-emerald-500 group-hover:scale-110' 
                          : 'bg-zinc-900 border-white/10 text-zinc-400 group-hover:scale-110'
                       )}>
                          {item.type === 'in' ? <ArrowDownLeft size={16} /> : <ArrowUpRight size={16} />}
                       </div>
                       <span className="text-base font-black text-white tracking-tighter uppercase italic group-hover:text-brand transition-colors duration-500">{item.name}</span>
                    </div>
                  </td>
                  <td className="px-10 py-8">
                    <span className="text-[10px] font-black text-zinc-600 uppercase tracking-widest leading-none bg-white/5 px-3 py-1.5 rounded-md">{item.date}</span>
                  </td>
                  <td className="px-10 py-8">
                    <span className={cn(
                      "text-sm font-black tracking-tight",
                      item.type === 'in' ? 'text-emerald-400' : 'text-zinc-200 opacity-60'
                    )}>
                      {item.amount}
                    </span>
                  </td>
                  <td className="px-10 py-8">
                    <span className={cn(
                      "inline-flex items-center gap-2 px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-[0.2em] border transition-all duration-500 backdrop-blur-md",
                      item.status === 'Success' 
                        ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20 group-hover:bg-emerald-500/20' 
                        : 'bg-amber-500/10 text-amber-500 border-amber-500/20 group-hover:bg-amber-500/20'
                    )}>
                      <div className={cn("w-1 h-1 rounded-full", item.status === 'Success' ? 'bg-emerald-400 animate-pulse' : 'bg-amber-500')} />
                      {item.status}
                    </span>
                  </td>
                  <td className="px-10 py-8 text-right">
                    <button className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-zinc-500 hover:text-white hover:bg-brand/20 hover:border-brand/30 border border-transparent transition-all shadow-xl group/action">
                      <MoreHorizontal size={14} className="group-hover/action:scale-125 transition-transform" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Action Footer */}
        <div className="p-6 md:p-8 border-t border-white/5 bg-zinc-950/40 flex justify-center relative z-10">
           <button className="text-[9px] font-black text-zinc-600 hover:text-brand uppercase tracking-[0.5em] transition-colors italic">Load Full Sync History</button>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
