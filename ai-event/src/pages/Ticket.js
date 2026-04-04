import React, { useState } from "react";

const Ticket = () => {
  const [email, setEmail] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  const fetchTicket = async () => {
    try {
      const res = await fetch(`https://ai-event-backend.onrender.com/ticket/${email}`);

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
      setError("Error fetching ticket");
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h2>🎟 Get Your Ticket</h2>

      {!user && (
        <>
          <input
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          /><br /><br />

          <button onClick={fetchTicket}>Get Ticket</button>

          {error && <p style={{ color: "red" }}>{error}</p>}
        </>
      )}

      {user && (
        <div
          style={{
            border: "2px solid black",
            padding: "30px",
            marginTop: "20px"
          }}
        >
          <h2>🚀 AI Innovation Summit 2026</h2>

          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>College:</strong> {user.college}</p>
          <p><strong>Branch:</strong> {user.branch}</p>
          <p><strong>Year:</strong> {user.year}</p>

          {/* 🔥 QR CODE */}
          <img
            src={`https://api.qrserver.com/v1/create-qr-code/?data=${user.email}`}
            alt="QR"
          />

          <h3 style={{ color: "green" }}>✅ ENTRY APPROVED</h3>

          {/* 🔥 DOWNLOAD */}
          <button onClick={() => window.print()}>
            Download Ticket
          </button>
        </div>
      )}
    </div>
  );
};

export default Ticket;