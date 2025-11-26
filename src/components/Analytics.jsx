import React, { useEffect, useState } from "react"; 
import { Link } from "react-router-dom";
import { FiTarget, FiBarChart2 } from 'react-icons/fi'; 

function Analytics() {
    const [habits, setHabits] = useState([]);
    const [goals, setGoals] = useState([]);

    useEffect(() => {
        const savedHabits = JSON.parse(localStorage.getItem("habits")) || [];
        const savedGoals = JSON.parse(localStorage.getItem("goals")) || [];
        setHabits(savedHabits);
        setGoals(savedGoals);
    }, []);

    const total = habits.length;
    const completedCount = habits.filter((h) => h.completed).length; 
    const completionRate = total === 0 ? 0 : Math.round((completedCount / total) * 100);

    const calculateGoalProgress = (goalId) => {
        const goalHabits = habits.filter(h => h.goalId === goalId);
        if (goalHabits.length === 0) return 0;
        const completedHabits = goalHabits.filter(h => h.completed).length; 
        return Math.round((completedHabits / goalHabits.length) * 100);
    };

    const primaryColor = "#00bfa5"; 
    const secondaryColor = "#0D9488"; 
    const darkText = "#0f172a";

    const wrapper = { 
        padding: "3rem 1rem", 
        minHeight: "100vh",
        width: "100vw",  
        color: darkText, 
        backgroundImage: "url('/Tracker.jpg')", 
        backgroundSize: "cover",
        backgroundPosition: "center", 
        backgroundRepeat: "no-repeat", 
        display: "flex", 
        flexDirection: "column",
        alignItems: "center", 
        justifyContent: "center",
        boxSizing: "border-box", 
        overflowX: "hidden"
    };

    const innerContentContainer = {
        maxWidth: "1000px",
        width: "100%",      
        display: "flex", 
        gap: "2rem", 
        flexWrap: "wrap", 
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, 0.1)", 
        borderRadius: "15px",
        padding: "2rem",
        boxShadow: "0 10px 30px rgba(255,255,255,0.2)",
        zIndex: 1 
    };

    const container = { display: "flex", gap: "2rem", flexWrap: "wrap", justifyContent: "center" };
    const leftCol = { flex: 1, minWidth: "300px" };
    const rightCol = { flex: 1, minWidth: "300px", display: "flex", flexDirection: "column", gap: "1.5rem" };

    const header = { textAlign: "center", marginBottom: "2rem" };
    const title = { fontSize: "2rem", fontWeight: "600", color: secondaryColor }; 
    const subtitle = { color: "white", marginTop: "10px", fontSize: '1.25rem' }; 

    const statsRow = { display: "flex", gap: "1.5rem", justifyContent: "space-between", flexWrap: "wrap", marginTop: "1.5rem", marginBottom: "3rem" }; 
    const statCard = { flex: "2 2 25%", background: "#f5f5f5", padding: "1.1rem", borderRadius: "15px", textAlign: "center", boxShadow: "0 10px 25px rgba(0,0,0,0.1)", width:"65%" }; 
    const statLabel = { color: secondaryColor, fontWeight: 550, fontSize: '1rem' };
    const bigNumber = { fontSize: "2rem", fontWeight: "700", marginTop: "0.5rem", color: darkText }; 

    const goalSection = { background: "#fff", padding: "1.5rem", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)", marginBottom: '2rem' }; 
    const goalItem = { border: `1px solid ${primaryColor}`, padding: '1rem', borderRadius: '8px', marginBottom: '1rem', background: '#f5fffe' };
    const goalBarTrack = { flex: 1, height: "12px", background: "#e0e7ff", borderRadius: "999px", overflow: "hidden" };
    const goalBarFill = (pct) => ({ width: `${pct}%`, height: "100%", background: primaryColor });

    const chartWrapper = { background: "#fff", padding: "1.5rem", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)" };
    const chartHeader = { margin: "0 0 1.5rem 0", color: secondaryColor, fontSize: '1.25rem', fontWeight: 700 };
    const barRow = { display: "flex", alignItems: "center", gap: "1rem", marginBottom: "12px" };
    const barLabel = { width: "200px", fontWeight: 700, fontSize: '0.95rem', color: darkText }; 
    const barTrack = { flex: 1, height: "14px", background: "#f1f5f9", borderRadius: "999px", overflow: "hidden" };
    const barFill = (pct) => ({ width: `${pct}%`, height: "100%", background: primaryColor });

    const cardStyle = { display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "80%", padding: "1.5rem", backgroundColor: secondaryColor, color: "white", borderRadius: "16px", textDecoration: "none", boxShadow: "0 10px 20px rgba(0,0,0,0.15)", transition: "all 0.1s ease", cursor: "pointer", minHeight: "120px", textAlign: "center", marginBottom: '1.5rem' };
    const cardHoverStyle = { transform: "translateY(-5px)", boxShadow: "0 15px 30px rgba(0,0,0,0.3)", backgroundColor: primaryColor };
    const cardTitle = { fontSize: "1.4rem", marginBottom: "0.5rem", fontWeight: "900" }; 
    const cardText = { fontSize: "1rem", lineHeight: "1.4", fontWeight: 500 };

    const coreFeatures = [
        { name: "Habit Tracker", path: "/habit", description: "Track your daily habits." },
        { name: "Notifications", path: "/notifications", description: "Stay updated with reminders." },
        { name: "Calendar View", path: "/calendar", description: "View habits on a monthly calendar." },
    ];

    return (
        <div style={wrapper}>
            <div style={innerContentContainer}>
                <div style={container}>
                    <div style={leftCol}>
                        <div style={header}>
                            <h1 style={title}>
                                <FiBarChart2 style={{ marginRight: '10px', verticalAlign: 'middle' }} />
                                Habit Analytics
                            </h1>
                            <div style={subtitle}>Quick stats for your habits and progress towards your goals.</div>
                        </div>

                        <div style={statsRow}>
                            <div style={statCard}>
                                <div style={statLabel}>Total Habits</div>
                                <div style={bigNumber}>{total}</div>
                            </div>
                            <div style={statCard}>
                                <div style={statLabel}>Completed Today</div>
                                <div style={bigNumber}>{completedCount}</div>
                            </div>
                            <div style={statCard}>
                                <div style={statLabel}>Overall Rate</div>
                                <div style={bigNumber}>{completionRate}%</div>
                            </div>
                        </div>

                        <div style={goalSection}>
                            <h3 style={chartHeader}>
                                <FiTarget style={{ marginRight: '8px' }} />
                                Goal Progress Overview
                            </h3>
                            {goals.length === 0 && <p style={{ color: "#64748b", padding: "1rem 0", textAlign: "center" }}>No long-term goals defined yet.</p>}

                            {goals.map((g) => {
                                const progress = calculateGoalProgress(g.id);
                                const habitsLinked = habits.filter(h => h.goalId === g.id).length;
                                return (
                                    <div key={g.id} style={goalItem}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <h4 style={{ margin: 0, color: secondaryColor, fontWeight: 700 }}>{g.name}</h4>
                                            <span style={{ fontSize: '0.9rem', color: '#64748b' }}>{habitsLinked} Habits Linked</span>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                                            <div style={goalBarTrack}>
                                                <div style={goalBarFill(progress)} />
                                            </div>
                                            <div style={{ width: 48, textAlign: "right", fontWeight: 800, color: primaryColor }}>{progress}%</div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div style={chartWrapper}>
                            <h3 style={chartHeader}>Individual Habit Status</h3>
                            {habits.length === 0 && (
                                <div style={{ color: "#64748b", padding: "2rem 0", textAlign: "center" }}>
                                    No habits found in localStorage yet.
                                </div>
                            )}
                            {habits.map((h) => {
                                const pct = h.completed ? 100 : 0;
                                return (
                                    <div key={h.id} style={barRow}>
                                        <div style={barLabel}>{h.text}</div>
                                        <div style={barTrack}>
                                            <div style={barFill(pct)} />
                                        </div>
                                        <div style={{ width: 48, textAlign: "right", fontWeight: 800, color: darkText }}>{pct}%</div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div style={rightCol}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: secondaryColor, textAlign: 'center', fontWeight: 800 }}>Quick Links</h2>
                        {coreFeatures.map((feature) => (
                            <Link
                                key={feature.name}
                                to={feature.path}
                                style={{...cardStyle, width: "60%"}} 
                                onMouseEnter={(e) => Object.assign(e.currentTarget.style, {...cardHoverStyle, width: "100%"})}
                                onMouseLeave={(e) => Object.assign(e.currentTarget.style, cardStyle)}
                            >
                                <h2 style={cardTitle}>{feature.name}</h2>
                                <p style={cardText}>{feature.description}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Analytics;
