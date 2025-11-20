"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HomePage from "@/components/HomePage";
import AboutPage from "@/components/AboutPage";
import EducationPage from "@/components/EducationPage";
import ExperiencePage from "@/components/ExperienceFinal";
import HonorsPage from "@/components/HonorsPage";
import ContactPage from "@/components/ContactPage";

export default function Portfolio() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage setCurrentPage={setCurrentPage} />;
      case "about":
        return <AboutPage />;
      case "education":
        return <EducationPage />;
      case "experience":
        return <ExperiencePage />;
      case "honors":
        return <HonorsPage />;
      case "contact":
        return <ContactPage />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderPage()}
      </main>

      <Footer />
    </div>
  );
}
