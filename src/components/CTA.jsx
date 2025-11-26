import React from 'react'
import { Link} from "react-router-dom";
function CTA() {
const container = {
    fontFamily: "sans-serif",
    textAlign: "center",
    padding: "40px 20px",
    background: "#0d9488",
    color: "#fff",
    borderRadius: 12,
    maxWidth: 600,
    margin: "40px auto",
  };
  const title = { fontSize: "1.95rem", fontWeight: 700, marginBottom: 12 };
  const subtitle = { fontSize: "1.15rem", marginBottom: 20, color: "#e0f7f4" };
  const button = { padding: "12px 24px", background: "#fff", color: "#0d9488", border: "none", borderRadius: 8, fontWeight: 700, cursor: "pointer", fontSize:"18px" };

  return (
    <div> <div style={container}>
        <div style={title}>Start Building Your Habits Today!</div>
        <div style={subtitle}>Track, improve, and achieve your goals with ease.</div>
        <Link to="/signup" style={{ textDecoration: "none" }}>
          <button style={button}>Get Started</button>
        </Link>
      </div></div>
  )
}

export default CTA