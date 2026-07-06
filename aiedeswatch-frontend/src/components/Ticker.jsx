export default function Ticker() {
  const alerts = [
    { loc: "MUKIM AMPANG", status: "RED (HIGH RISK)", color: "bg-red-600" },
    { loc: "BATU CAVES", status: "AMBER (ELEVATED)", color: "bg-amber-500 text-black" },
    { loc: "PETALING JAYA", status: "GREEN (MONITORED)", color: "bg-green-600" },
    { loc: "GEORGETOWN", status: "RED (HIGH RISK)", color: "bg-red-600" },
    { loc: "KUCHING", status: "AMBER (ELEVATED)", color: "bg-amber-500 text-black" },
  ];

  return (
    <div className="ticker-wrap border-b border-outline">
      <div className="ticker">
        {[...alerts, ...alerts].map((item, i) => (
          <div key={i} className="ticker-item">
            <span className="font-medium">{item.loc}:</span>
            <span className={`${item.color} px-2 py-0.5 rounded text-[10px] font-bold mx-2`}>
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}