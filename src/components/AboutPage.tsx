"use client";
import React from "react";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-white rounded-3xl shadow-2xl p-10 md:p-16 border border-indigo-100">

        {/* GRID: IMAGE + CONTENT */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT IMAGE (PARALLAX FLOAT) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <motion.img
              src="/asm2.jpg"
              alt="About Me"
              className="rounded-3xl shadow-2xl w-full object-cover"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          {/* RIGHT TEXT CONTENT */}
          <div>

            {/* HEADING ANIMATION */}
            <motion.h2
              initial={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-linear-to-br from-slate-900 to-indigo-900 mb-8 font-heading"
            >
              <motion.span
                initial={{ backgroundPosition: "0% 50%" }}
                animate={{ backgroundPosition: "100% 50%" }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="bg-linear-to-r from-indigo-600 via-purple-600 to-slate-900 bg-size[200%_200%] bg-clip-text text-transparent inline-block"
              >
                About Me
              </motion.span>
            </motion.h2>

            {/* STAGGERED TEXT SECTION */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.25 } },
              }}
              className="space-y-6 text-xl text-slate-700 leading-relaxed font-light"
            >
              {[
                "I am Hafiz Assam Mazhar, a dedicated professional with a blend of technical expertise and business acumen spanning 9 years.",
                "As a Software Engineer from NED University, I have worked with leading organizations such as Nexus Software House and served 6 years as Team Leader at 3D Marketing.",
                "Currently, I am the Director at Property Network where I bring innovation and leadership to the real estate sector.",
                "I am also a proud Hafiz, holding top 3 positions across Karachi and Pakistan."
              ].map((text, index) => (
                <motion.p
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.8, ease: "easeOut" },
                    },
                  }}
                >
                  {text}
                </motion.p>
              ))}
            </motion.div>
          </div>
        </div>

        {/* STATS SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-12 grid md:grid-cols-3 gap-8"
        >
          {[
            { num: "9+", label: "Years in Property" },
            { num: "6", label: "Years as Team Leader" },
            { num: "3+", label: "Major Organizations" },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8, scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-indigo-50 to-white p-8 rounded-2xl text-center border-2 border-indigo-200 shadow-lg"
            >
              {/* FIXED NUMBER GRADIENT */}
              <div
                className="text-5xl font-black bg-clip-text text-transparent 
                bg-gradient-to-r from-indigo-600 via-indigo-700 to-indigo-800 mb-3 font-heading"
              >
                {item.num}
              </div>

              <div className="text-slate-800 font-bold text-lg">
                {item.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
}
