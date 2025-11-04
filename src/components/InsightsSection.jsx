import React from "react";
import { BarChart3, Lightbulb, Bookmark } from "lucide-react";

export default function InsightsSection() {
  return (
    <section id="progress" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Progress Card */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-xl bg-violet-600 text-white grid place-items-center">
                <BarChart3 className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold text-slate-900">Progress Overview</p>
                <p className="text-sm text-slate-500">Track improvement across sections</p>
              </div>
            </div>

            <MiniChart />

            <ul className="mt-6 space-y-2 text-sm text-slate-600">
              <li><span className="font-medium text-slate-900">Listening:</span> Focus on multi-speaker conversations and map labelling.</li>
              <li><span className="font-medium text-slate-900">Reading:</span> Improve speed on summary completion and headings matching.</li>
            </ul>
          </div>

          {/* Resources Card */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm" id="resources">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-xl bg-amber-500 text-white grid place-items-center">
                <Lightbulb className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold text-slate-900">Tips & Strategies</p>
                <p className="text-sm text-slate-500">Practical guidance to boost your band score</p>
              </div>
            </div>

            <div className="space-y-4">
              <Tip title="Listen for paraphrasing" desc="IELTS often restates key ideas using different words. Train your ear to spot synonyms and rephrased sentences." />
              <Tip title="Keywords and scanning" desc="Underline keywords in questions and scan the passage for those ideas rather than reading line-by-line." />
              <Tip title="Time boxing" desc="Allocate fixed time per section and move on—guessing is better than leaving blanks." />
            </div>

            <div className="mt-6 flex gap-3">
              <button className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-4 py-2 text-sm font-medium hover:bg-slate-800">
                <Bookmark className="h-4 w-4" /> Bookmark guide
              </button>
              <button className="inline-flex items-center gap-2 rounded-lg bg-white border border-slate-200 px-4 py-2 text-sm font-medium hover:bg-slate-50">
                View sample essays
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Tip({ title, desc }) {
  return (
    <div className="rounded-lg border border-slate-200 p-4">
      <p className="font-medium text-slate-900">{title}</p>
      <p className="text-sm text-slate-600 mt-1">{desc}</p>
    </div>
  );
}

function MiniChart() {
  // Simple static graph bars to visualize progress
  const data = [55, 62, 68, 72, 78, 81, 85];
  return (
    <div className="mt-2">
      <div className="h-40 w-full grid grid-cols-7 items-end gap-2">
        {data.map((v, i) => (
          <div key={i} className="flex flex-col items-center">
            <div
              className="w-full rounded-t-md bg-indigo-500"
              style={{ height: `${v}%` }}
            />
            <span className="mt-1 text-[10px] text-slate-500">
              W{i + 1}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
        <div className="rounded-md bg-indigo-50 text-indigo-700 px-3 py-2">Listening avg: 7.5</div>
        <div className="rounded-md bg-emerald-50 text-emerald-700 px-3 py-2">Reading avg: 7.0</div>
      </div>
    </div>
  );
}
