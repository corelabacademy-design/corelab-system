"use client";
import { useState } from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-5 border-b border-zinc-900">
        <h1 className="text-sm font-semibold tracking-widest">CORELAB</h1>
        <div className="flex gap-6 text-xs text-zinc-500">
          <a href="#" className="hover:text-white transition-colors">Courses</a>
          <a href="#" className="hover:text-white transition-colors">Students</a>
          <a href="#" className="hover:text-white transition-colors">Teachers</a>
          <a href="#" className="hover:text-white transition-colors">About</a>
        </div>
        <button className="text-xs bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-zinc-200 transition-colors">
          Login
        </button>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-8 py-24">
        <div className="flex items-center gap-2 text-xs text-zinc-500 border border-zinc-800 px-4 py-2 rounded-full mb-8">
          <span className="w-1.5 h-1.5 bg-green-400 rounded-full inline-block" />
          Now in Beta — Version 1.0
        </div>

        <h1 className="text-6xl font-bold leading-tight tracking-tight mb-4">
          CORELAB ACADEMY<br />
          <span className="text-zinc-600">EDTECH PLATFORM</span>
        </h1>

        <p className="text-zinc-500 text-base max-w-sm leading-relaxed mb-8">
          ระบบจัดการสถาบันแบบครบวงจร — นักเรียน, ครู, คะแนน และการเงินในที่เดียว
        </p>

        <div className="flex gap-3">
          <button className="text-sm bg-white text-black px-6 py-2.5 rounded-lg font-medium hover:bg-zinc-200 transition-colors">
            เริ่มใช้งาน
          </button>
          <button className="text-sm text-zinc-400 border border-zinc-800 px-6 py-2.5 rounded-lg hover:border-zinc-600 transition-colors">
            ดูระบบ
          </button>
        </div>
      </section>

      {/* Stats */}
      <div className="grid grid-cols-3 border-t border-b border-zinc-900 mx-8">
        {[
          { num: "500+", label: "STUDENTS" },
          { num: "50+",  label: "COURSES" },
          { num: "99%",  label: "UPTIME" },
        ].map((s, i) => (
          <div key={i} className={`py-5 text-center ${i < 2 ? "border-r border-zinc-900" : ""}`}>
            <div className="text-2xl font-semibold">{s.num}</div>
            <div className="text-xs text-zinc-600 mt-1 tracking-widest">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Features */}
      <div className="grid grid-cols-3 gap-px bg-zinc-900 m-8 rounded-xl overflow-hidden border border-zinc-900">
        {[
          { icon: "👥", title: "Student Management", desc: "จัดการข้อมูลนักเรียนครบวงจร" },
          { icon: "📅", title: "QR Attendance",      desc: "เช็กชื่อด้วย QR Code อัตโนมัติ" },
          { icon: "📊", title: "AI Analytics",       desc: "วิเคราะห์ผลการเรียนด้วย AI" },
          { icon: "💳", title: "Payment System",     desc: "ระบบการเงินและค่าเรียน" },
          { icon: "🔔", title: "LINE Notify",        desc: "แจ้งเตือนผ่าน LINE OA" },
          { icon: "🔒", title: "Role-Based Access",  desc: "นักเรียน ครู ผู้ปกครอง แอดมิน" },
        ].map((f, i) => (
          <div key={i} className="bg-black p-6">
            <div className="text-xl mb-3">{f.icon}</div>
            <div className="text-sm font-medium mb-1">{f.title}</div>
            <div className="text-xs text-zinc-600 leading-relaxed">{f.desc}</div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="flex justify-between items-center px-8 py-5 border-t border-zinc-900 text-xs text-zinc-700">
        <span>© 2025 CORELAB SYSTEM</span>
        <span>Built with Next.js + Supabase</span>
      </footer>

    </main>
  );
}