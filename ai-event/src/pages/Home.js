import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "30px", fontFamily: "Arial", textAlign: "center", maxWidth: "900px", margin: "auto" }}>
      
      {/* 🔥 HEADER */}
      <h1> AI/ML Buildathon & Innovation Hackathon 2026</h1>

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
      <h2> About the Event</h2>
      <p>
        This 2-day AI/ML Buildathon is focused on hands-on learning in Artificial Intelligence,
        Machine Learning, Python, and RAG-based systems. Participants will build real-world AI models,
        automation tools, and innovative solutions through guided sessions and hackathon challenges.
      </p>

      {/* 🔥 LEARNING */}
      <h2> What You Will Learn</h2>
      <ul style={{ textAlign: "left" }}>
        <li>Python for AI & ML</li>
        <li>Machine Learning Basics</li>
        <li>AI Fundamentals</li>
        <li>RAG (AI Automation Systems)</li>
        <li>Build Real AI Models</li>
        <li>Real-world AI Applications</li>
      </ul>

      {/* 🔥 HIGHLIGHTS */}
      <h2> Event Highlights</h2>
      <ul style={{ textAlign: "left" }}>
        <li>Hands-on AI/ML Buildathon</li>
        <li>Live Model Development</li>
        <li>Hackathon Competition</li>
        <li>Quiz Competition</li>
        <li>Model Showcase</li>
      </ul>

      {/* 🔥 NEW (SMALL FUTURE TECH SECTION) */}
      <h2> Future Technology Insights</h2>
      <p style={{ textAlign: "left" }}>
        Short expert insights on emerging technologies such as Quantum Computing,
        Semiconductor systems, Nanotechnology, and future innovations shaping AI and computing.
      </p>
      {/* 🔥 SPECIAL EXPERT INSIGHTS */}
    <h2>🎓 Special Expert Insights</h2>
    
    <p style={{ textAlign: "left" }}>
      Experience high-level expert sessions from distinguished faculty with backgrounds from
      <b> IIT Delhi, IIT Kanpur, IIT BHU and IIM Ahmedabad</b>, bringing together AI, advanced computing,
      and future technologies.
    </p>
    
    <ul style={{ textAlign: "left" }}>
      <li>
        <b>Prof. B.K. Tripathi (Director)</b> – IIT Delhi, IIT Kanpur<br />
        Computational Intelligence, Neural Networks, High-Dimensional Neurocomputing,
        Biometrics, 2D/3D Imaging & Hybrid Computing
      </li>
    
      <li>
        <b>Dr. Kausal Kumar Shukla (Program Convener)</b> – IIT BHU<br />
        Insights on Nanotechnology, Semiconductor Systems & Superconductor Concepts
      </li>
    
      <li>
        <b>Dr. Ambrish Singh (Registrar)</b> – IIM Ahmedabad<br />
        AI/ML Impact on Economy, Innovation & Technology-driven Growth
      </li>
    </ul>
    
    <p style={{ textAlign: "left" }}>
      ⚡ Special sessions include <b>two-phase expert lectures</b> covering both foundational concepts and advanced research insights.
    </p>
      {/* 🔥 TRACKS */}
      <h2> Innovation Tracks</h2>
      <ul style={{ textAlign: "left" }}>
        <li>AI for Social Impact</li>
        <li>Efficient AI Systems</li>
        <li>AI Automation Tools</li>
        <li>Open Innovation Projects</li>
      </ul>

      {/* 🔥 OUTCOMES */}
      <h2> Expected Outcomes</h2>
      <ul style={{ textAlign: "left" }}>
        <li>Build functional AI prototypes</li>
        <li>Gain real-world experience</li>
        <li>Portfolio-ready projects</li>
        <li>Strong technical foundation</li>
      </ul>

      {/* 🔥 PRIZES */}
      <h2> Prizes & Certification</h2>
      <ul style={{ textAlign: "left" }}>
        <li> 1st Prize – Trophy  + Certificate(special recognization)</li>
        <li> 2nd Prize – Trophy  + Certificate(special recognization)</li>
        <li> 3rd Prize – Trophy  + Certificate(special recognization)</li>
        <li> Quiz Winners</li>
        <li> Certificate for All</li>
      </ul>

<hr />
{/* 🔥 ORGANIZING TEAM */}
<h2 style={{ textAlign: "center" }}> Event Leadership & Coordination</h2>

<div style={{
  textAlign: "center",
  marginTop: "20px",
  lineHeight: "1.8"
}}>

  <p>
    <span style={{ color: "#1a3c8b", fontWeight: "bold" }}>Chief Patron</span><br />
    <b>Prof. B.K. Tripathi</b><br />
    <span>Director, REC Azamgarh</span>
  </p>


  <p>
    <span style={{ color: "#1a3c8b", fontWeight: "bold" }}>Program Convener</span><br />
    <b>Dr. Kaushal Kumar Shukla</b><br />
    <span>Director, PCIIF (Innovation Center), REC Azamgarh</span>
  </p>

  <p>
    <span style={{ color: "#1a3c8b", fontWeight: "bold" }}>Organizing Chair</span><br />
    <b>Dr. Ambrish Singh</b><br />
    <span>Registrar, REC Azamgarh</span>
  </p>

  <p>
    <span style={{ color: "#1a3c8b", fontWeight: "bold" }}>Faculty Coordinators</span><br />
    <span>IT Faculty Members</span>
  </p>

<p style={{ textAlign: "center", color: "#555" }}>
  Under the guidance of esteemed faculty and administration
</p>
  <p>
    <span style={{ color: "#1a3c8b", fontWeight: "bold" }}>Event Head</span><br />
    <b>Suraj Kumar Pandey</b><br />
    <span>Final Year, IT (AI/ML Developer & Innovation Enthusiast)</span>
  </p>

</div>
<hr />

{/* 🔥 LEAD INSTRUCTOR */}
<h2 style={{ textAlign: "center" }}>🧑‍💻 Lead Instructor (Technical Sessions)</h2>

<div style={{
  textAlign: "center",
  marginTop: "20px",
  lineHeight: "1.8",
  maxWidth: "800px",
  marginInline: "auto"
}}>

  <p>
    <b style={{ fontSize: "20px" }}>Suraj Kumar Pandey</b><br />
    <span>AI/ML Engineer • IIT Madras (DS/ML) • RAG & LLM Systems • Founder (SurajTechLabs)</span>
  </p>

  <p style={{ marginTop: "10px" }}>
  The hands-on technical sessions and AI/ML training in this event will be conducted by 
  <b> Suraj Kumar Pandey</b>, who will guide participants from fundamentals to building 
  real-world AI systems including Machine Learning models, RAG pipelines, and automation tools.
</p>

  <h4 style={{ marginTop: "20px" }}>🚀 Key Experience & Exposure</h4>

  <ul style={{ textAlign: "left" }}>
    <li>🇩🇪 International AI Exposure – Berlin, Germany (AI Systems & Model Training)</li>
    <li>🏭 Coal India Limited – Data/AI Analytics Intern (Govt. Sector)</li>
    <li>🇮🇳 IndiaAI Hackathon – Mineral Targeting AI System</li>
    <li>🧠 AI Strategy Work with Government-Level Projects</li>
    <li>📊 NIELIT (Govt. of India) – Data Science & AI (Outstanding Grade)</li>
    <li>🤖 Gyanm AI Hub – Full AI System Development (RAG + LLM)</li>
    <li>🚀 Founder – SurajTechLabs (Independent AI Developer)</li>
  </ul>

  <h4 style={{ marginTop: "20px" }}>🛠 Core Expertise</h4>

  <ul style={{ textAlign: "left" }}>
    <li>Machine Learning & Deep Learning</li>
    <li>Large Language Models (LLMs)</li>
    <li>RAG Systems & AI Automation</li>
    <li>Full-Stack AI Development</li>
    <li>Real-world AI Product Development</li>
  </ul>

  <p style={{ marginTop: "15px", fontStyle: "italic" }}>
    ⚡ Learn directly from someone building real AI systems, not just theory.
  </p>

</div>

<hr />
{/* 🔥 CONTACT */}
<h2>📞 Contact & Information</h2>

<p>
  🌐 Website: <a href="https://suraj-portfolio.tech" target="_blank" rel="noreferrer">
    suraj-portfolio.tech
  </a>
</p>

<p>📧 Email: worldforensic@gmail.com</p>
<p>📱 Phone: 7488723028</p>

<h4> Student Coordinators</h4>

<p>
  Anand Chaudhary (Management)<br />
  📞 8601499399
</p>

<p>
  Gudhal chauhan (Registration)<br />
  📞 7453879136
</p>

<p>
  Jitesh Siddhartha<br />
  📞 9695296837
</p>
<hr />
      {/* 🔥 FINAL CTA (UPGRADED) */}
<div style={{
  marginTop: "40px",
  padding: "25px",
  background: "#f5f5f5",
  borderRadius: "15px"
}}>

  <h2> Ready to Build Your First AI Project?</h2>

  <p style={{ fontSize: "16px", marginBottom: "20px" }}>
    Join this 2-day hands-on <b>AI/ML Workshop + Buildathon</b> where you will
    learn, build, compete, and showcase real-world AI models.
  </p>

  <button onClick={() => navigate("/register")} style={btnBlue}>
     Register Now
  </button>

  <button onClick={() => navigate("/ticket")} style={btnGreen}>
    🎟 Get Ticket
  </button>

  <p style={{ marginTop: "15px", fontSize: "14px", color: "#555" }}>
    ⚡ Limited Seats • Hands-on Learning • Certificate Included
  </p>

</div>

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