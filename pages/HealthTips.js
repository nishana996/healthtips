import React from "react";
import "./HealthTips.css"; // Import the CSS file
import { FaHeartbeat, FaAppleAlt, FaDumbbell, FaBed, FaHandsWash, FaSmile, FaSmokingBan, FaBrain, FaWeight, FaUserMd, FaUsers, FaSun } from "react-icons/fa";

const healthTips = [
  { title: "Stay Hydrated", description: "Water is essential for digestion, circulation, and temperature regulation in the body.", icon: <FaHeartbeat /> },
  { title: "Eat a Balanced Diet", description: "A nutritious diet helps boost immunity, maintain energy, and prevent chronic diseases.", icon: <FaAppleAlt /> },
  { title: "Exercise Regularly", description: "Exercise strengthens muscles, improves heart health, and reduces stress.", icon: <FaDumbbell /> },
  { title: "Get Enough Sleep", description: "Sleep enhances memory, mood, and overall well-being.", icon: <FaBed /> },
  { title: "Practice Good Hygiene", description: "Good hygiene reduces the risk of diseases and infections.", icon: <FaHandsWash /> },
  { title: "Manage Stress", description: "Reducing stress prevents anxiety, depression, and other mental health issues.", icon: <FaSmile /> },
  { title: "Avoid Smoking & Alcohol", description: "Quitting smoking and reducing alcohol intake improves overall health.", icon: <FaSmokingBan /> },
  { title: "Stay Active Mentally", description: "Mental stimulation helps prevent neurodegenerative diseases.", icon: <FaBrain /> },
  { title: "Maintain a Healthy Weight", description: "Healthy weight management prevents chronic diseases.", icon: <FaWeight /> },
  { title: "Get Regular Check-Ups", description: "Early disease detection leads to better treatment outcomes.", icon: <FaUserMd /> },
  { title: "Stay Socially Connected", description: "Strong social connections improve mental and emotional well-being.", icon: <FaUsers /> }, // New Tip
  { title: "Protect Your Skin", description: "Use sunscreen and stay hydrated to maintain healthy skin.", icon: <FaSun /> } // New Tip
];

const HealthTips = () => {
  return (
    <div className="health-tips-container">
      <h1 className="health-tips-title">Health Tips</h1>
      <div className="health-tips-grid">
        {healthTips.map((tip, index) => (
          <div key={index} className="health-tip-card">
            <div className="health-tip-icon">{tip.icon}</div>
            <h2 className="health-tip-title">{tip.title}</h2>
            <p className="health-tip-description">{tip.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthTips;


