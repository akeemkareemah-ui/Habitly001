import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiCalendar, FiArrowLeft } from "react-icons/fi";

function CalendarView() {
  const [habits, setHabits] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const savedHabits = JSON.parse(localStorage.getItem("habits")) || [];
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setHabits(savedHabits);
  }, []);

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const getMonthName = (date) =>
    date.toLocaleString("default", { month: "long", year: "numeric" });

  const generateCalendarDays = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const calendarDays = [];

    for (let i = 0; i < firstDayOfMonth; i++) {
      calendarDays.push({
        key: `empty-${i}`,
        day: null,
        isCurrentMonth: false,
      });
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const dayKey = `${year}-${month + 1}-${i}`;
      const isToday =
        i === new Date().getDate() &&
        month === new Date().getMonth() &&
        year === new Date().getFullYear();

      const hasCompletedHabit =
        isToday && habits.filter((h) => h.completed).length > 0;

      const hasIncompleteHabit =
        isToday && habits.filter((h) => !h.completed).length > 0;

      calendarDays.push({
        key: dayKey,
        day: i,
        isCurrentMonth: true,
        isToday: isToday,
        hasCompletedHabit: hasCompletedHabit,
        hasIncompleteHabit: hasIncompleteHabit,
      });
    }

    const totalSlots = calendarDays.length;
    const slotsNeeded = Math.ceil(totalSlots / 7) * 7;

    for (let i = 0; i < slotsNeeded - totalSlots; i++) {
      calendarDays.push({
        key: `empty-tail-${i}`,
        day: null,
        isCurrentMonth: false,
      });
    }

    return calendarDays;
  };

  const changeMonth = (offset) => {
    const newDate = new Date(
      currentDate.setMonth(currentDate.getMonth() + offset)
    );
    setCurrentDate(new Date(newDate));
  };

  const primaryColor = "#00bfa5";
  const secondaryColor = "#0D9488";
  const darkText = "#0f172a";

  const wrapper = {
    width: "100vw",
    minHeight: "100vh",
    backgroundImage: "url('/Two.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "2rem",
      overflow: "hidden"
  };

  const innerContentContainer = {
    maxWidth: "1000px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderRadius: "15px",
    padding: "2rem",
    margin: "0 auto",
  };

  const header = {
    textAlign: "center",
    marginBottom: "2rem",
    width: "100%",
  };

  const pageTitle = {
    color: secondaryColor,
    fontSize: "2.2rem",
    fontWeight: 800,
    margin: "0 0 10px 0",
  };

  const calendarGrid = {
    display: "grid",
    gridTemplateColumns: "repeat(7, 1fr)",
    gap: "5px",
    backgroundColor: "#fff",
    padding: "1rem",
    borderRadius: "12px",
    width: "100%",
  };

  const dayLabelStyle = {
    textAlign: "center",
    fontWeight: "bold",
    color: secondaryColor,
    padding: "0.5rem",
  };

  const dayBaseStyle = {
    padding: "0.75rem 0.25rem",
    textAlign: "center",
    borderRadius: "8px",
    fontSize: "1rem",
    fontWeight: "500",
    height: "70px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    cursor: "default",
  };

  const dayStyle = (day) => {
    let style = { ...dayBaseStyle };

    if (!day.isCurrentMonth) {
      style.color = "#cbd5e1";
      style.backgroundColor = "#f8fafc";
    } else if (day.isToday) {
      style.backgroundColor = "#fff7ed";
      style.border = `2px solid ${secondaryColor}`;
      style.fontWeight = "bold";
    } else {
      style.backgroundColor = "#e0fdf7";
    }

    if (day.hasCompletedHabit) {
      style.backgroundColor = primaryColor;
      style.color = "white";
      style.fontWeight = "bold";
    }

    return style;
  };

  const statusDotStyle = (color) => ({
    width: "6px",
    height: "6px",
    borderRadius: "50%",
    backgroundColor: color,
    marginTop: "3px",
  });

  return (
    <div style={wrapper}>
      <div style={innerContentContainer}>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-start",
            marginBottom: "1.5rem",
          }}
        >
          <Link
            to="/dashboard"
            style={{
              textDecoration: "none",
              color: secondaryColor,
              fontWeight: "600",
              display: "flex",
              alignItems: "center",
            }}
          >
            <FiArrowLeft style={{ marginRight: "5px" }} /> Back to Dashboard
          </Link>
        </div>

        <div style={header}>
          <h1 style={pageTitle}>
            <FiCalendar style={{ marginRight: "10px", verticalAlign: "middle" }} />
            Habit Calendar View
          </h1>
          <p style={{ color: "#475569" }}>
            Visualize your daily habit completions.
          </p>
        </div>

        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "1rem",
            padding: "0 0.5rem",
          }}
        >
          <button
            onClick={() => changeMonth(-1)}
            style={{
              background: "none",
              border: `2px solid ${primaryColor}`,
              color: primaryColor,
              padding: "0.5rem 1rem",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            &lt; Prev
          </button>
          <h2 style={{ fontSize: "1.8rem", color: darkText, fontWeight: 700 }}>
            {getMonthName(currentDate)}
          </h2>
          <button
            onClick={() => changeMonth(1)}
            style={{
              background: "none",
              border: `2px solid ${primaryColor}`,
              color: primaryColor,
              padding: "0.5rem 1rem",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Next &gt;
          </button>
        </div>

        <div style={calendarGrid}>
          {daysOfWeek.map((day) => (
            <div key={day} style={dayLabelStyle}>
              {day}
            </div>
          ))}

          {generateCalendarDays(currentDate).map((dayObj) => (
            <div
              key={dayObj.key}
              style={dayStyle(dayObj)}
              title={
                dayObj.day
                  ? `Day ${dayObj.day}: ${
                      dayObj.hasCompletedHabit
                        ? "Habit Completed"
                        : dayObj.hasIncompleteHabit
                        ? "Habit Missed"
                        : "No Habits Tracked"
                    }`
                  : ""
              }
            >
              <span style={{ fontSize: "1.2rem", lineHeight: 1 }}>
                {dayObj.day}
              </span>

              {dayObj.isToday && habits.length > 0 && (
                <div
                  style={{
                    display: "flex",
                    gap: "5px",
                    marginTop: "5px",
                  }}
                >
                  {dayObj.hasCompletedHabit && (
                    <div style={statusDotStyle("white")}></div>
                  )}
                  {dayObj.hasIncompleteHabit && (
                    <div style={statusDotStyle("#ef4444")}></div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CalendarView;
