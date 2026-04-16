import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={container}>

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

      {/* 🔥 DATE */}
      <div style={dateBanner}>
        📅 Tentative Dates: 17–18 April (2-Day AI/ML Workshop)
      </div>

      <hr />

      {/* ABOUT */}
      <h2>📌 About the Event</h2>
      <p>
        This 2-day AI/ML Buildathon focuses on hands-on learning in AI, ML, Python,
        and RAG systems. Participants will build real-world AI models and innovative solutions.
      </p>

      {/* LEARNING */}
      <h2>🎯 What You Will Learn</h2>
      <ul style={list}>
        <li>Python for AI</li>
        <li>Machine Learning Basics</li>
        <li>AI Fundamentals</li>
        <li>RAG Systems</li>
        <li>Real-world AI Applications</li>
      </ul>

      {/* HIGHLIGHTS */}
      <h2>🔥 Event Highlights</h2>
      <ul style={list}>
        <li>Hands-on Buildathon</li>
        <li>Live Model Development</li>
        <li>Hackathon + Quiz</li>
        <li>Model Showcase</li>
      </ul>

      {/* PRIZES */}
      <h2>🏆 Prizes & Certification</h2>
      <ul style={list}>
        <li>🥇 1st Prize – Trophy + Certificate + Special Gift(for Future)</li>
        <li>🥈 2nd Prize – Trophy + Certificate + Special Gift(for Future)</li>
        <li>🥉 3rd Prize – Trophy + Certificate + Special Gift(for Future)</li>
        <li>📜 Certificate for All & Mentornship</li>
      </ul>

      <hr />

      {/* 🔥 LEADERSHIP */}
      <h2>🎓 Event Leadership</h2>

      <div style={grid}>

        <div style={card}>
          <h4>Chief Patron</h4>
          <p><b>Prof. B.K. Tripathi</b><br />Director, REC Azamgarh</p>
        </div>

        <div style={card}>
          <h4>Program Convener</h4>
          <p><b>Dr. K.K. Shukla</b><br />Innovation Center</p>
        </div>

        <div style={card}>
          <h4>Organizing Chair</h4>
          <p><b>Dr. Ambrish Singh</b><br />Registrar</p>
        </div>

        <div style={card}>
          <h4>Event Head</h4>
          <p><b>Suraj Kumar Pandey</b><br />AI/ML Developer</p>
        </div>

      </div>

      {/* 🔥 INSTRUCTOR */}
      <h2 style={{ marginTop: "40px" }}>🧠 Technical Instructor</h2>

      <div style={cardStyle}>
        <h3>Suraj Kumar Pandey</h3>

        <p style={{ color: "#007bff", fontWeight: "bold" }}>
          AI/ML Engineer • Instructor • AI Systems Developer
        </p>

        <p>
          🇮🇳 IndiaAI Contributor • Coal India Limited Intern <br />
          🌍 Germany AI Exposure • IIT Madras • NIELIT Certified <br />
          🤖 Expert in LLMs, RAG, AI Systems
        </p>
      </div>

      {/* 🔥 ORGANIZING COMMITTEE */}
      <h2 style={{ marginTop: "40px" }}>📌 Organizing Committee</h2>

      <div style={grid}>
        <div style={card}>Suraj Kumar Pandey</div>
        <div style={card}>Rajeev Rajesh</div>
        <div style={card}>Rajat Shaily</div>
      </div>

      {/* 🔥 TEAM */}
      <h2 style={{ marginTop: "40px" }}>👥 Teams</h2>

      <div style={grid}>

        <div style={teamBox}>
          <h3>💻 Technical Team</h3>
          <ul style={list}>
            <li>Gudhal Chauhan</li>
            <li>Tanshu Gautam</li>
            <li>Deepanshu Mishra</li>
          </ul>
        </div>

        <div style={teamBox}>
          <h3>🤝 Support Team</h3>
          <ul style={list}>
            <li>Jitesh Siddhartha</li>
            <li>Sumit Pandey</li>
          </ul>
        </div>

      </div>

      <hr />

      {/* CONTACT */}
      <h2>📞 Contact</h2>

      <p>📧 worldforensic@gmail.com</p>
      <p>📱 7488723028</p>

      {/* CTA */}
      <div style={cta}>
        <h2>🚀 Ready to Join?</h2>

        <button onClick={() => navigate("/register")} style={btnBlue}>
          Register Now
        </button>

        <button onClick={() => navigate("/ticket")} style={btnGreen}>
          Get Ticket
        </button>

        <p style={{ marginTop: "10px" }}>
          ⚡ Limited Seats • Certificate Included
        </p>
      </div>

    </div>
  );
};

/* ================= STYLES ================= */

const container = {
  padding: "30px",
  textAlign: "center",
  maxWidth: "900px",
  margin: "auto"
};

const dateBanner = {
  background: "linear-gradient(90deg,#ff512f,#dd2476)",
  color: "#fff",
  padding: "15px",
  borderRadius: "10px",
  marginTop: "20px"
};

const grid = {
  display: "flex",
  flexWrap: "wrap",
  gap: "15px",
  justifyContent: "center"
};

const card = {
  background: "#fff",
  padding: "15px",
  borderRadius: "10px",
  boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
  minWidth: "200px"
};

const cardStyle = {
  background: "#f8f9fa",
  padding: "20px",
  borderRadius: "15px",
  marginTop: "20px"
};

const teamBox = {
  background: "#fff",
  padding: "20px",
  borderRadius: "15px",
  minWidth: "250px"
};

const list = {
  textAlign: "left"
};

const cta = {
  marginTop: "40px",
  padding: "20px",
  background: "#f5f5f5",
  borderRadius: "10px"
};

const btnBlue = {
  padding: "12px 25px",
  background: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "10px",
  marginRight: "10px"
};

const btnGreen = {
  padding: "12px 25px",
  background: "#28a745",
  color: "#fff",
  border: "none",
  borderRadius: "10px"
};

export default Home;