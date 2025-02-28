import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Warning from "./pages/Warning";
import FakeCrash from "./pages/FakeCrash";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/warning" element={<Warning />} />
        <Route path="/fake-crash" element={<FakeCrash />} />
      </Routes>
    </Router>
  );
}

export default App;

