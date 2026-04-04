const express = require("express");
const cors = require("cors");
const admin = require("firebase-admin");

// 🔥 FIREBASE INIT
const serviceAccount = JSON.parse(process.env.FIREBASE_KEY);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

const app = express();

// 🔥 MIDDLEWARE
app.use(cors({ origin: "*" }));
app.use(express.json()); // better than bodyParser

// 🔥 TEST ROUTE
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});


/* =====================================================
   ✅ 1. REGISTER USER (WHATSAPP + TXN)
===================================================== */
app.post("/register-user", async (req, res) => {
  try {
    const data = req.body;

    // 🔥 VALIDATION
    if (!data.email || !data.name || !data.txnId) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields"
      });
    }

    // 🔥 SAVE USER
    await db.collection("users").doc(data.email).set({
      name: data.name,
      email: data.email,
      phone: data.phone || "",
      whatsapp: data.whatsapp || "",
      rollNo: data.rollNo || "",
      branch: data.branch || "",
      year: data.year || "",
      college: data.college || "",
      txnId: data.txnId,

      paymentStatus: "pending", // pending → approved manually
      ticketGenerated: false,

      createdAt: new Date()
    });

    res.json({
      success: true,
      message: "Registration successful"
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Error saving user"
    });
  }
});


/* =====================================================
   📥 2. GET ALL USERS (ADMIN PANEL)
===================================================== */
app.get("/users", async (req, res) => {
  try {
    const snapshot = await db.collection("users").get();

    const users = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching users");
  }
});


/* =====================================================
   🔍 3. GET SINGLE USER (FOR TICKET)
===================================================== */
app.get("/user/:email", async (req, res) => {
  try {
    const doc = await db.collection("users").doc(req.params.email).get();

    if (!doc.exists) {
      return res.status(404).send("User not found");
    }

    res.json(doc.data());
  } catch (error) {
    res.status(500).send("Error fetching user");
  }
});


/* =====================================================
   ✅ 4. APPROVE USER
===================================================== */
app.post("/approve-user", async (req, res) => {
  try {
    const { email } = req.body;

    const ticketId = "TICKET_" + Date.now();

    await db.collection("users").doc(email).update({
      paymentStatus: "approved",
      ticketGenerated: true,
      ticketId,
      approvedAt: new Date()
    });

    res.send("User approved");
  } catch (error) {
    res.status(500).send("Error approving user");
  }
});


/* =====================================================
   ❌ 5. REJECT USER
===================================================== */
app.post("/reject-user", async (req, res) => {
  try {
    const { email } = req.body;

    await db.collection("users").doc(email).update({
      paymentStatus: "rejected"
    });

    res.send("User rejected");
  } catch (error) {
    res.status(500).send("Error rejecting user");
  }
});


/* =====================================================
   🎟️ 6. CHECK TICKET
===================================================== */
app.get("/ticket/:email", async (req, res) => {
  try {
    const doc = await db.collection("users").doc(req.params.email).get();

    if (!doc.exists) {
      return res.status(404).send("User not found");
    }

    const user = doc.data();

    if (user.paymentStatus !== "approved") {
      return res.status(403).send("Not approved yet");
    }

    res.json(user);
  } catch (error) {
    res.status(500).send("Error fetching ticket");
  }
});


/* =====================================================
   🚀 START SERVER
===================================================== */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});