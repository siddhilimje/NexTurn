import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Moon, Sun, ShieldCheck, ClipboardList, MessageSquareText, ChevronRight, Zap, Target, Layers } from "lucide-react";
import { useTheme } from "../theme/ThemeProvider";

function SubtleBG() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden dark:bg-[#0a0a0a]">
      {/* Dynamic glowing orbs inspired by Metamask/Web3 */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-[10%] -left-[10%] h-[600px] w-[600px] rounded-full blur-[120px] mix-blend-screen"
        style={{ background: "radial-gradient(circle, rgba(124,58,237,0.4), transparent 70%)" }}
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-[20%] -right-[10%] h-[700px] w-[700px] rounded-full blur-[140px] mix-blend-screen"
        style={{ background: "radial-gradient(circle, rgba(34,197,94,0.3), transparent 70%)" }}
      />
      
      {/* Crisp geometric grid floor */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
        style={{ maskImage: "linear-gradient(to bottom, black 40%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, black 40%, transparent 100%)" }}
      />
    </div>
  );
}

export default function Landing() {
  const { theme, toggle } = useTheme();
  const { scrollYProgress } = useScroll();
  const yElement = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-white text-zinc-900 dark:bg-[#0a0a0a] dark:text-zinc-100 font-sans selection:bg-indigo-500/30">
      <SubtleBG />

      <header className="fixed w-full z-50 border-b border-white/10 dark:border-white/5 bg-white/60 dark:bg-[#0a0a0a]/60 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-indigo-500 to-green-500 text-white shadow-lg shadow-indigo-500/25">
              <span className="text-lg font-bold tracking-tighter">NT</span>
            </div>
            <span className="text-xl font-bold tracking-tight">NexTurn</span>
          </motion.div>

          <nav className="hidden gap-8 text-sm font-medium md:flex">
            <a className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors" href="#features">Platform</a>
            <a className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors" href="#how">How it Works</a>
            <a className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors" href="#roles">Solutions</a>
          </nav>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <button
              onClick={toggle}
              className="p-2.5 rounded-full bg-zinc-100 dark:bg-white/5 hover:bg-zinc-200 dark:hover:bg-white/10 transition-colors"
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <Link
              to="/auth/login"
              className="px-5 py-2.5 text-sm font-semibold rounded-full hover:bg-zinc-100 dark:hover:bg-white/5 transition-colors"
            >
              Sign In
            </Link>
            <Link
              to="/auth/signup"
              className="px-6 py-2.5 text-sm font-bold text-white rounded-full bg-zinc-900 dark:bg-white dark:text-zinc-900 shadow-md hover:scale-105 active:scale-95 transition-all"
            >
              Get Started
            </Link>
          </motion.div>
        </div>
      </header>

      <main className="relative z-10 pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center">
        
        {/* HERO SECTION */}
        <section className="w-full text-center py-20 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-8"
          >
            <span className="flex h-2 w-2 rounded-full bg-indigo-500 animate-pulse"></span>
            The Future of Remote Internships
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight max-w-4xl leading-[1.1]"
          >
            Empower your career with <br/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-green-400">
               flawless execution.
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg md:text-xl text-zinc-500 dark:text-zinc-400 max-w-2xl leading-relaxed"
          >
            NexTurn is the complete ecosystem for managing remote internships. Bridge the gap between raw talent and real-world experience through structured tasks, file submissions, and mentor feedback.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center gap-4"
          >
            <Link
              to="/auth/signup"
              className="group relative flex items-center gap-2 px-8 py-4 rounded-full text-white font-bold text-lg bg-gradient-to-r from-indigo-600 to-indigo-500 shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-1 transition-all"
            >
              Start Exploring
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="#features"
              className="px-8 py-4 rounded-full font-bold text-lg bg-zinc-100 text-zinc-900 dark:bg-white/5 dark:text-white hover:bg-zinc-200 dark:hover:bg-white/10 transition-colors"
            >
              See how it works
            </a>
          </motion.div>
        </section>

        {/* METAMASK-STYLE FEATURE CARDS */}
        <motion.section 
          id="features"
          style={{ y: yElement }}
          className="w-full grid md:grid-cols-3 gap-6 mt-16"
        >
          <FeatureCard 
            icon={Zap}
            title="Dynamic Task Tracking"
            desc="Assign and track granular tasks. Students upload files, code, or reports directly, closing the loop instantly."
            color="indigo"
          />
          <FeatureCard 
            icon={Target}
            title="Lifecycle Management"
            desc="Admins control the entire internship lifecycle. Accept resumes, track progress, and mark internships as completed."
            color="green"
          />
          <FeatureCard 
            icon={Layers}
            title="Comprehensive Feedback"
            desc="Evaluations, scoring, and text feedback on every task ensure continuous improvement and professional growth."
            color="purple"
          />
        </motion.section>

        {/* ROLE DASHBOARDS SHOWCASE */}
        <section id="roles" className="w-full mt-40">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Tailored tailored experiences.</h2>
            <p className="mt-4 text-zinc-500 dark:text-zinc-400">Everything you need, built exactly for your role.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <RoleCard 
              title="Student Workspace"
              desc="Browse active internships, apply with your resume, track application status, and view tasks all in one place."
              features={["Resume Uploads", "File Submissions", "Feedback Scorecards", "Progress Tracking"]}
              link="/auth/signup"
              linkText="Join as Student"
            />
            <RoleCard 
              title="Admin & Mentor Portal"
              desc="Post opportunities, review resumes, assign technical tasks to your accepted interns, and provide scores."
              features={["Post Internships", "Review Resumes", "Assign Global Tasks", "End & Complete Runs"]}
              link="/auth/signup"
              linkText="Join as Mentor"
            />
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-zinc-200 dark:border-white/10 bg-zinc-50 dark:bg-[#0a0a0a]">
        <div className="mx-auto max-w-7xl px-6 py-12 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <div className="grid h-8 w-8 place-items-center rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-zinc-900">
              <span className="text-xs font-bold">NT</span>
            </div>
            <span className="font-bold">NexTurn Core</span>
          </div>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            © {new Date().getFullYear()} NexTurn. Built for FSAD-PS37.
          </p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon: Icon, title, desc, color }) {
  const gradients = {
    indigo: "from-indigo-500/20 to-transparent border-indigo-500/20",
    green: "from-green-500/20 to-transparent border-green-500/20",
    purple: "from-purple-500/20 to-transparent border-purple-500/20",
  };
  const iconColors = {
    indigo: "text-indigo-500",
    green: "text-green-500",
    purple: "text-purple-500",
  };

  return (
    <div className={`p-8 rounded-3xl border bg-gradient-to-b dark:bg-white/[0.02] bg-zinc-50 shadow-sm backdrop-blur-md ${gradients[color]} hover:-translate-y-2 transition-transform duration-300`}>
      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 mb-6 shadow-sm`}>
        <Icon className={`w-6 h-6 ${iconColors[color]}`} />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed text-sm">{desc}</p>
    </div>
  );
}

function RoleCard({ title, desc, features, link, linkText }) {
  return (
    <div className="p-8 rounded-3xl border border-zinc-200 dark:border-white/10 bg-white/50 dark:bg-white/[0.02] backdrop-blur-xl flex flex-col transition-all hover:bg-white hover:dark:bg-white/[0.04]">
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-zinc-500 dark:text-zinc-400 mb-8">{desc}</p>
      
      <ul className="space-y-3 mb-10 flex-1">
        {features.map((f, i) => (
          <li key={i} className="flex items-center gap-3 text-sm font-medium">
            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 text-green-600 dark:bg-green-500/20 dark:text-green-400 flex items-center justify-center">
              <ShieldCheck className="w-3 h-3" />
            </div>
            {f}
          </li>
        ))}
      </ul>

      <Link
        to={link}
        className="w-full py-4 rounded-2xl text-center font-bold text-sm bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 hover:scale-[1.02] transition-transform"
      >
        {linkText}
      </Link>
    </div>
  );
}