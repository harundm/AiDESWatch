import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const LoginPage = ({ onLoginSuccess }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [bgTransform, setBgTransform] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();

  useEffect(() => {
    const handleMouseMove = (e) => {
      const moveX = (e.clientX - window.innerWidth / 2) / 60;
      const moveY = (e.clientY - window.innerHeight / 2) / 60;
      setBgTransform({ x: moveX, y: moveY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Safety check: only call if the prop exists
    if (onLoginSuccess) {
      onLoginSuccess(); // This updates the state in App.jsx
      navigate('/dashboard'); // This moves you to the dashboard
    } else {
      console.error("onLoginSuccess prop is missing!");
    }
  };

  return (
    <div className="flex-grow flex flex-col relative overflow-hidden bg-[#F8FAFC]">
      <style>{`
        .login-bg {
          background-image: url('https://lh3.googleusercontent.com/aida/AP1WRLv5M2CB86qjkOdKaMXKJMxR8RxDG2I2a4P1HACpU3mAbfQYMj3o-6ZFH6BgHstwsckchQMrspPMwsAMuqwtfXXt7s3rAorfSxfxoQqbea71gx6q12Vtg2SYNds9imDY79pEbMWOx3V5mksjthTtKrO7tMCNuBLX49Wt6LYv8TsdiicwFtoWKjWLPhUj4lFofhntsCr2UTcD8n5ufOFt1wd4qGi6m2ZNLqmahi6nFe2Pdtvoh21hT9i8fYE');
          background-size: cover;
          background-position: center;
          opacity: 0.04;
        }
        .login-card {
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
          border: 1px solid #E2E8F0;
        }
      `}</style>

      <div 
        className="fixed inset-0 pointer-events-none login-bg" 
        style={{ transform: `translate(${bgTransform.x}px, ${bgTransform.y}px)` }}
      ></div>

      <main className="flex-grow flex items-center justify-center px-6 py-12 relative z-10">
        <div className="w-full max-w-[440px]">
          <div className="flex flex-col items-center mb-10">
            <div className="mb-3">
              <img 
                alt="AiEDESWatch Logo" 
                className="w-14 h-14 object-contain" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCY2Po3C5FMcbBa_GzN6wgPzD-JyyOpycPLuRzisfRhg-XaMsJKjYBynOFbJOcGNXnHTgwF-7ADnGzMbaPFxPcoqLBLQ-dybjPa1ikwwomiHltvLY-CbHcVxJejoHHSuN0DqWRvaI0o0s8FETmF_vS6yKUBdCsbRyQLsr_jVhdrzIr1zkECJTmM1PWUm084APYYX_OcFrhT4YDv3hYhIpTAjH3TfBPrdEj3KzgT5n7XN-oLtQpyUWhT-onmAXhocXWOBZ_NSy1Rous" 
              />
            </div>
            <h1 className="text-2xl font-black tracking-tight font-headline-1">
              <span className="text-[#139a8d]">AiEDES</span>
              <span className="text-[#0F172A]">Watch</span>
            </h1>
          </div>

          <div className="bg-white rounded-2xl p-10 login-card">
            <div className="mb-8 text-center">
              <h2 className="text-[24px] font-black text-[#0F172A] mb-2 font-headline-1">Welcome Back</h2>
              <p className="text-[14px] text-slate-500 font-medium">Secure access to the predictive surveillance dashboard.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-[11px] font-black text-[#0F172A] uppercase tracking-widest mb-2" htmlFor="email">Email address</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400 text-[20px]">mail</span>
                  <input className="w-full pl-12 pr-4 py-3 bg-white rounded-xl border border-slate-200 outline-none focus:border-[#139a8d] focus:ring-1 focus:ring-[#139a8d] transition-all text-sm" id="email" placeholder="email@agency.gov.my" type="email" required />
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2 px-1">
                  <label className="block text-[11px] font-black text-[#0F172A] uppercase tracking-widest" htmlFor="password">Password</label>
                  <a className="text-[11px] font-bold text-[#139a8d] hover:underline" href="#">Forgot?</a>
                </div>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400 text-[20px]">lock</span>
                  <input className="w-full pl-12 pr-12 py-3 bg-white rounded-xl border border-slate-200 outline-none focus:border-[#139a8d] focus:ring-1 focus:ring-[#139a8d] transition-all text-sm" id="password" placeholder="••••••••" type={showPassword ? "text" : "password"} required />
                  <button className="absolute right-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400 hover:text-slate-600 transition-colors text-[20px]" onClick={() => setShowPassword(!showPassword)} type="button">
                    {showPassword ? 'visibility_off' : 'visibility'}
                  </button>
                </div>
              </div>

              <button className="w-full bg-[#139a8d] hover:bg-[#0d7a6f] text-white font-black py-4 rounded-xl transition-all active:scale-[0.98] flex items-center justify-center gap-2 mt-4 shadow-sm" type="submit">
                Sign In
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
            </form>

            <div className="mt-10 pt-8 border-t border-slate-50 text-center">
              <p className="text-[14px] text-slate-600 font-medium">
                Don't have an account? 
                <Link to="/request-access" className="text-[#139a8d] font-black hover:underline ml-1">Request access</Link>
              </p>
              <p className="mt-4 text-[10px] text-slate-300 uppercase tracking-[0.15em] font-black">AUTHORIZED ACCESS ONLY</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;