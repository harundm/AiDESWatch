import React from "react";
import { AlertCircle, CheckCircle2 } from "lucide-react";

export default function RiskProfile() {
  const history = [
    { date: "Feb 2026", cases: "42 cases", status: "warning" },
    { date: "Nov 2025", cases: "18 cases", status: "verified" },
    { date: "Jun 2025", cases: "5 cases", status: "verified" },
    { date: "Jan 2025", cases: "31 cases", status: "verified" },
  ];

  // Add 'className' to the props list
  const KPICard = ({ title, value, sub, color, className }) => (
    <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-center min-h-[160px]">
      <p className="font-dmSans text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-6">
        {title}
      </p>

      <div className="flex items-baseline gap-2">
        <h2
          className={`font-sora text-5xl font-extrabold tracking-tight ${color} ${className}`}
        >
          {value}
        </h2>

        {sub && (
          <span className="font-dmSans text-lg font-bold text-slate-300">
            {sub}
          </span>
        )}
      </div>
    </div>
  );

  return (
    <main className="bg-surface">
      {/* Hero Section */}
      <section className="relative pt-8 sm:pt-12 pb-8 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="font-headline-1 font-bold text-2xl sm:text-4xl text-on-surface">
              Tanjung Aru Risk Profile
            </h1>
            <p className="text-on-surface-variant mt-2 font-medium">
              Kota Kinabalu District
            </p>
          </div>
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-error-container text-risk-critical rounded-full font-bold text-xs border border-risk-critical/20 self-start md:self-auto">
            <span className="w-2 h-2 rounded-full bg-risk-critical animate-pulse"></span>
            HIGH ALERT PHASE
          </span>
        </div>
      </section>

      {/* KPI Cards */}
      <section className="px-4 sm:px-6 max-w-6xl mx-auto mb-8 sm:mb-12 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
        <KPICard
          title="Composite Risk Score"
          value="92"
          sub="/100"
          color="text-risk-critical"
          className="font-data-mono"
        />
        <KPICard
          title="Days to Outbreak"
          value="3"
          sub="Days"
          color="text-risk-critical"
          className="font-data-mono"
        />
        <KPICard
          title="Primary Driver"
          value="Rainfall Spike"
          color="text-t900"
          className="!text-3xl sm:!text-4xl font-bold"
        />
      </section>

      {/* Historical Table */}
      <section className="px-4 sm:px-6 max-w-6xl mx-auto pb-10 sm:pb-16">
        <h2 className="text-xl text-on-surface mb-4">
          Historical Outbreak Cases
        </h2>
        <div className="bg-white border border-border rounded-xl overflow-hidden shadow-sm overflow-x-auto">
          <table className="w-full text-left min-w-[400px]">
            <thead>
              <tr className="bg-slate-50 text-[11px] uppercase tracking-widest text-slate-500 font-bold border-b">
                <th className="p-3 sm:p-6">Month / Year</th>
                <th className="p-3 sm:p-6">Case Count</th>
                <th className="p-3 sm:p-6 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {history.map((row, i) => (
                <tr key={i} className="hover:bg-slate-50 transition-colors">
                  <td className="p-3 sm:p-6 font-data-mono font-bold">{row.date}</td>
                  <td className="p-3 sm:p-6 font-data-mono text-on-surface">
                    {row.cases}
                  </td>
                  <td className="p-3 sm:p-6 text-right">
                    {row.status === "warning" ? (
                      <AlertCircle
                        className="inline text-amber-500"
                        size={20}
                      />
                    ) : (
                      <CheckCircle2
                        className="inline text-risk-low"
                        size={20}
                      />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}

function KPICard({ title, value, sub, color }) {
  return (
    <div className="bg-white border border-border p-8 rounded-2xl shadow-sm flex flex-col h-44">
      <span className="text-[11px] uppercase tracking-[0.2em] text-slate-400 font-bold mb-auto">
        {title}
      </span>
      <div className="flex items-baseline gap-2">
        <span className={`text-5xl font-black ${color}`}>{value}</span>
        {sub && (
          <span className={`text-xl font-bold opacity-40 ${color}`}>{sub}</span>
        )}
      </div>
    </div>
  );
}
