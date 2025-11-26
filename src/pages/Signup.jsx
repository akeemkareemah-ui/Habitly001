import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const sectionStyle = {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    backgroundImage: "url('/Dailytracking.jpg')",
    backgroundColor: "rgba(0,0,0,0.55)",
    backgroundBlendMode: "darken",
    backdropFilter: "blur(10px)",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const cardStyle = {
    width: "100%",
    maxWidth: "420px",
    padding: "40px",
    borderRadius: "18px",
    background: "rgba(255, 255, 255, 0.12)",
    boxShadow: "0 8px 25px rgba(0, 0, 0, 0.35)",
    backdropFilter: "blur(12px)",
    border: "1px solid rgba(255, 255, 255, 0.25)",
    animation: "fadeIn 0.85s ease-in-out",
  };

  const titleStyle = { textAlign: "center", color: "white", fontSize: "30px", fontWeight: "bold", marginBottom: "8px" };
  const subtitleStyle = { textAlign: "center", color: "rgba(255,255,255,0.8)", fontSize: "18px", marginBottom: "24px" };
  const labelStyle = { color: "rgba(255,255,255,0.8)", fontSize: "15px", display: "block", marginBottom: "6px" };
  const inputStyle = { width: "100%", padding: "10px 14px", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.3)", backgroundColor: "rgba(255,255,255,0.6)", color: "black", outline: "none", fontSize: "18px", marginBottom: "18px" };
  const buttonStyle = { width: "100%", backgroundColor: "#14B8A6", color: "white", padding: "12px", borderRadius: "10px", border: "none", fontWeight: "600", fontSize: "20px", cursor: "pointer", transition: "0.3s" };
  const buttonHover = { backgroundColor: "#0E9082" };
  const smallText = { marginTop: "10px", textAlign: "center", color: "rgba(255,255,255,0.8)", fontSize: "15px" };
  const linkStyle = { color: "#14B8A6", fontWeight: "600", marginLeft: "5px", textDecoration: "underline" };
  const errorStyle = { backgroundColor: "rgba(255,0,0,0.35)", color: "#ffe5e5", padding: "8px", borderRadius: "8px", textAlign: "center", marginBottom: "10px" };
  const successStyle = { backgroundColor: "rgba(0,255,0,0.35)", color: "#eaffea", padding: "8px", borderRadius: "8px", textAlign: "center", marginBottom: "10px" };
  const formStyle = { display: "flex", flexDirection: "column" };

  const handleSignup = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

   
    const users = JSON.parse(localStorage.getItem("users")) || [];

   
    const userExists = users.some((user) => user.email === email);
    if (userExists) {
      setError("Email is already registered!");
      return;
    }

    
    const newUser = { fullName, email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    setSuccess("Account created successfully!");
    setEmail("");
    setPassword("");
    setFullName("");
  };

  return (
    <section style={sectionStyle}>
      <div style={cardStyle}>
        <h2 style={titleStyle}>Create Account</h2>
        <p style={subtitleStyle}>Join us to continue your journey</p>

        {error && <p style={errorStyle}>{error}</p>}
        {success && <p style={successStyle}>{success}</p>}

        <form style={formStyle} onSubmit={handleSignup}>
          <label style={labelStyle}>Full Name</label>
          <input style={inputStyle} placeholder="Enter full name" value={fullName} onChange={(e) => setFullName(e.target.value)} required />

          <label style={labelStyle}>Email</label>
          <input style={inputStyle} placeholder="Enter email address" value={email} onChange={(e) => setEmail(e.target.value)} type="email" required />

          <label style={labelStyle}>Password</label>
          <input style={inputStyle} placeholder="Create a password" value={password} onChange={(e) => setPassword(e.target.value)} type="password" required />

          <button
            type="submit"
            style={buttonStyle}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = buttonHover.backgroundColor)}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor)}
          >
            Sign Up
          </button>

          <p style={smallText}>
            Already have an account?
            <Link to="/login" style={linkStyle}>Login</Link>
          </p>
        </form>
      </div>

      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </section>
  );
};

export default Signup;
