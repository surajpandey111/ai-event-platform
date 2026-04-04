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
    txnId: "",
    screenshot: null
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, screenshot: e.target.files[0] });
  };

  const handleSubmit = async () => {
    try {
      const data = new FormData();

      Object.keys(formData).forEach((key) => {
        data.append(key, formData[key]);
      });

      await fetch("https://ai-event-platform.onrender.com/register-user", {
        method: "POST",
        body: data
      });

      alert("✅ Registration submitted! Wait for approval.");

    } catch (error) {
      console.error(error);
      alert("❌ Error submitting form");
    }
  };

  return (
    <div style={{ padding: "40px", textAlign: "center", maxWidth: "600px", margin: "auto" }}>
      <h2>🚀 AI/ML Workshop & Hackathon 2026</h2>

      <input name="name" placeholder="Full Name" onChange={handleChange} /><br /><br />
      <input name="email" placeholder="Email" onChange={handleChange} /><br /><br />
      <input name="phone" placeholder="Phone Number" onChange={handleChange} /><br /><br />
      <input name="whatsapp" placeholder="WhatsApp Number" onChange={handleChange} /><br /><br />
      <input name="rollNo" placeholder="Roll No" onChange={handleChange} /><br /><br />
      <input name="branch" placeholder="Branch" onChange={handleChange} /><br /><br />
      <input name="year" placeholder="Year" onChange={handleChange} /><br /><br />
      <input name="college" placeholder="College" onChange={handleChange} /><br /><br />

      {/* 🔥 PAYMENT */}
      <h3>💳 Pay via UPI</h3>

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
      /><br /><br />

      {/* 🔥 SCREENSHOT UPLOAD */}
      <p><b>Upload Payment Screenshot (Optional but recommended)</b></p>

      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
      /><br /><br />

      {/* 🔥 WHATSAPP VERIFICATION */}
      <p style={{ color: "red", fontWeight: "bold" }}>
        ⚠️ Send screenshot on WhatsApp for faster approval
      </p>

      <a
        href={`https://wa.me/917488723028?text=Hello%20I%20have%20paid%20for%20AI%20Workshop.%20Txn%20ID:%20${formData.txnId}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <button style={{
          background: "#25D366",
          color: "#fff",
          padding: "10px 20px",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          marginBottom: "20px"
        }}>
          📩 Send Screenshot on WhatsApp
        </button>
      </a>

      {/* 🔥 SUBMIT */}
      <br />

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