import Image from "next/image";

export default function CoursesPage() {
  return (
    <main
      style={{
        background: "#000",
        color: "#fff",
        minHeight: "100vh",
        padding: "60px",
        fontFamily: "sans-serif",
      }}
    >
      <h1 style={{ fontSize: "60px" }}>
        COURSES
      </h1>

      <div style={{ marginTop: "60px" }}>
        <h2>Physics</h2>
        <p>Advanced Physics Program</p>
      </div>

      <div style={{ marginTop: "40px" }}>
        <h2>Mathematics</h2>
        <p>A-Level / PAT1 Program</p>
      </div>

      <div style={{ marginTop: "40px" }}>
        <h2>Science</h2>
        <p>Integrated Science Program</p>
      </div>
    </main>
  );
}