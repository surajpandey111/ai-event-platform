import React, { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    whatsapp: "",
    rollNo: "",
    branch: "",
    year: "",
    college: "",
    txnId: ""
  });

  const [whatsappClicked, setWhatsappClicked] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ VALIDATION FUNCTION
  const validateForm = () => {
    const {
      name,
      email,
      phone,
      whatsapp,
      rollNo,
      branch,
      year,
      college,
      txnId
    } = formData;

    if (
      !name ||
      !email ||
      !phone ||
      !whatsapp ||
      !rollNo ||
      !branch ||
      !year ||
      !college ||
      !txnId
    ) {
      alert("⚠️ Please fill all fields");
      return false;
    }

    if (!whatsappClicked) {
      alert("⚠️ Please send screenshot on WhatsApp before submitting");
      return false;
    }

    return true;
  };

  // ✅ SUBMIT
  const handleSubmit = async () => {
    if (!validateForm()) return;

    try {
      await fetch("https://ai-event-platform.onrender.com/register-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      alert("✅ Registration submitted! Wait for approval.");

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        whatsapp: "",
        rollNo: "",
        branch: "",
        year: "",
        college: "",
        txnId: ""
      });

      setWhatsappClicked(false);

    } catch (error) {
      console.error(error);
      alert("❌ Error submitting form");
    }
  };

  return (
    <div
      style={{
        padding: "40px",
        textAlign: "center",
        maxWidth: "600px",
        margin: "auto"
      }}
    >
      <h2>🚀 AI/ML Workshop & Hackathon 2026</h2>

            {/* 🔥 OFFER CARD */}
      <div style={{
        background: "linear-gradient(135deg, #ff4e50, #f9d423)",
        color: "#fff",
        padding: "20px",
        borderRadius: "15px",
        marginBottom: "25px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
      }}>
        <h3 style={{ marginBottom: "10px" }}>
          🔥 Early Bird Offer (Limited Time)
        </h3>
      
        <p style={{ fontSize: "18px", marginBottom: "10px" }}>
          <span style={{ textDecoration: "line-through" }}>₹100</span>
          <span style={{ fontSize: "26px", marginLeft: "10px", fontWeight: "bold" }}>
            ₹49
          </span>
          <span style={{ marginLeft: "10px" }}> (50% OFF)</span>
        </p>
      
        <p style={{ fontWeight: "bold" }}>
          ⚠️ Price will increase soon:
        </p>
      
        <ul style={{ textAlign: "left", marginTop: "10px" }}>
          <li>👉 Next Phase: ₹79</li>
          <li>👉 Last Day: ₹100</li>
          <li>👉 On-Spot Entry: ₹200</li>
        </ul>
      
        <p style={{ marginTop: "10px", fontWeight: "bold", color: "#000" }}>
          ⏳ Limited Seats: Only 200 Available
        </p>
      </div>

      <input name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} /><br /><br />
      <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} /><br /><br />
      <input name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} /><br /><br />
      <input name="whatsapp" placeholder="WhatsApp Number" value={formData.whatsapp} onChange={handleChange} /><br /><br />
      <input name="rollNo" placeholder="Roll No" value={formData.rollNo} onChange={handleChange} /><br /><br />
      <input name="branch" placeholder="Branch" value={formData.branch} onChange={handleChange} /><br /><br />
      <input name="year" placeholder="Year" value={formData.year} onChange={handleChange} /><br /><br />
      <input name="college" placeholder="College" value={formData.college} onChange={handleChange} /><br /><br />

      

      {/* 🔥 PAYMENT */}
      <h3>💳 Only ₹49 Pay via UPI</h3>
        <p style={{ color: "red", fontWeight: "bold" }}>
       🚨 Hurry! Early Bird Discount Ending Soon...
        </p>

      {/* ✅ NEW: UPI INSTANT BUTTON */}
      <a href="upi://pay?pa=7488723028@ibl&pn=Suraj&am=49&cu=INR&tn=AIWorkshop">
        <button
          style={{
            background: "#6f42c1",
            color: "#fff",
            padding: "12px 20px",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            marginBottom: "15px"
          }}
        >
          💳 Pay ₹49 Instantly (Mobile)
        </button>
      </a>

      <p style={{ color: "green" }}>
        ✔ Mobile: Click button | Laptop: Scan QR
      </p>

      {/* 🔥 QR CODE */}
      <img
        src="/upi-qr.png"
        alt="UPI QR"
        style={{ width: "200px", margin: "20px" }}
      />

      <p>Scan QR → Pay → Enter Transaction ID 👇</p>

      <input
        name="txnId"
        placeholder="Enter UPI Transaction ID"
        value={formData.txnId}
        onChange={handleChange}
      /><br /><br />

      {/* 🔥 WHATSAPP VERIFICATION */}
      <p style={{ color: "red", fontWeight: "bold" }}>
        ⚠️ Mandatory: Send payment screenshot on WhatsApp before submitting
      </p>

      <a
        href={`https://wa.me/917488723028?text=Hello%20I%20have%20paid%20for%20AI%20Workshop.%20Txn%20ID:%20${formData.txnId}`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => setWhatsappClicked(true)}
      >
        <button
          style={{
            background: "#25D366",
            color: "#fff",
            padding: "10px 20px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            marginBottom: "20px"
          }}
        >
          📩 Send Screenshot on WhatsApp
        </button>
      </a>

      <br />

      {/* 🔥 SUBMIT */}
      <button
        onClick={handleSubmit}
        style={{
          padding: "12px 25px",
          fontSize: "16px",
          background: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer"
        }}
      >
        ✅ Submit Registration
      </button>
    </div>
  );
};

export default Register;