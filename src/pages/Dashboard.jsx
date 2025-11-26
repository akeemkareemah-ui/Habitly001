import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiCheckSquare, FiBarChart2, FiUsers, FiLogOut } from 'react-icons/fi';
import { FaReact } from "react-icons/fa";

const AnalyticsSummary = ({ habits }) => {
    const total = habits.length;
    const completedCount = habits.filter((h) => h.completed).length;
    const completionRate = total === 0 ? 0 : Math.round((completedCount / total) * 100);

    const statCard = {
        flex: "1 1 30%",
        background: "#e6fffa",
        padding: "1rem",
        borderRadius: "12px",
        textAlign: "center",
        boxShadow: "0 6px 18px rgba(13,148,136,0.08)",
        border: "1px solid #00bfa5",
    };
    const bigNumber = { fontSize: "1.6rem", fontWeight: "700", marginTop: "0.5rem", color: "#0D9488" };

    return (
        <div style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#0D9488' }}>
                <FiBarChart2 style={{ marginRight: '8px' }} size={20} />
                Your Habit Stats
            </h2>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "space-between", flexWrap: "wrap" }}>
                <div style={statCard}>
                    <div style={{ color: "#64748b", fontWeight: 600 }}>Total Habits</div>
                    <div style={bigNumber}>{total}</div>
                </div>
                <div style={statCard}>
                    <div style={{ color: "#64748b", fontWeight: 600 }}>Completed Today</div>
                    <div style={bigNumber}>{completedCount}</div>
                </div>
                <div style={statCard}>
                    <div style={{ color: "#64748b", fontWeight: 600 }}>Completion Rate</div>
                    <div style={bigNumber}>{completionRate}%</div>
                </div>
            </div>
        </div>
    );
};

const QuickLinks = () => {
    const coreFeatures = [
        { name: "Full Analytics", path: "/analytics", description: "Detailed charts and reports." },
        { name: "Manage Reminders", path: "/notifications", description: "Set up push notifications." },
        { name: "Calendar View", path: "/calendar", description: "View monthly progress." },
    ];

    const cardStyle = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "1rem",
        backgroundColor: "#00bfa5",
        color: "white",
        borderRadius: "12px",
        textDecoration: "none",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        cursor: "pointer",
        minHeight: "100px",
        textAlign: "center",
    };
    const cardHoverStyle = { transform: "translateY(-3px)", boxShadow: "0 6px 12px rgba(0,0,0,0.2)" };
    const cardTitle = { fontSize: "1.1rem", fontWeight: "bold", marginBottom: "0.4rem" };
    const cardText = { fontSize: "0.9rem", lineHeight: "1.3" };

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {coreFeatures.map((feature) => (
                <Link
                    key={feature.name}
                    to={feature.path}
                    style={cardStyle}
                    onMouseEnter={(e) => Object.assign(e.currentTarget.style, cardHoverStyle)}
                    onMouseLeave={(e) => Object.assign(e.currentTarget.style, cardStyle)}
                >
                    <h2 style={cardTitle}>{feature.name}</h2>
                    <p style={cardText}>{feature.description}</p>
                </Link>
            ))}
        </div>
    );
};

const DashboardOverview = () => {
    const navigate = useNavigate();
    const [habits, setHabits] = useState([]);
    const [newHabitText, setNewHabitText] = useState("");
    const [loading, setLoading] = useState(true);

   
    useEffect(() => {
        const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
        if (!loggedInUser) {
            navigate("/login");
        } else {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setLoading(false);
        }
    }, [navigate]);

    
    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("habits")) || [];
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setHabits(saved);
    }, []);

   
    useEffect(() => {
        localStorage.setItem("habits", JSON.stringify(habits));
    }, [habits]);

    const addHabit = () => {
        if (!newHabitText.trim()) return;
        const newHabit = { id: Date.now(), text: newHabitText, completed: false };
        setHabits([...habits, newHabit]);
        setNewHabitText("");
    };

    const toggleCompletion = (id) => {
        setHabits(
            habits.map((h) => (h.id === id ? { ...h, completed: !h.completed } : h))
        );
    };

    const deleteHabit = (id) => {
        setHabits(habits.filter((h) => h.id !== id));
    };

    if (loading) return null; 

    // Page styles omitted for brevity (keep your existing styles)
    const pageStyle = { padding: "2rem", backgroundColor: "#f0fdfa", color: "#0f172a", minHeight: "100vh", fontFamily: "sans-serif" };
    const headerStyle = { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem", paddingBottom: "1rem", borderBottom: "2px solid #e0fdf7" };
    const layoutContainer = { display: "grid", gridTemplateColumns: "2fr 1fr", gap: "2rem", maxWidth: "1200px", margin: "0 auto" };
    const titleStyle = { fontSize: "2.5rem", fontWeight: "bold", color: "#0D9488" };

    const inputRow = { display: "flex", gap: "1rem", marginBottom: "1.5rem" };
    const inputStyle = { flex: 1, padding: "0.8rem 1rem", borderRadius: "8px", border: "1px solid #00bfa5", fontSize: "1rem" };
    const addBtn = { backgroundColor: "#00bfa5", color: "white", padding: "0.8rem 1.2rem", border: "none", borderRadius: "8px", cursor: "pointer", fontWeight: "bold" };
    const habitItem = (completed) => ({ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.8rem 1rem", backgroundColor: completed ? "#e0fdf7" : "#fff", borderLeft: completed ? "5px solid #0D9488" : "5px solid #99f6e4", borderRadius: "8px", marginBottom: "0.75rem", boxShadow: "0 1px 3px rgba(0,0,0,0.05)", transition: "all 0.2s ease" });
    const habitText = (completed) => ({ textDecoration: completed ? "line-through" : "none", color: completed ? "#6b7280" : "#0f172a", fontSize: "1.1rem", flexGrow: 1 });
    const checkbox = { width: "20px", height: "20px", accentColor: "#00bfa5" };
    const deleteBtn = { background: "#ef4444", color: "white", border: "none", padding: "0.4rem 0.6rem", borderRadius: "6px", cursor: "pointer", fontSize: "0.9rem" };

    return (
        <div style={pageStyle}>
            <header style={headerStyle}>
                <h1 style={titleStyle}>
                    <FaReact style={{ marginRight: "10px", fontSize: "2rem" }} />
                    Habitly Dashboard
                </h1>
               
                    
               
            </header>

            <div style={layoutContainer}>
                <div style={{ padding: '1rem', background: '#fff', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                    <AnalyticsSummary habits={habits} />

                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#0D9488' }}>
                        <FiCheckSquare style={{ marginRight: '8px' }} size={20} />
                        Today's Habits
                    </h2>

                    <div style={inputRow}>
                        <input
                            style={inputStyle}
                            type="text"
                            placeholder="Add a new daily habit..."
                            value={newHabitText}
                            onChange={(e) => setNewHabitText(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && addHabit()}
                        />
                        <button style={addBtn} onClick={addHabit}>Add</button>
                    </div>

                    <div style={{ maxHeight: '400px', overflowY: 'auto', paddingRight: '5px' }}>
                        {habits.length === 0 && (
                            <div style={{ textAlign: 'center', color: '#64748b', padding: '2rem' }}>
                                Start by adding your first habit above!
                            </div>
                        )}
                        {habits.map((h) => (
                            <div key={h.id} style={habitItem(h.completed)}>
                                <div style={habitText(h.completed)}>{h.text}</div>
                                <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                                    <input
                                        type="checkbox"
                                        style={checkbox}
                                        checked={h.completed}
                                        onChange={() => toggleCompletion(h.id)}
                                    />
                                    <button style={deleteBtn} onClick={() => deleteHabit(h.id)}>
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#0D9488', borderBottom: '1px solid #0D9488', paddingBottom: '0.5rem' }}>
                        <FiUsers style={{ marginRight: '8px' }} size={20} />
                        Go To Features
                    </h2>
                    <QuickLinks />
                </div>
            </div>
        </div>
    );
};

export default DashboardOverview;
