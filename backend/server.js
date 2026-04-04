const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const admin = require("firebase-admin");

// 🔥 FIREBASE INIT
const serviceAccount = JSON.parse(process.env.FIREBASE_KEY);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

const app = express();
app.use(cors({
  origin: "*"
}));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

/* =====================================================
   ✅ 1. REGISTER USER (QR + TXN SYSTEM)
===================================================== */
app.post("/register-user", async (req, res) => {
  try {
    const data = req.body;

    // 🔥 BASIC VALIDATION
    if (!data.email || !data.name || !data.txnId) {
      return res.status(400).send("Missing required fields");
    }

    await db.collection("users").doc(data.email).set({
      ...data,
      paymentStatus: "pending",     // 🔴 pending → approved later
      ticketGenerated: false,
      createdAt: new Date()
    });

    res.send("User registered successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error saving user");
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
   🔍 3. GET SINGLE USER (FOR TICKET PAGE)
===================================================== */
app.get("/user/:email", async (req, res) => {
  try {
    const email = req.params.email;

    const doc = await db.collection("users").doc(email).get();

    if (!doc.exists) {
      return res.status(404).send("User not found");
    }

    res.json(doc.data());
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching user");
  }
});


/* =====================================================
   ✅ 4. APPROVE USER (ADMIN ACTION)
===================================================== */
app.post("/approve-user", async (req, res) => {
  try {
    const { email } = req.body;

    await db.collection("users").doc(email).update({
      paymentStatus: "approved",
      ticketGenerated: true,
      approvedAt: new Date()
    });

    res.send("User approved");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error approving user");
  }
});


/* =====================================================
   ❌ 5. REJECT USER (OPTIONAL)
===================================================== */
app.post("/reject-user", async (req, res) => {
  try {
    const { email } = req.body;

    await db.collection("users").doc(email).update({
      paymentStatus: "rejected"
    });

    res.send("User rejected");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error rejecting user");
  }
});


/* =====================================================
   🎟️ 6. CHECK TICKET STATUS
===================================================== */
app.get("/ticket/:email", async (req, res) => {
  try {
    const email = req.params.email;

    const doc = await db.collection("users").doc(email).get();

    if (!doc.exists) {
      return res.status(404).send("User not found");
    }

    const user = doc.data();

    if (user.paymentStatus !== "approved") {
      return res.status(403).send("Not approved yet");
    }

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching ticket");
  }
});


/* =====================================================
   🚀 START SERVER
===================================================== */
app.listen(5000, () => {
  console.log("🚀 Server running on port 5000");
});