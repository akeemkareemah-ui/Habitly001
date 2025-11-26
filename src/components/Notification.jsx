import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiBell, FiTrash2 } from 'react-icons/fi'; // Import icons

function Notifications() {
   
    const [time, setTime] = useState("");
    const [reminders, setReminders] = useState([]);
    const [notificationSent, setNotificationSent] = useState({}); 

    useEffect(() => {
        const savedReminders = JSON.parse(localStorage.getItem("reminders")) || [];
        setReminders(savedReminders);
       
        const today = new Date().toDateString();
        const sentLog = JSON.parse(localStorage.getItem(`sentLog_${today}`)) || {};
        setNotificationSent(sentLog);
    }, []);

    useEffect(() => {
        localStorage.setItem("reminders", JSON.stringify(reminders));
    }, [reminders]);

    useEffect(() => {
        let interval;
        if (Notification.permission === "granted") {
      
            interval = setInterval(() => {
                const now = new Date();

                const currentTime = now.toTimeString().slice(0, 5); 
                const today = now.toDateString();

                if (!localStorage.getItem(`sentLog_${today}`)) {
                    localStorage.removeItem(localStorage.key(localStorage.length - 1)); 
                    setNotificationSent({});
                }

                reminders.forEach(r => {
                  
                    if (r.time === currentTime && !notificationSent[r.id]) {
                        
                     
                        new Notification("Habit Reminder!", { 
                            body: `Time to focus on your habit! Reminder set for ${r.time}`,
                            icon: 'https://i.imgur.com/your-icon-url.png' 
                        });

                        const updatedSentLog = { ...notificationSent, [r.id]: true };
                        setNotificationSent(updatedSentLog);
                        localStorage.setItem(`sentLog_${today}`, JSON.stringify(updatedSentLog));
                    }
                });
            }, 10000); 

        } else {
            console.log("Notifications not permitted, scheduling logic skipped.");
        }

    
        return () => clearInterval(interval);
    }, [reminders, notificationSent]);


    
    const addReminder = () => {
        if (!time) return;
        const id = Date.now();
        
        setReminders((r) => [...r, { id, time: time.slice(0, 5) }]); 
        setTime("");
    };

    const removeReminder = (id) => {
        setReminders((r) => r.filter((x) => x.id !== id));
        
        const { [id]: _, ...rest } = notificationSent;
        setNotificationSent(rest);
    };

    const requestPermission = async () => {
        if (!("Notification" in window)) {
            alert("This browser does not support notifications.");
            return;
        }
        const perm = await Notification.requestPermission();
        if (perm === "granted") {
            alert("Notifications permitted. Reminders are now active.");
        } else {
            alert("Notifications blocked or dismissed. Reminders will not trigger.");
        }
    };

    const testNotification = () => {
        if (!("Notification" in window) || Notification.permission !== "granted") {
            alert("Please allow notifications first.");
            return;
        }
        new Notification("Habitly Test Reminder", { body: "This is a test notification to check your settings." });
    };

    
    const primaryColor = "#00bfa5"; 
    const secondaryColor = "#0D9488"; 

    const wrapper = {
          padding: "3rem 1rem", 
        minHeight: "100vh",
        width: "100%",   
        color: '#0f172a', 
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
              
        width: "60%",      
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

    const container = { display: "flex", gap: "2rem", flexWrap: "wrap", justifyContent: "center"  };
    const leftCol = { flex: 1, minWidth: "300px" };
    const rightCol = { flex: 1, minWidth: "300px", display: "flex", flexDirection: "column", gap: "1.5rem" };

    const header = { textAlign: "center", marginBottom: "1rem" };
    const pageTitle = { color: secondaryColor, fontSize: "1.8rem", fontWeight: 750 }; 
    const pageSubtitle = { color: "white", marginTop: 8,fontSize: "1.2rem",  };

    const inputRow = { display: "flex", gap: "0.75rem", justifyContent: "center", marginTop: "1rem", marginBottom: "1.5rem" };
    const timeInput = { padding: "0.75rem 1rem", borderRadius: 10, border: "2px ", fontSize: '1rem',backgroundColor:"teal" , color: "white"};
    const addBtn = { background: "white", color:primaryColor, padding: "0.75rem 1.2rem", borderRadius: 10, border: "none", cursor: "pointer", fontWeight: 700, fontSize:"16px" }; 

    const list = { marginTop: "1.8rem", display: "flex", gap: "60px", fontSize:"20px" };
    const item = { display: "flex", width:"50%", justifyContent: "space-between", alignItems: "center", padding: "1rem", borderRadius: 12, background: "#e0fdf7", boxShadow: "0 4px 8px rgba(0,0,0,0.05)" };
    const itemTime = { fontWeight: 800, fontSize: '1.2rem', color: secondaryColor }; 

    const testRow = { display: "flex", gap: "1rem", justifyContent: "center", marginTop: "1rem", paddingBottom: '1rem', borderBottom: '1px solid #eee' };
    const permBtn = { padding: "0.55rem 0.8rem", borderRadius: 10, border: `2px solid ${secondaryColor}`, cursor: "pointer", background: '#fff', color: secondaryColor, fontWeight: 600, fontSize:"16px" };
    const testBtn = { padding: "0.55rem 0.8rem", borderRadius: 10, border: "none", cursor: "pointer", background:  secondaryColor, color: "white", fontWeight: 600 ,fontSize:"16px"};

    const cardStyle = { display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "65%", padding: "1.5rem", backgroundColor: secondaryColor, color: "white", borderRadius: "16px", textDecoration: "none", boxShadow: "0 10px 20px rgba(0,0,0,0.15)", transition: "all 0.3s ease", cursor: "pointer", minHeight: "120px", textAlign: "center", marginBottom: '1.5rem' };
    const cardHoverStyle = { transform: "translateY(-5px)", boxShadow: "0 15px 30px rgba(0,0,0,0.3)", backgroundColor: primaryColor };
    const cardTitle = { fontSize: "1.4rem", marginBottom: "0.5rem", fontWeight: "900" };
    const cardText = { fontSize: "1rem", lineHeight: "1.4", fontWeight: 500 };


    const coreFeatures = [
        { name: "Habit Tracker", path: "/habit", description: "Track your daily habits." },
        { name: "Analytics", path: "/analytics", description: "View detailed habit stats." },
        { name: "Calendar View", path: "/calendar", description: "See habits on a monthly calendar." },
    ];

    return (
        <div style={wrapper}>
        <div style={innerContentContainer}>
            <div style={container}>
                <div style={leftCol}>
                    <div style={header}>
                        <h1 style={pageTitle}>
                             <FiBell style={{ marginRight: '10px', verticalAlign: 'middle' }} />
                             Habit Reminders
                        </h1>
                        <div style={pageSubtitle}>Set daily reminder times and schedule browser notifications.</div>
                    </div>

                    <div style={testRow}>
                        <button onClick={requestPermission} style={permBtn}>
                            Allow Notifications
                        </button>
                        <button onClick={testNotification} style={testBtn}>
                            Test Notification
                        </button>
                    </div>

                    <div style={inputRow}>
                        <input type="time" value={time} onChange={(e) => setTime(e.target.value)} style={timeInput} />
                        <button style={addBtn} onClick={addReminder}>Set Reminder</button>
                    </div>

                    <div style={list}>
                        {reminders.length === 0 && <div style={{ color: "white", textAlign: "center", padding: '1rem' }}>No reminders saved yet. Use the input above to set one.</div>}
                        {reminders.map((r) => (
                            <div key={r.id} style={item}>
                                <div style={itemTime}>{r.time}</div>
                                <button onClick={() => removeReminder(r.id)} style={{ background: "#ef4444", color: "#fff", border: "none", borderRadius: 8, padding: "0.45rem 0.6rem", cursor: "pointer" }}>
                                    <FiTrash2 size={14} /> Delete
                                </button>
                            </div>
                        ))}
                    </div>

                   
                </div>

                <div style={rightCol}>
                    {coreFeatures.map((feature) => (
                        <Link
                            key={feature.name}
                            to={feature.path}
                            style={cardStyle}
                            onMouseEnter={(e) => Object.assign(e.currentTarget.style, cardHoverStyle, { backgroundColor: primaryColor })}
                            onMouseLeave={(e) => Object.assign(e.currentTarget.style, cardStyle, { backgroundColor: secondaryColor })}
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

export default Notifications;