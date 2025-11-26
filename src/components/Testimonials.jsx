import React from "react";

function Categories() {
  const sectionStyle = {
    padding: "6rem 8%",
    textAlign: "center",
    backgroundColor: "#F8FFFF",
    color: "#0F172A",
  };

  const titleStyle = {
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "2rem",
    color: "#006D77",
  };

  const subtitleStyle = {
    fontSize: "1.3rem",
    marginBottom: "4rem",
    color: "#334155",
    maxWidth: "700px",
    margin: "0 auto 4rem",
  };

  const categoriesWrapper = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridAutoRows: "auto",
    gap: "2rem",
    justifyContent: "center",
  };

  const cardStyle = {
    backgroundColor: "#FFFFFF",
    borderRadius: "16px",
    boxShadow: "0px 4px 12px rgba(0,0,0,0.08)",
    overflow: "hidden",
    cursor: "pointer",
    transition: "transform 0.3s, box-shadow 0.3s",
  };

  const cardImage = {
    width: "100%",
    height: "180px",
    objectFit: "cover",
  };

  const cardContent = {
    padding: "1.5rem",
  };

  const cardTitle = {
    fontSize: "1.65rem",
    fontWeight: "600",
    marginBottom: "0.5rem",
    color: "#006D77",
  };

  const cardDescription = {
    fontSize: "1.2rem",
    color: "#334155",
    lineHeight: 1.5,
  };

  const categories = [
    { title: "Health", description: "Track your workouts, nutrition, and daily activity.", image: "/Health.jpg"},
    { title: "Learning", description: "Build a habit of reading, courses, and self-improvement.", image: "/Learning.jpg" },
    { title: "Coding", description: "Practice programming and develop new technical skills.", image: "/Coding.jpg" },
    { title: "Fitness", description: "Set fitness goals and stay consistent with your training.", image: "/Fitness.jpg" },
    { title: "Social", description: "Stay connected and maintain healthy social habits.", image: "/Social.jpg" },
    { title: "Mindfulness", description: "Practice meditation, journaling, and reflection for mental clarity.", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=60" },
  ];

  return (
    <section style={sectionStyle}>
      <h2 style={titleStyle}>Habit Categories</h2>
      <p style={subtitleStyle}>
        Explore different areas to focus on and track your habits effectively. Choose what matters to you and build consistency.
      </p>
      <div style={categoriesWrapper}>
        {categories.map((category, index) => (
          <div
            key={index}
            style={cardStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.boxShadow = "0px 10px 20px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0px 4px 12px rgba(0,0,0,0.08)";
            }}
          >
            <img src={category.image} alt={category.title} style={cardImage} />
            <div style={cardContent}>
              <h3 style={cardTitle}>{category.title}</h3>
              <p style={cardDescription}>{category.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;
