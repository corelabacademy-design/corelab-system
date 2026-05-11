import Image from "next/image";

export default function Home() {
  return (
    <main
      style={{
        background: "#050505",
        color: "white",
        minHeight: "100vh",
        fontFamily: "sans-serif",
      }}
    >
      {/* NAVBAR */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 50px",
          borderBottom: "1px solid #1a1a1a",
        }}
      >
        {/* LOGO */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
          }}
        >
          <div
            style={{
              width: "32px",
              height: "32px",
              background: "#f2b233",
              borderRadius: "8px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#000",
              fontWeight: "bold",
            }}
          >
            C
          </div>

          <h2 style={{ letterSpacing: "4px" }}>CORE LAB</h2>
        </div>

        {/* MENU */}
        <div
          style={{
            display: "flex",
            gap: "35px",
            opacity: 0.8,
          }}
        >
          <a href="#" style={{ color: "white", textDecoration: "none" }}>
            Home
          </a>

          <a href="#" style={{ color: "white", textDecoration: "none" }}>
            Courses
          </a>

          <a href="#" style={{ color: "white", textDecoration: "none" }}>
            Programs
          </a>

          <a href="#" style={{ color: "white", textDecoration: "none" }}>
            About Us
          </a>

          <a href="#" style={{ color: "white", textDecoration: "none" }}>
            Success Stories
          </a>

          <a href="#" style={{ color: "white", textDecoration: "none" }}>
            Contact
          </a>
        </div>

        {/* BUTTONS */}
        <div
          style={{
            display: "flex",
            gap: "15px",
          }}
        >
          <button
            style={{
              background: "transparent",
              border: "1px solid #333",
              color: "white",
              padding: "10px 25px",
              borderRadius: "12px",
            }}
          >
            Login
          </button>

          <button
            style={{
              background: "#f2b233",
              border: "none",
              color: "#000",
              padding: "10px 25px",
              borderRadius: "12px",
              fontWeight: "bold",
            }}
          >
            Dashboard
          </button>
        </div>
      </nav>

      {/* LOGIN CARD */}
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "80px 20px",
        }}
      >
        <div
          style={{
            width: "420px",
            background: "#11131c",
            border: "1px solid #2a2a2a",
            borderRadius: "30px",
            padding: "50px",
          }}
        >
          {/* ICON */}
          <div
            style={{
              width: "48px",
              height: "48px",
              background: "#f2b233",
              borderRadius: "10px",
              margin: "0 auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#000",
              fontWeight: "bold",
              marginBottom: "25px",
            }}
          >
            C
          </div>

          <h1
            style={{
              textAlign: "center",
              marginBottom: "10px",
            }}
          >
            Welcome Back!
          </h1>

          <p
            style={{
              textAlign: "center",
              opacity: 0.6,
              marginBottom: "30px",
            }}
          >
            Login to your account
          </p>

          {/* ROLE TABS */}
          <div
            style={{
              display: "flex",
              background: "#0a0c12",
              borderRadius: "14px",
              padding: "5px",
              marginBottom: "25px",
            }}
          >
            {["Student", "Teacher", "Admin", "Accounting"].map((role) => (
              <button
                key={role}
                style={{
                  flex: 1,
                  padding: "12px",
                  borderRadius: "10px",
                  border: "none",
                  background: role === "Teacher" ? "#f2b233" : "transparent",
                  color: role === "Teacher" ? "#000" : "#aaa",
                  fontWeight: "bold",
                }}
              >
                {role}
              </button>
            ))}
          </div>

          {/* INPUTS */}
          <div style={{ marginBottom: "20px" }}>
            <p style={{ marginBottom: "10px", opacity: 0.7 }}>
              Email or Phone
            </p>

            <input
              type="text"
              placeholder="Enter email or phone number"
              style={{
                width: "100%",
                padding: "16px",
                background: "#090b10",
                border: "1px solid #222",
                borderRadius: "12px",
                color: "white",
              }}
            />
          </div>

          <div style={{ marginBottom: "25px" }}>
            <p style={{ marginBottom: "10px", opacity: 0.7 }}>
              Password
            </p>

            <input
              type="password"
              placeholder="Enter your password"
              style={{
                width: "100%",
                padding: "16px",
                background: "#090b10",
                border: "1px solid #222",
                borderRadius: "12px",
                color: "white",
              }}
            />
          </div>

          {/* LOGIN BUTTON */}
          <button
            style={{
              width: "100%",
              padding: "16px",
              background: "#f2b233",
              border: "none",
              borderRadius: "14px",
              color: "#000",
              fontWeight: "bold",
              fontSize: "16px",
            }}
          >
            Login
          </button>
        </div>
      </section>
    </main>
  );
}