import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiTarget, FiPlus, FiTrash2 } from 'react-icons/fi';

function HabitTrackerDashboard() {
    const [habit, setHabit] = useState("");
    const [habits, setHabits] = useState([]);
    const [goals, setGoals] = useState([]);
    const [newGoalText, setNewGoalText] = useState("");
    const [selectedGoalId, setSelectedGoalId] = useState(null);
    
    useEffect(() => {
        const savedHabits = JSON.parse(localStorage.getItem("habits")) || [];
        const savedGoals = JSON.parse(localStorage.getItem("goals")) || [];
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setHabit(savedHabits);
        setGoals(savedGoals);
    }, []);

    useEffect(() => {
        localStorage.setItem("habits", JSON.stringify(habits));
    }, [habits]);

    useEffect(() => {
        localStorage.setItem("goals", JSON.stringify(goals));
    }, [goals]);

    const addGoal = () => {
        if (!newGoalText.trim()) return;
        const newGoal = { id: Date.now(), name: newGoalText.trim() };
        setGoals([...goals, newGoal]);
        setNewGoalText("");
    };

    const deleteGoal = (id) => {
        setGoals(goals.filter((g) => g.id !== id));
        setHabits(habits.map(h => h.goalId === id ? { ...h, goalId: null } : h));
    };
    
    const addHabit = () => {
        if (!habit.trim()) return;
        const newHabit = {
            id: Date.now(),
            text: habit,
            completed: false,
            goalId: selectedGoalId
        };
        setHabits([...habits, newHabit]);
        setHabit("");
        setSelectedGoalId(null);
    };

    const toggleCompletion = (id) => {
        setHabits(
            habits.map((h) => (h.id === id ? { ...h, completed: !h.completed } : h))
        );
    };

    const deleteHabit = (id) => {
        setHabits(habits.filter((h) => h.id !== id));
    };

    const calculateGoalProgress = (goalId) => {
        const goalHabits = habits.filter(h => h.goalId === goalId);
        if (goalHabits.length === 0) return 0;
        const completedHabits = goalHabits.filter(h => h.completed).length;
        return Math.round((completedHabits / goalHabits.length) * 100);
    };
 
    const getGoalName = (goalId) => {
        const goal = goals.find(g => g.id === goalId);
        return goal ? goal.name : 'No Goal Set';
    };

    const coreFeatures = [
        { name: "Check Analytics", path: "/analytics", description: "Visualize your progress with detailed charts." },
        { name: "Check Notifications", path: "/notifications", description: "Stay updated with timely reminders." },
        { name: "Check Calendar View", path: "/calendar", description: "View habits on a monthly calendar." },
    ];

    const primaryColor = "#00bfa5";
    const secondaryColor = "#0D9488";
    
  
    const wrapper = { 
        padding: "3rem 1rem", 
       
        minHeight: "100vh",
        width: "100vw",   
        color: '#0f172a', 
        backgroundImage: "url('/Tracker.jpg')", 
        backgroundSize: "cover",
        backgroundPosition: "center", 
        backgroundRepeat: "no-repeat", 
         overflow: "hidden",
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

    const leftCol = { flex: 1, minWidth: "300px" };
    const rightCol = { flex: 1, minWidth: "200px", display: "flex", flexDirection: "column", gap: "1.5rem" };
    const title = { fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem" , color: secondaryColor    };
    const subtitle = { fontSize: "18px", marginBottom: "2rem" , color:  "white" };
    const inputRow = { display: "flex", gap: "1rem", marginBottom: "1rem" };
    const inputStyle = { flex: 1, padding: "0.8rem 1rem", borderRadius: "10px", border: `1px solid ${primaryColor}`, fontSize: "1rem" };
    const addBtn = { backgroundColor: primaryColor, color: "white", padding: "0.8rem 1.2rem", border: "none", borderRadius: "10px", cursor: "pointer", fontWeight: "bold" };
    const habitItem = { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem", backgroundColor: "#e0fdf7", borderRadius: "10px", marginBottom: "1rem", width:"65%" };
    const habitText = (completed) => ({ textDecoration: completed ? "line-through" : "none", color: completed ? "#6b7280" : "#0f172a", fontSize: "1.1rem" });
    const checkbox = { width: "20px", height: "20px", accentColor: primaryColor };
    const deleteBtn = { background: "#ef4444", color: "white", border: "none", padding: "0.5rem 0.8rem", borderRadius: "8px", cursor: "pointer" };

    const goalBarTrack = { flex: 1, height: "10px", background: "#f1f5f9", borderRadius: "999px", overflow: "hidden", margin: '0 10px' };
    const goalBarFill = (pct) => ({ width: `${pct}%`, height: "100%", background: secondaryColor });
    const goalItemStyle = {
        padding: "1rem",
        marginBottom: "1rem",
        background: '#fff',
        borderRadius: '10px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
        border: `1px solid ${secondaryColor}`
    }

    return (
        <div style={wrapper}>
        
            <div style={innerContentContainer}> 
                <div style={leftCol}>
                    <h1 style={title}>Habit Tracker</h1>
                    <p style={subtitle}>Easily create and monitor daily habits linked to your long-term goals.</p>
                    <div style={{ marginBottom: '2rem', padding: '0.5rem', background: '#f5fff5', borderRadius: '10px', border: `1px dashed ${primaryColor}`, width:"330px" }}>
                        <h3 style={{ marginBottom: '0.75rem', color: secondaryColor }}>
                            <FiTarget style={{ marginRight: '8px' }} />
                            Link New Habit to Goal:
                        </h3>
                        <select
                            style={{ padding: '0.5rem', borderRadius: '8px', border: '1px solid #ccc', width: '100%', marginBottom: '1rem' }}
                            value={selectedGoalId || ''}
                            onChange={(e) => {
                                const value = e.target.value;
                                setSelectedGoalId(value === "" ? null : parseInt(value));
                            }}
                        >
                            <option value="">(Optional) Select a Goal</option>
                            {goals.map(g => (
                                <option key={g.id} value={g.id}>{g.name}</option>
                            ))}
                        </select>
                        <div style={inputRow}>
                            <input
                                style={inputStyle}
                                type="text"
                                placeholder="Enter a habit..."
                                value={habit}
                                onChange={(e) => setHabit(e.target.value)}
                            />
                            <button style={addBtn} onClick={addHabit}>Add</button>
                        </div>
                    </div>
                    {habits.map((h) => (
                        <div key={h.id} style={habitItem}>
                            <div style={habitText(h.completed)}>{h.text}</div>
                            <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                                <span style={{ fontSize: '0.85rem', color: secondaryColor, fontWeight: 'bold' }}>
                                    {getGoalName(h.goalId)}
                                </span>
                                <input type="checkbox" style={checkbox} checked={h.completed} onChange={() => toggleCompletion(h.id)} />
                                <button style={deleteBtn} onClick={() => deleteHabit(h.id)}><FiTrash2 size={14} /></button>
                            </div>
                        </div>
                    ))}
                </div>
                <div style={rightCol}>
                    <div style={{ marginBottom: '2rem', padding: '1.5rem', background: '#fff', borderRadius: '12px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: secondaryColor }}>
                            <FiTarget style={{ marginRight: '8px' }} />
                            Long-Term Goals
                        </h2>
                        <div style={{ ...inputRow, marginBottom: '1.5rem' }}>
                            <input
                                style={inputStyle}
                                type="text"
                                placeholder="Define a major goal..."
                                value={newGoalText}
                                onChange={(e) => setNewGoalText(e.target.value)}
                            />
                            <button style={addBtn} onClick={addGoal}><FiPlus size={18} /></button>
                        </div>
                        {goals.length === 0 && <p style={{ color: '#6b7280' }}>No goals defined yet.</p>}
                        {goals.map(g => {
                            const progress = calculateGoalProgress(g.id);
                            return (
                                <div key={g.id} style={goalItemStyle}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <h4 style={{ margin: 0 }}>{g.name}</h4>
                                        <button
                                            onClick={() => deleteGoal(g.id)}
                                            style={{ background: 'none', border: 'none', color: '#6b7280', cursor: 'pointer' }}
                                        >
                                            <FiTrash2 size={14} />
                                        </button>
                                    </div>
                                    <p style={{ fontSize: '0.85rem', color: '#6b7280', marginTop: '5px' }}>
                                        Habits linked: {habits.filter(h => h.goalId === g.id).length}
                                    </p>
                                    <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                                        <div style={goalBarTrack}>
                                            <div style={goalBarFill(progress)} />
                                        </div>
                                        <span style={{ fontWeight: 'bold', color: secondaryColor }}>{progress}%</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <h2 style={{ fontSize: '30px', marginBottom: '1rem', color: secondaryColor }}>Quick Links</h2>
                    {coreFeatures.map((feature) => (
                        <Link
                            key={feature.name}
                            to={feature.path}
                            style={{
                                display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "75%", padding: "1.5rem",
                                backgroundColor: primaryColor, color: "white", borderRadius: "16px", textDecoration: "none", boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
                                transition: "all 0.3s ease", cursor: "pointer", minHeight: "100px", textAlign: "center", marginBottom: '1.5rem'
                            }}
                            onMouseEnter={(e) => Object.assign(e.currentTarget.style, { transform: "translateY(-5px)", boxShadow: "0 12px 24px rgba(0,0,0,0.2)" })}
                            onMouseLeave={(e) => Object.assign(e.currentTarget.style, {
                                transform: "translateY(0)", boxShadow: "0 8px 16px rgba(0,0,0,0.1)", backgroundColor: primaryColor
                            })}
                        >
                            <h2 style={{ fontSize: "1.3rem", marginBottom: "0.5rem", fontWeight: "bold" }}>{feature.name}</h2>
                            <p style={{ fontSize: "1rem", lineHeight: "1.4" }}>{feature.description}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}    

export default HabitTrackerDashboard;  