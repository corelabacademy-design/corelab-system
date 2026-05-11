"use client";
import { useState } from "react";

export default function Home() {
  const [activeRole, setActiveRole] = useState("Teacher");
  const [activeNav, setActiveNav] = useState("Dashboard");

  const mainNavItems = [
    { label: "Dashboard", icon: "🏠" },
    { label: "My Schedule", icon: "📅" },
    { label: "Attendance", icon: "✅" },
    { label: "Grades", icon: "📊" },
    { label: "Assignments", icon: "📝" },
    { label: "Learning Materials", icon: "📚" },
    { label: "Payments", icon: "💳" },
  ];

  const moreNavItems = [
    { label: "Messages", icon: "💬" },
    { label: "AI Insights", icon: "🤖" },
    { label: "Profile", icon: "👤" },
    { label: "Logout", icon: "🚪" },
  ];

  const roles = ["Student /\nParent", "Teacher", "Admin", "Accounting"];
  const roleKeys = ["Student", "Teacher", "Admin", "Accounting"];

  const bottomNavItems = [
    { label: "Home", icon: "🏠" },
    { label: "Login", icon: "🔑" },
    { label: "Student", icon: "🎓" },
    { label: "Parent", icon: "👨‍👩‍👧" },
    { label: "Admin", icon: "⚙️" },
    { label: "Finance", icon: "💰" },
  ];

  return (
    <main className="bg-[#080a10] text-white min-h-screen flex flex-col">

      {/* TOP NAVBAR */}
      <header className="h-16 border-b border-zinc-800/60 flex items-center justify-between px-10 bg-[#080a10]">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded-lg bg-yellow-400 text-black flex items-center justify-center font-bold text-sm">
            C
          </div>
          <h1 className="tracking-[4px] text-sm font-semibold">
            CORE <span className="text-yellow-400">LAB</span>
          </h1>
        </div>

        <nav className="hidden md:flex gap-8 text-zinc-400 text-sm">
          {["Home", "Courses", "Programs", "About Us", "Success Stories", "Contact"].map((item) => (
            <a key={item} href="#" className="hover:text-white transition-colors">
              {item}
            </a>
          ))}
        </nav>

        <div className="flex gap-3">
          <button className="border border-zinc-700 px-5 py-2 rounded-xl text-sm hover:border-zinc-500 transition-colors">
            Login
          </button>
          <button className="bg-yellow-400 text-black px-5 py-2 rounded-xl font-bold text-sm hover:bg-yellow-300 transition-colors">
            Dashboard
          </button>
        </div>
      </header>

      {/* BODY */}
      <div className="flex flex-1">

        {/* SIDEBAR */}
        <aside className="w-56 border-r border-zinc-800/60 bg-[#0b0d14] hidden lg:flex flex-col flex-shrink-0">

          <div className="px-5 py-4 border-b border-zinc-800/60">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-md bg-yellow-400 text-black flex items-center justify-center font-bold text-xs">
                C
              </div>
              <span className="font-bold text-sm tracking-widest">
                <span className="text-yellow-400">CORE</span>LAB
              </span>
            </div>
          </div>

          <div className="flex-1 px-3 py-4 overflow-y-auto">
            <p className="text-[10px] text-zinc-600 mb-3 px-2 uppercase tracking-widest">Main</p>

            <div className="space-y-1">
              {mainNavItems.map(({ label, icon }) => (
                <button
                  key={label}
                  onClick={() => setActiveNav(label)}
                  className={`w-full px-3 py-2.5 rounded-lg text-left text-sm flex items-center gap-3 transition-all ${
                    activeNav === label
                      ? "bg-yellow-400/15 border-l-2 border-yellow-400 text-yellow-400 pl-2.5"
                      : "text-zinc-400 hover:bg-zinc-800/50 hover:text-zinc-200"
                  }`}
                >
                  <span className="text-base">{icon}</span>
                  {label}
                </button>
              ))}
            </div>

            <p className="text-[10px] text-zinc-600 mt-6 mb-3 px-2 uppercase tracking-widest">More</p>

            <div className="space-y-1">
              {moreNavItems.map(({ label, icon }) => (
                <button
                  key={label}
                  onClick={() => setActiveNav(label)}
                  className={`w-full px-3 py-2.5 rounded-lg text-left text-sm flex items-center gap-3 transition-all ${
                    activeNav === label
                      ? "bg-yellow-400/15 border-l-2 border-yellow-400 text-yellow-400 pl-2.5"
                      : "text-zinc-400 hover:bg-zinc-800/50 hover:text-zinc-200"
                  }`}
                >
                  <span className="text-base">{icon}</span>
                  {label}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* MAIN CONTENT — LOGIN CARD */}
        <section className="flex-1 flex items-center justify-center p-10 bg-[#080a10]">

          <div className="w-full max-w-md bg-[#0e1018] border border-zinc-800/70 rounded-[28px] p-10">

            {/* ICON */}
            <div className="w-12 h-12 rounded-xl bg-yellow-400 text-black flex items-center justify-center font-bold text-xl mx-auto">
              C
            </div>

            {/* BRAND */}
            <p className="text-center text-sm tracking-[3px] font-bold mt-4">
              <span className="text-yellow-400">CORELAB</span> ACADEMY
            </p>

            {/* TITLE */}
            <h2 className="text-xl font-bold text-center mt-4">Welcome Back!</h2>
            <p className="text-center text-zinc-500 text-sm mt-1">Login to your account</p>

            {/* ROLE TABS */}
            <div className="grid grid-cols-4 bg-[#090b12] rounded-2xl p-1 mt-6 gap-1">
              {roleKeys.map((key, i) => (
                <button
                  key={key}
                  onClick={() => setActiveRole(key)}
                  className={`py-2.5 rounded-xl text-xs font-semibold transition-all leading-tight ${
                    activeRole === key
                      ? "bg-yellow-400 text-black"
                      : "text-zinc-500 hover:text-zinc-300"
                  }`}
                >
                  {roles[i]}
                </button>
              ))}
            </div>

            {/* INPUTS */}
            <div className="mt-6 space-y-4">
              <div>
                <label className="text-xs text-zinc-500 mb-2 block">Email or Phone</label>
                <input
                  type="text"
                  placeholder="Enter email or phone number"
                  className="w-full bg-[#090b12] border border-zinc-800 rounded-xl px-4 py-3.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-yellow-400/50 transition-colors"
                />
              </div>

              <div>
                <label className="text-xs text-zinc-500 mb-2 block">Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full bg-[#090b12] border border-zinc-800 rounded-xl px-4 py-3.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-yellow-400/50 transition-colors"
                />
              </div>

              {/* FORGOT */}
              <div className="text-right">
                <a href="#" className="text-xs text-yellow-400 hover:text-yellow-300 transition-colors">
                  Forgot Password?
                </a>
              </div>

              {/* LOGIN BUTTON */}
              <button className="w-full bg-yellow-400 text-black font-bold py-3.5 rounded-xl text-sm hover:bg-yellow-300 transition-colors">
                Login
              </button>

              {/* DIVIDER */}
              <div className="flex items-center gap-3">
                <div className="flex-1 h-px bg-zinc-800" />
                <span className="text-xs text-zinc-600">or continue with</span>
                <div className="flex-1 h-px bg-zinc-800" />
              </div>

              {/* SOCIAL BUTTONS */}
              <div className="grid grid-cols-2 gap-3">
                <button className="flex items-center justify-center gap-2 bg-[#090b12] border border-zinc-800 rounded-xl py-3 text-sm text-zinc-300 hover:border-zinc-600 transition-colors">
                  <span className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-[10px] font-bold text-white">G</span>
                  Google
                </button>
                <button className="flex items-center justify-center gap-2 bg-[#090b12] border border-zinc-800 rounded-xl py-3 text-sm text-zinc-300 hover:border-zinc-600 transition-colors">
                  <span className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-[10px] font-bold text-white">L</span>
                  LINE
                </button>
              </div>

              {/* REGISTER */}
              <p className="text-center text-xs text-zinc-600">
                Don&apos;t have an account?{" "}
                <a href="#" className="text-yellow-400 font-semibold hover:text-yellow-300 transition-colors">
                  Register Now
                </a>
              </p>
            </div>

          </div>
        </section>
      </div>

      {/* BOTTOM MENU */}
      <footer className="h-14 border-t border-zinc-800/60 flex items-center justify-center gap-2 bg-[#0b0d14] px-4">
        {bottomNavItems.map(({ label, icon }) => (
          <button
            key={label}
            className="px-4 py-2 rounded-xl border border-zinc-800 text-zinc-400 text-xs hover:border-zinc-600 hover:text-zinc-200 transition-all flex items-center gap-1.5"
          >
            <span>{icon}</span> {label}
          </button>
        ))}
      </footer>

    </main>
  );
}
