import Image from "next/image";

export default function ContactPage() {
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
        CONTACT
      </h1>

      <div style={{ marginTop: "40px" }}>
        <p>LINE: @corelabacademy</p>
        <p>Email: corelabacademy@gmail.com</p>
        <p>Phone: 080-000-0000</p>
      </div>
    </main>
  );
}