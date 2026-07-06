import { useState, useEffect, useRef } from "react"; // Added useEffect and useRef
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  User,
  Mail,
  Settings,
  HelpCircle,
  LogOut,
} from "lucide-react";

export default function Navbar({ isLoggedIn, setIsLoggedIn }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const profileMenuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        isUserMenuOpen &&
        profileMenuRef.current &&
        !profileMenuRef.current.contains(event.target)
      ) {
        setIsUserMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isUserMenuOpen]);

  // This function is now used below to satisfy the linter
  const closeAllMenus = () => {
    setIsOpen(false);
    setIsUserMenuOpen(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    closeAllMenus();
    navigate("/");
  };

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-surface fixed top-0 left-0 right-0 z-[100] border-b border-outline-variant shadow-sm backdrop-blur-md bg-surface/80 w-full">
      <nav className="flex justify-between items-center h-sp-16 px-margin max-w-max-width mx-auto w-full">
        <Link
          to="/"
          onClick={closeAllMenus}
          className="flex items-center gap-sp-2"
        >
          <img
            alt="AiEDESWatch Logo"
            className="w-[30px] h-[30px] object-contain"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCY2Po3C5FMcbBa_GzN6wgPzD-JyyOpycPLuRzisfRhg-XaMsJKjYBynOFbJOcGNXnHTgwF-7ADnGzMbaPFxPcoqLBLQ-dybjPa1ikwwomiHltvLY-CbHcVxJejoHHSuN0DqWRvaI0o0s8FETmF_vS6yKUBdCsbRyQLsr_jVhdrzIr1zkECJTmM1PWUm084APYYX_OcFrhT4YDv3hYhIpTAjH3TfBPrdEj3KzgT5n7XN-oLtQpyUWhT-onmAXhocXWOBZ_NSy1Rous"
          />
          <span className="font-headline-1 text-2xl font-black text-[#0d9488]">
            AiEDES<span className="text-slate-900">Watch</span>
          </span>
          <span className="px-2 py-0.5 rounded-full bg-error-container text-error text-[10px] font-bold uppercase tracking-wider">
            Beta
          </span>
        </Link>

        {isLoggedIn && (
          <div className="hidden md:flex items-center gap-sp-8">
            {/* Added onClick={closeAllMenus} to these Links */}
            <Link
              to="/dashboard"
              onClick={closeAllMenus}
              className={`text-sm font-bold transition-colors ${isActive("/dashboard") ? "text-[#0d9488]" : "text-on-surface-variant hover:text-[#0d9488]"}`}
            >
              Dashboard
            </Link>
            <Link
              to="/analytics"
              onClick={closeAllMenus}
              className={`text-sm font-bold transition-colors ${isActive("/analytics") ? "text-[#0d9488]" : "text-on-surface-variant hover:text-[#0d9488]"}`}
            >
              Analytics
            </Link>
            <Link
              to="/risk-map"
              onClick={closeAllMenus}
              className={`text-sm font-bold transition-colors ${isActive("/risk-map") ? "text-[#0d9488]" : "text-on-surface-variant hover:text-[#0d9488]"}`}
            >
              Risk Map
            </Link>
          </div>
        )}

        <div className="hidden md:flex items-center gap-sp-4">
          {isLoggedIn ? (
            <div className="relative" ref={profileMenuRef}>
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="flex items-center gap-3 p-1.5 pr-4 rounded-full border border-outline-variant hover:bg-white hover:shadow-sm transition-all"
              >
                <div className="w-8 h-8 rounded-full bg-[#0d9488] flex items-center justify-center text-white font-bold text-xs">
                  KJ
                </div>
                <div className="text-left leading-tight mr-1">
                  <p className="text-[11px] font-bold text-slate-900">
                    Khairul
                  </p>
                  <p className="text-[9px] text-slate-500 uppercase tracking-tighter">
                    Health Officer
                  </p>
                </div>
                <ChevronDown
                  size={14}
                  className={`text-slate-400 transition-transform ${isUserMenuOpen ? "rotate-180" : ""}`}
                />
              </button>

              {isUserMenuOpen && (
                <div className="absolute top-full right-0 mt-3 w-64 bg-white border border-outline-variant rounded-2xl shadow-2xl z-[110] py-3">
                  <div className="px-4 pb-3 border-b border-slate-100 text-left">
                    <p className="text-sm font-bold text-slate-900">
                      Khairul Jamaluddin
                    </p>
                    <p className="text-xs text-slate-500 truncate">
                      k.jamal@agency.gov.my
                    </p>
                  </div>
                  <div className="py-2">
                    <Link
                      to="/profile"
                      onClick={closeAllMenus}
                      className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] transition-colors"
                    >
                      <User size={16} />
                      <span className="font-medium">View Profile</span>
                    </Link>
                    <Link
                      to="/inbox"
                      onClick={() => {
                        setIsUserMenuOpen(false);
                        setIsOpen(false);
                      }}
                      className="w-full flex items-center justify-between px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <Mail size={16} />
                        <span className="font-medium">Inbox</span>
                      </div>
                      {/* Keep the badge if you want to display unread count */}
                      <span className="bg-red-100 text-red-600 text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                        3 {/* This would ideally come from state */}
                      </span>
                    </Link>
                    <DropdownItem
                      icon={<Settings size={16} />}
                      label="Settings"
                      onClick={closeAllMenus}
                    />
                    <Link
                      to="/help"
                      onClick={() => {
                        setIsUserMenuOpen(false);
                        setIsOpen(false);
                      }}
                      className="w-full flex items-center gap-3 px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] transition-colors"
                    >
                      <HelpCircle size={16} />
                      <span className="font-medium">Help & Support</span>
                    </Link>
                  </div>
                  <div className="pt-2 border-t border-slate-100">
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors font-bold text-left"
                    >
                      <LogOut size={16} /> Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-sp-6">
              <Link
                to="/login"
                onClick={closeAllMenus}
                className="text-on-surface-variant font-body-md hover:text-primary transition-colors font-semibold"
              >
                Login
              </Link>
              <Link
                to="/alerts"
                onClick={closeAllMenus}
                className="bg-primary text-white px-sp-5 py-sp-2 rounded-lg font-bold transition-all text-center"
                style={{ backgroundColor: "#0d9488" }}
              >
                Get Alerts
              </Link>
            </div>
          )}
        </div>

        <button
          className="md:hidden p-2 text-on-surface-variant"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-outline-variant absolute w-full left-0 shadow-xl p-sp-6 flex flex-col gap-sp-4">
          {isLoggedIn ? (
            <>
              <Link
                to="/dashboard"
                onClick={closeAllMenus}
                className="font-bold text-slate-700 text-left"
              >
                Dashboard
              </Link>
              <Link
                to="/analytics"
                onClick={closeAllMenus}
                className="font-bold text-slate-700 text-left"
              >
                Analytics
              </Link>
              <Link
                to="/risk-map"
                onClick={closeAllMenus}
                className="font-bold text-slate-700 text-left"
              >
                Risk Map
              </Link>
              <hr className="border-slate-100" />
              <button
                onClick={handleLogout}
                className="text-red-600 font-bold flex items-center gap-2 text-left"
              >
                <LogOut size={18} /> Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                onClick={closeAllMenus}
                className="font-bold text-lg text-slate-700 text-left"
              >
                Login
              </Link>
              <Link
                to="/request-access"
                onClick={closeAllMenus}
                className="w-full bg-primary text-white py-sp-3 rounded-lg font-bold text-center"
                style={{ backgroundColor: "#0d9488" }}
              >
                Get Alerts
              </Link>
            </>
          )}
        </div>
      )}
    </header>
  );
}

function DropdownItem({ icon, label, badge, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center justify-between px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] transition-colors text-left"
    >
      <div className="flex items-center gap-3 text-left">
        {icon}
        <span className="font-medium">{label}</span>
      </div>
      {badge && (
        <span className="bg-red-100 text-red-600 text-[10px] font-bold px-1.5 py-0.5 rounded-full">
          {badge}
        </span>
      )}
    </button>
  );
}
