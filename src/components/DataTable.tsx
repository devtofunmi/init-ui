import { MoreHorizontal, ArrowDownLeft, ArrowUpRight } from 'lucide-react';
import { cn } from '../lib/utils';

const DataTable = ({  title = "Ledger Activity",
}: { title?: string }) => {
  const transactions = [
    { id: 1, name: "Node Activation", date: "05 FEB 2026", amount: "Ξ 1.240", status: "Success", type: "in" },
    { id: 2, name: "Protocol Sync", date: "05 FEB 2026", amount: "-Ξ 0.082", status: "Pending", type: "out" },
    { id: 3, name: "Core Uplink", date: "04 FEB 2026", amount: "Ξ 15.000", status: "Success", type: "in" },
  ];

  return (
    <div className="w-full">
      <div className="w-full h-full glass-card noise premium-border rounded-[2.5rem] flex flex-col group relative overflow-hidden bg-zinc-950/40 min-h-[500px]">
      {/* Active Synthesis Scan */}
      <div className="scanning-line opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Header decoration */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand/30 to-transparent" />
        
        <div className="p-8 md:p-10 flex items-center justify-between bg-zinc-950/40 relative z-10">
          <div className="flex flex-col gap-1.5">
            <span className="text-[10px] font-black text-brand uppercase tracking-[0.3em]">Operational Ledger</span>
            <h3 className="text-2xl font-black text-white italic tracking-tighter uppercase">{title}</h3>
          </div>
          <div className="hidden md:block px-3 py-1 bg-white/5 border border-white/10 rounded-lg">
            <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Auto-Refetching</span>
          </div>
        </div>

        <div className="flex-1 overflow-x-auto relative z-10">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/5">
                <th className="px-10 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">Transaction</th>
                <th className="px-10 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">Node Timestamp</th>
                <th className="px-10 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">Value (ETH)</th>
                <th className="px-10 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">Status</th>
                <th className="px-10 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.03]">
              {transactions.map((item) => (
                <tr key={item.id} className="group hover:bg-brand/[0.02] transition-all duration-500 cursor-pointer">
                  <td className="px-10 py-8">
                    <div className="flex items-center gap-4">
                      <div className={cn(
                        "w-10 h-10 rounded-xl flex items-center justify-center border transition-colors",
                        item.type === 'in' ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-500" : "bg-zinc-900 border-white/5 text-zinc-500"
                      )}>
                        {item.type === 'in' ? <ArrowDownLeft size={18} /> : <ArrowUpRight size={18} />}
                      </div>
                      <span className="text-sm font-black tracking-widest text-white uppercase">{item.name}</span>
                    </div>
                  </td>
                  <td className="px-10 py-8">
                    <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">{item.date}</span>
                  </td>
                  <td className="px-10 py-8">
                    <span className={cn(
                      "text-sm font-black tracking-tighter",
                      item.type === 'in' ? "text-emerald-500" : "text-white"
                    )}>{item.amount}</span>
                  </td>
                  <td className="px-10 py-8">
                    <span className={cn(
                      "px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border",
                      item.status === 'Success' ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-500" : "bg-amber-500/10 border-amber-500/20 text-amber-500"
                    )}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-10 py-8 text-right">
                    <button
                      className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-zinc-500 hover:text-white hover:bg-brand/20 hover:border-brand/30 border border-transparent transition-all shadow-xl group/action"
                    >
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
          <button
            className="w-full py-5 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600 hover:text-white border-t border-white/5 hover:bg-white/[0.02] transition-all bg-white/[0.01]"
          >
            Deconstruct Full Ledger
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
