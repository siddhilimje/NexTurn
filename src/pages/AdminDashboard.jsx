import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getSession, logout } from "../auth/auth";
import {
  LayoutDashboard,
  Briefcase,
  Users,
  ClipboardCheck,
  LogOut,
} from "lucide-react";

export default function AdminDashboard() {
  const [active, setActive] = useState("Overview");
  const nav = useNavigate();
  const session = getSession();

  const tabs = [
    { name: "Overview", icon: LayoutDashboard },
    { name: "Post Internship", icon: Briefcase },
    { name: "Track Interns", icon: Users },
    { name: "Evaluations", icon: ClipboardCheck },
  ];

  function doLogout() {
    logout();
    nav("/");
  }

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 flex">
      {/* Sidebar */}
      <aside className="w-72 border-r border-black/5 bg-white/70 backdrop-blur dark:border-white/10 dark:bg-zinc-950/60 p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">NexTurn</h2>

          <button
            onClick={doLogout}
            className="rounded-xl p-2 ring-1 ring-black/10 bg-white/70 hover:bg-white dark:bg-white/5 dark:ring-white/10 dark:hover:bg-white/10"
            title="Logout"
          >
            <LogOut className="h-4 w-4" />
          </button>
        </div>

        <p className="mt-2 text-xs text-zinc-600 dark:text-zinc-400">
          Signed in as <span className="font-medium">{session?.email}</span>
        </p>
        <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">
          Role: <span className="font-medium">Admin / Mentor</span>
        </p>

        <div className="mt-4">
          <Link
            to="/"
            className="text-xs text-zinc-600 dark:text-zinc-400 hover:underline"
          >
            ← Back to Landing
          </Link>
        </div>

        <nav className="mt-8 space-y-2">
          {tabs.map((t) => (
            <button
              key={t.name}
              onClick={() => setActive(t.name)}
              className={[
                "w-full flex items-center gap-3 rounded-xl px-3 py-2 text-sm ring-1 transition",
                active === t.name
                  ? "bg-zinc-900 text-white ring-black/10 dark:bg-white dark:text-zinc-900 dark:ring-white/10"
                  : "bg-white/60 text-zinc-800 ring-black/10 hover:bg-white dark:bg-white/5 dark:text-zinc-200 dark:ring-white/10 dark:hover:bg-white/10",
              ].join(" ")}
            >
              <t.icon className="h-4 w-4" />
              {t.name}
            </button>
          ))}
        </nav>

        <div className="mt-10 rounded-2xl p-4 ring-1 ring-black/10 bg-white/70 dark:bg-white/5 dark:ring-white/10">
          <p className="text-xs text-zinc-600 dark:text-zinc-400">Organization</p>
          <p className="mt-1 text-sm font-semibold">NexTurn Labs</p>
          <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">
            Active postings: 2
          </p>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 p-10">
        <div className="flex items-start justify-between gap-6">
          <div>
            <h1 className="text-3xl font-semibold">Admin Portal</h1>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Post internships, track intern progress, and submit evaluations.
            </p>
          </div>

          <button
            className="rounded-xl px-4 py-2 text-sm font-medium text-white shadow-sm"
            style={{
              background:
                "linear-gradient(135deg, rgba(124,58,237,0.95), rgba(34,197,94,0.95))",
            }}
            onClick={() => setActive("Post Internship")}
          >
            + New Posting
          </button>
        </div>

        {/* Stats */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            { label: "Active Interns", value: "6" },
            { label: "Pending Reports", value: "3" },
            { label: "Evaluations Due", value: "2" },
          ].map((c) => (
            <div
              key={c.label}
              className="rounded-3xl p-6 ring-1 ring-black/10 bg-white/70 dark:bg-white/5 dark:ring-white/10"
            >
              <p className="text-sm text-zinc-600 dark:text-zinc-400">{c.label}</p>
              <p className="mt-2 text-2xl font-semibold">{c.value}</p>
            </div>
          ))}
        </div>

        {/* Section header */}
        <div className="mt-10 flex items-center justify-between">
          <h2 className="text-xl font-semibold">{active}</h2>
          <span className="text-xs text-zinc-500">Front-end demo</span>
        </div>

        {/* Content */}
        <div className="mt-4 space-y-4">
          {active === "Overview" && (
            <div className="rounded-3xl p-6 ring-1 ring-black/10 bg-white/70 dark:bg-white/5 dark:ring-white/10">
              <p className="font-semibold">Overview</p>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Use the sidebar to create postings, monitor interns, and provide
                evaluations. This is a front-end demo (no backend).
              </p>
            </div>
          )}

          {active === "Post Internship" && (
            <div className="rounded-3xl p-6 ring-1 ring-black/10 bg-white/70 dark:bg-white/5 dark:ring-white/10">
              <p className="font-semibold">Create Internship Posting</p>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Fill in details to publish a new internship (demo UI).
              </p>

              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <input
                  className="rounded-2xl px-4 py-3 text-sm ring-1 ring-black/10 bg-white/60 dark:bg-zinc-950/40 dark:ring-white/10"
                  placeholder="Role Title (e.g., Frontend Intern)"
                />
                <input
                  className="rounded-2xl px-4 py-3 text-sm ring-1 ring-black/10 bg-white/60 dark:bg-zinc-950/40 dark:ring-white/10"
                  placeholder="Duration (e.g., 8 weeks)"
                />
                <input
                  className="rounded-2xl px-4 py-3 text-sm ring-1 ring-black/10 bg-white/60 dark:bg-zinc-950/40 dark:ring-white/10 md:col-span-2"
                  placeholder="Skills (e.g., React, UI, Git)"
                />
                <textarea
                  className="rounded-2xl px-4 py-3 text-sm ring-1 ring-black/10 bg-white/60 dark:bg-zinc-950/40 dark:ring-white/10 md:col-span-2"
                  rows={4}
                  placeholder="Description"
                />
              </div>

              <button
                className="mt-5 rounded-xl px-4 py-2 text-sm font-medium text-white"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(124,58,237,0.95), rgba(34,197,94,0.95))",
                }}
              >
                Publish Posting
              </button>
            </div>
          )}

          {active === "Track Interns" && (
            <div className="rounded-3xl p-6 ring-1 ring-black/10 bg-white/70 dark:bg-white/5 dark:ring-white/10">
              <p className="font-semibold">Intern Progress</p>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Quick view of intern status and progress (demo UI).
              </p>

              <div className="mt-5 space-y-3">
                {[
                  { name: "Ayesha", progress: 80, status: "On Track" },
                  { name: "Rahul", progress: 60, status: "Needs Attention" },
                  { name: "Sana", progress: 92, status: "Excellent" },
                ].map((i) => (
                  <div
                    key={i.name}
                    className="rounded-3xl p-5 ring-1 ring-black/10 bg-white/60 dark:bg-zinc-950/40 dark:ring-white/10"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-semibold">{i.name}</p>
                        <p className="text-xs text-zinc-600 dark:text-zinc-400">
                          {i.status}
                        </p>
                      </div>
                      <p className="text-sm font-semibold">{i.progress}%</p>
                    </div>

                    <div className="mt-3 h-2 w-full rounded-full bg-black/10 dark:bg-white/10">
                      <div
                        className="h-2 rounded-full"
                        style={{
                          width: `${i.progress}%`,
                          background:
                            "linear-gradient(90deg, rgba(124,58,237,0.95), rgba(34,197,94,0.95))",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {active === "Evaluations" && (
            <div className="rounded-3xl p-6 ring-1 ring-black/10 bg-white/70 dark:bg-white/5 dark:ring-white/10">
              <p className="font-semibold">Submit Evaluation</p>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Provide score and feedback for an intern (demo UI).
              </p>

              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <input
                  className="rounded-2xl px-4 py-3 text-sm ring-1 ring-black/10 bg-white/60 dark:bg-zinc-950/40 dark:ring-white/10"
                  placeholder="Intern Name"
                />
                <input
                  className="rounded-2xl px-4 py-3 text-sm ring-1 ring-black/10 bg-white/60 dark:bg-zinc-950/40 dark:ring-white/10"
                  placeholder="Score (0–100)"
                />
                <textarea
                  className="rounded-2xl px-4 py-3 text-sm ring-1 ring-black/10 bg-white/60 dark:bg-zinc-950/40 dark:ring-white/10 md:col-span-2"
                  rows={4}
                  placeholder="Feedback comments"
                />
              </div>

              <button
                className="mt-5 rounded-xl px-4 py-2 text-sm font-medium text-white"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(124,58,237,0.95), rgba(34,197,94,0.95))",
                }}
              >
                Submit Evaluation
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}