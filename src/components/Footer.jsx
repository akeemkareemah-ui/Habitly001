import React from "react";
import { FaTwitter, FaFacebookF } from "react-icons/fa";

function Footer() {
  const footerStyle = {
    padding: "5rem 8%",
    backgroundColor: "#004D40",
    color: "#CBD5E1",
    display: "flex",
    flexWrap: "wrap",
    gap: "3rem",
    justifyContent: "space-between",
    fontSize: "1rem",
     overflow: "hidden"
  };

  const column = {
    flex: "1 1 180px",
    minWidth: "150px",
  };

  const heading = {
    fontWeight: "700",
    marginBottom: "1rem",
    fontSize: "1.2rem",
  };

  const link = {
    display: "block",
    marginBottom: "0.75rem",
    cursor: "pointer",
    transition: "0.3s",
  };

 

  const socialIcons = {
    display: "flex",
    gap: "1.5rem",
    fontSize: "1.5rem",
    color: "#CBD5E1",
    marginTop: "0.5rem",
  };

  const copyright = {
    marginTop: "3rem",
    width: "100%",
    textAlign: "center",
    fontSize: "0.9rem",
    color: "#94A3B8",
  };

  return (
    <footer style={footerStyle}>
      
      <div style={column}>
        <h3 style={heading}>Resources</h3>
        {["Help Center", "API Documentation", "Translate Habitify", "Zapier Integration", "IFTTT Integration"].map((text, i) => (
          <span
            key={i}
            style={link}
           
          >
            {text}
          </span>
        ))}
      </div>

     
      <div style={column}>
        <h3 style={heading}>Social</h3>
        <div style={socialIcons}>
          <FaTwitter />
          <FaFacebookF />
        </div>
      </div>

      
      <div style={column}>
        <h3 style={heading}>Community</h3>
        {["Blog", "Contact", "Habit Tracking Apps Review", "PolyPlan: Daily Planner"].map((text, i) => (
          <span
            key={i}
            style={link}
           
          >
            {text}
          </span>
        ))}
      </div>

     
      <div style={column}>
        <h3 style={heading}>Learn More</h3>
        {["Habitify", "Japanese", "German", "Spanish", "Terms", "Privacy Policy"].map((text, i) => (
          <span
            key={i}
            style={link}
            
          >
            {text}
          </span>
        ))}
      </div>

      <div style={copyright}>
        &copy; 2025 Habitify. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
