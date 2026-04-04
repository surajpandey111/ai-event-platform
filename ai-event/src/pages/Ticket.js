import React, { useState } from "react";

const Ticket = () => {
  const [email, setEmail] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  const fetchTicket = async () => {
    try {
      const res = await fetch(`https://ai-event-platform.onrender.com/ticket/${email}`);

      if (!res.ok) {
        setError("❌ Not approved or invalid email");
        setUser(null);
        return;
      }

      const data = await res.json();
      setUser(data);
      setError("");
    } catch (err) {
      console.error(err);
      setError("⚠️ Server error. Try again.");
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "40px", maxWidth: "600px", margin: "auto" }}>
      
      <h2>🎟 Get Your Event Ticket</h2>

      {!user && (
        <>
          <input
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              padding: "10px",
              width: "80%",
              borderRadius: "8px",
              border: "1px solid #ccc"
            }}
          /><br /><br />

          <button
            onClick={fetchTicket}
            style={{
              padding: "10px 20px",
              background: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer"
            }}
          >
            Get Ticket
          </button>

          {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
        </>
      )}

      {user && (
        <div
          style={{
            border: "2px solid #000",
            borderRadius: "15px",
            padding: "30px",
            marginTop: "20px",
            background: "#f9f9f9"
          }}
        >
          <h2>🚀 AI/ML Workshop & Hackathon 2026</h2>

          <p><strong>🎫 Ticket ID:</strong> {user.ticketId}</p>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>College:</strong> {user.college}</p>
          <p><strong>Branch:</strong> {user.branch}</p>
          <p><strong>Year:</strong> {user.year}</p>

          {/* 🔥 QR CODE (NOW USING TICKET ID) */}
          <img
            src={`https://api.qrserver.com/v1/create-qr-code/?data=${user.ticketId}`}
            alt="QR"
            style={{ margin: "20px" }}
          />

          <h3 style={{ color: "green" }}>✅ ENTRY APPROVED</h3>

          {/* 🔥 DOWNLOAD BUTTON */}
          <button
            onClick={() => window.print()}
            style={{
              padding: "10px 20px",
              background: "#28a745",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              marginTop: "10px"
            }}
          >
            📥 Download Ticket
          </button>
        </div>
      )}
    </div>
  );
};

export default Ticket;