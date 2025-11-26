import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const Features = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!loggedInUser) {
      navigate("/login");
    } else {
      
      const timer = setTimeout(() => setLoading(false), 0);
      return () => clearTimeout(timer);
    }
  }, [navigate]);

  if (loading) return null;

  const coreFeatures = [
    { name: "Habit Tracker", path: "/habit", description: "Track your daily habits and achieve goals efficiently." },
    { name: "Analytics", path: "/analytics", description: "Visualize progress with charts and reports." },
    { name: "Notifications", path: "/notifications", description: "Get timely reminders and stay consistent." },
    { name: "Calendar View", path: "/calendar", description: "View your habits on a monthly calendar." },
  ];

  return (
    <div style={{ padding: "4rem 2rem", backgroundColor: "#f0fdfa", color: "#0f172a", minHeight: "100vh", fontFamily: "sans-serif" }}>
    
      <header style={{ textAlign: "center", marginBottom: "4rem" }}>
        <h1 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "1rem" }}>Our Core Features</h1>
        <p style={{ fontSize: "1.2rem", maxWidth: "600px", margin: "0 auto" }}>
          Everything you need to track, understand, and maintain productive habits.
        </p>
      </header>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem", justifyContent: "center", marginBottom: "4rem" }}>
        {coreFeatures.map(feature => (
          <Link key={feature.name} to={feature.path} style={{ width: "250px", padding: "2rem", backgroundColor: "#0d9488", color: "white", borderRadius: "16px", textDecoration: "none", boxShadow: "0 8px 16px rgba(0,0,0,0.15)", transition: "0.3s ease" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{feature.name}</h2>
            <p style={{ marginTop: "0.5rem" }}>{feature.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Features;
