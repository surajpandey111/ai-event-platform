import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  const [secondsLeft, setSecondsLeft] = useState(15);
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    "/indiaai1.jpg",
    "/indiaai2.jpg",
    "/indiaai3.jpg",
    "/indiaai5.jpg",
    "/indiaai7.jpg",
    "/indiaai8.jpg",
  ];

  // 🔁 SLIDER
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [images.length]);

  // ⏳ TIMER (pause when tab inactive)
  useEffect(() => {
    const timer = setInterval(() => {
      if (!document.hidden) {
        setSecondsLeft((prev) => prev - 1);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // 🔥 AUTO REDIRECT
  useEffect(() => {
    if (secondsLeft <= 0) {
      navigate("/home");
    }
  }, [secondsLeft, navigate]);

  return (
    <div style={overlayStyle}>
      
      {/* ❌ CLOSE BUTTON */}
      <button style={closeBtn} onClick={() => navigate("/home")}>
        ✖
      </button>

      <div style={container}>

        {/* 🔥 OFFER */}
        <div style={offerBanner}>
          🔥 Early Bird: <span style={{ textDecoration: "line-through" }}>₹100</span> → ₹49 (50% OFF)
        </div>

        {/* TITLE */}
        <h1 style={{ color: "#fff" }}>
          🚀 AI/ML Buildathon & Innovation Hackathon 2026
        </h1>

        {/* SUBTITLE */}
        <p style={{ color: "#ccc" }}>
          🇮🇳 IndiaAI Summit Participant <br />
          🇮🇳 IndiaAI Mineral Targeting Contributors
        </p>

        {/* TIMER */}
        <div style={timerStyle}>
          ⏳ Redirecting in {secondsLeft}s
        </div>

        {/* SLIDER */}
        <div style={slider}>
          <img
            src={images[currentSlide]}
            alt="event"
            style={imageStyle}
          />
        </div>

        {/* SEATS */}
        <p style={{ color: "orange", fontWeight: "bold" }}>
          ⚠️ Only 200 Seats Available — Filling Fast!
        </p>

        {/* CTA */}
        <button
          onClick={() => navigate("/register")}
          style={registerBtn}
        >
          🚀 Register Now
        </button>

        {/* 🔥 SKIP BUTTON */}
        <p
          onClick={() => navigate("/home")}
          style={{
            marginTop: "15px",
            color: "#ccc",
            cursor: "pointer",
            textDecoration: "underline"
          }}
        >
          Skip →
        </p>

      </div>
    </div>
  );
};

export default Landing;


/* ================= STYLES ================= */

const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0,0,0,0.92)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 9999
};

const container = {
  textAlign: "center",
  padding: "30px",
  maxWidth: "500px"
};

const closeBtn = {
  position: "absolute",
  top: "20px",
  right: "20px",
  fontSize: "18px",
  background: "#ff4d4d",
  color: "#fff",
  border: "none",
  padding: "8px 12px",
  borderRadius: "6px",
  cursor: "pointer"
};

const offerBanner = {
  background: "#ffe600",
  padding: "10px",
  borderRadius: "10px",
  marginBottom: "20px",
  fontWeight: "bold"
};

const timerStyle = {
  color: "#00ffcc",
  marginBottom: "15px",
  fontWeight: "bold"
};

const slider = {
  margin: "20px 0"
};

const imageStyle = {
  width: "100%",
  height: "250px",
  objectFit: "cover",
  borderRadius: "12px"
};

const registerBtn = {
  padding: "12px 25px",
  fontSize: "16px",
  background: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
  marginTop: "15px"
};