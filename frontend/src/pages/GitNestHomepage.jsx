import { useThemeStore } from "../store/useThemeStore";
import {
  GitBranch,
  ShieldCheck,
  Sparkles,
  Users,
  ArrowRight,
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

                        {/* DESCRIPTION */}
                        <p className="text-[16px] leading-7 text-zinc-950 dark:text-zinc-300 max-w-2xl mb-5 mt-2">
                            GitNest is a full-featured GitHub-inspired platform built with the MERN stack. Create repositories, browse code, manage issues, review pull requests, and collaborate — all in one open-source developer ecosystem.
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

                <div className="space-y-3">
                  {[
                    "feat(auth): add JWT authentication flow",
                    "fix(ui): resolve repository sidebar overflow",
                    "feat(ai): integrate PR review assistant",
                    "docs: add contributor onboarding guide",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center justify-between rounded-xl border border-zinc-200 dark:border-white/5 bg-zinc-100 dark:bg-white/[0.02] px-4 py-3"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0" />

                        <p className="text-sm text-zinc-300 truncate">{item}</p>
                      </div>

                      <span className="text-xs text-zinc-600">2h ago</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

            {/* FEATURES */}
            <section
                id="features"
                className="relative py-32 overflow-hidden border-t border-zinc-200 dark:border-white/5 bg-[#f7faf9] dark:bg-[#080b11]"
            >

                {/* BACKGROUND DECOR */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">

                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage:
                                "radial-gradient(circle at 20% 18%, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.45) 14%, rgba(255,255,255,0.08) 30%, rgba(255,255,255,0) 58%), linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.12) 24%, rgba(255,255,255,0) 52%)",
                        }}
                    />

                    {/* LEFT BLUR */}
                    <div className="absolute left-[-120px] top-[45%] w-[220px] h-[220px] rounded-full bg-blue-200/25 blur-3xl" />

                    <div className="absolute -top-24 right-12 h-80 w-80 rounded-full bg-white/50 blur-3xl dark:bg-cyan-400/10" />

                    <div className="absolute inset-0 opacity-[0.04]"
                        style={{
                            backgroundImage:
                                "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
                            backgroundSize: "80px 80px",
                        }}
                    />

                    {/* RIGHT CURVE */}
                    <svg
                        className="absolute right-0 top-20 opacity-40"
                        width="420"
                        height="240"
                        viewBox="0 0 420 240"
                        fill="none"
                    >
                        <path
                            d="M0 120C120 20 220 220 420 40"
                            stroke="url(#paint0_linear)"
                            strokeWidth="2"
                        />

                        <defs>
                            <linearGradient id="paint0_linear" x1="0" y1="0" x2="420" y2="0">
                                <stop stopColor="#00dc82" />
                                <stop offset="1" stopColor="#4fd1ff" />
                            </linearGradient>
                        </defs>
                    </svg>

                    {/* DOT GRID */}
                    <div className="absolute top-20 right-[18%] grid grid-cols-8 gap-4 opacity-20">
                        {Array.from({ length: 40 }).map((_, i) => (
                            <div
                                key={i}
                                className="w-1 h-1 rounded-full bg-[#4fd1ff]"
                            />
                        ))}
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">

                    {/* SECTION HEADER */}
                    <div className="max-w-4xl mb-20">

                        <p className="text-[15px] font-bold tracking-[0.25em] uppercase bg-gradient-to-r from-[#00dc82] to-[#4fd1ff] bg-clip-text text-transparent mb-6">
                            Platform Features
                        </p>

            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
              Designed for contributors and maintainers
            </h2>

            <p className="text-zinc-400 text-lg leading-8">
              The UI system establishes a consistent design language so
              contributors can confidently build new pages, dashboards,
              workflows, and tools.
            </p>
          </div>

                    {/* FEATURE GRID */}
                    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

                        {[
                            {
                                title: "Version Control",
                                desc: "Create repositories, branches, pull requests, and commits with a modern collaborative workflow.",
                                icon: <GitBranch className="w-7 h-7 text-[#00dc82]" />,
                                color: "#00dc82",
                                bg: "from-[#ecfff7] to-[#f8fffc]",
                                darkBg: "dark:from-[#0b1915] dark:to-[#0f1f1a]",
                            },
                            {
                                title: "AI Workflows",
                                desc: "AI-assisted code reviews, commit summaries, onboarding, and contributor guidance.",
                                icon: <Sparkles className="w-7 h-7 text-[#3b82f6]" />,
                                color: "#3b82f6",
                                bg: "from-[#f2f7ff] to-[#f9fbff]",
                                darkBg: "dark:from-[#0b1524] dark:to-[#101a2c]",
                            },
                            {
                                title: "Team Collaboration",
                                desc: "Built for contributors, maintainers, and open-source teams working together.",
                                icon: <Users className="w-7 h-7 text-[#9333ea]" />,
                                color: "#9333ea",
                                bg: "from-[#faf5ff] to-[#fcfaff]",
                                darkBg: "dark:from-[#171022] dark:to-[#120f1e]",
                            },
                            {
                                title: "Developer First",
                                desc: "Clean APIs, scalable architecture, and a contributor-friendly structure from day one.",
                                icon: <ShieldCheck className="w-7 h-7 text-[#f97316]" />,
                                color: "#f97316",
                                bg: "from-[#fff7f0] to-[#fffaf7]",
                                darkBg: "dark:from-[#21140d] dark:to-[#18110e]",
                            },
                        ].map((feature) => (

                            <div
                                key={feature.title}
                                className={`group relative overflow-hidden rounded-[34px] border border-white/60 dark:border-white/5 bg-gradient-to-br ${feature.bg} ${feature.darkBg} backdrop-blur-xl p-8 shadow-[0_10px_40px_rgba(15,23,42,0.05)] hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(15,23,42,0.12)] transition-all duration-500`}
                            >

                                <div className="absolute inset-0 bg-gradient-to-br from-white/55 via-white/15 to-transparent dark:from-white/6 dark:via-white/0 pointer-events-none" />

                                {/* TOP GLOW */}
                                <div
                                    className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-20"
                                    style={{
                                        background: feature.color,
                                    }}
                                />

                                {/* ICON */}
                                <div
                                    className="relative w-20 h-20 rounded-[24px] border border-white/60 flex items-center justify-center shadow-inner mb-10"
                                    style={{
                                        background: `${feature.color}10`,
                                    }}
                                >
                                    {feature.icon}
                                </div>

                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>

                                {/* ACCENT */}
                                <div className="flex items-center gap-2 mb-6">

                                    <div
                                        className="w-10 h-1 rounded-full"
                                        style={{
                                            background: feature.color,
                                        }}
                                    />

                                    <div
                                        className="w-2 h-2 rounded-full"
                                        style={{
                                            background: feature.color,
                                        }}
                                    />
                                </div>

                                {/* DESCRIPTION */}
                                <p className="text-[17px] leading-9 text-[#64748b] dark:text-zinc-400 relative z-10">
                                    {feature.desc}
                                </p>

                                {/* BOTTOM CURVE */}
                                <svg
                                    className="absolute bottom-0 left-0 opacity-20"
                                    width="320"
                                    height="90"
                                    viewBox="0 0 320 90"
                                    fill="none"
                                >
                                    <path
                                        d="M0 30C80 100 180 0 320 70"
                                        stroke={feature.color}
                                        strokeWidth="2"
                                    />
                                </svg>

                                {/* FLOATING DOT */}
                                <div
                                    className="absolute bottom-6 right-6 w-6 h-6 rounded-full flex items-center justify-center"
                                    style={{
                                        background: `${feature.color}20`,
                                    }}
                                >
                                    <div
                                        className="w-3 h-3 rounded-full"
                                        style={{
                                            background: feature.color,
                                        }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Contributor CTA */}
            <section
                id="contributors"
                className="relative py-32 overflow-hidden border-t border-[#dce7e3] dark:border-white/5 bg-[#f7faf9] dark:bg-[#080b11]"
            >

                {/* BACKGROUND EFFECTS */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">

                    {/* MAIN GLOW */}
                    <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-r from-[#00dc82]/10 to-[#4fd1ff]/10 blur-3xl rounded-full" />

                    {/* LEFT BLOB */}
                    <div className="absolute left-[-120px] top-28 w-[320px] h-[320px] rounded-full bg-gradient-to-br from-[#a7f3d0]/40 to-[#d9f99d]/20 blur-2xl" />

                    {/* SMALL FLOATING CIRCLE */}
                    <div className="absolute left-[14%] bottom-24 w-14 h-14 rounded-full bg-gradient-to-br from-[#d9f99d]/70 to-[#bef264]/40 blur-sm border border-white/40" />

                    {/* RIGHT CODE ICON GLOW */}
                    <div className="absolute right-[8%] top-[26%] w-[260px] h-[260px] rounded-full bg-gradient-to-br from-[#00dc82]/20 to-[#fde047]/20 blur-3xl" />

                    {/* DOT GRID */}
                    <div className="absolute top-16 right-[12%] grid grid-cols-5 gap-5 opacity-20">
                        {Array.from({ length: 25 }).map((_, i) => (
                            <div
                                key={i}
                                className="w-1.5 h-1.5 rounded-full bg-[#00dc82]"
                            />
                        ))}
                    </div>

                    {/* LEFT CURVE */}
                    <svg
                        className="absolute left-0 bottom-10 opacity-30"
                        width="420"
                        height="180"
                        viewBox="0 0 420 180"
                        fill="none"
                    >
                        <path
                            d="M0 40C120 120 180 0 300 90C350 130 390 110 420 60"
                            stroke="url(#curveLeft)"
                            strokeWidth="2"
                        />

                        <defs>
                            <linearGradient id="curveLeft" x1="0" y1="0" x2="420" y2="0">
                                <stop stopColor="#4fd1ff" />
                                <stop offset="1" stopColor="#00dc82" />
                            </linearGradient>
                        </defs>
                    </svg>

                    {/* RIGHT CURVE */}
                    <svg
                        className="absolute right-0 top-36 opacity-30"
                        width="420"
                        height="220"
                        viewBox="0 0 420 220"
                        fill="none"
                    >
                        <path
                            d="M0 120C120 20 240 220 420 60"
                            stroke="url(#curveRight)"
                            strokeWidth="2"
                        />

                        <defs>
                            <linearGradient id="curveRight" x1="0" y1="0" x2="420" y2="0">
                                <stop stopColor="#fde047" />
                                <stop offset="1" stopColor="#00dc82" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">

                    {/* MAIN CARD */}
                    <div className="relative overflow-hidden rounded-[42px] border border-[#b8f0dd] bg-gradient-to-br from-white via-[#f7fffc] to-[#f4fffb] dark:from-[#11151d] dark:to-[#0c1017] shadow-[0_20px_80px_rgba(16,185,129,0.08)] px-8 md:px-16 py-14 text-center">

                        {/* FLOATING CODE CARD */}
                        <div className="hidden lg:flex absolute right-16 top-24 w-[140px] h-[140px] rounded-[36px] border border-white/60 bg-white/60 backdrop-blur-xl shadow-[0_20px_60px_rgba(16,185,129,0.15)] items-center justify-center rotate-[16deg]">

                            <div className="absolute inset-0 rounded-[36px] bg-gradient-to-br from-[#00dc82]/10 to-[#4fd1ff]/10" />

                            <div className="relative text-6xl font-black bg-gradient-to-r from-[#00dc82] to-[#4fd1ff] bg-clip-text text-transparent">
                                {"</>"}
                            </div>
                        </div>

                        {/* TOP BADGE */}
                        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-[#b8f0dd] bg-white/70 backdrop-blur-xl shadow-sm mb-10">

                            <Users className="w-5 h-5 text-[#00b86b]" />

                            <span className="text-[15px] font-bold tracking-[0.18em] uppercase bg-gradient-to-r from-[#00b86b] to-[#4fd1ff] bg-clip-text text-transparent">
                                Open Source Collaboration
                            </span>
                        </div>

                        {/* TITLE */}
                        <h2 className="text-[52px] md:text-[82px] leading-[0.95] tracking-[-0.06em] font-black text-[#071138] dark:text-white mb-8">

                            Build{" "}

                            <span className="bg-gradient-to-r from-[#00dc82] via-[#22c55e] to-[#4fd1ff] bg-clip-text text-transparent">
                                GitNest
                            </span>

                            {" "}together

                        </h2>

                        {/* DESCRIPTION */}
                        <p className="text-[22px] leading-[2.1rem] text-[#64748b] dark:text-zinc-400 max-w-4xl mx-auto mb-14">
                            This homepage establishes the design system, visual hierarchy, spacing patterns, component styling, and interaction language for the entire frontend ecosystem.
                        </p>

                        {/* BUTTONS */}
                        <div className="flex flex-wrap justify-center gap-6">

                            {/* PRIMARY BTN */}
                            <Link
                                to="/register"
                                className="group px-10 py-5 rounded-[22px] bg-gradient-to-r from-[#00b86b] via-[#00dc82] to-[#7bf542] text-white font-bold text-[18px] shadow-[0_15px_40px_rgba(16,185,129,0.25)] hover:scale-[1.03] transition-all duration-300 flex items-center gap-4"
                            >

                                <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />

                                Contribute Now

                            </Link>

                            {/* SECONDARY BTN */}
                            <button className="group px-10 py-5 rounded-[22px] border border-[#dbe7e2] bg-white/80 backdrop-blur-xl text-[#0f172a] font-semibold text-[18px] hover:border-[#00dc82]/40 hover:bg-white transition-all duration-300 flex items-center gap-4 shadow-sm">

                                <ShieldCheck className="w-5 h-5 text-[#00b86b]" />

                                Read Contribution Guide

                            </button>
                        </div>
                    </div>
                </div>
            </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 dark:border-white/5 py-14">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
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
                  Git
                  <span className="text-emerald-400">Nest</span>
                </h3>

                <p className="text-xs text-zinc-500 uppercase tracking-[0.25em]">
                  Open Source Platform
                </p>
              </div>
            </div>

                            {/* DESCRIPTION */}
                            <p className="text-[15px] leading-8 text-[#64748b] max-w-sm mb-8">
                                A modern collaborative development platform inspired by GitHub and built for open source communities worldwide.
                            </p>

                            {/* COPYRIGHT */}
                            <p className="text-[15px] text-[#7c8aa5] leading-7">
                                © 2026 GitNest. Built for open-source collaboration.
                            </p>
                        </div>

          <div>
            <h4 className="font-semibold mb-5">Platform</h4>

                            <div className="space-y-3">

                                {[
                                    "Repositories",
                                    "Pull Requests",
                                    "AI Workflows",
                                    "Discussions",
                                ].map((item) => (
                                    <a
                                        key={item}
                                        href="#"
                                        className="group flex items-center gap-3 text-[17px] text-[#475569] hover:text-[#00b86b] transition-all duration-300"
                                    >

                                        <div className="w-2 h-2 rounded-full bg-[#00c97b] group-hover:scale-150 transition-transform" />

                                        {item}

                                    </a>
                                ))}
                            </div>
                        </div>

          <div>
            <h4 className="font-semibold mb-5">Developers</h4>

                            <div className="space-y-3">

                                {[
                                    "Contribution Guide",
                                    "Roadmap",
                                    "API Docs",
                                    "Architecture",
                                ].map((item) => (
                                    <a
                                        key={item}
                                        href="#"
                                        className="group flex items-center gap-3 text-[17px] text-[#475569] hover:text-[#00b86b] transition-all duration-300"
                                    >

                                        <div className="w-2 h-2 rounded-full bg-[#00c97b] group-hover:scale-150 transition-transform" />

                                        {item}

                                    </a>
                                ))}

                                {/* LEGAL LINK */}
                                <Link
                                    to="/terms"
                                    className="group flex items-center gap-3 text-[16px] text-[#475569] hover:text-[#00b86b] transition-all duration-300"
                                >
                                    <div className="w-2 h-2 rounded-full bg-[#00c97b] group-hover:scale-150 transition-transform" />

                                    Terms & Conditions
                                </Link>
                            </div>
                        </div>

          <div>
            <h4 className="font-semibold mb-5">Tech Stack</h4>

                            <div className="flex flex-wrap gap-2">

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
                                    <div
                                        key={tech}
                                        className="px-5 py-3 rounded-2xl border border-[#e6ece9] bg-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-[15px] font-medium text-[#334155] flex items-center gap-3"
                                    >

                                        <div className="w-2 h-2 rounded-full bg-[#00c97b]" />

                                        {tech}

                                    </div>
                                ))}
                            </div>

                        </div>


                    </div>
                </div>
            </footer>
        </div>

    );
};
