import { Headphones, BookOpen, Rocket, Timer } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-pink-50" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-100 text-indigo-700 px-3 py-1 text-xs font-medium mb-4">
              <Timer className="h-3.5 w-3.5" /> Exam-like practice made simple
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              Master IELTS Listening & Reading
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Practice in a realistic test environment with high‑quality audio, challenging passages, and instant feedback. Track your progress and focus on what matters most.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#listening" className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 text-white px-5 py-3 font-medium hover:bg-indigo-500 transition-colors">
                <Headphones className="h-5 w-5" /> Start Listening
              </a>
              <a href="#reading" className="inline-flex items-center gap-2 rounded-lg bg-white text-slate-900 px-5 py-3 font-medium border border-slate-200 hover:bg-slate-50 transition-colors">
                <BookOpen className="h-5 w-5" /> Start Reading
              </a>
            </div>
            <div className="mt-8 grid grid-cols-3 max-w-md text-sm text-slate-600">
              <div className="border-r border-slate-200 pr-4"><span className="font-semibold text-slate-900">4</span> sections</div>
              <div className="border-r border-slate-200 px-4"><span className="font-semibold text-slate-900">10k+</span> questions</div>
              <div className="pl-4"><span className="font-semibold text-slate-900">Real</span> accents</div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-10 -left-10 h-72 w-72 rounded-full bg-indigo-200/40 blur-3xl" />
            <div className="absolute -bottom-10 -right-10 h-72 w-72 rounded-full bg-pink-200/40 blur-3xl" />
            <div className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-indigo-600 text-white grid place-items-center">
                  <Rocket className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Quick Demo</p>
                  <p className="text-sm text-slate-500">Simulated IELTS timer</p>
                </div>
              </div>
              <DemoTimer />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DemoTimer() {
  const [seconds, setSeconds] = useState(60);
  const [running, setRunning] = useState(false);

  React.useEffect(() => {
    if (!running) return;
    const id = setInterval(() => setSeconds((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(id);
  }, [running]);

  const mm = String(Math.floor(seconds / 60)).padStart(2, "0");
  const ss = String(seconds % 60).padStart(2, "0");

  return (
    <div className="mt-6 rounded-xl border border-slate-200 p-4">
      <p className="text-sm text-slate-600 mb-3">Time remaining</p>
      <p className="text-4xl font-mono font-bold tracking-tight text-slate-900">{mm}:{ss}</p>
      <div className="mt-4 flex gap-2">
        <button onClick={() => setRunning(true)} className="inline-flex items-center rounded-lg bg-slate-900 text-white px-3 py-2 text-sm font-medium hover:bg-slate-800">Start</button>
        <button onClick={() => setRunning(false)} className="inline-flex items-center rounded-lg bg-white border border-slate-200 px-3 py-2 text-sm font-medium hover:bg-slate-50">Pause</button>
        <button onClick={() => { setSeconds(60); setRunning(false); }} className="inline-flex items-center rounded-lg bg-white border border-slate-200 px-3 py-2 text-sm font-medium hover:bg-slate-50">Reset</button>
      </div>
    </div>
  );
}

import React, { useState } from "react";