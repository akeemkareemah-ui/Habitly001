import React from "react";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <section
      style={{
        position: "relative",
        height: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "white",
        padding: "0 20px",
        overflow: "hidden", 
      }}
    >
      
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: 'url("/Growth.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 1,
        }}
      >
    
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.55)", 
          }}
        ></div>
      </div> 

      
      <div style={{ position: "relative", zIndex: 2, maxWidth: "700px" }}>
        <h1 style={{ fontSize: "3rem", fontWeight: "750", marginBottom: "1rem" }}>
          Build Better Habits, Build a Better Life
        </h1>
        <p style={{ fontSize: "1.5rem", marginBottom: "2rem",  fontWeight:"525"}}>
          Track your habits, stay consistent, and achieve your goals with ease.
        </p>
        <button
          onClick={() => navigate("/signup")}
          style={{
            backgroundColor: "teal",
            color: "white",
            padding: "0.8rem 2rem",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "18px",
            fontWeight:'bold',
          }}
        >
          Try Habitify Free
        </button>
      </div>
    </section>
  );
}

export default Hero;
