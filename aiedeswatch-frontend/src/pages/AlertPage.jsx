import { useState } from "react"; // Removed unused React import
import { Link } from "react-router-dom";
import { Bell, Plus, Minus, Home, MessageCircle, ArrowRight } from "lucide-react"; // Removed unused icon imports

export default function AlertPage() {
  // Connected formData to the inputs below to clear the ESLint error
  const [formData, setFormData] = useState({ phone: "", area: "" });

  const faqData = [
    {
      q: "How does AiEDESWatch predict outbreaks?",
      a: "Our AI model analyzes spatiotemporal data, including satellite-derived weather patterns (rainfall/humidity), historical case clusters, and urban density to forecast risk levels up to 14 days in advance.",
    },
    {
      q: "Is there any cost for the WhatsApp alerts?",
      a: "No. AiEDESWatch is a public health initiative. Alerts are provided free of charge to all citizens and health officers in Malaysia.",
    },
    {
      q: "Is my personal location being tracked?",
      a: "No. We do not use GPS tracking. Alerts are sent based purely on the Postcode or District you provide during registration to ensure your privacy.",
    },
    {
      q: "How do I unsubscribe?",
      a: "You can stop receiving alerts at any time by replying 'STOP' to any WhatsApp message we send you.",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert(`Alerts enabled for ${formData.phone} in area ${formData.area}`);
  };

  return (
    <main className="bg-surface font-body-md">
      {/* Custom Animations */}
      <style>{`
        @keyframes bob {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        .animate-bob {
          animation: bob 4s ease-in-out infinite;
        }
        .animate-bob-delay {
          animation: bob 4s ease-in-out infinite;
          animation-delay: 1.5s;
        }
        .form-shadow {
          box-shadow: 0 30px 60px -12px rgba(0, 0, 0, 0.15);
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative pt-10 sm:pt-16 pb-12 sm:pb-20 px-4 sm:px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Left Side: Content & Form */}
          <div className="w-full md:w-1/2 space-y-6 sm:space-y-8 z-10">
            {/* THICK HEADING */}
            <h1 className="font-headline-1 font-black text-4xl sm:text-5xl md:text-[80px] text-slate-900 leading-[1.05] tracking-tight text-center md:text-left">
              Get Dengue <br />Risk Alerts <br />
              <span className="text-[#0d9488] italic">For Your Area</span>
            </h1>

            {/* THE FORM */}
            <div className="bg-white p-6 sm:p-10 md:p-12 rounded-[32px] sm:rounded-[48px] form-shadow border border-slate-50 w-full max-w-xl mx-auto md:mx-0">
              <form className="space-y-6 sm:space-y-8" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8">
                  <div className="space-y-3">
                    <label className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">
                      Phone Number
                    </label>
                    <input
                      className="w-full bg-white border border-slate-200 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-[#0d9488]/20 focus:border-[#0d9488] outline-none transition-all text-slate-600 placeholder:text-slate-300"
                      placeholder="+6012 345 6789"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">
                      Postcode
                    </label>
                    <input
                      className="w-full bg-white border border-slate-200 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-[#0d9488]/20 focus:border-[#0d9488] outline-none transition-all text-slate-600 placeholder:text-slate-300"
                      placeholder="e.g. 50480"
                      type="text"
                      value={formData.area}
                      onChange={(e) =>
                        setFormData({ ...formData, area: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>

                <button className="w-full bg-[#139a8d] hover:bg-slate-900 text-white font-black py-4 sm:py-5 rounded-full shadow-lg transition-all flex items-center justify-center gap-3 active:scale-95 group">
                  <MessageCircle size={22} className="group-hover:animate-bounce" />
                  <span className="text-sm sm:text-lg tracking-wide uppercase">
                    Enable Free WhatsApp Alerts
                  </span>
                </button>

                <p className="text-center text-[11px] text-slate-400 font-bold uppercase tracking-[0.1em] opacity-80">
                  No registration. Reply 'STOP' to unsubscribe anytime.
                </p>
              </form>
            </div>
          </div>

          {/* Right Side: Phone Mockup — hidden on mobile */}
          <div className="hidden md:flex w-full md:w-1/2 justify-center items-center z-10 relative">
            <div className="relative w-[340px] h-[680px] bg-[#0F172A] rounded-[70px] border-[14px] border-[#1e293b] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-9 bg-[#1e293b] rounded-b-[30px] z-20"></div>

              <div className="p-7 pt-20 space-y-8">
                {/* SMS Notification (BOBBING) */}
                <div className="bg-white/95 backdrop-blur-md p-6 rounded-[28px] shadow-2xl border-l-[8px] border-[#DC2626] animate-bob">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center gap-2">
                      <div className="bg-[#0d9488] rounded-full p-1.5 text-white">
                        <Bell size={12} />
                      </div>
                      <span className="text-[11px] font-black text-slate-800 uppercase tracking-tighter">
                        AiEDESWatch Alert
                      </span>
                    </div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                      Now
                    </span>
                  </div>
                  <p className="text-sm font-black text-[#DC2626] mb-1">
                    CRITICAL RISK: TANJUNG ARU
                  </p>
                  <p className="text-[12px] text-slate-600 leading-snug">
                    AI models indicate imminent outbreak. <b>Action:</b> Remove
                    standing water.
                  </p>
                </div>

                {/* WhatsApp Message (BOBBING DELAYED) */}
                <div className="bg-white p-6 rounded-[28px] shadow-2xl border border-slate-100 relative max-w-[90%] ml-auto animate-bob-delay">
                  <div className="bg-[#e7fedd] p-5 rounded-2xl">
                    <p className="font-black text-[#075e54] text-[14px] mb-2">
                      Region Report: Ampang
                    </p>
                    <p className="text-[11px] font-bold text-slate-700 uppercase tracking-tighter">
                      Risk Level: <span className="text-[#EA580C]">HIGH</span>
                    </p>
                    <p className="text-[11px] font-bold text-slate-700 uppercase tracking-tighter">
                      Confidence: 94%
                    </p>
                    <div className="mt-4 h-2 w-full bg-slate-200/50 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[#16A34A] to-[#DC2626] w-[88%]"></div>
                    </div>
                  </div>
                  <div className="absolute -right-2 top-6 w-5 h-5 bg-white transform rotate-45 border-r border-t border-slate-100"></div>
                </div>
              </div>
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-slate-700 rounded-full"></div>
            </div>
            <div className="absolute w-[600px] h-[600px] bg-[#0d9488] opacity-10 rounded-full blur-[150px] -z-10"></div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-6 font-headline-1">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-500 font-medium">
              Clear answers about Malaysia's predictive dengue alerts.
            </p>
          </div>
          <div className="space-y-4">
            {faqData.map((item, i) => (
              <FAQItem key={i} question={item.q} answer={item.a} />
            ))}
          </div>

          <div className="mt-12 sm:mt-16 text-center">
            <p className="text-slate-500 mb-4 font-medium">
              Still have questions? We're here to help.
            </p>
            <Link
              to="/help"
              className="inline-flex items-center gap-2 bg-[#0d9488] hover:bg-slate-900 text-white font-black px-8 py-4 rounded-2xl shadow-lg transition-all active:scale-95 group"
            >
              Contact Us
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`border transition-all duration-300 rounded-[24px] sm:rounded-[32px] bg-white overflow-hidden ${isOpen ? "border-[#0d9488] shadow-xl translate-x-1" : "border-slate-100 hover:border-slate-300 shadow-sm"}`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 sm:px-10 py-5 sm:py-8 flex justify-between items-center text-left transition-colors"
      >
        <span
          className={`text-base sm:text-lg font-black tracking-tight ${isOpen ? "text-[#0d9488]" : "text-slate-800"}`}
        >
          {question}
        </span>
        {isOpen ? (
          <Minus size={22} className="text-[#0d9488] shrink-0 ml-4" />
        ) : (
          <Plus size={22} className="text-slate-300 shrink-0 ml-4" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 sm:px-10 pb-6 sm:pb-10 text-[15px] sm:text-[16px] text-slate-500 leading-relaxed animate-in fade-in slide-in-from-top-2">
          {answer}
        </div>
      )}
    </div>
  );
}
