import React, { useEffect, useState } from "react";

const Admin = () => {

  // 🔐 SIMPLE PASSWORD PROTECTION
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const pass = prompt("Enter Admin Password:");

    if (pass === "Suraj@24112003##") {
      setAuthorized(true);
    } else {
      setAuthorized(false);
    }
  }, []);

  if (!authorized) {
    return <h2 style={{ textAlign: "center" }}>❌ Unauthorized Access</h2>;
  }

  const [users, setUsers] = useState([]);
  const API = "https://ai-event-platform.onrender.com";

  const fetchUsers = async () => {
    const res = await fetch(`${API}/admin/users`);
    const data = await res.json();
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const approveUser = async (email) => {
    await fetch(`${API}/admin/approve`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email })
    });

    fetchUsers();
  };

  const rejectUser = async (email) => {
    await fetch(`${API}/admin/reject`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email })
    });

    fetchUsers();
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2>🛠 Admin Dashboard</h2>

      <table border="1" cellPadding="10" style={{ width: "100%", marginTop: "20px" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>College</th>
            <th>Txn ID</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.email}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.college}</td>
              <td>{user.txnId || "N/A"}</td>
              <td>
                {user.paymentStatus === "approved"
                  ? "✅ Approved"
                  : user.paymentStatus === "rejected"
                  ? "❌ Rejected"
                  : "⏳ Pending"}
              </td>

              <td>
                {user.paymentStatus === "pending" && (
                  <>
                    <button onClick={() => approveUser(user.email)}>
                      ✅ Approve
                    </button>

                    <button
                      onClick={() => rejectUser(user.email)}
                      style={{ marginLeft: "10px" }}
                    >
                      ❌ Reject
                    </button>
                  </>
                )}

                {user.paymentStatus === "approved" && (
                  <p>🎟 {user.ticketId}</p>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;