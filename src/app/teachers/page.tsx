import Image from "next/image";

export default function TeachersPage() {
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
        TEACHERS
      </h1>

      <div style={{ marginTop: "60px" }}>
        <h2>Teacher A</h2>
        <p>Physics Specialist</p>
      </div>

      <div style={{ marginTop: "40px" }}>
        <h2>Teacher B</h2>
        <p>Mathematics Specialist</p>
      </div>
    </main>
  );
}