import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { User, Mail, Building2, ArrowRight } from 'lucide-react';

const RequestAccess = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send this data to your backend API
    alert("Request submitted successfully! Our team will review your application.");
    navigate('/login');
  };

  return (
    <div className="bg-[#f9fafb] font-body-md antialiased">

      {/* Main Content - Centered Card */}
      <main className="flex flex-col items-center justify-center px-4 py-8 sm:py-12">
        <section className="bg-white rounded-2xl shadow-sm border border-gray-200 w-full max-w-2xl p-6 sm:p-8 md:p-12 relative z-10">
          
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3 font-headline-1">Request Access</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Row: Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-900" htmlFor="first-name">
                  First Name
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <User size={18} />
                  </span>
                  <input
                    className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:ring-1 focus:ring-[#0D9488] focus:border-[#0D9488] outline-none text-gray-900 sm:text-sm transition-all"
                    id="first-name"
                    placeholder="Ahmad"
                    type="text"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-900" htmlFor="last-name">
                  Last Name
                </label>
                <input
                  className="block w-full px-3 py-3 border border-gray-200 rounded-lg focus:ring-1 focus:ring-[#0D9488] focus:border-[#0D9488] outline-none text-gray-900 sm:text-sm transition-all"
                  id="last-name"
                  placeholder="Razif"
                  type="text"
                  required
                />
              </div>
            </div>

            {/* Row: Agency Email */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-900" htmlFor="email">
                Work Email Address
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <Mail size={18} />
                </span>
                <input
                  className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:ring-1 focus:ring-[#0D9488] focus:border-[#0D9488] outline-none text-gray-900 sm:text-sm transition-all"
                  id="email"
                  placeholder="name@agency.gov.my"
                  type="email"
                  required
                />
              </div>
            </div>

            {/* Row: Supervisor Email */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-900" htmlFor="supervisor-email">
                Supervisor Work Email Address
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <Mail size={18} />
                </span>
                <input
                  className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:ring-1 focus:ring-[#0D9488] focus:border-[#0D9488] outline-none text-gray-900 sm:text-sm transition-all"
                  id="supervisor-email"
                  placeholder="supervisor.name@agency.gov.my"
                  type="email"
                  required
                />
              </div>
            </div>

            {/* Section Divider: Organisation */}
            <div className="pt-4 flex items-center space-x-4">
              <h3 className="text-xs font-bold text-[#0D9488] uppercase tracking-wider whitespace-nowrap">
                Organisation Details
              </h3>
              <div className="flex-grow border-t border-gray-200"></div>
            </div>

            {/* Row: Agency/Organisation */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-900" htmlFor="organisation">
                Agency / Organisation
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <Building2 size={18} />
                </span>
                <input
                  className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:ring-1 focus:ring-[#0D9488] focus:border-[#0D9488] outline-none text-gray-900 sm:text-sm transition-all"
                  id="organisation"
                  placeholder="e.g. Jabatan Kesihatan Negeri Sabah"
                  type="text"
                  required
                />
              </div>
            </div>

            {/* Row: Dept and Role */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-900" htmlFor="department">
                  Department / Unit
                </label>
                <input
                  className="block w-full px-3 py-3 border border-gray-200 rounded-lg focus:ring-1 focus:ring-[#0D9488] focus:border-[#0D9488] outline-none text-gray-900 sm:text-sm transition-all"
                  id="department"
                  placeholder="e.g. Epidemiology"
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-900" htmlFor="role">
                  Position
                </label>
                <select
                  className="block w-full px-3 py-3 border border-gray-200 rounded-lg focus:ring-1 focus:ring-[#0D9488] focus:border-[#0D9488] outline-none text-gray-500 sm:text-sm bg-white cursor-pointer"
                  id="role"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>Select role</option>
                  <option value="public-health">Public Health Officer</option>
                  <option value="epidemiologist">Epidemiologist</option>
                  <option value="data-analyst">Data Analyst</option>
                  <option value="admin">Administrative Staff</option>
                </select>
              </div>
            </div>

            {/* Row: Purpose */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-900" htmlFor="reason">
                Reason for Requesting Access
              </label>
              <textarea
                className="block w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-1 focus:ring-[#0D9488] focus:border-[#0D9488] outline-none text-gray-900 sm:text-sm resize-none transition-all"
                id="reason"
                placeholder="Briefly describe how you will use AiEDESWatch"
                rows="3"
                required
              />
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  className="h-4 w-4 text-[#0D9488] border-gray-300 rounded focus:ring-[#0D9488] cursor-pointer"
                  id="terms"
                  type="checkbox"
                  required
                />
              </div>
              <div className="ml-3 text-xs">
                <label className="text-gray-600 leading-normal" htmlFor="terms">
                   I declare that the information provided above is true and correct and confirm that this request is for verified authorized work{/* and I agree to the{' '}
                  <span className="text-[#0D9488] font-bold cursor-pointer hover:underline">Terms of Use</span>*/}
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <button
              className="w-full flex items-center justify-center bg-[#0D9488] hover:bg-[#0f766e] text-white font-bold py-4 px-4 rounded-xl transition-all shadow-md text-lg active:scale-[0.98]"
              type="submit"
            >
              Submit Request
              <ArrowRight className="ml-2" size={22} />
            </button>

            {/* Footer inside card */}
            <div className="text-center space-y-4 pt-6 border-t border-slate-50">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">
                Authorized Access Only
              </p>
              <p className="text-sm text-gray-700">
                Already have an account? <Link to="/login" className="text-[#0D9488] font-bold hover:underline">Sign in</Link>
              </p>
            </div>
          </form>
        </section>
      </main>

      
    </div>
  );
};

export default RequestAccess;