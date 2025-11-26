import React from "react";
import { AiOutlineFileText, AiOutlineLineChart, AiOutlineTrophy } from "react-icons/ai";

function HowItWorks() {
   const sectionStyle = {
    padding: "6rem 8%",
    color: "#0F172A",
    textAlign: "center",
     backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/Consitency.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    borderRadius: "16px",
    
  };


  const titleStyle = {
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "2rem",
    color: "#FFFFFF",

  };

  const subtitleStyle = {
    maxWidth: "600px",
    margin: "0 auto 4rem",
    fontSize: "25px",
    color: "#F0F0F0",
      };

  const stepsWrapper = {
    display: "flex",
    justifyContent: "center",
    gap: "2rem",
    flexWrap: "wrap",
  };

  const cardStyle = {
    flex: "1",
    maxWidth: "320px",
    backgroundColor: "rgba(255, 255, 255, 0.75)",
    padding: "2rem",
    borderRadius: "16px",
    boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
    transition: "0.3s",
  };

  const iconWrapper = {
    marginBottom: "1rem",
  };

  const cardTitle = {
    fontSize: "1.5rem",
    fontWeight: "600",
    color: "#006D77",
    marginBottom: "1rem",
  };

  const cardDescription = {
    fontSize: "22px",
    color: "#334155",
    fontWeight: "545",  
  };

  const steps = [
    {
      title: "Create Your Habits",
      description: "Easily set up daily habits and routines that help you reach your goals.",
      icon: <AiOutlineFileText size={40} color="#006D77" />,
    },
    {
      title: "Track Your Progress",
      description: "Monitor  progress over time to stay motivated.",
      icon: <AiOutlineLineChart size={40} color="#006D77" />,
    },
    {
      title: "Achieve Your Goals",
      description: "Stay consistent and accomplish what you set out to do every day.",
      icon: <AiOutlineTrophy size={40} color="#006D77" />,
    },
  ];

  return (
    <section style={sectionStyle}>
      <h2 style={titleStyle}>How It Works</h2>
      <p style={subtitleStyle}>
        Our simple 3-step system helps you build habits, track progress, and achieve your goals effortlessly.
      </p>

      <div style={stepsWrapper}>
        {steps.map((step, index) => (
          <div key={index} style={cardStyle}>
            <div style={iconWrapper}>{step.icon}</div>
            <h3 style={cardTitle}>{step.title}</h3>
            <p style={cardDescription}>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;