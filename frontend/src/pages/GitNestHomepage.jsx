import { useThemeStore } from "../store/useThemeStore";
import {
  GitBranch,
  ShieldCheck,
  Sparkles,
  Users,
  ArrowRight,
  Github,
  Linkedin,
  MessagesSquare,
  Globe,
} from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function GitNestHomepage() {
  const features = [
    {
      title: "Version Control",
      desc: "Create repositories, branches, pull requests, and commits with a modern collaborative workflow.",
      icon: <GitBranch className="w-7 h-7 text-emerald-400" />,
    },
    {
      title: "AI Workflows",
      desc: "AI-assisted code reviews, commit summaries, onboarding, and contributor guidance.",
      icon: <Sparkles className="w-7 h-7 text-emerald-400" />,
    },
    {
      title: "Team Collaboration",
      desc: "Built for contributors, maintainers, and open-source teams working together.",
      icon: <Users className="w-7 h-7 text-emerald-400" />,
    },
    {
      title: "Developer First",
      desc: "Clean APIs, scalable architecture, and a contributor-friendly structure from day one.",
      icon: <ShieldCheck className="w-7 h-7 text-emerald-400" />,
    },
  ];

  const stats = [
    { value: "MERN", label: "Full Stack" },
    { value: "AI", label: "Developer Workflows" },
    { value: "OSS", label: "Open Source" },
    { value: "GSSoC", label: "Community Driven" },
  ];

  const { isDarkMode, toggleTheme } = useThemeStore();

  return (
    <div className="min-h-screen bg-white dark:bg-[#06070a] text-zinc-900 dark:text-white transition-colors overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-emerald-500/5 dark:bg-emerald-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 blur-[120px] rounded-full" />
      </div>

      {/* Navbar */}
      <header className="fixed left-0 w-full top-0 z-50 border-b border-zinc-200 dark:border-white/5 backdrop-blur-xl bg-white/80 dark:bg-[#06070a]/80 transition-colors">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer select-none">
            <div className="w-11 h-11 rounded-2xl bg-zinc-100 dark:bg-white flex items-center justify-center overflow-hidden shadow-2xl shadow-emerald-500/20 border border-zinc-200 dark:border-white/10 p-1">
              <img
                src={logo}
                alt="GitNest Logo"
                className="w-full h-full object-contain"
              />
            </div>

            <div>
              <h1 className="text-xl font-black tracking-tight">
                Git<span className="text-emerald-400">Nest</span>
              </h1>

              <p className="text-[10px] text-zinc-500 tracking-[0.25em] uppercase">
                Collaborative Development
              </p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-600 dark:text-zinc-400">
            <a
              href="#features"
              className="hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              Features
            </a>

            <a
              href="#workflow"
              className="hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              Workflow
            </a>

            <a
              href="#opensource"
              className="hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              Open Source
            </a>

            <a
              href="#contributors"
              className="hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              Contributors
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              aria-label="Toggle Theme"
            >
              {isDarkMode ? "🌞 Light" : "🌙 Dark"}
            </button>

            <div className="flex items-center gap-3">
              <Link
                to="/docs"
                className="hidden sm:flex px-4 py-2 rounded-xl border border-zinc-200 dark:border-white/10 bg-zinc-50 dark:bg-white/[0.03] text-sm text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-white/[0.06] transition-all"
              >
                Documentation
              </Link>

              <Link
                to="/register"
                className="px-5 py-2 rounded-xl bg-emerald-400 text-black font-semibold text-sm hover:scale-[1.02] transition-all shadow-lg shadow-emerald-500/20 flex items-center gap-2"
              >
                Start Contributing
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-6 pt-28 pb-24 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 text-emerald-300 text-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Open Source • GSSoC 2026
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-none tracking-tight mb-8">
              Build the future of
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-cyan-400">
                collaborative coding
              </span>
            </h1>

            <p className="text-lg text-zinc-400 leading-8 max-w-2xl mb-10">
              GitNest is a full-featured GitHub-inspired platform built with the
              MERN stack. Create repositories, browse code, manage issues,
              review pull requests, and collaborate — all in one open-source
              developer ecosystem.
            </p>

            <div className="flex flex-wrap gap-4 mb-14">
              <Link
                to="/login"
                className="px-7 py-4 rounded-2xl bg-emerald-400 text-black font-semibold hover:scale-[1.02] transition-all shadow-xl shadow-emerald-500/20 inline-block text-center"
              >
                Explore Repositories
              </Link>

              <button className="px-7 py-4 rounded-2xl border border-zinc-200 dark:border-white/10 bg-zinc-50 dark:bg-white/[0.03] text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-white/[0.06] transition-all">
                View Architecture
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-zinc-200 dark:border-white/5 bg-zinc-50 dark:bg-white/[0.03] p-5"
                >
                  <h3 className="text-2xl font-black text-zinc-900 dark:text-white mb-1">
                    {item.value}
                  </h3>

                  <p className="text-sm text-zinc-500">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 blur-3xl rounded-full" />

            <div className="relative rounded-3xl border border-zinc-200 dark:border-white/10 bg-zinc-50 dark:bg-[#0d1016]/80 backdrop-blur-xl overflow-hidden shadow-2xl shadow-black/40">
              {/* Window Header */}
              <div className="h-14 border-b border-zinc-200 dark:border-white/5 flex items-center justify-between px-6 bg-zinc-100 dark:bg-white/[0.02]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>

                <div className="text-xs text-zinc-500 tracking-widest uppercase">
                  GitNest Dashboard
                </div>
              </div>

              {/* Dashboard Preview */}
              <div className="p-6 space-y-5">
                <div className="rounded-2xl border border-emerald-400/10 bg-emerald-400/5 p-5">
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <h3 className="font-bold text-lg">gitnest-core</h3>

                      <p className="text-sm text-zinc-500 mt-1">
                        GitHub-inspired repository management with pull
                        requests, issues, branching, and AI-powered workflows
                      </p>
                    </div>

                    <div className="px-3 py-1 rounded-full bg-emerald-400/10 border border-emerald-400/20 text-emerald-300 text-xs">
                      Public
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="absolute top-5 right-5 w-32 h-32 bg-emerald-400/10 blur-3xl rounded-full" />

                    <div className="rounded-xl border border-white/5 bg-black/20 p-4">
                      <div className="text-2xl font-black">42</div>
                      <div className="text-xs text-zinc-500 mt-1">Stars</div>
                    </div>

                    <div className="rounded-xl border border-white/5 bg-black/20 p-4">
                      <div className="text-2xl font-black">18</div>
                      <div className="text-xs text-zinc-500 mt-1">PRs</div>
                    </div>

                    <div className="rounded-xl border border-white/5 bg-black/20 p-4">
                      <div className="text-2xl font-black">9</div>
                      <div className="text-xs text-zinc-500 mt-1">
                        Contributors
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 dark:border-white/5 py-14">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-2xl bg-zinc-100 dark:bg-white flex items-center justify-center overflow-hidden border border-zinc-200 dark:border-white/10 p-1">
                  <img
                    src={logo}
                    alt="GitNest Logo"
                    className="w-full h-full object-contain"
                  />
                </div>

                <div>
                  <h3 className="font-black text-xl tracking-tight text-zinc-900 dark:text-white">
                    Git<span className="text-emerald-400">Nest</span>
                  </h3>

                  <p className="text-xs text-zinc-500 uppercase tracking-[0.25em]">
                    Open Source Platform
                  </p>
                </div>
              </div>

              <p className="text-sm text-zinc-500 leading-7 max-w-sm">
                A modern collaborative development platform inspired by GitHub
                and built for contributors, maintainers, and developer
                communities.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-5 text-zinc-900 dark:text-white">
                Quick Links
              </h4>

              <div className="space-y-3 text-sm">
                <a
                  href="/docs"
                  className="block text-zinc-500 hover:text-emerald-400 transition-colors"
                >
                  Documentation
                </a>

                <a
                  href="/contributing"
                  className="block text-zinc-500 hover:text-emerald-400 transition-colors"
                >
                  Contribution Guidelines
                </a>

                <a
                  href="/rules"
                  className="block text-zinc-500 hover:text-emerald-400 transition-colors"
                >
                  Rules & Regulations
                </a>

                <a
                  href="/code-of-conduct"
                  className="block text-zinc-500 hover:text-emerald-400 transition-colors"
                >
                  Code of Conduct
                </a>
              </div>
            </div>

            {/* Community */}
            <div>
              <h4 className="font-semibold mb-5 text-zinc-900 dark:text-white">
                Community
              </h4>

              <div className="space-y-4">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex items-center gap-3 text-zinc-500 hover:text-emerald-400 transition-all group"
                >
                  <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>GitHub</span>
                </a>

                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex items-center gap-3 text-zinc-500 hover:text-emerald-400 transition-all group"
                >
                  <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href="https://discord.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Discord"
                  className="flex items-center gap-3 text-zinc-500 hover:text-emerald-400 transition-all group"
                >
                  <MessagesSquare className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>Discord</span>
                </a>

                <a
                  href="https://community.gitnest.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Community Forum"
                  className="flex items-center gap-3 text-zinc-500 hover:text-emerald-400 transition-all group"
                >
                  <Globe className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>Community Forum</span>
                </a>
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <h4 className="font-semibold mb-5 text-zinc-900 dark:text-white">
                Tech Stack
              </h4>

              <div className="flex flex-wrap gap-3">
                {[
                  "React",
                  "Tailwind",
                  "Node.js",
                  "MongoDB",
                  "Express",
                  "Socket.io",
                  "JWT",
                  "AI",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-2 rounded-xl border border-zinc-200 dark:border-white/5 bg-zinc-50 dark:bg-white/[0.03] text-xs text-zinc-600 dark:text-zinc-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="mt-16 pt-8 border-t border-zinc-200 dark:border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-600">
            <p className="text-center md:text-left">
              © 2026 GitNest. Built for open-source collaboration.
            </p>

            <div className="flex flex-wrap justify-center items-center gap-6">
              <a
                href="/privacy"
                className="hover:text-emerald-400 transition-colors"
              >
                Privacy
              </a>

              <a
                href="/terms"
                className="hover:text-emerald-400 transition-colors"
              >
                Terms
              </a>

              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-400 transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
