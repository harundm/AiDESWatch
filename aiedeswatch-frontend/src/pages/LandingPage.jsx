import { Search, Map as MapIcon, ArrowRight } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";

// Reusing your "Red Dot" icon for consistency
const miniRedDot = new L.DivIcon({
  className: "custom-div-icon",
  html: `<div style="background-color: #DC2626; width: 12px; height: 12px; border: 2px solid white; border-radius: 50%; box-shadow: 0 0 8px rgba(220, 38, 38, 0.5);" class="pulse-dot"></div>`,
  iconSize: [12, 12],
  iconAnchor: [6, 6],
});

export default function LandingPage() {
  const navigate = useNavigate();

  const risks = [
    {
      id: "kinabatangan",
      loc: "Kinabatangan",
      risk: "82",
      status: "CRITICAL",
      color: "bg-[#DC2626]",
      textColor: "text-[#DC2626]",
      dot: "bg-[#DC2626]",
      bg: "bg-red-50",
      coords: [5.4167, 117.5833],
      zoom: 10,
    },
    {
      id: "lamag",
      loc: "Lamag",
      risk: "68",
      status: "HIGH",
      color: "bg-[#EA580C]",
      textColor: "text-[#EA580C]",
      dot: "bg-[#EA580C]",
      bg: "bg-orange-50",
      coords: [5.4763, 117.8207],
      zoom: 11,
    },
    {
      id: "taman-melati",
      loc: "Taman Melati",
      risk: "45",
      status: "ELEVATED",
      color: "bg-[#D97706]",
      textColor: "text-[#D97706]",
      dot: "bg-[#D97706]",
      bg: "bg-amber-50",
      coords: [3.2259, 101.7251],
      zoom: 14,
    },
  ];

  return (
    /* UPDATED: Changed bg-white to bg-surface to match AlertPage */
    <main className="bg-surface min-h-screen font-body-md">
      {/* Hero Section */}
      <section className="pt-20 pb-12 px-6 text-center max-w-5xl mx-auto">
        <h1 className="font-headline-1 font-black text-4xl md:text-7xl mb-6 text-slate-900 leading-[1.1] tracking-tight">
          Predictive Dengue Alerts <br />
          <span className="text-[#0d9488]">for Malaysia</span>
        </h1>
        <p className="text-slate-500 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
          AI-assisted predictive dengue epidemic outbreak in Malaysia.
          Hyperlocal, independent, and freely accessible to all.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <button
            onClick={() => navigate("/risk-map")}
            className="bg-[#0d9488] text-white px-10 py-4 rounded-2xl font-black flex items-center justify-center gap-2 hover:bg-slate-900 transition-all shadow-lg active:scale-95"
          >
            <MapIcon size={22} /> View Map
          </button>
          <Link
            to="/alerts"
            className="bg-white border border-slate-200 text-slate-700 px-10 py-4 rounded-2xl font-black hover:bg-slate-50 transition-all shadow-sm flex items-center justify-center"
          >
            Get Alerts
          </Link>
        </div>
      </section>

      {/* Global Search */}
      <section className="px-6 max-w-3xl mx-auto mb-20">
        <div className="relative group">
          <input
            className="w-full h-16 px-8 pr-16 bg-white border border-slate-100 rounded-full focus:ring-4 focus:ring-[#0d9488]/10 focus:border-[#0d9488] outline-none transition-all shadow-xl text-lg"
            placeholder="Search for Postcode or Area (e.g. Tanjung Aru)"
            type="text"
          />
          <button className="absolute right-2 top-2 h-12 w-12 bg-[#0d9488] text-white rounded-full flex items-center justify-center hover:shadow-lg transition-all">
            <Search size={22} />
          </button>
        </div>
      </section>

      {/* Risk Grid Section */}
      <section className="px-6 max-w-7xl mx-auto pb-32">
        <h2 className="text-2xl font-black text-slate-800 text-center mb-6 tracking-tight uppercase tracking-[0.1em]">
          Explore local risks
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {risks.map((risk) => (
            <RiskCard
              key={risk.id}
              {...risk}
              onClick={() => navigate(`/risk-profile/${risk.id}`)}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

function RiskCard({
  loc,
  risk,
  status,
  textColor,
  dot,
  bg,
  coords,
  zoom,
  onClick,
}) {
  return (
    <div
      onClick={onClick}
      className="bg-white border border-slate-100 rounded-[40px] overflow-hidden flex flex-col cursor-pointer transition-all hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-3 group p-2"
    >
      {/* MINI MAP CONTAINER */}
      <div className="h-56 w-full relative bg-slate-50 rounded-[32px] overflow-hidden border border-slate-50">
        <MapContainer
          center={coords}
          zoom={zoom}
          zoomControl={false}
          dragging={false}
          doubleClickZoom={false}
          scrollWheelZoom={false}
          attributionControl={false}
          className="h-full w-full z-0"
        >
          <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" />
          <Marker position={coords} icon={miniRedDot} />
        </MapContainer>

        {/* Floating Badge on top of Map */}
        <div className="absolute top-5 right-5 z-10 px-4 py-2 bg-white/95 backdrop-blur-md rounded-full flex items-center gap-2 border border-white shadow-md">
          <span
            className={`w-2.5 h-2.5 rounded-full animate-pulse ${dot}`}
          ></span>
          <span
            className={`font-black text-[11px] uppercase tracking-wider ${textColor}`}
          >
            {status}
          </span>
        </div>
      </div>

      <div className="font-data-mono p-8 pt-6 flex flex-col h-full">
        <div className="flex justify-between items-start mb-6">
          <h3 className="font-headline-1 text-2xl font-bold text-slate-800">
            {loc}
          </h3>
          <div className="flex flex-col items-end">
            <span className={`text-4xl font-black ${textColor}`}>{risk}</span>
            <span className="text-[10px] font-bold text-slate-300">/100</span>
          </div>
        </div>

        <div className="mt-auto pt-6 border-t border-slate-50 flex justify-between items-center">
          <span className="text-[11px] font-black uppercase tracking-widest text-slate-400 group-hover:text-[#0d9488] transition-colors">
            View Details
          </span>
          <div
            className={`w-12 h-12 rounded-2xl ${bg} flex items-center justify-center transition-all group-hover:bg-[#0d9488] group-hover:text-white group-hover:rotate-[-45deg]`}
          >
            <ArrowRight
              size={22}
              className={textColor + " group-hover:text-white"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
