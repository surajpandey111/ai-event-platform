import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Register from "./pages/Register";
import Ticket from "./pages/Ticket";
import Success from "./pages/Success";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/ticket" element={<Ticket />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>
  );
}

export default App;