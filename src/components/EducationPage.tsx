import React from "react";
import { GraduationCap } from "lucide-react";

export default function EducationPage() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="bg-white rounded-3xl shadow-2xl p-10 md:p-16 border border-indigo-100">
        <div className="flex items-center gap-4 mb-10">
          <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 p-4 rounded-2xl shadow-lg">
            <GraduationCap className="text-white" size={44} />
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-indigo-900 font-heading">
            Education
          </h2>
        </div>
        <div className="space-y-8">
          <div className="border-l-4 border-indigo-600 pl-8 py-6 bg-gradient-to-r from-indigo-50 to-transparent rounded-r-2xl hover:shadow-lg transition-all duration-300">
            <h3 className="text-3xl font-bold text-slate-900 mb-3 font-heading">
              Bachelor of Engineering in Software Engineering
            </h3>
            <p className="text-xl text-indigo-700 font-bold mb-3">
              NED University of Engineering & Technology
            </p>
            <p className="text-lg text-slate-600 font-light leading-relaxed">
              Graduated with comprehensive knowledge in software development,
              algorithms, database management, and modern web technologies.
            </p>
          </div>

          <div className="border-l-4 border-blue-600 pl-8 py-6 bg-gradient-to-r from-blue-50 to-transparent rounded-r-2xl hover:shadow-lg transition-all duration-300">
            <h3 className="text-3xl font-bold text-slate-900 mb-3 font-heading">
              Intermediate in Computer Science
            </h3>
            <p className="text-xl text-blue-700 font-bold mb-3">
              Boys DJ College
            </p>
            <p className="text-lg text-slate-600 font-light leading-relaxed">
              Completed intermediate education with a focus on computer science
              fundamentals, programming, and mathematics.
            </p>
          </div>

          <div className="border-l-4 border-slate-600 pl-8 py-6 bg-gradient-to-r from-slate-50 to-transparent rounded-r-2xl hover:shadow-lg transition-all duration-300">
            <h3 className="text-3xl font-bold text-slate-900 mb-3 font-heading">
              Matriculation
            </h3>
            <p className="text-xl text-slate-700 font-bold mb-3">
              Oxford High School
            </p>
            <p className="text-lg text-slate-600 font-light leading-relaxed">
              Completed secondary education with strong academic performance
              across all subjects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
