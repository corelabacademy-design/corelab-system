import Image from "next/image";

export default function Home() {
  return (
    <main
      style={{
        background: "#000",
        color: "#fff",
        minHeight: "100vh",
        fontFamily: "sans-serif",
      }}
    >
      {/* NAVBAR */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "30px 60px",
          position: "fixed",
          width: "100%",
          top: 0,
          background: "#000",
        }}
      >
        <h2>CORELAB ACADEMY</h2>

        <div style={{ display: "flex", gap: "30px" }}>
          <a href="#home" style={{ color: "#fff" }}>Home</a>
          <a href="#courses" style={{ color: "#fff" }}>Courses</a>
          <a href="#teachers" style={{ color: "#fff" }}>Teachers</a>
          <a href="#contact" style={{ color: "#fff" }}>Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="home"
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            fontSize: "96px",
            fontWeight: "bold",
          }}
        >
          CORELAB ACADEMY
        </h1>

        <p
          style={{
            marginTop: "20px",
            fontSize: "32px",
            opacity: 0.7,
          }}
        >
          Future Learning Platform
        </p>
      </section>

      {/* COURSES */}
      <section
        id="courses"
        style={{
          padding: "120px 80px",
        }}
      >
        <h2 style={{ fontSize: "48px", marginBottom: "40px" }}>
          Our Courses
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "30px",
          }}
        >
          <div
            style={{
              border: "1px solid #333",
              padding: "40px",
              borderRadius: "20px",
            }}
          >
            <h3>Physics</h3>
            <p>Advanced Physics Programs</p>
          </div>

          <div
            style={{
              border: "1px solid #333",
              padding: "40px",
              borderRadius: "20px",
            }}
          >
            <h3>Mathematics</h3>
            <p>Exam Preparation Courses</p>
          </div>

          <div
            style={{
              border: "1px solid #333",
              padding: "40px",
              borderRadius: "20px",
            }}
          >
            <h3>Science</h3>
            <p>Integrated Science Programs</p>
          </div>
        </div>
      </section>

      {/* TEACHERS */}
      <section
        id="teachers"
        style={{
          padding: "120px 80px",
        }}
      >
        <h2 style={{ fontSize: "48px", marginBottom: "40px" }}>
          Our Teachers
        </h2>

        <p style={{ opacity: 0.7 }}>
          Experienced instructors from top universities.
        </p>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        style={{
          padding: "120px 80px",
        }}
      >
        <h2 style={{ fontSize: "48px", marginBottom: "40px" }}>
          Contact Us
        </h2>

        <p>Email: corelabacademy@gmail.com</p>
        <p>LINE: @corelabacademy</p>
      </section>
    </main>
  );
}