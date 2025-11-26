import React from 'react';
import { FiZap } from 'react-icons/fi'; 


const styles = {
    streakIcon: {
        marginRight: '5px',
    },
    streakText: {
        color: '#388E3C', 
        fontWeight: 'bold',
        fontSize: '0.9em',
        display: 'flex',
        alignItems: 'center',
    },
    
};

const HabitList = ({ habits, onToggleHabit }) => {
    return (
       
        <ul className="habit-list">
            {habits.map(habit => (
                <li 
                    key={habit.id} 
                    className={`habit-item ${habit.isCompleted ? 'completed' : ''}`}
                >
                    <input 
                        type="checkbox" 
                        id={`habit-${habit.id}`} 
                        checked={habit.isCompleted}
                        onChange={() => onToggleHabit(habit.id)}
                    />
                    <label htmlFor={`habit-${habit.id}`}>{habit.name}</label>
                    <span className="streak" style={styles.streakText}>
                        <FiZap size={14} color={styles.streakText.color} style={styles.streakIcon} /> 
                        {habit.streak} days
                    </span>
                </li>
            ))}
        </ul>
    );
};

export default HabitList;