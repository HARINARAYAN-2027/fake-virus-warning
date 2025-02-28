import React from "react";

function FakeCrash() {
  const playAudio = () => {
    const audio = new Audio('path/to/audio/file.mp3');
    audio.play().catch(error => {
      console.error('Error playing audio:', error);
    });
  };

  return (
    <div style={{ background: "black", color: "white", textAlign: "center", padding: "50px" }}>
      <h1>💻 SYSTEM FAILURE!</h1>
      <p>Windows has encountered a critical error and will restart.</p>
      <button id="playButton" onClick={playAudio} style={{ marginTop: "20px", padding: "10px 20px" }}>
        Play Sound
      </button>
    </div>
  );
}

export default FakeCrash;
