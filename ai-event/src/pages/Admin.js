import React, { useEffect, useState } from "react";

const Admin = () => {
  const [authorized, setAuthorized] = useState(false);
  const [checked, setChecked] = useState(false);
  const [users, setUsers] = useState([]);

  const API = "https://ai-event-platform.onrender.com";

  // 🔐 PASSWORD
  useEffect(() => {
    const pass = prompt("Enter Admin Password:");

    if (pass === "Suraj@24112003##") {
      setAuthorized(true);
    }

    setChecked(true);
  }, []);

  // 🔥 FETCH USERS
  const fetchUsers = async () => {
    try {
      const res = await fetch(`${API}/users`);
      const data = await res.json();
      setUsers(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (authorized) {
      fetchUsers();
    }
  }, [authorized]);

  if (!checked) {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  }

  if (!authorized) {
    return <h2 style={{ textAlign: "center" }}>❌ Unauthorized Access</h2>;
  }

  return (
    <div style={{ padding: "30px" }}>
      <h2>🛠 Admin Dashboard (Registrations)</h2>

      <table border="1" cellPadding="10" style={{ width: "100%", marginTop: "20px" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>College</th>
            <th>Branch</th>
            <th>Year</th>
            <th>Ticket ID</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.email}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.college}</td>
              <td>{user.branch}</td>
              <td>{user.year}</td>
              <td>🎟 {user.ticketId}</td>
              <td style={{ color: "green", fontWeight: "bold" }}>
                ✅ Registered
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* 🔥 COUNT */}
      <p style={{ marginTop: "20px", fontWeight: "bold" }}>
        Total Registrations: {users.length}
      </p>
    </div>
  );
};

export default Admin;