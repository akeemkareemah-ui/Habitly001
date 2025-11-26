import React from "react";
import { AiOutlineCalendar, AiOutlineRise, AiOutlineCheckCircle } from "react-icons/ai";

function UserBenefits() {
  
  const sectionStyle = {
    padding: "6rem 8%",
    backgroundColor: "#F8FFFF",
    color: "#0F172A",
    textAlign: "center",
   backgroundImage: 'url("/One.jpg")',
  };

  const titleStyle = {
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "2rem",
    color: "#006D77",
  };

  const subtitleStyle = {
    maxWidth: "600px",
    margin: "0 auto 4rem",
    fontSize: "1.5rem",
    color: "#334155",
  };

  const cardContainer = {
    display: "flex",
    justifyContent: "center",
    gap: "2rem",
    flexWrap: "wrap",
  };

  const cardStyle = {
    flex: "1",
    maxWidth: "320px",
    backgroundColor: "#FFFFFF",
    padding: "2rem",
    borderRadius: "16px",
    boxShadow: "0px 4px 12px rgba(0,0,0,0.08)",
    transition: "0.3s",
  };

  const iconStyle = {
    marginBottom: "1rem",
  };

  const cardTitle = {
    fontSize: "25px",
    fontWeight: "600",
    color: "#006D77",
    marginBottom: "1rem",
  };

  const cardText = {
    fontSize: "22px",
    color: "#334155",
  };

  
  const benefits = [
    {
      title: "Build Better Habits",
      description: "Create routines that help you stay organized, focused, and productive every day.",
      icon: <AiOutlineCalendar size={40} color="#006D77" />,
    },
    {
      title: "Track Your Progress",
      description: "Visualize your  improvements to stay motivated and consistent.",
      icon: <AiOutlineRise size={40} color="#006D77" />,
    },
    {
      title: "Stay Consistent",
      description: "Develop long-term discipline by checking off your habits daily.",
      icon: <AiOutlineCheckCircle size={40} color="#006D77" />,
    },
  ];

  return (
    <section style={sectionStyle}>
      <h2 style={titleStyle}>User Benefits</h2>
      <p style={subtitleStyle}>
        Discover how our habit tracker empowers you to stay consistent and reach your goals effortlessly.
      </p>

      <div style={cardContainer}>
        {benefits.map((benefit, index) => (
          <div key={index} style={cardStyle}>
            <div style={iconStyle}>{benefit.icon}</div>
            <h3 style={cardTitle}>{benefit.title}</h3>
            <p style={cardText}>{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default UserBenefits;
