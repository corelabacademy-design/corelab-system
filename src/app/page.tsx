import Image from "next/image";

export default function Home() {
  return (
    <main
      style={{
        background: "#000",
        color: "#fff",
        minHeight: "100vh",
        fontFamily: "sans-serif",
        padding: "60px",
      }}
    >
      {/* NAVBAR */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "100px",
        }}
      >
        <h2>CORELAB ACADEMY</h2>

        <div style={{ display: "flex", gap: "20px" }}>
          <a href="/" style={{ color: "#fff" }}>
            Home
          </a>

          <a href="/courses" style={{ color: "#fff" }}>
            Courses
          </a>

          <a href="/teachers" style={{ color: "#fff" }}>
            Teachers
          </a>

          <a href="/contact" style={{ color: "#fff" }}>
            Contact
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section
        style={{
          textAlign: "center",
          marginTop: "100px",
        }}
      >
        <h1
          style={{
            fontSize: "80px",
            fontWeight: "bold",
          }}
        >
          CORELAB ACADEMY
        </h1>

        <p
          style={{
            marginTop: "20px",
            fontSize: "24px",
            opacity: 0.7,
          }}
        >
          Future Learning Platform
        </p>
      </section>
    </main>
  );
}