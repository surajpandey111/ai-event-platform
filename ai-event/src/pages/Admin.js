import React, { useEffect, useState } from "react";

const Admin = () => {
  const [users, setUsers] = useState([]);

  // 🔥 FETCH USERS
  const fetchUsers = async () => {
    const res = await fetch("http://localhost:5000/users");
    const data = await res.json();
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // ✅ APPROVE USER
  const approveUser = async (email) => {
    await fetch("http://localhost:5000/approve-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email })
    });

    fetchUsers(); // refresh
  };

  // ❌ REJECT USER
  const rejectUser = async (email) => {
    await fetch("http://localhost:5000/reject-user", {
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
              <td>{user.txnId}</td>
              <td>
                {user.paymentStatus === "approved" ? "✅ Approved" :
                 user.paymentStatus === "rejected" ? "❌ Rejected" :
                 "⏳ Pending"}
              </td>

              <td>
                <button onClick={() => approveUser(user.email)}>
                  ✅ Approve
                </button>

                <button onClick={() => rejectUser(user.email)} style={{ marginLeft: "10px" }}>
                  ❌ Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;