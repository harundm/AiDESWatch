import { ArrowRight } from "lucide-react";

export default function RiskCard({
  location,
  subregion,
  riskScore,
  status,
  colorClass,
  image,
}) {
  return (
    <div className="bg-white border border-border rounded-xl overflow-hidden hover-lift flex flex-col">
      <div className="aspect-video relative overflow-hidden bg-surface-100">
        <img
          src={image}
          className="w-full h-full object-cover"
          alt={location}
        />
        <div
          className={`absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full flex items-center gap-1.5 border`}
        >
          <span
            className={`w-2 h-2 rounded-full pulse-dot ${colorClass}`}
          ></span>
          <span
            className={`font-data-mono text-xs font-bold uppercase tracking-tight`}
          >
            {status}
          </span>
        </div>
      </div>
      <div className="p-5 flex flex-col h-full">
        <div className="flex justify-between items-start mb-1">
          <h3 className="font-headline text-xl font-semibold">{location}</h3>
          <span className="font-data-mono font-bold">
            {riskScore}
            <span className="text-xs opacity-60">/100</span>
          </span>
        </div>
        <p className="text-on-surface-variant text-xs uppercase font-bold mb-4">
          {subregion}
        </p>
        <div className="mt-auto pt-4 border-t flex justify-between items-center">
          <span className="text-[11px] text-on-surface-variant">
            Updated recently
          </span>
          <ArrowRight size={18} className="text-primary" />
        </div>
      </div>
    </div>
  );
}
