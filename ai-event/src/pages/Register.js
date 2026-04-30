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
    college: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ SIMPLE VALIDATION
  const validateForm = () => {
    const {
      name,
      email,
      phone,
      whatsapp,
      rollNo,
      branch,
      year,
      college
    } = formData;

    if (
      !name ||
      !email ||
      !phone ||
      !whatsapp ||
      !rollNo ||
      !branch ||
      !year ||
      !college
    ) {
      alert("⚠️ Please fill all fields");
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

      alert("✅ Registration Successful! Now go to Get Ticket 🎟");

      // reset
      setFormData({
        name: "",
        email: "",
        phone: "",
        whatsapp: "",
        rollNo: "",
        branch: "",
        year: "",
        college: ""
      });

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

      {/* 🔥 FREE BADGE */}
      <div style={{
        background: "linear-gradient(135deg, #28a745, #00c853)",
        color: "#fff",
        padding: "20px",
        borderRadius: "15px",
        marginBottom: "25px",
        fontWeight: "bold"
      }}>
        🎉 FREE REGISTRATION OPEN  
        ⚡ Limited Seats: Only 200 Available
      </div>

      {/* FORM */}
      <input name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} /><br /><br />
      <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} /><br /><br />
      <input name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} /><br /><br />
      <input name="whatsapp" placeholder="WhatsApp Number" value={formData.whatsapp} onChange={handleChange} /><br /><br />
      <input name="rollNo" placeholder="Roll No" value={formData.rollNo} onChange={handleChange} /><br /><br />
      <input name="branch" placeholder="Branch" value={formData.branch} onChange={handleChange} /><br /><br />
      <input name="year" placeholder="Year" value={formData.year} onChange={handleChange} /><br /><br />
      <input name="college" placeholder="College" value={formData.college} onChange={handleChange} /><br /><br />

      {/* SUBMIT */}
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
        ✅ Register Now
      </button>

      {/* 🔥 WHATSAPP GROUP JOIN */}
<div style={{ marginTop: "20px" }}>
  <p style={{ fontWeight: "bold", color: "#25D366" }}>
    📢 Join Official WhatsApp Group for Updates
  </p>

  <a
    href="https://chat.whatsapp.com/K3ws6riKLyQILylsQ8ROQ6"
    target="_blank"
    rel="noopener noreferrer"
  >
    <button
      style={{
        background: "#25D366",
        color: "#fff",
        padding: "12px 20px",
        border: "none",
        borderRadius: "10px",
        cursor: "pointer",
        fontSize: "15px"
      }}
    >
      👉 Join WhatsApp Group
    </button>
  </a>
</div>

      <p style={{ marginTop: "15px", color: "gray" }}>
        🎟 After registration, go to "Get Ticket" page
      </p>
    </div>
  );
};

export default Register;