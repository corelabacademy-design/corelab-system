import Image from "next/image";

export default function Home() {
  return (
    <main
      style={{
        background: "#000",
        color: "#fff",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "sans-serif",
      }}
    >
      <h1 style={{ fontSize: "64px", fontWeight: "bold" }}>
        CORELAB ACADEMY
      </h1>

      <p style={{ marginTop: "20px", fontSize: "24px", opacity: 0.7 }}>
        Future Learning Platform
      </p>
    </main>
  );
}