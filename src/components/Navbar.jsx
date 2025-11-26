import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { IoLeafOutline } from "react-icons/io5";

function Navbar() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  
  useEffect(() => {
    const user = localStorage.getItem("loggedInUser");
    setIsLoggedIn(!!user);

    const interval = setInterval(() => {
      const updatedUser = localStorage.getItem("loggedInUser");
      setIsLoggedIn(!!updatedUser);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const logout = () => {
    localStorage.removeItem("loggedInUser");
    setIsLoggedIn(false);
    navigate("/login");
  };

  const navStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px 90px',
    backgroundColor: 'white',
    color: '#004D40',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
    position: 'sticky',
    top: 0,
    zIndex: 100,
    fontSize: '19px',
  };

  const centerMenu = {
    display: 'flex',
    gap: '35px',
    justifyContent: 'center',
    flex: 1,
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#004D40',
    fontWeight: '590',
    fontSize: '20px',
    padding: '5px',
    transition: 'all 0.2s ease-in-out',
  };

  const activeLinkStyle = {
    borderBottom: '2px solid #009688',
    paddingBottom: '2px',
  };

  const buttonBase = {
    fontFamily: 'san-serif',
    textDecoration: 'none',
    borderRadius: '20px',
    padding: '8px 20px',
    fontWeight: '900',
    transition: 'all 0.2s ease-in-out',
    width: '60px',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center'
  };

  const loginButton = {
    ...buttonBase,
    color: '#004D40',
    border: '1px solid #004D40'
  };

  const signupButton = {
    ...buttonBase,
    color: '#fff',
    backgroundColor: '#009688',
  };

  const logoutButton = {
     backgroundColor: "#ff4d4f",
        color: "white",
        border: "none",
        padding: "10px 16px",
        borderRadius: "8px",
        cursor: "pointer",
        fontWeight: "600",
        fontSize:"18px"
  };

  return (
    <nav style={navStyle}>
   
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <IoLeafOutline style={{ width: '35px', height: '30px', color: '#009688' }} />

        <NavLink to="/" style={{ fontFamily:'initial', fontWeight: '650', fontSize: '30px', color: '#004D40', textDecoration: 'none' }}>
          HABITLY
        </NavLink>
      </div>

  
      <div style={centerMenu}>
        <NavLink to="/features" style={({ isActive }) => isActive ? { ...linkStyle, ...activeLinkStyle } : linkStyle}>Features</NavLink>
        {isLoggedIn && (
          <>
            <NavLink to="/dashboard" style={({ isActive }) => isActive ? { ...linkStyle, ...activeLinkStyle } : linkStyle}>Dashboard</NavLink>
          </>
        )}
        <NavLink to="/pricing" style={({ isActive }) => isActive ? { ...linkStyle, ...activeLinkStyle } : linkStyle}>Pricing</NavLink>
        <NavLink to="/about" style={({ isActive }) => isActive ? { ...linkStyle, ...activeLinkStyle } : linkStyle}>About</NavLink>
      </div>

   
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        
        {!isLoggedIn ? (
          <>
            <NavLink to="/login" style={loginButton}>Login</NavLink>
            <NavLink to="/signup" style={signupButton}>Signup</NavLink>
          </>
        ) : (
          <button onClick={logout} style={logoutButton}>Logout</button>
        )}

      </div>
    </nav>
  );
}

export default Navbar;
