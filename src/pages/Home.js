import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const messages = [
    "Checking files...",
    "Scanning system...",
    "Detecting threats...",
    "Malware found!",
    "Trojan virus detected!",
    "Critical security breach!"
  ];

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < messages.length) {
        document.getElementById("scan-status").innerText = messages[index];
        setProgress((prev) => prev + 20);
        index++;
      } else {
        clearInterval(interval);
        navigate("/warning");
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <div className="scanner">
      <h1>🔍 Scanning your system for threats...</h1>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
      <p id="scan-status">Checking files...</p>
    </div>
  );
}

export default Home;
