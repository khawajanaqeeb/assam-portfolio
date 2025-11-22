import React from "react";
import { GraduationCap } from "lucide-react";

export default function EducationPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-indigo-100">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Left Side - Text Content */}
          <div className="p-10 md:p-16 order-2 md:order-1">
            <div className="flex items-center gap-4 mb-10 animate-fade-in">
              <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 p-4 rounded-2xl shadow-lg transform hover:scale-110 transition-transform duration-300">
                <GraduationCap className="text-white" size={44} />
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-indigo-900">
                Education
              </h2>
            </div>

            <div className="space-y-8">
              <div className="border-l-4 border-indigo-600 pl-6 py-4 bg-gradient-to-r from-indigo-50 to-transparent rounded-r-2xl hover:shadow-xl hover:scale-105 hover:border-l-8 transition-all duration-300 transform">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Bachelor of Engineering in Software Engineering
                </h3>
                <p className="text-lg text-indigo-700 font-bold mb-2">
                  NED University of Engineering & Technology
                </p>
                <p className="text-base text-slate-600 leading-relaxed">
                  Graduated with comprehensive knowledge in software development,
                  algorithms, database management, and modern web technologies.
                </p>
              </div>

              <div className="border-l-4 border-blue-600 pl-6 py-4 bg-gradient-to-r from-blue-50 to-transparent rounded-r-2xl hover:shadow-xl hover:scale-105 hover:border-l-8 transition-all duration-300 transform">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Intermediate in Computer Science
                </h3>
                <p className="text-lg text-blue-700 font-bold mb-2">
                  Boys DJ College
                </p>
                <p className="text-base text-slate-600 leading-relaxed">
                  Completed intermediate education with a focus on computer science
                  fundamentals, programming, and mathematics.
                </p>
              </div>

              <div className="border-l-4 border-slate-600 pl-6 py-4 bg-gradient-to-r from-slate-50 to-transparent rounded-r-2xl hover:shadow-xl hover:scale-105 hover:border-l-8 transition-all duration-300 transform">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Matriculation
                </h3>
                <p className="text-lg text-slate-700 font-bold mb-2">
                  Oxford High School
                </p>
                <p className="text-base text-slate-600 leading-relaxed">
                  Completed secondary education with strong academic performance
                  across all subjects.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative order-1 md:order-2 group overflow-hidden bg-gradient-to-br from-indigo-50 to-blue-50 flex items-center justify-center p-8">
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-200/30 to-blue-200/30 transform group-hover:scale-110 transition-transform duration-700"></div>
              <img
                src="as6.png"
                alt="Graduation"
                className="relative z-10 rounded-2xl shadow-2xl w-full max-w-md object-cover transform group-hover:scale-105 group-hover:rotate-1 transition-all duration-500 hover:shadow-indigo-500/50"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}