import React from "react";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser"); 
    navigate("/login"); 
  };

  return (
    <button
      onClick={handleLogout}
      style={{
        backgroundColor: "#ff4d4f",
        color: "white",
        border: "none",
        padding: "10px 16px",
        borderRadius: "8px",
        cursor: "pointer",
        fontWeight: "600",
        fontSize:"18px"
      }}
    >
      Logout
    </button>
  );
};

export default LogoutButton;
