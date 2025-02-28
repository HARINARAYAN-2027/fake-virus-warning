import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Warning from "./pages/Warning";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/warning" element={<Warning />} />
    </Routes>
  );
}

export default App;
