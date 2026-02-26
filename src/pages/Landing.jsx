import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Moon, Sun, ShieldCheck, ClipboardList, MessageSquareText } from "lucide-react";
import { useTheme } from "../theme/ThemeProvider";

function SubtleBG() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full blur-3xl opacity-20 dark:opacity-25"
        style={{ background: "radial-gradient(circle at 30% 30%, #7c3aed, transparent 60%)" }}
      />
      <div
        className="absolute top-10 -right-40 h-[520px] w-[520px] rounded-full blur-3xl opacity-15 dark:opacity-20"
        style={{ background: "radial-gradient(circle at 60% 40%, #22c55e, transparent 60%)" }}
      />
      <div className="absolute inset-0 opacity-[0.05] dark:opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.9) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.9) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
    </div>
  );
}

export default function Landing() {
  const { theme, toggle } = useTheme();

  return (
    <div className="relative min-h-screen overflow-hidden bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <SubtleBG />

      <header className="relative z-10 sticky top-0 border-b border-black/5 bg-white/70 backdrop-blur dark:border-white/10 dark:bg-zinc-950/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-xl ring-1 ring-black/10 bg-white/70 dark:bg-white/10 dark:ring-white/10">
              <span className="text-sm font-semibold">NT</span>
            </div>
            <span className="text-lg font-semibold tracking-tight">NexTurn</span>
            <span className="ml-2 hidden rounded-full px-2 py-1 text-xs ring-1 ring-black/10 bg-white/60 dark:bg-white/5 dark:ring-white/10 md:inline">
              Remote Internship Platform
            </span>
          </div>

          <nav className="hidden gap-6 text-sm md:flex">
            <a className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white" href="#features">
              Features
            </a>
            <a className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white" href="#how">
              How it works
            </a>
            <a className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white" href="#roles">
              Roles
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={toggle}
              className="rounded-xl px-3 py-2 text-sm ring-1 ring-black/10 bg-white/70 hover:bg-white dark:bg-white/5 dark:ring-white/10 dark:hover:bg-white/10"
              aria-label="Toggle theme"
              title={`Theme: ${theme}`}
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>

            <Link
              to="/auth/login"
              className="rounded-xl px-4 py-2 text-sm ring-1 ring-black/10 bg-white/80 hover:bg-white dark:bg-white/5 dark:ring-white/10 dark:hover:bg-white/10"
            >
              Login
            </Link>

            <Link
              to="/auth/signup"
              className="rounded-xl px-4 py-2 text-sm font-medium text-white shadow-sm"
              style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.95), rgba(34,197,94,0.95))" }}
            >
              Sign up
            </Link>
          </div>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs ring-1 ring-black/10 bg-white/70 dark:bg-white/5 dark:ring-white/10"
            >
              Task Tracking • Progress Reports • Mentor Feedback
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="mt-6 text-4xl font-semibold tracking-tight md:text-5xl"
            >
              Manage remote internships with{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(90deg, #7c3aed, #22c55e)" }}
              >
                clarity
              </span>{" "}
              and structure.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="mt-4 leading-relaxed text-zinc-700 dark:text-zinc-300"
            >
              NexTurn helps employers post internships, track intern work, and provide evaluations —
              while students manage tasks, submit weekly reports, and receive feedback.
            </motion.p>

            <div id="features" className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                { icon: ClipboardList, title: "Task Tracking", desc: "Assign, track, and manage tasks clearly." },
                { icon: ShieldCheck, title: "Progress Reports", desc: "Weekly submissions with structured updates." },
                { icon: MessageSquareText, title: "Mentor Feedback", desc: "Evaluations, scoring, and comments." },
              ].map((f) => (
                <div
                  key={f.title}
                  className="rounded-2xl p-4 ring-1 ring-black/10 bg-white/70 dark:bg-white/5 dark:ring-white/10"
                >
                  <f.icon className="h-5 w-5" />
                  <p className="mt-3 text-sm font-semibold">{f.title}</p>
                  <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">{f.desc}</p>
                </div>
              ))}
            </div>

            <div id="how" className="mt-10 rounded-3xl p-5 ring-1 ring-black/10 bg-white/70 dark:bg-white/5 dark:ring-white/10">
              <p className="text-sm font-semibold">How it works</p>
              <ol className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                <li>1) Employer posts an internship and defines tasks.</li>
                <li>2) Student joins, completes tasks, and submits weekly reports.</li>
                <li>3) Mentor reviews progress and submits evaluations.</li>
              </ol>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="rounded-3xl p-6 ring-1 ring-black/10 bg-white/70 dark:bg-white/5 dark:ring-white/10"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold">Dashboard Preview</p>
              <span className="text-xs text-zinc-600 dark:text-zinc-400">Demo UI</span>
            </div>

            <div className="mt-6 grid gap-3">
              <div className="rounded-2xl p-4 ring-1 ring-black/10 bg-white/60 dark:bg-zinc-950/40 dark:ring-white/10">
                <p className="text-sm font-semibold">Student</p>
                <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                  Tasks • Reports • Feedback
                </p>
              </div>

              <div className="rounded-2xl p-4 ring-1 ring-black/10 bg-white/60 dark:bg-zinc-950/40 dark:ring-white/10">
                <p className="text-sm font-semibold">Admin / Mentor</p>
                <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                  Post internships • Track interns • Evaluations
                </p>
              </div>
            </div>

            <div id="roles" className="mt-6 grid gap-3 sm:grid-cols-2">
              <Link
                to="/auth/signup"
                className="rounded-2xl p-4 ring-1 ring-black/10 bg-white/70 hover:bg-white dark:bg-white/5 dark:ring-white/10 dark:hover:bg-white/10"
              >
                <p className="text-sm font-semibold">Create account</p>
                <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">
                  Choose Student or Admin role.
                </p>
              </Link>

              <Link
                to="/auth/login"
                className="rounded-2xl p-4 text-white"
                style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.95), rgba(34,197,94,0.95))" }}
              >
                <p className="text-sm font-semibold">Login</p>
                <p className="mt-1 text-xs text-white/85">
                  Continue to your dashboard.
                </p>
              </Link>
            </div>
          </motion.div>
        </div>
      </main>

      <footer className="relative z-10 border-t border-black/5 dark:border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-8 text-xs text-zinc-600 dark:text-zinc-400">
          © {new Date().getFullYear()} NexTurn — Front-end demo (localStorage auth)
        </div>
      </footer>
    </div>
  );
}