import React from "react";
import Image from "next/image";

interface HomePageProps {
  setCurrentPage: (page: string) => void;
}

export default function HomePage({ setCurrentPage }: HomePageProps) {
  return (
    <div className="min-h-[80vh] flex items-center">
      <div className="grid md:grid-cols-2 gap-16 items-center w-full">
        <div className="order-2 md:order-1 space-y-8">
          <div className="space-y-4">
            <p className="text-indigo-600 font-bold text-lg tracking-wider uppercase">
              Welcome to my portfolio
            </p>
            <h1 className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-indigo-900 to-blue-900 leading-tight font-heading">
              Hafiz Assam Mazhar
            </h1>
            <p className="text-3xl font-semibold text-slate-700">
              Software Engineer & Property Director
            </p>
          </div>
          <p className="text-xl text-slate-600 leading-relaxed font-light">
            With 9 years of experience in the property field and a strong
            background in software engineering, I bring technical expertise and
            leadership to every project I undertake.
          </p>
          <div className="flex gap-6 pt-6">
            <button
              onClick={() => setCurrentPage("about")}
              className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white px-10 py-4 rounded-xl font-bold text-lg hover:from-indigo-700 hover:to-indigo-800 transition-all duration-300 shadow-xl shadow-indigo-600/30 hover:shadow-2xl hover:scale-105"
            >
              Learn More
            </button>
            <button
              onClick={() => setCurrentPage("contact")}
              className="border-3 border-slate-800 text-slate-800 px-10 py-4 rounded-xl font-bold text-lg hover:bg-slate-800 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Get in Touch
            </button>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-3xl transform rotate-3 shadow-2xl"></div>
            <div className="absolute inset-0 bg-gradient-to-l from-indigo-500 to-blue-500 rounded-3xl transform -rotate-3 shadow-2xl"></div>
            <Image
              src="/assam-pic1.jpeg"
              alt="Hafiz Assam Mazhar"
              width={600}
              height={800}
              className="relative rounded-3xl shadow-2xl w-full object-cover border-4 border-white"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
