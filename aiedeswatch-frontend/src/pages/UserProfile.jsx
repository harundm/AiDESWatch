import React, { useState } from "react";
import { User, Shield, Edit } from "lucide-react";

export default function UserProfile() {
  const [isEditingProfilePic, setIsEditingProfilePic] = useState(false);
  const profile = {
    name: "Khairul Jamaluddin",
    title: "Public Health Officer",
    agency: "Ministry of Health",
    location: "Kuala Lumpur HQ",
    email: "kj@moh.gov.my",
    phone: "+6012-345 6789",
    accountType: "Government Official",
    department: "Epidemiology & Disease Control",
    reportingTo: "hisham@moh.gov.my",
    assignedRegion: "Kuala Lumpur",
    profilePic:
      "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
  };

  return (
    <main className="bg-surface font-body-md text-on-surface antialiased">
      {/* Custom Styles */}
      <style>{`
        .glass-card {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(226, 232, 240, 0.8);
        }
        .profile-pic-hover:hover .edit-button {
          opacity: 1;
          transform: translate(25%, 25%) scale(1.1);
        }
      `}</style>

      <section className="max-w-[800px] mx-auto px-6 py-10">
        <div className="space-y-8">
          {/* Main Profile Section */}
          <div className="glass-card rounded-xl p-8 shadow-sm relative overflow-hidden flex flex-col items-center">
            <div className="flex flex-col items-center gap-6 w-full">
              <div className="relative group profile-pic-hover">
                <div className="w-32 h-32 rounded-xl overflow-hidden shadow-lg border-4 border-white transition-transform duration-300 group-hover:scale-[1.02]">
                  <img
                    alt={`${profile.name} Profile`}
                    className="w-full h-full object-cover"
                    src={profile.profilePic}
                  />
                </div>
                {/* Edit Button for Profile Picture */}
                <button
                  className="edit-button absolute bottom-0 right-0 bg-[#0d9488] text-white rounded-full border-2 border-white shadow-lg transform translate-x-1/4 translate-y-1/4 transition-all duration-200 flex items-center justify-center p-1 w-8 h-8 opacity-0 group-hover:opacity-100 group-hover:scale-110"
                  aria-label="Edit profile picture"
                  onClick={() => setIsEditingProfilePic(!isEditingProfilePic)} // Example action
                >
                  <Edit size={16} />
                </button>
              </div>

              <div className="text-center">
                <h1 className="font-headline-1 text-2xl text-on-surface mb-1">
                  {profile.name}
                </h1>
                <p className="text-on-surface-variant text-base flex items-center justify-center gap-2">
                  <User size={20} className="text-[#0d9488]" />
                  {profile.title}
                </p>
                <div className="mt-4 flex flex-wrap gap-2 justify-center">
                  <span className="bg-t50 text-t700 px-3 py-1 rounded-full text-caption font-bold border border-t100">
                    {profile.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Details Grid Centered */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
              <div className="p-4 rounded-lg bg-surface-container-low border border-outline-variant hover:border-[#0d9488]/30 transition-colors group">
                <p className="text-caption text-on-surface-variant uppercase mb-1 tracking-wider font-bold">
                  Email Address
                </p>
                <p className="text-base text-on-surface group-hover:text-[#0d9488] transition-colors font-body-lg">
                  {profile.email}
                </p>
              </div>
              <div className="p-4 rounded-lg bg-surface-container-low border border-outline-variant">
                <p className="text-caption text-on-surface-variant uppercase mb-1 tracking-wider font-bold">
                  Phone Number
                </p>
                <p className="text-base text-on-surface">{profile.phone}</p>
              </div>
              <div className="p-4 rounded-lg bg-surface-container-low border border-outline-variant">
                <p className="text-caption text-on-surface-variant uppercase mb-1 tracking-wider font-bold">
                  Account Type
                </p>
                <p className="text-base text-on-surface">
                  {profile.accountType}
                </p>
              </div>
              <div className="p-4 rounded-lg bg-surface-container-low border border-outline-variant">
                <p className="text-caption text-on-surface-variant uppercase mb-1 tracking-wider font-bold">
                  Department
                </p>
                <p className="text-base text-on-surface">
                  {profile.department}
                </p>
              </div>
              <div className="p-4 rounded-lg bg-surface-container-low border border-outline-variant">
                <p className="text-caption text-on-surface-variant uppercase mb-1 tracking-wider font-bold">
                  Reporting To
                </p>
                <p className="text-base text-on-surface">
                  {profile.reportingTo}
                </p>
              </div>
              <div className="p-4 rounded-lg bg-surface-container-low border border-outline-variant">
                <p className="text-caption text-on-surface-variant uppercase mb-1 tracking-wider font-bold">
                  Assigned Region
                </p>
                <p className="text-base text-on-surface">
                  {profile.assignedRegion}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
