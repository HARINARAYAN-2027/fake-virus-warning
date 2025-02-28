import React, { useEffect, useState } from "react";
import "../styles/Warning.css";

function Warning() {
  const [audioPlayed, setAudioPlayed] = useState(false);

  useEffect(() => {
    const playSound = () => {
      if (!audioPlayed) {
        const audio = new Audio("/scary-sound.mp3");
        audio.play().catch((error) => console.log("User interaction required:", error));
        setAudioPlayed(true);
      }
    };

    document.addEventListener("click", playSound); // Play when user clicks

    return () => document.removeEventListener("click", playSound);
  }, [audioPlayed]);

  return (
    <div className="warning-container">
      <h1>⚠️ SYSTEM ALERT: Virus Found!</h1>
      
      {/* Auto-play audio */}
      <audio autoPlay>
        <source src="/scary-sound.mp3" type="audio/mpeg" />
      </audio>

      <button onClick={() => window.close()}>Close</button>
    </div>
  );
}

export default Warning;
