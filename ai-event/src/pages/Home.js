import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      
      {/* 🔥 HEADER */}
      <div style={{ textAlign: "center" }}>
        <h1>🚀 AI & Advanced Technologies Innovation Summit 2026</h1>
        <p>Hands-on Workshop | Hackathon | Model Showcase</p>

        <div style={{ marginTop: "20px" }}>
          <button
            onClick={() => navigate("/register")}
            style={{
              padding: "12px 25px",
              fontSize: "18px",
              background: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              marginRight: "10px"
            }}
          >
            🚀 Register Now
          </button>

          <button
            onClick={() => navigate("/ticket")}
            style={{
              padding: "12px 25px",
              fontSize: "18px",
              background: "#28a745",
              color: "#fff",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer"
            }}
          >
            🎟 Get Ticket
          </button>
        </div>
      </div>

      <hr />

      {/* 🔥 ABOUT EVENT */}
      <h2>📌 About the Event</h2>
      <p>
        The AI & Advanced Technologies Innovation Summit 2026 is a 2-day intensive technical event focused on 
        real-world AI applications, innovation, and hands-on learning. Participants will build impactful AI solutions 
        and showcase innovative models.
      </p>

      {/* 🔥 OBJECTIVES */}
      <h2>🎯 Objectives</h2>
      <ul>
        <li>Promote hands-on AI/ML learning</li>
        <li>Encourage innovation and research thinking</li>
        <li>Develop real-world problem-solving skills</li>
        <li>Explore AI + Semiconductor + Nanotechnology</li>
        <li>Provide a platform for model showcasing</li>
      </ul>

      {/* 🔥 CORE THEME */}
      <h2>🧠 Core Theme</h2>
      <p><strong>AI for Real-World Impact & Emerging Technologies</strong></p>

      {/* 🔥 TRACKS */}
      <h2>🔥 Event Tracks</h2>

      <h4>🌍 AI for Social Impact</h4>
      <p>Healthcare, Agriculture, Smart Cities, Education</p>

      <h4>⚡ Efficient AI & Edge Systems</h4>
      <p>Lightweight models, low latency, TinyML</p>

      <h4>🔬 AI in Semiconductor & Systems</h4>
      <p>Chip optimization, hardware-aware ML</p>

      <h4>🧪 AI in Nanotechnology & Materials</h4>
      <p>Material prediction, molecular modeling</p>

      <h4>🏆 Open Innovation</h4>
      <p>Any impactful AI/ML project</p>

      {/* 🔥 OUTCOMES */}
      <h2>🏁 Expected Outcomes</h2>
      <ul>
        <li>Functional AI prototypes</li>
        <li>Innovative ideas</li>
        <li>Portfolio-ready projects</li>
      </ul>

      {/* 🔥 JUDGING */}
      <h2>🧑‍⚖️ Judging Criteria</h2>
      <ul>
        <li>Innovation ⭐</li>
        <li>Technical Implementation 🧠</li>
        <li>Real-world Impact 🌍</li>
        <li>Scalability 🚀</li>
        <li>Presentation 🎤</li>
      </ul>

      <hr />

      {/* 🔥 FINAL CTA */}
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <h2>🚀 Ready to Join?</h2>

        <button
          onClick={() => navigate("/register")}
          style={{
            padding: "12px 25px",
            fontSize: "18px",
            background: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            marginRight: "10px"
          }}
        >
          Register Now
        </button>

        <button
          onClick={() => navigate("/ticket")}
          style={{
            padding: "12px 25px",
            fontSize: "18px",
            background: "#28a745",
            color: "#fff",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer"
          }}
        >
          Get Ticket
        </button>
      </div>

    </div>
  );
};

export default Home;