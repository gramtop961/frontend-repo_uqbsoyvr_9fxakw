import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PracticeGrid from "./components/PracticeGrid";
import InsightsSection from "./components/InsightsSection";

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <PracticeGrid />
        <InsightsSection />
      </main>
      <footer className="border-t border-slate-200 py-8 mt-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-sm text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Cambridge School. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-900">Privacy</a>
            <a href="#" className="hover:text-slate-900">Terms</a>
            <a href="#" className="hover:text-slate-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
