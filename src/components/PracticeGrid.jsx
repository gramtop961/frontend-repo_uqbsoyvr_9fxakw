import React from "react";
import { Headphones, BookOpen, Volume2, ChevronRight, CheckCircle } from "lucide-react";

const FeatureTag = ({ children }) => (
  <span className="inline-flex items-center rounded-full bg-slate-100 text-slate-700 px-2 py-0.5 text-xs mr-2 mb-2">
    <CheckCircle className="h-3.5 w-3.5 mr-1 text-emerald-600" /> {children}
  </span>
);

export default function PracticeGrid() {
  return (
    <section className="py-16" id="listening">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Practice Modules</h2>
            <p className="text-slate-600 mt-1">Realistic exercises for both Listening and Reading with instant feedback.</p>
          </div>
          <a href="#resources" className="hidden sm:inline-flex items-center gap-1 text-indigo-600 font-medium hover:text-indigo-500">
            Explore tips <ChevronRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Listening Card */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-xl bg-indigo-600 text-white grid place-items-center">
                <Headphones className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold text-slate-900">IELTS Listening</p>
                <p className="text-sm text-slate-500">Four sections • Multiple accents</p>
              </div>
            </div>
            <div className="flex flex-wrap">
              <FeatureTag>Multiple Choice</FeatureTag>
              <FeatureTag>Sentence Completion</FeatureTag>
              <FeatureTag>Matching</FeatureTag>
              <FeatureTag>Diagram Labelling</FeatureTag>
              <FeatureTag>Short Answers</FeatureTag>
            </div>
            <div className="mt-6 flex items-center gap-3">
              <button className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-4 py-2 text-sm font-medium hover:bg-slate-800">
                <Volume2 className="h-4 w-4" /> Try a sample
              </button>
              <button className="inline-flex items-center gap-2 rounded-lg bg-white border border-slate-200 px-4 py-2 text-sm font-medium hover:bg-slate-50">
                View transcript
              </button>
            </div>
          </div>

          {/* Reading Card */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm" id="reading">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-xl bg-emerald-600 text-white grid place-items-center">
                <BookOpen className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold text-slate-900">IELTS Reading</p>
                <p className="text-sm text-slate-500">Academic & General Training</p>
              </div>
            </div>
            <div className="flex flex-wrap">
              <FeatureTag>True / False / Not Given</FeatureTag>
              <FeatureTag>Matching Headings</FeatureTag>
              <FeatureTag>Summary Completion</FeatureTag>
              <FeatureTag>Multiple Choice</FeatureTag>
              <FeatureTag>Vocabulary Builder</FeatureTag>
            </div>
            <div className="mt-6 flex items-center gap-3">
              <button className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-4 py-2 text-sm font-medium hover:bg-slate-800">
                Start a passage
              </button>
              <button className="inline-flex items-center gap-2 rounded-lg bg-white border border-slate-200 px-4 py-2 text-sm font-medium hover:bg-slate-50">
                Instant feedback demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
