import Metric from './Metric';

const MetricGrid = ({ 
  metrics = [
    { title: "Net Liquidity", value: "₿ 4.285", trend: "+12.2%" },
    { title: "Hash Velocity", value: "98.4 GH/s", trend: "+5.4%" },
    { title: "Core Latency", value: "1.24 ms", trend: "-0.8%" },
    { title: "Active Nodes", value: "12,942", trend: "+18%" }
  ]
}) => {
  return (
    <div className="w-full">
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-4 gap-6 md:gap-8">
        {metrics.map((m, i) => (
          <div key={i} className="h-full">
            <Metric 
              title={m.title}
              value={m.value}
              trend={m.trend}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MetricGrid;
