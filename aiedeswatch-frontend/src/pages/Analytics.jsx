import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
} from "recharts";
import {
  CheckCircle,
  Clock,
  AlertTriangle,
  Beaker,
  Info,
  CloudRain,
  Bug,
  Thermometer,
  FileDown,
  SlidersHorizontal,
} from "lucide-react";

// --- Mock Data for Charts ---

const forecastData = [
  { day: "D1", melati: 45, setapak: 60 },
  { day: "D3", melati: 52, setapak: 62 },
  { day: "D5", melati: 48, setapak: 70 },
  { day: "D7", melati: 61, setapak: 75 },
  { day: "D9", melati: 75, setapak: 72 },
  { day: "D11", melati: 82, setapak: 78 },
  { day: "D14", melati: 89, setapak: 82 },
];

const decompositionData = [
  { month: "JAN", stagnant: 10, larval: 15, ovitrap: 20 },
  { month: "FEB", stagnant: 15, larval: 20, ovitrap: 25 },
  { month: "MAR", stagnant: 20, larval: 25, ovitrap: 35 },
  { month: "APR", stagnant: 25, larval: 30, ovitrap: 50 },
  { month: "MAY", stagnant: 35, larval: 40, ovitrap: 75 },
];

// --- Sub-Components ---

const StatCard = ({
  title,
  value,
  trend,
  icon: Icon,
  subtext,
  colorClass,
  isAlert,
}) => (
  <div
    className={`bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:translate-y-[-2px] transition-all duration-200 relative overflow-hidden`}
  >
    {isAlert && (
      <div className="absolute top-0 left-0 w-1 h-full bg-orange-600"></div>
    )}
    <div className="flex justify-between items-start mb-2">
      <span className="text-[11px] text-slate-500 uppercase tracking-wider font-bold">
        {title}
      </span>
      <Icon className={`w-5 h-5 ${colorClass}`} />
    </div>
    <div className="flex items-baseline gap-2">
      <span className="text-3xl font-bold text-slate-900 font-sora">
        {value}
      </span>
      {trend && (
        <span className={`text-xs font-data-mono font-bold ${colorClass}`}>
          {trend}
        </span>
      )}
    </div>
    <p className="text-xs text-slate-500 mt-2 flex items-center gap-1">
      {subtext}
    </p>
  </div>
);

const CorrelationItem = ({ label, value, percent, color }) => (
  <div className="grid grid-cols-12 items-center gap-4">
    <div className="col-span-4 text-xs font-bold text-slate-700">{label}</div>
    <div className="col-span-6 h-3 bg-slate-100 rounded-full overflow-hidden">
      <div className={`h-full ${color}`} style={{ width: `${percent}%` }}></div>
    </div>
    <div
      className={`col-span-2 text-right font-data-mono text-xs font-bold ${color.replace("bg-", "text-")}`}
    >
      {value}
    </div>
  </div>
);

const TimelineItem = ({ title, subtext, date, impact, color, dotColor }) => (
  <div className="relative pl-8 pb-6 last:pb-0">
    <span
      className={`absolute left-0 top-1 w-4 h-4 rounded-full border-2 border-white ${dotColor} ring-4 ${dotColor}/10`}
    ></span>
    <div className="flex justify-between items-start">
      <div>
        <h4 className="font-bold text-sm text-slate-900">{title}</h4>
        <p className="text-xs text-slate-500">{subtext}</p>
        <p className="text-[10px] text-slate-400 mt-1 uppercase font-bold">
          {date}
        </p>
      </div>
      <div className={`font-data-mono font-bold text-sm ${color}`}>
        {impact}
      </div>
    </div>
  </div>
);

// --- Main Page Component ---

const Analytics = () => {
  return (
    <div className="bg-[#F8FAFC] min-h-screen font-sans text-slate-900 pb-20">
      <main className="max-w-7xl mx-auto px-6 pt-10 space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight font-sora text-slate-900">
              Predictive Analytics Deep-Dive
            </h1>
            <p className="text-slate-500 mt-2 max-w-2xl text-lg">
              High-precision forecasting engine synthesizing environmental,
              entomological, and socio-economic variables to anticipate outbreak
              trajectories.
            </p>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-teal-50 text-teal-700 border border-teal-200 rounded-lg font-bold flex items-center gap-2 hover:bg-teal-100 transition-colors text-sm">
              <SlidersHorizontal size={18} /> Configure Parameters
            </button>
            <button className="px-4 py-2 bg-[#0d9488] text-white rounded-lg font-bold flex items-center gap-2 hover:brightness-110 transition-all text-sm">
              <FileDown size={18} /> Export PDF Report
            </button>
          </div>
        </div>

        {/* KPI Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Forecast Accuracy (14D)"
            value="91.4%"
            trend="+3.1%"
            icon={CheckCircle}
            colorClass="text-green-600"
            subtext="vs trailing quarter average"
          />
          <StatCard
            title="Avg Outbreak Lag"
            value="17 Days"
            icon={Clock}
            colorClass="text-amber-600"
            subtext="Rainfall spike → peak surge"
          />
          <StatCard
            title="Zones at Risk"
            value="8 / 24"
            trend="High Alert"
            icon={AlertTriangle}
            colorClass="text-orange-600"
            subtext="2 zones entering risk in 7 days"
            isAlert
          />
          <StatCard
            title="Interventions"
            value="34"
            trend="-22% Risk"
            icon={Beaker}
            colorClass="text-teal-600"
            subtext="Active post-fogging tracking"
          />
        </div>

        {/* Main Forecast Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-xl font-bold font-sora">
                  14-Day Outbreak Probability Forecast
                </h2>
                <p className="text-xs text-slate-500">
                  Stochastic model projections with 95% confidence intervals
                </p>
              </div>
              <div className="flex gap-4">
                <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-500">
                  <span className="w-2 h-2 rounded-full bg-teal-600"></span>{" "}
                  TAMAN MELATI
                </div>
                <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-500">
                  <span className="w-2 h-2 rounded-full bg-orange-500"></span>{" "}
                  SETAPAK
                </div>
              </div>
            </div>

            <div className="h-[320px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={forecastData}>
                  <defs>
                    <linearGradient
                      id="colorMelati"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="5%" stopColor="#0d9488" stopOpacity={0.1} />
                      <stop offset="95%" stopColor="#0d9488" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    stroke="#f1f5f9"
                  />
                  <XAxis
                    dataKey="day"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 10, fill: "#94a3b8" }}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 10, fill: "#94a3b8" }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1e293b",
                      border: "none",
                      borderRadius: "8px",
                      color: "#fff",
                    }}
                    itemStyle={{ fontSize: "12px", fontWeight: "bold" }}
                  />
                  <Area
                    type="monotone"
                    dataKey="melati"
                    stroke="#0d9488"
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#colorMelati)"
                  />
                  <Area
                    type="monotone"
                    dataKey="setapak"
                    stroke="#f97316"
                    strokeWidth={3}
                    fill="transparent"
                    strokeDasharray="5 5"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Ranking Sidebar */}
          <div className="lg:col-span-4 bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col">
            <h2 className="text-xl font-bold font-sora mb-4">
              Zone Probability Ranking
            </h2>
            <div className="space-y-4 flex-grow">
              {[
                {
                  name: "Taman Melati",
                  zone: "Zone 4A",
                  prob: "89%",
                  color: "bg-red-600",
                  text: "text-red-600",
                  bg: "bg-red-50",
                },
                {
                  name: "Setapak",
                  zone: "Zone 1C",
                  prob: "74%",
                  color: "bg-orange-500",
                  text: "text-orange-500",
                  bg: "bg-orange-50",
                },
                {
                  name: "Gombak",
                  zone: "Zone 3B",
                  prob: "61%",
                  color: "bg-amber-500",
                  text: "text-amber-500",
                  bg: "bg-amber-50",
                },
                {
                  name: "Kepong",
                  zone: "Zone 5A",
                  prob: "38%",
                  color: "bg-green-600",
                  text: "text-green-600",
                  bg: "bg-green-50",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`${item.bg} p-3 rounded-lg border-l-4 ${item.color.replace("bg-", "border-")}`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-bold text-sm">{item.name}</h4>
                      <p className="text-[10px] text-slate-500 uppercase font-bold">
                        {item.zone}
                      </p>
                    </div>
                    <span className={`font-data-mono font-bold ${item.text}`}>
                      {item.prob}
                    </span>
                  </div>
                  <div className="h-1.5 bg-white rounded-full overflow-hidden">
                    <div
                      className={`h-full ${item.color}`}
                      style={{ width: item.prob }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 py-2 border-2 border-teal-600 text-teal-600 font-bold rounded-lg hover:bg-teal-50 transition-colors text-sm">
              View all 24 zones
            </button>
          </div>
        </div>

        {/* Bottom Analytics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Correlations */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold font-sora">
                Environmental Correlations
              </h2>
              <span className="text-[10px] font-bold bg-slate-100 px-2 py-1 rounded text-slate-500 uppercase tracking-widest">
                Pearson r Coefficients
              </span>
            </div>
            <div className="space-y-5">
              <CorrelationItem
                label="Rainfall (30d)"
                value="0.88"
                percent={88}
                color="bg-teal-600"
              />
              <CorrelationItem
                label="Humidity Avg"
                value="0.72"
                percent={72}
                color="bg-teal-500"
              />
              <CorrelationItem
                label="Temperature Avg"
                value="0.61"
                percent={61}
                color="bg-amber-500"
              />
              <CorrelationItem
                label="Wind Speed"
                value="0.18"
                percent={18}
                color="bg-slate-300"
              />
            </div>
            <div className="mt-8 p-3 bg-teal-50 rounded-lg flex gap-3 items-center border border-teal-100">
              <Info className="text-teal-600 w-5 h-5 flex-shrink-0" />
              <p className="text-[11px] text-teal-800 leading-tight font-medium">
                Rainfall lag is consistent at 17-21 days across all monitored
                high-density zones.
              </p>
            </div>
          </div>

          {/* Lag Analysis */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h2 className="text-xl font-bold font-sora mb-6">Lag Analysis</h2>
            <div className="space-y-6">
              <LagDetail
                icon={CloudRain}
                label="Rainfall Spike"
                lead="2-3 Week Lead"
                impact="+44%"
                sub="Probable surge"
                color="text-orange-600"
                bg="bg-orange-50"
              />
              <LagDetail
                icon={Bug}
                label="Ovitrap Threshold"
                lead="<1 Week Lead"
                impact="+62%"
                sub="Immediate threat"
                color="text-red-600"
                bg="bg-red-50"
              />
              <LagDetail
                icon={Thermometer}
                label="Temp above 34°C"
                lead="1 Week Lead"
                impact="+18%"
                sub="Accelerated breeding"
                color="text-amber-600"
                bg="bg-amber-50"
              />
            </div>
          </div>

          {/* Intervention Tracker */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h2 className="text-xl font-bold font-sora mb-6">
              Intervention Impact Tracker
            </h2>
            <div className="relative before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-100">
              <TimelineItem
                title="Taman Melati"
                subtext="Fogging & Larviciding Deployment"
                date="12 Mar 2026"
                impact="-28% Risk"
                color="text-green-600"
                dotColor="bg-green-500"
              />
              <TimelineItem
                title="Setapak"
                subtext="Source Reduction Cleanup"
                date="05 Mar 2026"
                impact="-19% Risk"
                color="text-green-600"
                dotColor="bg-teal-500"
              />
              <TimelineItem
                title="Gombak"
                subtext="Public Engagement Campaign"
                date="28 Feb 2026"
                impact="-5% Risk"
                color="text-slate-500"
                dotColor="bg-amber-500"
              />
            </div>
          </div>

          {/* Breeding Index Decomposition */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h2 className="text-xl font-bold font-sora mb-4">
              Breeding Index Decomposition
            </h2>
            <div className="h-[240px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={decompositionData} barGap={0}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    stroke="#f1f5f9"
                  />
                  <XAxis
                    dataKey="month"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 10, fontWeight: "bold" }}
                  />
                  <YAxis hide />
                  <Tooltip cursor={{ fill: "#f8fafc" }} />
                  <Legend
                    iconType="circle"
                    wrapperStyle={{ fontSize: "10px", paddingTop: "20px" }}
                  />
                  <Bar
                    dataKey="stagnant"
                    name="Stagnant Water"
                    stackId="a"
                    fill="#5eead4"
                    radius={[0, 0, 0, 0]}
                  />
                  <Bar
                    dataKey="larval"
                    name="Larval Density"
                    stackId="a"
                    fill="#0d9488"
                    radius={[0, 0, 0, 0]}
                  />
                  <Bar
                    dataKey="ovitrap"
                    name="Ovitrap Rate"
                    stackId="a"
                    fill="#ea580c"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const LagDetail = ({ icon: Icon, label, lead, impact, sub, color, bg }) => (
  <div className="flex items-center justify-between border-b border-slate-50 pb-4 last:border-0 last:pb-0">
    <div className="flex items-center gap-4">
      <div
        className={`w-10 h-10 rounded-lg ${bg} flex items-center justify-center ${color}`}
      >
        <Icon size={20} />
      </div>
      <div>
        <h4 className="font-bold text-sm">{label}</h4>
        <p className="text-[10px] text-slate-400 font-bold uppercase">{lead}</p>
      </div>
    </div>
    <div className="text-right">
      <div className={`${color} font-data-mono font-bold`}>{impact}</div>
      <div className="text-[10px] text-slate-400 font-medium">{sub}</div>
    </div>
  </div>
);

export default Analytics;
