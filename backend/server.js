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
app.use(express.json());

// 🔥 TEST ROUTE
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});


/* =====================================================
   ✅ 1. REGISTER USER (FREE + AUTO TICKET)
===================================================== */
app.post("/register-user", async (req, res) => {
  try {
    const data = req.body;

    // ✅ VALIDATION
    if (!data.email || !data.name) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields"
      });
    }

    const ticketId = "TICKET_" + Date.now();

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

      paymentStatus: "approved",   // 🔥 AUTO APPROVED
      ticketGenerated: true,
      ticketId,

      createdAt: new Date()
    });

    res.json({
      success: true,
      message: "Registration successful",
      ticketId
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
   📥 2. GET ALL USERS (ADMIN PANEL - OPTIONAL)
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
   🔍 3. GET SINGLE USER
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
   🎟️ 4. GET TICKET (DIRECT ACCESS)
===================================================== */
app.get("/ticket/:email", async (req, res) => {
  try {
    const doc = await db.collection("users").doc(req.params.email).get();

    if (!doc.exists) {
      return res.status(404).send("User not found");
    }

    const user = doc.data();

    // 🔥 Already approved always
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