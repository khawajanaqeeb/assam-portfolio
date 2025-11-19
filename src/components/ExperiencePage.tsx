import React from "react";
import { Briefcase } from "lucide-react";

export default function ExperiencePage() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/as1.png')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="max-w-5xl mx-auto relative z-10 py-10">
        <div className="bg-white rounded-3xl shadow-2xl p-10 md:p-16 border border-indigo-100">
          <div className="flex items-center gap-4 mb-10">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 rounded-2xl shadow-lg">
              <Briefcase className="text-white" size={44} />
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-indigo-900 font-heading">
              Experience
            </h2>
          </div>
          <div className="space-y-10">
            <div className="relative pl-10 border-l-4 border-indigo-600">
              <div className="absolute left-[-13px] top-0 w-6 h-6 bg-indigo-600 rounded-full shadow-lg"></div>
              <div className="bg-gradient-to-br from-indigo-50 via-indigo-50 to-white p-8 rounded-2xl shadow-lg border-2 border-indigo-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-3xl font-black text-slate-900 mb-2 font-heading">
                  Director
                </h3>
                <p className="text-xl text-indigo-700 font-bold mb-4">
                  Property Network
                </p>
                <p className="text-slate-700 mb-3 font-semibold">
                  <strong>Duration:</strong> 9 years in property field
                </p>
                <p className="text-lg text-slate-600 font-light leading-relaxed">
                  Leading strategic initiatives and business development in the
                  property sector. Overseeing operations, managing client
                  relationships, and driving organizational growth through
                  innovative approaches.
                </p>
              </div>
            </div>

            <div className="relative pl-10 border-l-4 border-blue-600">
              <div className="absolute left-[-13px] top-0 w-6 h-6 bg-blue-600 rounded-full shadow-lg"></div>
              <div className="bg-gradient-to-br from-blue-50 via-blue-50 to-white p-8 rounded-2xl shadow-lg border-2 border-blue-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-3xl font-black text-slate-900 mb-2 font-heading">
                  Team Leader
                </h3>
                <p className="text-xl text-blue-700 font-bold mb-4">
                  3D Marketing
                </p>
                <p className="text-slate-700 mb-3 font-semibold">
                  <strong>Duration:</strong> 6 years
                </p>
                <p className="text-lg text-slate-600 font-light leading-relaxed">
                  Led and mentored development teams in delivering high-quality
                  marketing solutions. Managed project timelines, coordinated with
                  stakeholders, and ensured successful delivery of complex 3D
                  marketing campaigns.
                </p>
              </div>
            </div>

            <div className="relative pl-10 border-l-4 border-slate-600">
              <div className="absolute left-[-13px] top-0 w-6 h-6 bg-slate-600 rounded-full shadow-lg"></div>
              <div className="bg-gradient-to-br from-slate-50 via-slate-50 to-white p-8 rounded-2xl shadow-lg border-2 border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-3xl font-black text-slate-900 mb-2 font-heading">
                  Web Developer
                </h3>
                <p className="text-xl text-slate-700 font-bold mb-4">
                  Nexus Software House
                </p>
                <p className="text-lg text-slate-600 font-light leading-relaxed">
                  Developed and maintained web applications using modern
                  frameworks and technologies. Collaborated with cross-functional
                  teams to deliver user-friendly and scalable web solutions for
                  diverse clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}