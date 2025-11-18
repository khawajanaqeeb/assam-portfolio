import React from "react";
import { Award } from "lucide-react";

export default function HonorsPage() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="bg-white rounded-3xl shadow-2xl p-10 md:p-16 border border-indigo-100">
        <div className="flex items-center gap-4 mb-10">
          <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 p-4 rounded-2xl shadow-lg">
            <Award className="text-white" size={44} />
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-indigo-900 font-heading">
            Honors Earned
          </h2>
        </div>
        <div className="grid gap-8">
          <div className="bg-gradient-to-br from-indigo-50 via-blue-50 to-indigo-50 border-4 border-indigo-400 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="flex items-start gap-6">
              <div className="bg-gradient-to-br from-indigo-400 to-indigo-600 p-5 rounded-2xl shadow-lg">
                <Award className="text-white" size={40} />
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-black text-slate-900 mb-3 font-heading">
                  Hafiz Sanad Certification
                </h3>
                <p className="text-xl font-bold text-indigo-800 mb-4">
                  Top 3 Position - Entire Karachi / Pakistan
                </p>
                <p className="text-lg text-slate-700 font-light leading-relaxed">
                  Achieved one of the highest honors in Quranic memorization
                  with a top 3 ranking across all of Karachi and Pakistan,
                  demonstrating exceptional dedication and discipline.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-50 border-4 border-blue-400 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="flex items-start gap-6">
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 p-5 rounded-2xl shadow-lg">
                <Award className="text-white" size={40} />
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-black text-slate-900 mb-3 font-heading">
                  Best Performance of the Year
                </h3>
                <p className="text-xl font-bold text-blue-800 mb-4">
                  3D Marketing
                </p>
                <p className="text-lg text-slate-700 font-light leading-relaxed">
                  Recognized for outstanding leadership and exceptional
                  performance throughout the year, demonstrating excellence in
                  team management and project delivery.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 border-4 border-slate-400 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="flex items-start gap-6">
              <div className="bg-gradient-to-br from-slate-400 to-slate-600 p-5 rounded-2xl shadow-lg">
                <Award className="text-white" size={40} />
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-black text-slate-900 mb-3 font-heading">
                  Best Performance of the Month
                </h3>
                <p className="text-xl font-bold text-slate-800 mb-4">
                  AHH Brothers Builders and Developers
                </p>
                <p className="text-lg text-slate-700 font-light leading-relaxed">
                  Awarded for exceptional monthly performance, showcasing
                  consistent excellence and dedication in the property
                  development sector.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
