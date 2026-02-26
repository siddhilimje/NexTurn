import { useState } from "react";
import { Link } from "react-router-dom";

export default function StudentDashboard() {
  const [active, setActive] = useState("Dashboard");

  const NavItem = ({ name }) => (
    <button
      onClick={() => setActive(name)}
      className={[
        "w-full text-left rounded-xl px-3 py-2 text-sm transition",
        active === name
          ? "bg-white/10 text-white ring-1 ring-white/10"
          : "text-zinc-400 hover:text-white hover:bg-white/5",
      ].join(" ")}
    >
      {name}
    </button>
  );

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/10 p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">NexTurn</h2>
        </div>

        <div className="mt-3">
          <Link
            to="/"
            className="text-xs text-zinc-400 hover:text-white underline underline-offset-4"
          >
            ← Back to Home
          </Link>
        </div>

        <nav className="mt-8 space-y-2">
          <NavItem name="Dashboard" />
          <NavItem name="My Tasks" />
          <NavItem name="Reports" />
          <NavItem name="Feedback" />
        </nav>

        <div className="mt-10 rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
          <p className="text-xs text-zinc-400">Internship</p>
          <p className="mt-1 text-sm font-medium">UI/Frontend Internship</p>
          <p className="mt-1 text-xs text-zinc-400">Week 3 • Active</p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        <div className="flex items-start justify-between gap-6">
          <div>
            <h1 className="text-3xl font-semibold">Student Dashboard</h1>
            <p className="mt-2 text-zinc-400 text-sm">
              Track tasks, submit progress reports, and view mentor feedback.
            </p>
          </div>

          <div className="rounded-xl bg-white/5 px-4 py-3 ring-1 ring-white/10">
            <p className="text-xs text-zinc-400">Mentor</p>
            <p className="text-sm font-medium">Assigned: Dr. Mentor</p>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-xl bg-white/5 p-6 ring-1 ring-white/10">
            <p className="text-sm text-zinc-400">Tasks Completed</p>
            <p className="mt-2 text-2xl font-semibold">8</p>
          </div>

          <div className="rounded-xl bg-white/5 p-6 ring-1 ring-white/10">
            <p className="text-sm text-zinc-400">Pending Tasks</p>
            <p className="mt-2 text-2xl font-semibold">2</p>
          </div>

          <div className="rounded-xl bg-white/5 p-6 ring-1 ring-white/10">
            <p className="text-sm text-zinc-400">Weekly Score</p>
            <p className="mt-2 text-2xl font-semibold">85%</p>
          </div>
        </div>

        {/* Conditional Section Title */}
        <div className="mt-10 flex items-center justify-between">
          <h2 className="text-xl font-semibold">{active}</h2>
          <span className="text-xs text-zinc-500">Demo UI (front-end)</span>
        </div>

        {/* Content (simple for now) */}
        <div className="mt-4 space-y-4">
          {active === "My Tasks" && (
            <>
              <div className="rounded-xl bg-white/5 p-5 ring-1 ring-white/10">
                <p className="font-medium">Build Login Page UI</p>
                <p className="mt-1 text-sm text-zinc-400">Deadline: Friday</p>
              </div>
              <div className="rounded-xl bg-white/5 p-5 ring-1 ring-white/10">
                <p className="font-medium">Implement Form Validation</p>
                <p className="mt-1 text-sm text-zinc-400">Deadline: Sunday</p>
              </div>
            </>
          )}

          {active === "Reports" && (
            <div className="rounded-xl bg-white/5 p-5 ring-1 ring-white/10">
              <p className="font-medium">Weekly Report</p>
              <p className="mt-1 text-sm text-zinc-400">
                Submit progress summary for Week 3.
              </p>
              <button className="mt-4 rounded-xl bg-white px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-200">
                Submit Report
              </button>
            </div>
          )}

          {active === "Feedback" && (
            <div className="rounded-xl bg-white/5 p-5 ring-1 ring-white/10">
              <p className="font-medium">Mentor Feedback</p>
              <p className="mt-2 text-sm text-zinc-300">
                “Great progress. Focus next on validation, clean routing, and
                consistent spacing.”
              </p>
            </div>
          )}

          {active === "Dashboard" && (
            <div className="rounded-xl bg-white/5 p-5 ring-1 ring-white/10">
              <p className="font-medium">Overview</p>
              <p className="mt-2 text-sm text-zinc-400">
                Use the left menu to switch between Tasks, Reports, and Feedback.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}