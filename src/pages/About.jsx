import React from "react";
import { FaUser, FaLaptopCode, FaLightbulb } from "react-icons/fa";
import { Link } from "react-router-dom";

function AboutPage() {
  const container = { fontFamily: "Poppins, sans-serif", maxWidth: 900, margin: "0 auto", padding: 20 };
  const header = { textAlign: "center", marginBottom: 50 };
  const title = { fontSize: "2rem", fontWeight: 700, color: "#fff",  };
  const subtitle = { fontSize: "1.5rem", color: "#fff", marginTop: 8 };

  const section = { marginBottom: 35, padding: 15, borderRadius: 12, backgroundImage: 'url("/One.jpg")',  backgroundSize: "cover",    backgroundPosition: "center",  zIndex: 1, color: "#fff" };
  const sectionTitle = { fontSize: "1.5rem", fontWeight: 600, display: "flex", alignItems: "center", gap: 10 };
  const sectionText = { fontSize: "20px", marginTop: 10, lineHeight: 1.6 };

  const teamGrid = { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 20, marginTop: 20 };
  const teamCard = { padding: 20, borderRadius: 12, textAlign: "center", color: "#fff", background: "#0d9488" };
  const teamName = { fontSize: "1rem", marginTop: 8, fontWeight: 600 };
  const teamRole = { fontSize: 12, marginTop: 4 };

  const footerCTA = { textAlign: "center", padding: 40, borderRadius: 12, background: "white", color: "#0d9488" };
  const ctaButton = { padding: "12px 24px", background: "teal", color: "white", border: "none", borderRadius: 8, fontWeight: 600, fontSize: "1rem", cursor: "pointer", textDecoration: "none" };

  return (
    <div style={{ background: "#0d9488", minHeight: "100vh" }}>
      <div style={container}>
        <div style={header}>
          <div style={title}>About Habit Tracker</div>
          <div style={subtitle}>Helping you build better habits every day</div>
        </div>

        <div style={section}>
          <div style={sectionTitle}><FaLightbulb /> Our Story</div>
          <div style={sectionText}>
            Habit Tracker empowers individuals to reach their goals through simple and consistent habit building.
          </div>
        </div>

        <div style={section}>
          <div style={sectionTitle}><FaLaptopCode /> Vision & Values</div>
          <div style={sectionText}>
            We value simplicity, user empowerment, and steady growth. Our goal is to make habit tracking accessible and effective.
          </div>
        </div>

        <div style={section}>
          <div style={sectionTitle}><FaUser /> Meet the Team</div>
          <div style={teamGrid}>
            <div style={teamCard}>
              <FaUser size={30} />
              <div style={teamName}>Akeem Kareemah</div>
              <div style={teamRole}>Lead Developer</div>
            </div>
            <div style={teamCard}>
              <FaUser size={30} />
              <div style={teamName}>Adela Barmore</div>
              <div style={teamRole}>UI/UX Designer</div>
            </div>
            <div style={teamCard}>
              <FaUser size={30} />
              <div style={teamName}>David Dixon</div>
              <div style={teamRole}>Frontend Developer</div>
            </div>
          </div>
        </div>

        <div style={footerCTA}>
          <div style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: 16 }}>Start Building Better Habits Today!</div>
          <Link to="/signup" style={ctaButton}>Join Now</Link>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
