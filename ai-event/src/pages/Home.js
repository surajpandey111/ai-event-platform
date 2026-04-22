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

           {/* 🔥 EVENT DATE FLASH */}
     <div style={{
       background: "linear-gradient(90deg, #ff512f, #dd2476)",
       color: "#fff",
       padding: "15px",
       borderRadius: "12px",
       marginTop: "30px",
       fontWeight: "bold",
       fontSize: "18px"
     }}>
        Tentative Dates: 29th & 30th of April (2-Day AI/ML Workshop)||Post-CT Session (Confirmed)
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

{/* 🔥 CERTIFICATION & MENTORSHIP */}
<h2>📜 Certification & Mentorship</h2>

<ul style={{ textAlign: "left", lineHeight: "1.8" }}>
  <li>📜 <b>All Participants</b> – Receive an Official E-Certificate</li>
  <li>⬇️ <b>Certificate Download</b> – Available directly from the website</li>
  <li>🧠 <b>Quiz & Participation</b> – Recognition during sessions</li>
  <li>🚀 <b>Technical Mentorship</b> – Live guidance during workshop sessions</li>
  <li>💡 <b>Project Support</b> – Help in building AI/ML models & ideas</li>
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



{/* 🔥 TECHNICAL PROFILE */}
<h2 style={{ marginTop: "40px" }}>Technical Instructor / Researcher</h2>

<div style={cardStyle}>
  <h3 style={{ margin: 0 }}>Suraj Kumar Pandey</h3>

  <p style={{ fontWeight: "bold", color: "#007bff" }}>
    AI/ML Engineer • Technical Instructor • AI Systems Developer
  </p>

  <p style={{ fontSize: "15px", lineHeight: "1.6" }}>
    🇮🇳 IndiaAI (Govt. of India) Contributor • AI Mineral Targeting Systems <br />
    AI/Data Analytics Trainee Engineer – Coal India Limited (Govt. PSU) <br />
    Technical AI Strategy on Jan Shayak AI (Union Ministry, Govt. of India Project) <br />
    International AI Exposure – Berlin, Germany (Retresco AI Project) <br />
    NICEDT & ICEDET Research Paper Presenter (AI/ML) <br />
    IIT Madras (DS/ML) • Techfest IIT Bombay • NIELIT (Outstanding) <br />
    Expert in LLMs, RAG Systems, Agentic AI & Real-World AI Deployment
  </p>

  <p style={{ marginTop: "10px", fontWeight: "bold", color: "#28a745" }}>
    ⚡ Learn from real-world AI systems & government-level projects
  </p>

</div>

{/* 🔥 ORGANIZING COMMITTEE */}
<h2 style={{ marginTop: "40px" }}>🎯 Organizing Committee</h2>

<div style={{
  display: "flex",
  justifyContent: "center",
  gap: "20px",
  flexWrap: "wrap",
  marginTop: "20px"
}}>

  <div style={committeeCard}>
    <h4>Suraj Kumar Pandey</h4>
  </div>

  <div style={committeeCard}>
    <h4>Rajeev Rajesh</h4>
  </div>

  <div style={committeeCard}>
    <h4>Rajat Shaily</h4>
  </div>

</div>

  {/* 🔥 TEAM SECTION */}
  <h2 style={{ marginTop: "40px" }}>👥 Technical & Support Team</h2>
  
  <div style={{
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "20px"
  }}>
  
    {/* TECH TEAM */}
    <div style={teamBox}>
      <h3 style={{ color: "#007bff" }}>💻 Technical Team</h3>
      <ul style={listStyle}>
        <li>Gudhal Chauhan</li>
        <li>Tanshu Gautam</li>
        <li>Deepanshu Mishra</li>
      </ul>
    </div>
  
    {/* SUPPORT TEAM */}
    <div style={teamBox}>
      <h3 style={{ color: "#28a745" }}>🤝 Support Team</h3>
      <ul style={listStyle}>
        <li>Jitesh Siddhartha</li>
        <li>Sumit Pandey</li>
        <li>------</li>
      </ul>
    </div>
  
  </div>

<hr />
{/* 🔥 CONTACT */}
<h2>📞 Contact & Information</h2>

<p>
  🌐 Website: <a href="https://ai.suraj-portfolio.tech/" target="_blank" rel="noreferrer">
    ai.suraj-portfolio.tech
  </a>
</p>

<p>📧 Email: worldforensic@gmail.com</p>
<p>📱 Phone: 7488723028</p>

<h4> Student Coordinators</h4>

<p>
  Gudhal chauhan  (Management)<br />
  📞 7453879136
</p>

<p>
  Tanshu Gautam (Registration)<br />
  📞 9084510773
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

const cardStyle = {
  background: "#f8f9fa",
  padding: "20px",
  borderRadius: "15px",
  marginTop: "20px",
  boxShadow: "0 5px 20px rgba(0,0,0,0.1)"
};

const teamBox = {
  flex: "1",
  minWidth: "250px",
  background: "#ffffff",
  padding: "20px",
  borderRadius: "15px",
  boxShadow: "0 5px 20px rgba(0,0,0,0.1)"
};

const listStyle = {
  listStyle: "none",
  padding: 0,
  marginTop: "10px",
  lineHeight: "2"
};

const committeeCard = {
  background: "linear-gradient(135deg, #007bff, #00c6ff)",
  color: "#fff",
  padding: "15px 25px",
  borderRadius: "12px",
  boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
  minWidth: "200px"
};

export default Home;