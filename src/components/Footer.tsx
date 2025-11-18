import React from "react";
import { Phone, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white mt-20 border-t border-indigo-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300 font-heading">
            Hafiz Assam Mazhar
          </h3>
          <p className="text-blue-200/70 mb-6">
            Software Engineer & Property Director
          </p>
          <div className="flex justify-center gap-6 mb-6">
            <a
              href="tel:+923198306280"
              className="text-blue-300 hover:text-blue-100 transition-colors"
              aria-label="Phone"
            >
              <Phone size={24} />
            </a>
            <a
              href="https://www.facebook.com/share/1A36PF6YEy/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-blue-100 transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={24} />
            </a>
          </div>
          <p className="text-sm text-blue-200/50">
            &copy; 2024 Hafiz Assam Mazhar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
