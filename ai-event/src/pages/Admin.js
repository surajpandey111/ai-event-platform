import React, { useEffect, useState } from "react";

const Admin = () => {
  const [authorized, setAuthorized] = useState(false);
  const [checked, setChecked] = useState(false);
  const [users, setUsers] = useState([]);

  const API = "https://ai-event-platform.onrender.com";

  // 🔐 PASSWORD CHECK
  useEffect(() => {
    const pass = prompt("Enter Admin Password:");

    if (pass === "Suraj@24112003##") {
      setAuthorized(true);
    }

    setChecked(true); // mark check done
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

  const approveUser = async (email) => {
    await fetch(`${API}/approve-user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email })
    });

    fetchUsers();
  };

  const rejectUser = async (email) => {
    await fetch(`${API}/reject-user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email })
    });

    fetchUsers();
  };

  // ⏳ WAIT UNTIL PASSWORD CHECK
  if (!checked) {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  }

  // ❌ NOT AUTHORIZED
  if (!authorized) {
    return <h2 style={{ textAlign: "center" }}>❌ Unauthorized Access</h2>;
  }

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