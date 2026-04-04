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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      await fetch("https://ai-event-platform.onrender.com/register-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      alert("Registration submitted! Wait for approval ✅");

    } catch (error) {
      console.error(error);
      alert("Error submitting form");
    }
  };

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h2>🚀 AI Innovation Summit 2026</h2>

      <input name="name" placeholder="Full Name" onChange={handleChange} /><br/><br/>
      <input name="email" placeholder="Email" onChange={handleChange} /><br/><br/>
      <input name="phone" placeholder="Phone Number" onChange={handleChange} /><br/><br/>
      <input name="whatsapp" placeholder="WhatsApp Number" onChange={handleChange} /><br/><br/>
      <input name="rollNo" placeholder="Roll No" onChange={handleChange} /><br/><br/>
      <input name="branch" placeholder="Branch" onChange={handleChange} /><br/><br/>
      <input name="year" placeholder="Year" onChange={handleChange} /><br/><br/>
      <input name="college" placeholder="College" onChange={handleChange} /><br/><br/>

      {/* 🔥 QR CODE */}
      <h3>💳 Pay ₹99 via UPI</h3>
      <img 
        src="/upi-qr.png" 
        alt="UPI QR"
        style={{ width: "200px", margin: "20px" }}
      />

      <p>Scan QR → Pay → Enter Transaction ID 👇</p>

      <input 
        name="txnId" 
        placeholder="Enter UPI Transaction ID"
        onChange={handleChange}
      /><br/><br/>

      <button onClick={handleSubmit}>
        ✅ Submit Registration
      </button>
    </div>
  );
};

export default Register;