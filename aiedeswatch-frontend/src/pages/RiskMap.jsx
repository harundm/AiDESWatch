import {
  MapContainer,
  TileLayer,
  Marker,
  Circle,
  ZoomControl,
} from "react-leaflet";
import { useNavigate } from "react-router-dom";
import L from "leaflet";
import { Search, Filter, Clock } from "lucide-react";

// Fix for Marker Icons in Leaflet with React
// This ensures the red dot appears correctly
const redDotIcon = new L.DivIcon({
  className: "custom-div-icon",
  html: `<div style="background-color: #DC2626; width: 22px; height: 22px; border: 3px solid white; border-radius: 50%; box-shadow: 0 0 15px rgba(220, 38, 38, 0.4);" class="pulse-dot"></div>`,
  iconSize: [22, 22],
  iconAnchor: [11, 11],
});

const orangeDotIcon = new L.DivIcon({
  className: "custom-div-icon",
  html: `<div style="background-color: #EA580C; width: 22px; height: 22px; border: 3px solid white; border-radius: 50%; box-shadow: 0 0 15px rgba(220, 38, 38, 0.4);" class="pulse-dot"></div>`,
  iconSize: [22, 22],
  iconAnchor: [11, 11],
});

const greenDotIcon = new L.DivIcon({
  className: "custom-div-icon",
  html: `<div style="background-color: #65A30D; width: 22px; height: 22px; border: 3px solid white; border-radius: 50%; box-shadow: 0 0 15px rgba(220, 38, 38, 0.4);" class="pulse-dot"></div>`,
  iconSize: [22, 22],
  iconAnchor: [11, 11],
});

export default function RiskMap() {
  const navigate = useNavigate();

  const hotspots = [
    {
      name: "Tanjung Aru",
      score: 92,
      status: "CRITICAL",
      color: "bg-[#DC2626]",
      text: "text-[#DC2626]",
      bg: "bg-red-50",
      eta: "3d",
    },
    {
      name: "Donggongon",
      score: 78,
      status: "HIGH",
      color: "bg-[#EA580C]",
      text: "text-[#EA580C]",
      bg: "bg-orange-50",
      eta: "5d",
    },
    {
      name: "Iramanis",
      score: 64,
      status: "ELEVATED",
      color: "bg-[#D97706]",
      text: "text-[#D97706]",
      bg: "bg-amber-50",
      eta: "12d",
    },
    {
      name: "Likas",
      score: 41,
      status: "MODERATE",
      color: "bg-[#65A30D]",
      text: "text-[#65A30D]",
      bg: "bg-green-50",
      eta: "24d",
    },
  ];

  return (
    // FORCE A FIXED HEIGHT WRAPPER
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "calc(100vh - 64px)",
        background: "#f1f5f9",
      }}
    >
      {/* 1. REAL INTERACTIVE MAP */}
      <MapContainer
        center={[5.955, 116.065]}
        zoom={12}
        zoomControl={false}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%", zIndex: 1 }}
      >
        <TileLayer
          // Using standard OpenStreetMap tiles (more reliable than CartoDB sometimes)
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />

        <Marker
          position={[5.955, 116.055]}
          icon={redDotIcon}
          eventHandlers={{
            click: () => navigate("/risk-profile/tanjung-aru"),
          }}
        />

        <Circle
          center={[5.955, 116.055]}
          radius={1000}
          pathOptions={{
            fillColor: "#DC2626",
            color: "#DC2626",
            weight: 1,
            opacity: 0.1,
            fillOpacity: 0.2,
          }}
        />

        <Marker
          position={[5.973, 116.104]}
          icon={orangeDotIcon}
          eventHandlers={{
            click: () => navigate("/risk-profile/tanjung-aru"),
          }}
        />

        <Circle
          center={[5.973, 116.104]}
          radius={700}
          pathOptions={{
            fillColor: "#EA580C",
            color: "#EA580C",
            weight: 1,
            opacity: 0.1,
            fillOpacity: 0.2,
          }}
        />

        <Marker
          position={[5.911, 116.1]}
          icon={orangeDotIcon}
          eventHandlers={{
            click: () => navigate("/risk-profile/tanjung-aru"),
          }}
        />

        <Circle
          center={[5.911, 116.1]}
          radius={1200}
          pathOptions={{
            fillColor: "#EA580C",
            color: "#EA580C",
            weight: 1,
            opacity: 0.1,
            fillOpacity: 0.2,
          }}
        />

        <Marker
          position={[5.983, 116.094]}
          icon={greenDotIcon}
          eventHandlers={{
            click: () => navigate("/risk-profile/tanjung-aru"),
          }}
        />

        <Circle
          center={[5.983, 116.094]}
          radius={500}
          pathOptions={{
            fillColor: "#65A30D",
            color: "#65A30D",
            weight: 1,
            opacity: 0.1,
            fillOpacity: 0.2,
          }}
        />

        <ZoomControl position="bottomright" />
      </MapContainer>

      {/* 2. UI OVERLAYS - Using high z-index to stay above map */}

      {/* Search Bar */}
      <div
        className="absolute top-6 left-6 right-6 md:left-6 md:right-auto md:w-full md:max-w-[400px]"
        style={{ zIndex: 1000 }}
      >
        <div className="bg-white/95 backdrop-blur shadow-2xl rounded-2xl flex items-center px-4 py-4 border border-slate-200">
          <Search size={20} className="text-slate-400 mr-3" />
          <input
            type="text"
            placeholder="Search postcode or area"
            className="bg-transparent border-none outline-none text-base w-full focus:ring-0"
          />
        </div>
      </div>

      {/* Hotspot List */}
      <div
        className="absolute top-6 left-6 right-6 md:left-auto md:w-[360px]"
        style={{ zIndex: 1000 }}
      >
        <div className="bg-white rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-slate-100 p-6 max-h-[80vh] flex flex-col">
          <div className="flex justify-between items-center mb-6 px-2">
            <h3 className="text-xl font-black text-slate-800 tracking-tight">
              Hotspot List
            </h3>
            <Filter size={20} className="text-slate-400 cursor-pointer" />
          </div>

          <div className="overflow-y-auto space-y-4 pr-1 custom-scrollbar">
            {hotspots.map((spot, i) => (
              <div
                key={i}
                onClick={() => navigate("/risk-profile/tanjung-aru")}
                className={`p-5 rounded-3xl border-l-[10px] transition-all hover:translate-x-1 cursor-pointer shadow-sm ${spot.bg} border-current ${spot.text}`}
              >
                <div className="flex justify-between items-center">
                  <div className="text-slate-800">
                    <h4 className="font-bold text-[16px] mb-2">{spot.name}</h4>
                    <div className="flex items-center gap-2">
                      <span
                        className={`px-2 py-0.5 rounded-lg text-[9px] font-black text-white ${spot.color}`}
                      >
                        {spot.status}
                      </span>
                      <span className="flex items-center text-[11px] font-bold opacity-60">
                        <Clock size={12} className="mr-1" /> ETA: {spot.eta}
                      </span>
                    </div>
                  </div>
                  <span className="text-3xl font-black tracking-tighter">
                    {spot.score}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="absolute bottom-10 left-6 z-[1000]">
        <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 border border-slate-200 shadow-2xl min-w-[280px]">
          <h4 className="text-[10px] uppercase font-black text-slate-400 tracking-[0.2em] mb-4">
            Risk Intensity
          </h4>
          <div className="h-3 w-full rounded-full bg-gradient-to-r from-green-500 via-orange-400 to-red-600 mb-6"></div>
          <div className="flex items-center gap-3">
            <span className="w-3.5 h-3.5 rounded-full bg-red-600 pulse-dot"></span>
            <span className="text-sm font-bold text-slate-700">
              Active Outbreak Predicted
            </span>
          </div>
        </div>
      </div>

      {/* System Status */}
      <div className="absolute bottom-8 right-20 z-[1000] flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur rounded-full border border-slate-200 shadow-lg">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        <span className="font-data-mono text-[10px] font-bold text-slate-600 uppercase tracking-tight">
          System: Operational
        </span>
      </div>
    </div>
  );
}
