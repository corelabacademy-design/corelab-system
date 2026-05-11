import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen flex flex-col">
      
      {/* TOP NAVBAR */}
      <header className="h-16 border-b border-zinc-800 flex items-center justify-between px-10">
        
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded-lg bg-yellow-400 text-black flex items-center justify-center font-bold">
            C
          </div>

          <h1 className="tracking-[4px] text-xl font-semibold">
            CORE <span className="text-yellow-400">LAB</span>
          </h1>
        </div>

        <nav className="hidden md:flex gap-10 text-zinc-400">
          <a href="#">Home</a>
          <a href="#">Courses</a>
          <a href="#">Programs</a>
          <a href="#">About Us</a>
          <a href="#">Success Stories</a>
          <a href="#">Contact</a>
        </nav>

        <div className="flex gap-4">
          <button className="border border-zinc-700 px-6 py-2 rounded-xl">
            Login
          </button>

          <button className="bg-yellow-400 text-black px-6 py-2 rounded-xl font-semibold">
            Dashboard
          </button>
        </div>
      </header>

      {/* BODY */}
      <div className="flex flex-1">

        {/* SIDEBAR */}
        <aside className="w-64 border-r border-zinc-900 bg-[#0b0d14] hidden lg:flex flex-col">
          
          <div className="p-6 border-b border-zinc-800">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-md bg-yellow-400 text-black flex items-center justify-center font-bold">
                C
              </div>

              <h2 className="font-semibold tracking-[2px]">
                CORELAB
              </h2>
            </div>
          </div>

          <div className="flex-1 p-4">

            <p className="text-xs text-zinc-600 mb-4 uppercase">
              Main
            </p>

            <div className="space-y-2">

              <button className="w-full bg-yellow-400/20 border-l-2 border-yellow-400 text-yellow-400 px-4 py-3 rounded-lg text-left">
                🏠 Dashboard
              </button>

              <button className="w-full hover:bg-zinc-800 px-4 py-3 rounded-lg text-left">
                📅 My Schedule
              </button>

              <button className="w-full hover:bg-zinc-800 px-4 py-3 rounded-lg text-left">
                ✅ Attendance
              </button>

              <button className="w-full hover:bg-zinc-800 px-4 py-3 rounded-lg text-left">
                📊 Grades
              </button>

              <button className="w-full hover:bg-zinc-800 px-4 py-3 rounded-lg text-left">
                📝 Assignments
              </button>

              <button className="w-full hover:bg-zinc-800 px-4 py-3 rounded-lg text-left">
                📚 Learning Materials
              </button>

              <button className="w-full hover:bg-zinc-800 px-4 py-3 rounded-lg text-left">
                💳 Payments
              </button>
            </div>

            <p className="text-xs text-zinc-600 mt-10 mb-4 uppercase">
              More
            </p>

            <div className="space-y-2">

              <button className="w-full hover:bg-zinc-800 px-4 py-3 rounded-lg text-left">
                💬 Messages
              </button>

              <button className="w-full hover:bg-zinc-800 px-4 py-3 rounded-lg text-left">
                🤖 AI Insights
              </button>

              <button className="w-full hover:bg-zinc-800 px-4 py-3 rounded-lg text-left">
                👤 Profile
              </button>

              <button className="w-full hover:bg-zinc-800 px-4 py-3 rounded-lg text-left">
                🚪 Logout
              </button>
            </div>

          </div>
        </aside>

        {/* MAIN CONTENT */}
        <section className="flex-1 flex items-center justify-center p-10">

          <div className="w-full max-w-md bg-[#11131c] border border-zinc-800 rounded-[32px] p-10">

            {/* ICON */}
            <div className="w-14 h-14 rounded-xl bg-yellow-400 text-black flex items-center justify-center font-bold text-2xl mx-auto">
              C
            </div>

            <h1 className="text-5xl font-serif text-center mt-8">
              CORELAB
            </h1>

            <p className="text-center text-zinc-500 mt-3">
              Welcome Back!
            </p>

            {/* ROLE TABS */}
            <div className="grid grid-cols-4 bg-black rounded-2xl p-1 mt-8">
              
              <button className="bg-yellow-400 text-black py-3 rounded-xl font-semibold">
                Student
              </button>

              <button className="text-zinc-400">
                Teacher
              </button>

              <button className="text-zinc-400">
                Admin
              </button>

              <button className="text-zinc-400">
                Finance
              </button>
            </div>

            {/* INPUT */}
            <div className="mt-8 space-y-5">

              <input
                placeholder="Email or Phone"
                className="w-full bg-black border border-zinc-800 rounded-xl p-4"
              />

              <input
                type="password"
                placeholder="Password"
                className="w-full bg-black border border-zinc-800 rounded-xl p-4"
              />

              <button className="w-full bg-yellow-400 text-black font-semibold py-4 rounded-xl">
                Login
              </button>
            </div>

          </div>

        </section>

      </div>

      {/* BOTTOM MENU */}
      <footer className="h-16 border-t border-zinc-900 flex items-center justify-center gap-4 bg-[#0b0d14]">

        <button className="px-6 py-2 rounded-xl border border-zinc-800">
          🏠 Home
        </button>

        <button className="px-6 py-2 rounded-xl border border-zinc-800">
          🔑 Login
        </button>

        <button className="px-6 py-2 rounded-xl border border-zinc-800">
          🎓 Student
        </button>

        <button className="px-6 py-2 rounded-xl border border-zinc-800">
          👨‍👩‍👧 Parent
        </button>

        <button className="px-6 py-2 rounded-xl border border-zinc-800">
          ⚙️ Admin
        </button>

      </footer>

    </main>
  );
}