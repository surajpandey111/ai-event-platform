import React, { useState, useRef } from "react";

const Certificate = () => {
  const [name, setName] = useState("");
  const [student, setStudent] = useState(null);

  const canvasRef = useRef(null);

  // ✅ ATTENDED STUDENTS
  const students = [
    {
      name: "Suraj Kumar Pandey",
      year: "4th Year",
      department: "IT"
    },
    {
      name: "Anand Chaudhary",
      year: "3rd Year",
      department: "CE"
    },
    {
      name: "Jitesh Siddhartha",
      year: "2nd Year",
      department: "IT"
    },
    {
      name: "PRINCI YADAV",
      year: "1st Year",
      department: "IT"
    },
    {
      name: "KRITI VERMA",
      year: "1st Year",
      department: "IT"
    },
    {
      name: "Shilpee Gupta",
      year: "3rd Year",
      department: "IT"
    },
    {
      name: "Ruchi Jha",
      year: "3rd Year",
      department: "ME"
    },
    {
      name: "Anshika Mishra",
      year: "3rd Year",
      department: "ME"
    },
    {
      name: "SAUMYA SINGH",
      year: "4th Year",
      department: "IT"
    },
    {
      name: "VAISHNAVI MISHRA",
      year: "4th Year",
      department: "IT"
    },
    {
      name: "RAJEEV RAJESH",
      year: "4th Year",
      department: "IT"
    },
    {
      name: "PRIYA YADAV",
      year: "4th Year",
      department: "CE"
    },
    {
      name: "SONAM SINGH",
      year: "2nd Year",
      department: "IT"
    },
    {
      name: "JAGRITI MAURYA",
      year: "2nd Year",
      department: "IT"
    },
    {
      name: "SALONI",
      year: "2nd Year",
      department: "IT"
    },
    {
      name: "Kritika Pandey",
      year: "2nd Year",
      department: "IT"
    },
    {
      name: "Disha Prajapati",
      year: "2nd Year",
      department: "IT"
    },
    {
      name: "Shalu Maurya",
      year: "2nd Year",
      department: "IT"
    },
    {
      name: "DEEPA SINGH",
      year: "2nd Year",
      department: "IT"
    },
    {
      name: "Aditi Chaubey",
      year: "2nd Year",
      department: "IT"
    },
    {
      name: "Tripti Gupta",
      year: "2nd Year",
      department: "IT"
    },
    {
      name: "Sadaf",
      year: "2nd Year",
      department: "IT"
    },
    {
      name: "Tanshu Gautam",
      year: "3rd Year",
      department: "IT"
    },
    {
      name: "Gudhal Chauhan",
      year: "3rd Year",
      department: "IT"
    },
    {
      name: "Divyansh Kumar",
      year: "1st Year",
      department: "IT"
    },
    {
      name: "Utkarsh Upadhyay",
      year: "2nd Year",
      department: "CE"
    },
    {
      name: "Harshit Pandey",
      year: "2nd Year",
      department: "IT"
    },
    {
      name: "SIDDHARTH KUMAR GAUTAM",
      year: "2nd Year",
      department: "ME"
    },
    {
      name: "Satish Kumar",
      year: "1st Year",
      department: "IT"
    },
    {
      name: "Avinash Nishad",
      year: "1st Year",
      department: "IT"
    },
    {
      name: "Chakradhar Dwivedi",
      year: "1st Year",
      department: "IT"
    },
    {
      name: "Krish Chaurasia",
      year: "1st Year",
      department: "ME"
    },
    {
      name: "Priyanshu Raj",
      year: "1st Year",
      department: "ME"
    },
    {
      name: "Shivam Kumar",
      year: "1st Year",
      department: "IT"
    },
    {
      name: "Mukul Dev Bamniya",
      year: "1st Year",
      department: "IT"
    },
    {
      name: "Himanshu Kumar",
      year: "1st Year",
      department: "IT"
    },
    {
      name: "Priyanshu Gupta",
      year: "1st Year",
      department: "ME"
    },
    {
      name: "Pranshu Shukla",
      year: "2nd Year",
      department: "ME"
    },
    {
      name: "Vansh Katariya",
      year: "2nd Year",
      department: "IT"
    },
    {
      name: "Abhyuday Pratap Singh",
      year: "2nd Year",
      department: "IT"
    },
    {
      name: "Rajat Shaily",
      year: "4th Year",
      department: "IT"
    }
  ];

  // ✅ GENERATE CERTIFICATE
  const generateCertificate = () => {
    const foundStudent = students.find(
      (s) => s.name.toLowerCase() === name.toLowerCase()
    );

    if (!foundStudent) {
      alert("❌ Certificate not found");
      setStudent(null);
      return;
    }

    setStudent(foundStudent);

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const image = new Image();
    image.src = "/certificate-template.png";

    image.onload = () => {
      canvas.width = image.width;
      canvas.height = image.height;

      ctx.drawImage(image, 0, 0);

      // 🔥 STUDENT NAME
      ctx.font = "bold 58px cursive";
      ctx.fillStyle = "#4338ca";
      ctx.textAlign = "center";

      // ✅ PERFECT POSITION
      ctx.fillText(
        foundStudent.name,
        canvas.width / 2,
        620
      );

      // 🔥 YEAR + DEPARTMENT
      ctx.font = "bold 28px Arial";
      ctx.fillStyle = "#111";

      ctx.fillText(
        `${foundStudent.year} • ${foundStudent.department}`,
        canvas.width / 2,
        690
      );
    };
  };

  // ✅ DOWNLOAD
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
          padding: "12px",
          width: "320px",
          borderRadius: "10px",
          border: "1px solid #ccc"
        }}
      />

      <br /><br />

      <button
        onClick={generateCertificate}
        style={{
          padding: "12px 24px",
          background: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer",
          fontSize: "16px"
        }}
      >
        🔍 Generate Certificate
      </button>

      <br /><br />

      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          maxWidth: "1000px",
          border: "2px solid #ddd",
          borderRadius: "12px"
        }}
      />

      {student && (
        <>
          <br /><br />

          <button
            onClick={downloadCertificate}
            style={{
              padding: "14px 28px",
              background: "#28a745",
              color: "#fff",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "bold"
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