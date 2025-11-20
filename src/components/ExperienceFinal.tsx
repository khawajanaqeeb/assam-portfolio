"use client";

import React from "react";
import Image from "next/image";
import { Briefcase } from "lucide-react";

function Card({
  title,
  org,
  duration,
  children,
}: {
  title: string;
  org: string;
  duration?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="w-full">
      <div className="w-full flex flex-col p-4 md:p-6 rounded-2xl border border-slate-200 bg-white">
        <div>
          <h3 className="text-lg md:text-xl font-black text-slate-900 mb-1">
            {title}
          </h3>
          <p className="text-sm md:text-base text-slate-700 font-semibold mb-1">
            {org}
          </p>
          {duration ? (
            <p className="text-sm text-slate-600 mb-2">{duration}</p>
          ) : null}
        </div>

        <div className="mt-2">
          <p className="text-sm md:text-base text-slate-600 leading-relaxed text-justify whitespace-pre-line wrap-break-word">
            {children}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ExperienceFinal() {
  return (
    <div className="min-h-screen bg-transparent">
      {/* Full-width icon bar below navbar */}
      <div className="w-full py-3 bg-transparent">
        <div className="mx-auto w-full overflow-hidden">
          <div className="auto-scroll" style={{ animationDuration: "20s" }}>
            <Image
              src="/l1.png"
              alt="icon l1"
              width={112}
              height={112}
              className="object-contain inline-block mx-4"
            />
            <Image
              src="/l2.png"
              alt="icon l2"
              width={112}
              height={112}
              className="object-contain inline-block mx-4"
            />
            <Image
              src="/l3.png"
              alt="icon l3"
              width={112}
              height={112}
              className="object-contain inline-block mx-4"
            />
            <Image
              src="/l4.png"
              alt="icon l4"
              width={112}
              height={112}
              className="object-contain inline-block mx-4"
            />
            <Image
              src="/l5.png"
              alt="icon l5"
              width={112}
              height={112}
              className="object-contain inline-block mx-4"
            />
            <Image
              src="/l6.png"
              alt="icon l6"
              width={112}
              height={112}
              className="object-contain inline-block mx-4"
            />
            <Image
              src="/l7.png"
              alt="icon l7"
              width={112}
              height={112}
              className="object-contain inline-block mx-4"
            />
            <Image
              src="/l8.png"
              alt="icon l8"
              width={112}
              height={112}
              className="object-contain inline-block mx-4"
            />
            {/* duplicate for seamless scroll */}
            <Image
              src="/l1.png"
              alt="icon l1"
              width={112}
              height={112}
              className="object-contain inline-block mx-4"
            />
            <Image
              src="/l2.png"
              alt="icon l2"
              width={112}
              height={112}
              className="object-contain inline-block mx-4"
            />
            <Image
              src="/l3.png"
              alt="icon l3"
              width={112}
              height={112}
              className="object-contain inline-block mx-4"
            />
            <Image
              src="/l4.png"
              alt="icon l4"
              width={112}
              height={112}
              className="object-contain inline-block mx-4"
            />
            <Image
              src="/l5.png"
              alt="icon l5"
              width={112}
              height={112}
              className="object-contain inline-block mx-4"
            />
            <Image
              src="/l6.png"
              alt="icon l6"
              width={112}
              height={112}
              className="object-contain inline-block mx-4"
            />
            <Image
              src="/l7.png"
              alt="icon l7"
              width={112}
              height={112}
              className="object-contain inline-block mx-4"
            />
            <Image
              src="/l8.png"
              alt="icon l8"
              width={112}
              height={112}
              className="object-contain inline-block mx-4"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left: content column */}
        <div className="w-full">
          <div className="bg-white/95 rounded-3xl p-4 md:p-6 border border-indigo-100">
            <div className="flex items-center gap-4 mb-4">
              <div
                className="p-3 rounded-2xl"
                style={{ background: "linear-gradient(90deg,#3b82f6,#2563eb)" }}
              >
                <Briefcase className="text-white" size={26} />
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900">
                Experience
              </h2>
            </div>

            <div className="flex flex-col gap-6">
              <Card title="Director" org="Property Network" duration="9 years">
                Leading strategic initiatives and business development in the
                property sector. Overseeing operations, managing client
                relationships, and driving organizational growth through
                innovative approaches.
              </Card>

              <Card title="Team Leader" org="3D Marketing" duration="6 years">
                Led and mentored development teams in delivering high-quality
                marketing solutions. Managed project timelines, coordinated with
                stakeholders, and ensured successful delivery of complex 3D
                marketing campaigns.
              </Card>

              <Card title="Web Developer" org="Nexus Software House">
                Developed and maintained web applications using modern
                frameworks and technologies. Collaborated with cross-functional
                teams to deliver user-friendly and scalable web solutions for
                diverse clients.
              </Card>
            </div>
          </div>
        </div>

        {/* Right: image column */}
        <div className="w-full relative flex items-start justify-center">
          <div
            className="w-full h-[480px] md:h-[720px] bg-no-repeat bg-center z-0"
            style={{
              backgroundImage: "url('/as1.png')",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          />
        </div>
      </div>
    </div>
  );
}
