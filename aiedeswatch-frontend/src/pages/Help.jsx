import React from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react"; // Lucide icons

export default function Help() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Your inquiry has been submitted! We will get back to you within 1-2 business days.",
    );
    e.target.reset(); // Clear the form
  };

  return (
    <div className="bg-surface font-body-md text-on-surface antialiased">
      {/* Custom Styles */}
      <style>{`
        .contact-card {
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }
        /* Ensure visible border and focus styles for all form inputs */
        .form-input-style {
            border-color: #E2E8F0; /* Use border-border color */
            border-width: 1px;
            box-shadow: none; /* Reset any unwanted shadow */
        }
        .form-input-style:focus {
            border-color: #0d9488; /* Use primary color on focus */
            box-shadow: 0 0 0 1px #0d9488; /* Soft ring on focus */
        }
      `}</style>

      <main className="flex-grow pt-4 bg-surface">
        <div className="max-w-max-width mx-auto px-margin py-8">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-8">
            <h1 className="font-headline-1 text-2xl text-on-surface font-bold">
              Help & Support
            </h1>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
            {/* Contact Form Card */}
            <div className="lg:col-span-8 bg-white rounded-xl p-8 contact-card border border-outline-variant">
              <h2 className="font-headline-2 text-xl font-bold mb-6 text-on-background">
                Contact Support
              </h2>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label
                      className="block text-body-md font-medium text-on-surface-variant mb-1"
                      htmlFor="full_name"
                    >
                      Full Name
                    </label>
                    <input
                      className="w-full bg-surface-bright rounded-md px-4 py-3 text-body-md outline-none form-input-style" // Added form-input-style
                      id="full_name"
                      name="full_name"
                      placeholder="Enter your full name"
                      type="text"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label
                    className="block text-body-md font-medium text-on-surface-variant mb-1"
                    htmlFor="subject"
                  >
                    Subject
                  </label>
                  <select
                    className="w-full bg-surface-bright rounded-md px-4 py-3 text-body-md outline-none form-input-style" // Added form-input-style
                    id="subject"
                    name="subject"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>
                      Select a topic
                    </option>
                    <option value="risk-data">Risk Data Inquiry</option>
                    <option value="technical">Technical Support</option>
                    <option value="partnership">Agency Partnership</option>
                    <option value="other">Other Inquiries</option>
                  </select>
                </div>
                <div>
                  <label
                    className="block text-body-md font-medium text-on-surface-variant mb-1"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    className="w-full bg-surface-bright rounded-md px-4 py-3 text-body-md outline-none resize-y form-input-style" // Added form-input-style
                    id="message"
                    name="message"
                    placeholder="How can we help you?"
                    rows="6"
                    required
                  ></textarea>
                </div>
                <div className="flex justify-end">
                  <button
                    className="text-white px-10 py-3 rounded-md font-bold text-lg hover:brightness-110 transition-all active:scale-95 flex items-center gap-2"
                    style={{ backgroundColor: "#0d9488" }} // Ensured exact color
                    type="submit"
                  >
                    Submit Inquiry <Send size={18} />
                  </button>
                </div>
              </form>
            </div>

            {/* Side Section: Official Channels */}
            <div className="lg:col-span-4 space-y-gutter">
              <div className="bg-surface-100 rounded-xl p-8 border border-outline-variant">
                <h3 className="font-headline-2 text-xl font-bold mb-6 text-on-background">
                  Official Contact Channels
                </h3>
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-white p-2 rounded-lg text-primary shadow-sm">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-base mb-1">
                        Ministry of Health
                      </h4>
                      <p className="text-body-md text-on-surface-variant">
                        Block E1, E3, E6, E7 & E10, Parcel E,
                        <br />
                        Federal Government Administrative Centre,
                        <br />
                        62590 Putrajaya, Malaysia
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-white p-2 rounded-lg text-primary shadow-sm">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-base mb-1">
                        Surveillance Hotline
                      </h4>
                      <p className="text-body-md text-on-surface-variant">
                        +603-8000 8000
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-white p-2 rounded-lg text-primary shadow-sm">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-base mb-1">
                        Email Support
                      </h4>
                      <p className="text-body-md text-on-surface-variant">
                        support@aiedeswatch.gov.my
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
