import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Features from "./pages/Features";
import Analytics from "./components/Analytics";
import Habits from "./components/Habits";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Pricing from "./pages/Pricing";
import Footer from "./components/Footer";
import Notifications from "./components/Notification";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import CalendarView from "./components/Calendar";

function App() {
  const appStyle = {
    fontFamily: "'Poppins', sans-serif",
    backgroundColor: "#fffaf5",
    color: "#222",
    margin: 0,
    padding: 0,
  };

  return (
    <div style={appStyle}>
      <Navbar />

      
      <Routes>
        <Route path="/" element={<Home />} />
       <Route path="/features" element={<Features />} />
        <Route path="/habit" element={<Habits/>} />
        <Route path="/analytics" element={<Analytics />} /> 
          <Route path="/calendar" element={<CalendarView />} /> 
          <Route path="/notifications" element={<Notifications/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/about" element={<About/>} />
       
          </Routes>
<Footer/>
      
    </div>
  );
}

export default App;
