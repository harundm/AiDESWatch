import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Hook for navigation

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  FlagTriangleRight,
  TrendingUp,
  BellPlus,
  Users,
  MapPin,
  Calendar,
  ChevronRight,
  Thermometer,
  Droplets,
  Wind,
  ArrowUpRight,
  Flag, // Added for the "View Deep-Dive" indicator
} from "lucide-react";

// --- Static Data ---
const chartData = [
  { month: "Jan", score: 42.2 },
  { month: "Feb", score: 55.0 },
  { month: "Mar", score: 68.4 },
  { month: "Apr", score: 72.1 },
  { month: "May", score: 84.1 },
];

const StatCard = ({ title, value, icon: Icon, colorClass }) => (
  <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:translate-y-[-4px] transition-all duration-200">
    <div className="flex justify-between items-start mb-3">
      <span className="text-[11px] text-slate-500 font-bold tracking-wider uppercase">
        {title}
      </span>
      <Icon className={`w-5 h-5 ${colorClass}`} />
    </div>
    <div className="flex items-baseline gap-2">
      <h2 className={`text-4xl font-extrabold ${colorClass}`}>{value}</h2>
    </div>
  </div>
);

const LocationItem = ({ name, zone, score, status, statusColor, onClick }) => (
  <div onClick={onClick} className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all group cursor-pointer">
    <div className="flex items-center gap-4">
      <div
        className={`w-10 h-10 rounded-full bg-white flex items-center justify-center font-data-mono text-xs font-bold border ${statusColor.border} ${statusColor.text}`}
      >
        {score}
      </div>
      <div>
        <p className="text-sm font-bold group-hover:text-[#139a8d] transition-colors">
          {name}
        </p>
        <p className="text-[11px] text-slate-500">{zone}</p>
      </div>
    </div>
    <div className="flex items-center gap-3">
      <span
        className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-tighter border ${statusColor.bg} ${statusColor.text} ${statusColor.border}`}
      >
        {status}
      </span>
      <ChevronRight
        size={14}
        className="text-slate-300 group-hover:text-slate-500"
      />
    </div>
  </div>
);

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-900 border border-slate-700 p-3 rounded-lg shadow-xl">
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
          {label} 2026
        </p>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#139a8d]"></div>
          <p className="text-sm font-data-mono font-bold text-white">
            Score: <span className="text-[#139a8d]">{payload[0].value}</span>
          </p>
        </div>
      </div>
    );
  }
  return null;
};

const ProgressItem = ({ label, status, value, percent, color }) => (
  <div>
    <div className="flex justify-between text-xs font-bold mb-3">
      <span className="text-slate-600 uppercase tracking-tight">{label}</span>
      <span className={color.replace("bg", "text")}>
        {status} ({value})
      </span>
    </div>
    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
      <div
        className={`${color} h-full transition-all duration-1000`}
        style={{ width: `${percent}%` }}
      ></div>
    </div>
  </div>
);

//Main Dashboard Component

const SurveillanceDashboard = () => {
  const navigate = useNavigate(); // 1. Initialize navigate

  // Dropdown States
  const [selectedLoc, setSelectedLoc] = useState("Kuala Lumpur Metro Area");
  const [selectedDate, setSelectedDate] = useState("Jan - May 2026");
  const [isLocOpen, setIsLocOpen] = useState(false);
  const [isDateOpen, setIsDateOpen] = useState(false);

  const locationOptions = [
    "Kuala Lumpur Metro Area",
    "Selangor State",
    "Penang Island",
    "Johor Bahru",
  ];
  const dateOptions = ["Jan - May 2026", "June - Dec 2025", "Full Year 2025"];

  const locations = [
    {
      name: "Taman Melati",
      zone: "Zone 4A | Residential",
      score: 82,
      status: "CRITICAL",
      statusColor: {
        text: "text-red-600",
        border: "border-red-200",
        bg: "bg-red-50",
      },
    },
    {
      name: "Setapak",
      zone: "Zone 1C | Commercial",
      score: 74,
      status: "HIGH",
      statusColor: {
        text: "text-orange-600",
        border: "border-orange-200",
        bg: "bg-orange-50",
      },
    },
    {
      name: "Gombak",
      zone: "Zone 3B | Mixed Use",
      score: 67,
      status: "ELEVATED",
      statusColor: {
        text: "text-amber-600",
        border: "border-amber-200",
        bg: "bg-amber-50",
      },
    },
    {
      name: "Ampang Jaya",
      zone: "Zone 2D | Residential",
      score: 52,
      status: "MODERATE",
      statusColor: {
        text: "text-lime-600",
        border: "border-lime-200",
        bg: "bg-lime-50",
      },
    },
  ];

  return (
    <div className="flex-grow bg-[#F8FAFC]">
      <main className="px-6 max-w-7xl mx-auto py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-slate-900">
            Surveillance Dashboard
          </h1>
          <p className="text-slate-500 text-sm">
            Real-time vector risk analysis and monitoring
          </p>
        </div>

        {/* INTERACTIVE FILTERS SECTION */}
        <section className="mb-8">
          <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Location Selector */}
              <div className="relative">
                <button
                  onClick={() => {
                    setIsLocOpen(!isLocOpen);
                    setIsDateOpen(false);
                  }}
                  className="flex items-center gap-3 bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 w-full text-left hover:bg-slate-100 transition-colors"
                >
                  <MapPin className="text-slate-400 w-5 h-5" />
                  <div className="flex-grow">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      Location
                    </p>
                    <p className="text-sm font-bold text-slate-700">
                      {selectedLoc}
                    </p>
                  </div>
                  <ChevronRight
                    size={16}
                    className={`text-slate-400 transition-transform duration-200 ${isLocOpen ? "rotate-90" : ""}`}
                  />
                </button>
                {isLocOpen && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-xl z-50 py-2 overflow-hidden">
                    {locationOptions.map((loc) => (
                      <button
                        key={loc}
                        onClick={() => {
                          setSelectedLoc(loc);
                          setIsLocOpen(false);
                        }}
                        className="w-full text-left px-4 py-2 text-sm hover:bg-teal-50 hover:text-[#139a8d] transition-colors"
                      >
                        {loc}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Date Selector */}
              <div className="relative">
                <button
                  onClick={() => {
                    setIsDateOpen(!isDateOpen);
                    setIsLocOpen(false);
                  }}
                  className="flex items-center gap-3 bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 w-full text-left hover:bg-slate-100 transition-colors"
                >
                  <Calendar className="text-slate-400 w-5 h-5" />
                  <div className="flex-grow">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      Date Range
                    </p>
                    <p className="text-sm font-bold text-slate-700">
                      {selectedDate}
                    </p>
                  </div>
                  <ChevronRight
                    size={16}
                    className={`text-slate-400 transition-transform duration-200 ${isDateOpen ? "rotate-90" : ""}`}
                  />
                </button>
                {isDateOpen && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-xl z-50 py-2 overflow-hidden">
                    {dateOptions.map((date) => (
                      <button
                        key={date}
                        onClick={() => {
                          setSelectedDate(date);
                          setIsDateOpen(false);
                        }}
                        className="w-full text-left px-4 py-2 text-sm hover:bg-teal-50 hover:text-[#139a8d] transition-colors"
                      >
                        {date}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Status Display */}
              <div className="flex items-center gap-3 bg-teal-50/50 border border-teal-100 rounded-xl px-4 py-3">
                <FlagTriangleRight className="text-[#139a8d] w-5 h-5" />
                <div>
                  <p className="text-[10px] font-bold text-teal-600 uppercase tracking-wider">
                    Status
                  </p>
                  <p className="text-sm font-bold text-[#139a8d]">
                    Live Verified
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* KPI Cards */}
        <section className="font-data-mono grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Active Hotspots"
            value="14"
            icon={FlagTriangleRight}
            colorClass="text-red-600"
          />
          <StatCard
            title="Avg Risk Score"
            value="58.4"
            icon={TrendingUp}
            colorClass="text-orange-600"
          />
          <StatCard
            title="Subscribers"
            value="12,481"
            icon={BellPlus}
            colorClass="text-[#139a8d]"
          />
          <StatCard
            title="Population"
            value="1.85M"
            icon={Users}
            colorClass="text-slate-700"
          />
        </section>

        {/* Analytics Card (Chart + Locations) */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* 2. Added Click Handler and Hover Effects to this Div */}
          <div
            onClick={() => navigate("/analytics")}
            className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 cursor-pointer hover:border-[#139a8d] hover:shadow-md transition-all group/card"
          >
            <div className="flex justify-between items-start mb-8">
              <div>
                <h3 className="text-lg font-bold text-slate-800">
                  Risk Score Trend
                </h3>
                <p className="text-[10px] text-[#139a8d] font-bold flex items-center gap-1 opacity-0 group-hover/card:opacity-100 transition-opacity">
                  View Analytics Deep-Dive <ArrowUpRight size={12} />
                </p>
              </div>
              <div className="bg-orange-50 text-orange-600 px-3 py-1 rounded-full flex items-center gap-2 border border-orange-100">
                <TrendingUp size={14} />
                <span className="text-[10px] font-bold uppercase">
                  Accelerating
                </span>
              </div>
            </div>

            <div
              className="h-64 w-full outline-none [&_.recharts-wrapper]:outline-none"
              tabIndex="-1"
            >
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={chartData}
                  accessibilityLayer={false}
                  style={{ outline: "none" }}
                >
                  <defs>
                    <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#139a8d" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#139a8d" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    stroke="#f1f5f9"
                  />
                  <XAxis
                    dataKey="month"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#94a3b8", fontSize: 11 }}
                    dy={10}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#94a3b8", fontSize: 11 }}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Area
                    type="monotone"
                    dataKey="score"
                    stroke="#139a8d"
                    strokeWidth={3}
                    fill="url(#colorScore)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Monthly Stats */}
            <div className="flex justify-between items-center border-t border-slate-50 pt-6 mt-4">
              <div className="flex gap-10">
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    Monthly Low
                  </p>
                  <p className="text-lg font-data-mono font-bold text-slate-700">
                    42.2
                  </p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    Monthly High
                  </p>
                  <p className="text-lg font-data-mono font-bold text-slate-700">
                    84.1
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
            <h3 className="text-lg font-bold text-slate-800 mb-6">
              Top Risk Locations
            </h3>
            <div className="flex flex-col gap-1">
              {locations.map((loc, index) => (
                <LocationItem
                  key={index}
                  {...loc}
                  onClick={() => navigate("/risk-profile/tanjung-aru")}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Bottom Details Section */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
            <h3 className="text-lg font-bold mb-6 text-slate-800">
              Environmental Impactors
            </h3>
            <div className="font-data-mono grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Temp", value: "33°C", icon: Thermometer },
                { label: "Humidity", value: "89%", icon: Droplets },
                { label: "Rainfall", value: "210mm", icon: Droplets },
                { label: "Wind", value: "12 km/h", icon: Wind },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-slate-50 flex flex-col items-center shadow-inner-sm"
                >
                  <item.icon className="w-5 h-5 text-[#139a8d] mb-2" />
                  <p className="text-[10px] font-bold text-slate-400 uppercase">
                    {item.label}
                  </p>
                  <p className="text-lg font-bold text-slate-700">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
            <h4 className="text-[11px] font-bold text-slate-400 uppercase mb-8 tracking-widest">
              Vector Breeding Index
            </h4>
            <div className="space-y-8">
              <ProgressItem
                label="Larval Density"
                status="High"
                value="18.4"
                percent={74}
                color="bg-orange-500"
              />
              <ProgressItem
                label="Ovitrap Rate"
                status="Critical"
                value="42%"
                percent={90}
                color="bg-red-600"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SurveillanceDashboard;
