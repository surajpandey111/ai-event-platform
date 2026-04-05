import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "30px", fontFamily: "Arial", textAlign: "center", maxWidth: "900px", margin: "auto" }}>
      
      {/* 🔥 HEADER */}
      <h1>🚀 AI/ML Workshop & Innovation Hackathon 2026</h1>
      <p>2-Day Hands-on Training | Model Showcase | Hackathon Competition</p>

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

      <hr />

      {/* 🔥 ABOUT EVENT */}
      <h2>📌 About the Event</h2>
      <p>
        This 2-day AI/ML Workshop & Innovation Hackathon is designed to provide hands-on learning 
        in Artificial Intelligence, Machine Learning, and modern technologies. Participants will learn 
        Python, basic ML concepts, AI fundamentals, and build real-world solutions including RAG-based 
        systems, automation tools, and innovative AI models.
      </p>

      {/* 🔥 WHAT YOU WILL LEARN */}
      <h2>🎯 What You Will Learn</h2>
      <ul style={{ textAlign: "left" }}>
        <li>Python for AI & ML</li>
        <li>Basic Machine Learning Concepts</li>
        <li>AI Fundamentals & Terminologies</li>
        <li>RAG (AI Automation Systems)</li>
        <li>Building Simple ML Models</li>
        <li>Real-world AI Applications</li>
      </ul>

      {/* 🔥 EVENT HIGHLIGHTS */}
      <h2>🔥 Event Highlights</h2>
      <ul style={{ textAlign: "left" }}>
        <li>Hands-on AI/ML Workshop</li>
        <li>Live Model Development Sessions</li>
        <li>AI Automation & RAG System Demo</li>
        <li>Innovative Model Showcase</li>
        <li>Hackathon Competition</li>
        <li>Quiz Competition</li>
      </ul>

      {/* 🔥 TRACKS */}
      <h2>🧠 Innovation Tracks</h2>
      <ul style={{ textAlign: "left" }}>
        <li>AI for Social Impact (Healthcare, Agriculture, Education)</li>
        <li>Efficient AI & Edge Systems</li>
        <li>AI-based Automation Tools</li>
        <li>Open Innovation Projects</li>
      </ul>

      {/* 🔥 OUTCOMES */}
      <h2>🏁 Expected Outcomes</h2>
      <ul style={{ textAlign: "left" }}>
        <li>Build functional AI prototypes</li>
        <li>Gain real-world AI development experience</li>
        <li>Portfolio-ready projects</li>
        <li>Strong technical foundation</li>
      </ul>

      {/* 🔥 PRIZES */}
      <h2>🏆 Prizes & Certification</h2>
      <ul style={{ textAlign: "left" }}>
        <li>🥇 1st Prize – Not Disclosed (Cash Prize)</li>
        <li>🥈 2nd Prize – Not Disclosed (Cash Prize)</li>
        <li>🥉 3rd Prize – Not Disclosed (Cash Prize)</li>
        <li>🎖 Quiz Winners & Special Recognition</li>
        <li>📜 Certificate for All Participants</li>
      </ul>

      <hr />

      {/* 🔥 CONTACT */}
      <h2>📞 Contact & Information</h2>

      <p>
        🌐 Website: <a href="https://suraj-portfolio.tech" target="_blank" rel="noreferrer">suraj-portfolio.tech</a>
      </p>
      
      <p>
      Suraj Kumar Pandey & Final Year Students <strong>(ORGANISER)</strong> <br /> <br />
     </p>


      <p>
        📧 Email: worldforensic@gmail.com
      </p>

      <p>
        📱 Phone: 7488723028
      </p>

      <h4>👨‍🎓 Student Coordinators</h4>

      <p>
        Anand Chaudhary (Management Head) <br />
        📞 8601499399 <br />
        📧 anandchaudhary3364@gmail.com
      </p>

      <p>
        Jitesh Siddhartha <br />
        📞 9695296837
      </p>

      <hr />

      {/* 🔥 FINAL CTA */}
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
  );
};

export default Home;