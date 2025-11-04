import { BookOpen, Headphones, BarChart3, Bookmark } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-indigo-600 text-white grid place-items-center font-bold">CS</div>
            <div className="flex flex-col leading-tight">
              <span className="font-semibold text-slate-900">Cambridge School</span>
              <span className="text-xs text-slate-500">IELTS Practice Suite</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-slate-700">
            <a href="#listening" className="inline-flex items-center gap-2 hover:text-indigo-600 transition-colors">
              <Headphones className="h-4 w-4" /> Listening
            </a>
            <a href="#reading" className="inline-flex items-center gap-2 hover:text-indigo-600 transition-colors">
              <BookOpen className="h-4 w-4" /> Reading
            </a>
            <a href="#progress" className="inline-flex items-center gap-2 hover:text-indigo-600 transition-colors">
              <BarChart3 className="h-4 w-4" /> Progress
            </a>
            <a href="#resources" className="inline-flex items-center gap-2 hover:text-indigo-600 transition-colors">
              <Bookmark className="h-4 w-4" /> Resources
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="hidden sm:inline-flex items-center rounded-lg bg-slate-900 text-white px-3 py-2 text-sm font-medium hover:bg-slate-800 transition-colors">
              Sign in
            </button>
            <button className="inline-flex items-center rounded-lg bg-indigo-600 text-white px-3 py-2 text-sm font-medium hover:bg-indigo-500 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
