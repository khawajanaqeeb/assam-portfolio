"use client";

import React, { useState } from "react";
import {
  Menu,
  X,
  Mail,
  Briefcase,
  GraduationCap,
  Award,
  User,
} from "lucide-react";

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export default function Navbar({ currentPage, setCurrentPage }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", id: "home", icon: User },
    { name: "About", id: "about", icon: User },
    { name: "Education", id: "education", icon: GraduationCap },
    { name: "Experience", id: "experience", icon: Briefcase },
    { name: "Honors Earned", id: "honors", icon: Award },
    { name: "Contact", id: "contact", icon: Mail },
  ];

  return (
    <nav className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 shadow-2xl sticky top-0 z-50 border-b border-indigo-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300 font-heading">
              Hafiz Assam Mazhar
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                    currentPage === item.id
                      ? "bg-gradient-to-r from-indigo-600 to-indigo-700 text-white shadow-lg shadow-indigo-500/30 scale-105"
                      : "text-blue-100 hover:bg-slate-700/50 hover:text-blue-300"
                  }`}
                >
                  <Icon size={16} />
                  {item.name}
                </button>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-blue-300 hover:text-blue-100"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-indigo-500/20">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-lg text-base font-semibold flex items-center gap-3 transition-all duration-300 ${
                    currentPage === item.id
                      ? "bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg"
                      : "text-blue-100 hover:bg-slate-700/50 hover:text-blue-300"
                  }`}
                >
                  <Icon size={20} />
                  {item.name}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
