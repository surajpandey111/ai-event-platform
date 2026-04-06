import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "30px", fontFamily: "Arial", textAlign: "center", maxWidth: "900px", margin: "auto" }}>
      
      {/* 🔥 HEADER */}
      <h1>🚀 AI/ML Buildathon & Innovation Hackathon 2026</h1>

      <p style={{ fontSize: "18px" }}>
        Build Real AI Projects | Hackathon | Quiz | Model Showcase
      </p>

      <div style={{ marginTop: "20px" }}>
        <button onClick={() => navigate("/register")} style={btnBlue}>
          🚀 Register Now
        </button>

        <button onClick={() => navigate("/ticket")} style={btnGreen}>
          🎟 Get Ticket
        </button>
      </div>

      <hr />

      {/* 🔥 ABOUT */}
      <h2>📌 About the Event</h2>
      <p>
        This 2-day AI/ML Buildathon is focused on hands-on learning in Artificial Intelligence,
        Machine Learning, Python, and RAG-based systems. Participants will build real-world AI models,
        automation tools, and innovative solutions through guided sessions and hackathon challenges.
      </p>

      {/* 🔥 LEARNING */}
      <h2>🎯 What You Will Learn</h2>
      <ul style={{ textAlign: "left" }}>
        <li>Python for AI & ML</li>
        <li>Machine Learning Basics</li>
        <li>AI Fundamentals</li>
        <li>RAG (AI Automation Systems)</li>
        <li>Build Real AI Models</li>
        <li>Real-world AI Applications</li>
      </ul>

      {/* 🔥 HIGHLIGHTS */}
      <h2>🔥 Event Highlights</h2>
      <ul style={{ textAlign: "left" }}>
        <li>Hands-on AI/ML Buildathon</li>
        <li>Live Model Development</li>
        <li>Hackathon Competition</li>
        <li>Quiz Competition</li>
        <li>Model Showcase</li>
      </ul>

      {/* 🔥 NEW (SMALL FUTURE TECH SECTION) */}
      <h2>⚡ Future Technology Insights</h2>
      <p style={{ textAlign: "left" }}>
        Short expert insights on emerging technologies such as Quantum Computing,
        Semiconductor systems, Nanotechnology, and future innovations shaping AI and computing.
      </p>

      {/* 🔥 TRACKS */}
      <h2>🧠 Innovation Tracks</h2>
      <ul style={{ textAlign: "left" }}>
        <li>AI for Social Impact</li>
        <li>Efficient AI Systems</li>
        <li>AI Automation Tools</li>
        <li>Open Innovation Projects</li>
      </ul>

      {/* 🔥 OUTCOMES */}
      <h2>🏁 Expected Outcomes</h2>
      <ul style={{ textAlign: "left" }}>
        <li>Build functional AI prototypes</li>
        <li>Gain real-world experience</li>
        <li>Portfolio-ready projects</li>
        <li>Strong technical foundation</li>
      </ul>

      {/* 🔥 PRIZES */}
      <h2>🏆 Prizes & Certification</h2>
      <ul style={{ textAlign: "left" }}>
        <li>🥇 1st Prize – Cash + Certificate</li>
        <li>🥈 2nd Prize – Cash + Certificate</li>
        <li>🥉 3rd Prize – Cash + Certificate</li>
        <li>🎖 Quiz Winners</li>
        <li>📜 Certificate for All</li>
      </ul>

      <hr />

      {/* 🔥 FINAL CTA */}
      <h2>🚀 Ready to Build Your First AI Project?</h2>

      <button onClick={() => navigate("/register")} style={btnBlue}>
        Register Now
      </button>

    </div>
  );
};

/* BUTTON STYLES */
const btnBlue = {
  padding: "12px 25px",
  fontSize: "18px",
  background: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
  marginRight: "10px"
};

const btnGreen = {
  padding: "12px 25px",
  fontSize: "18px",
  background: "#28a745",
  color: "#fff",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer"
};

export default Home;