import React from "react";

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="bg-white rounded-3xl shadow-2xl p-10 md:p-16 border border-indigo-100">
        <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-indigo-900 mb-8 font-heading">
          About Me
        </h2>
        <div className="space-y-6 text-xl text-slate-700 leading-relaxed font-light">
          <p>
            I am{" "}
            <strong className="font-bold text-slate-900">
              Hafiz Assam Mazhar
            </strong>
            , a dedicated professional with a unique blend of technical
            expertise and business acumen. My journey spans across software
            engineering and the property sector, where I've built a solid
            reputation over 9 years.
          </p>
          <p>
            As a{" "}
            <strong className="font-bold text-slate-900">
              Software Engineer
            </strong>{" "}
            graduate from NED University of Engineering & Technology, I've
            worked with leading organizations including Nexus Software House as
            a Web Developer and 3D Marketing as a Team Leader, where I led teams
            for 6 years.
          </p>
          <p>
            Currently, I serve as a{" "}
            <strong className="font-bold text-slate-900">
              Director at Property Network
            </strong>
            , bringing my extensive experience in the property field to drive
            business growth and innovation. My technical background allows me to
            implement modern solutions in traditional sectors, creating value
            for clients and stakeholders.
          </p>
          <p>
            Beyond my professional achievements, I take pride in my religious
            education, having earned recognition as a Hafiz with a top 3
            position across Karachi and Pakistan. This discipline and dedication
            reflect in all aspects of my work.
          </p>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-2xl text-center border-2 border-indigo-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-800 mb-3 font-heading">
              9+
            </div>
            <div className="text-slate-800 font-bold text-lg">
              Years in Property
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl text-center border-2 border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 mb-3 font-heading">
              6
            </div>
            <div className="text-slate-800 font-bold text-lg">
              Years as Team Leader
            </div>
          </div>
          <div className="bg-gradient-to-br from-slate-100 to-slate-200 p-8 rounded-2xl text-center border-2 border-slate-300 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-slate-900 mb-3 font-heading">
              3+
            </div>
            <div className="text-slate-800 font-bold text-lg">
              Major Organizations
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
