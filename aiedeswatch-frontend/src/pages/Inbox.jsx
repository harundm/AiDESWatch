import { useState } from "react";
import {
  Search,
  // Mail,
  // Bell,
  // AlertTriangle,
  // Info,
  // MessageSquare,
  Clock,
} from "lucide-react"; // Added Lucide icons

// Helper component for individual notification rows
const NotificationRow = ({
  source,
  detail,
  timestamp,
  type = "info",
  isRead = false,
  onClick,
}) => {
  const [read, setRead] = useState(isRead);

  let dotColorClass = "border border-outline-variant";
  let sourceTextClass  = "text-on-surface-variant";
  let rowBgClass = "hover:bg-t50";
  let detailBoldClass = "";
  let detailNormalClass = "text-on-surface-variant";
  let timestampClass = "text-outline";
  let indicatorBarClass =
    "bg-[#0D9488] opacity-0 group-hover:opacity-100 transition-opacity"; // Default hover indicator

  if (type === "critical") {
    dotColorClass = "bg-risk-critical pulse-critical";
    sourceTextClass = "text-risk-critical";
    rowBgClass = "bg-red-50 hover:bg-red-100";
    indicatorBarClass = "bg-risk-critical"; // Solid critical bar
  } else if (type === "system") {
    dotColorClass = "bg-[#0D9488]";
  }

  if (!read) {
    sourceTextClass =
      type === "critical" ? "text-risk-critical" : "text-on-surface";
    detailBoldClass = "font-bold";
    detailNormalClass = "text-on-surface-variant";
    timestampClass = "font-bold text-on-surface";
    if (type === "critical") {
      rowBgClass = "bg-red-50 hover:bg-red-100"; // Keep background for unread critical
    } else {
      rowBgClass = "hover:bg-t50"; // Default hover for unread non-critical
    }
  } else {
    // If read, and not critical, default to softer styles
    dotColorClass = "border border-outline-variant";
    sourceTextClass = "text-on-surface-variant";
    detailBoldClass = "font-normal";
    detailNormalClass = "text-outline";
    timestampClass = "text-outline";
    rowBgClass = "hover:bg-t50";
    indicatorBarClass =
      "bg-[#0D9488] opacity-0 group-hover:opacity-100 transition-opacity";
  }

  const handleRowClick = () => {
    setRead(true);
    if (onClick) onClick(); // If there's an external onClick handler
  };

  return (
    <div
      className={`group grid grid-cols-12 gap-4 px-6 py-4 border-b border-border cursor-pointer transition-colors relative ${rowBgClass}`}
      onClick={handleRowClick}
    >
      {/* Dynamic left indicator bar */}
      <div
        className={`absolute left-1 top-0 bottom-0 w-1 ${indicatorBarClass}`}
      ></div>

      <div className="col-span-12 lg:col-span-3 flex items-center gap-3">
        <span
          className={`w-3 h-3 rounded-full shrink-0 ${dotColorClass}`}
        ></span>
        <span className={`font-body-lg font-bold truncate ${sourceTextClass}`}>
          {source}
        </span>
      </div>
      <div className="col-span-12 lg:col-span-7">
        <span
          className={`block lg:inline ${detailBoldClass} ${detailNormalClass}`}
        >
          {detail.split(":")[0]}:
        </span>
        <span
          className={`text-on-surface-variant font-body-md ml-0 lg:ml-2 line-clamp-1 ${read ? "text-outline" : ""}`}
        >
          — {detail.split(":")[1]}
        </span>
      </div>
      <div
        className={`col-span-12 lg:col-span-2 text-left lg:text-right font-data-mono text-data-mono ${timestampClass}`}
      >
        {timestamp}
      </div>
    </div>
  );
};

export default function NotificationCenter() {
  const [filter, setFilter] = useState("all"); // 'all', 'unread', 'critical'

  const notifications = [
    {
      source: "Risk Engine",
      detail:
        "Automated Threshold Breach: Zone 7 — Anomaly detected in larvae density. Automated risk level escalated to high...",
      timestamp: "10:32 AM",
      type: "critical",
      isRead: false,
    },
    {
      source: "MOH Protocol Bot",
      detail:
        "New Protocol Deployed: Cluster D-24 — Revised epidemiological guidelines for immediate implementation across all centers...",
      timestamp: "09:15 AM",
      type: "system",
      isRead: false,
    },
    {
      source: "Health Surveillance AI",
      detail:
        "Weekly Forecast Sync Complete: Predictive models updated for the KL central metropolitan region. View dashboard...",
      timestamp: "08:45 AM",
      type: "system",
      isRead: false,
    },
    {
      source: "Scheduled Data Sync Bot",
      detail:
        "Scheduled Data Sync Complete: Sub-district B — All primary sensor nodes synchronized. 100% data integrity verified for cycle...",
      timestamp: "Yesterday",
      type: "info",
      isRead: true,
    },
    {
      source: "MOH Protocol Bot",
      detail:
        "Archive: Community Engagement Script V1.2 — Automated distribution of updated communication scripts for high-risk zones...",
      timestamp: "Yesterday",
      type: "info",
      isRead: true,
    },
    {
      source: "System Update Bot",
      detail:
        "Model Update: Neural-Net V2.4 Deployment — Deployment verification successful. Neural-Net V2.4 is now primary driver...",
      timestamp: "Oct 12",
      type: "info",
      isRead: true,
    },
  ];

  const filteredNotifications = notifications.filter((notification) => {
    if (filter === "unread") return !notification.isRead;
    if (filter === "critical") return notification.type === "critical";
    return true; // 'all' filter
  });

  return (
    <div className="flex">
      <main className="flex-1 min-h-[calc(100vh-64px)] px-6 bg-surface pb-4">
        {/* Custom Styles */}
        <style>{`
          .pulse-critical {
            animation: pulse-red 2s infinite;
          }
          @keyframes pulse-red {
            0% { box-shadow: 0 0 0 0 rgba(220, 38, 38, 0.4); }
            70% { box-shadow: 0 0 0 10px rgba(220, 38, 38, 0); }
            100% { box-shadow: 0 0 0 0 rgba(220, 38, 38, 0); }
          }
        `}</style>

        <div className="max-w-5xl mx-auto space-y-6 mt-6">
          {/* Search and Filters */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <h1 className="font-headline-1 text-2xl text-on-surface font-bold">
              Notification Center
            </h1>
            <div className="flex items-center gap-2 bg-white p-1 rounded-lg border border-border shadow-sm">
              <div
                className="flex items-center gap-2 px-3 py-1 border border-border rounded-md bg-surface-container-lowest"
                style={{ borderRadius: "10px", borderWidth: "1.5px" }}
              >
                <Search size={18} className="text-outline" />
                <input
                  className="bg-transparent border-none focus:ring-0 text-body-md text-on-surface placeholder:text-outline w-32 lg:w-48"
                  placeholder="Search notifications"
                  type="text"
                />
              </div>
              <button
                className={`px-4 py-1 text-body-md font-bold rounded-md transition-colors`}
                style={{ borderRadius: "10px" }}
                onClick={() => setFilter("all")}
              >
                <span
                  className={
                    filter === "all"
                      ? "bg-primary text-white px-4 py-1 rounded-md"
                      : "text-on-surface-variant hover:bg-surface-100"
                  }
                >
                  All
                </span>
              </button>
              <button
                className={`px-4 py-1 text-body-md font-bold rounded-md transition-colors`}
                style={{ borderRadius: "10px" }}
                onClick={() => setFilter("unread")}
              >
                <span
                  className={
                    filter === "unread"
                      ? "bg-primary text-white px-4 py-1 rounded-md"
                      : "text-on-surface-variant hover:bg-surface-100"
                  }
                >
                  Unread
                </span>
              </button>
              <button
                className={`px-4 py-1 text-body-md font-bold rounded-md transition-colors`}
                style={{ borderRadius: "10px" }}
                onClick={() => setFilter("critical")}
              >
                <span
                  className={
                    filter === "critical"
                      ? "bg-primary text-white px-4 py-1 rounded-md"
                      : "text-on-surface-variant hover:bg-surface-100"
                  }
                >
                  Critical
                </span>
              </button>
            </div>
          </div>

          {/* Message List Container */}
          <div
            className="bg-white rounded-xl shadow-sm border border-border overflow-hidden"
            style={{ borderRadius: "18px" }}
          >
            {/* Message Headers */}
            <div className="hidden lg:grid grid-cols-12 gap-4 px-6 py-3 border-b border-border bg-surface-100 text-outline font-caption uppercase tracking-widest text-caption">
              <div className="col-span-3">Source</div>
              <div className="col-span-7">Notification Detail</div>
              <div className="col-span-2 text-right font-data-mono">
                Timestamp
              </div>
            </div>

            {/* Notification Rows */}
            {filteredNotifications.map((notification, index) => (
              <NotificationRow
                key={index}
                source={notification.source}
                detail={notification.detail}
                timestamp={notification.timestamp}
                type={notification.type}
                isRead={notification.isRead}
                onClick={() => {
                  // You can add more complex logic here, e.g., mark as read in a global state
                  console.log(`Notification clicked: ${notification.detail}`);
                }}
              />
            ))}
          </div>

          {/* Pagination/Load More (Subtle) */}
          <div className="flex justify-center pt-4">
            <button
              className="px-6 py-2 rounded-full border border-border bg-white text-on-surface-variant hover:bg-surface-100 hover:text-primary transition-all font-semibold flex items-center gap-2"
              style={{ borderRadius: "10px" }}
            >
              Load previous notifications
              <Clock size={18} className="text-outline" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
