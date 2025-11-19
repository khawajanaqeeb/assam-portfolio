import React from "react";
import { Mail, Phone, Facebook } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="bg-white rounded-3xl shadow-2xl p-10 md:p-16 border border-indigo-100">
        <div className="flex items-center gap-4 mb-10">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 rounded-2xl shadow-lg">
            <Mail className="text-white" size={44} />
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-indigo-900 font-heading">
            Contact Me
          </h2>
        </div>
        <p className="text-xl text-slate-600 mb-10 font-light leading-relaxed">
          Feel free to reach out to me through any of the following channels.
          I&apos;m always open to discussing new opportunities, partnerships, or just
          having a conversation.
        </p>
        <div className="space-y-6">
          <div className="flex items-center gap-6 p-8 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl border-2 border-indigo-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 p-5 rounded-2xl shadow-lg">
              <Phone className="text-white" size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2 font-heading">
                Phone
              </h3>
              <a
                href="tel:+923198306280"
                className="text-xl text-indigo-700 hover:text-indigo-900 font-bold transition-colors"
              >
                +92 319 8306280
              </a>
            </div>
          </div>

          <div className="flex items-center gap-6 p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border-2 border-blue-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-5 rounded-2xl shadow-lg">
              <Facebook className="text-white" size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2 font-heading">
                Facebook
              </h3>
              <a
                href="https://www.facebook.com/share/1A36PF6YEy/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-blue-700 hover:text-blue-900 font-bold transition-colors break-all"
              >
                Visit my Facebook profile
              </a>
            </div>
          </div>

          <div className="mt-10 p-10 bg-gradient-to-r from-slate-900 via-indigo-900 to-blue-900 rounded-3xl text-white shadow-2xl">
            <h3 className="text-4xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300 font-heading">
              Let&apos;s Work Together
            </h3>
            <p className="text-xl font-light leading-relaxed text-blue-100/90">
              Whether you&apos;re looking for technical expertise in software
              development or professional guidance in the property sector, I&apos;m
              here to help bring your vision to life.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
