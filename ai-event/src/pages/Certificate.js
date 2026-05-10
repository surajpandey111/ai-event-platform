import React, { useState, useRef } from "react";

const Certificate = () => {
  const [name, setName] = useState("");
  const [found, setFound] = useState(false);

  const canvasRef = useRef(null);

  // ✅ ATTENDED STUDENTS
 const students = [
    "Suraj Kumar Pandey",
    "Anand Chaudhary",
    "Jitesh Siddhartha",
    "Princi Yadav",
    "Kriti Verma",
    "Shilpee Gupta",
    "Ruchi Jha",
    "Anshika Mishra",
    "Saumya Singh",
    "Vaishnavi Mishra",
    "Rajeev Rajesh",
    "Priya Yadav",
    "Sonam Singh",
    "Jagriti Maurya",
    "Saloni",
    "Kritika Pandey",
    "Disha Prajapati",
    "Shalu Maurya",
    "Deepa Singh",
    "Aditi Chaubey",
    "Tripti Gupta",
    "Sadaf",
    "Tanishu Gautam",
    "Gunchal Chauhan",
    "Divyanshi Kumar",
    "Utkarsh Upadhyay",
    "Harshit Pandey",
    "Siddharth Kumar Gautam",
    "Satish Kumar",
    "Avinash Nishad",
    "Chakradhar Dwivedi",
    "Krish Chaurasia",
    "Priyanshu Raj",
    "Shivam Kumar",
    "Mukul Dev Bamniya",
    "Himanshu Kumar",
    "Priyanshu Gupta",
    "Pranshu Shukla",
    "Vansh Katariya",
    "Abhyuday Pratap Singh",
    "Rajat Shaily"
];

  const generateCertificate = () => {
    const exists = students.find(
      (s) => s.toLowerCase() === name.toLowerCase()
    );

    if (!exists) {
      alert("❌ Certificate not found");
      setFound(false);
      return;
    }

    setFound(true);

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const image = new Image();
    image.src = "/certificate-template.png";

    image.onload = () => {
      canvas.width = image.width;
      canvas.height = image.height;

      ctx.drawImage(image, 0, 0);

      // 🔥 STUDENT NAME
      ctx.font = "bold 60px cursive";
      ctx.fillStyle = "#3f2ca0";
      ctx.textAlign = "center";

      ctx.fillText(
        name,
        canvas.width / 2,
        500
      );
    };
  };

  const downloadCertificate = () => {
    const canvas = canvasRef.current;

    const link = document.createElement("a");
    link.download = `${name}_certificate.png`;
    link.href = canvas.toDataURL();

    link.click();
  };

  return (
    <div
      style={{
        textAlign: "center",
        padding: "40px"
      }}
    >
      <h2>📜 Download Certificate</h2>

      <input
        type="text"
        placeholder="Enter your full name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{
          padding: "10px",
          width: "300px",
          borderRadius: "8px",
          border: "1px solid #ccc"
        }}
      />

      <br /><br />

      <button
        onClick={generateCertificate}
        style={{
          padding: "10px 20px",
          background: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer"
        }}
      >
        Generate Certificate
      </button>

      <br /><br />

      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          maxWidth: "900px",
          border: "1px solid #ccc"
        }}
      />

      {found && (
        <>
          <br /><br />

          <button
            onClick={downloadCertificate}
            style={{
              padding: "12px 25px",
              background: "#28a745",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer"
            }}
          >
            📥 Download Certificate
          </button>
        </>
      )}
    </div>
  );
};

export default Certificate;