import { useState } from "react";
import Confetti from "react-confetti";

function ConfettiDemo() {
    var intFrameWidth = window.innerWidth / 2;
    var intFrameHeight = window.innerHeight / 2;
  const [IsRunning, setIsRunning] = useState(false);
  const toggleConfetti = () => setIsRunning(!IsRunning);
  const [numParticles, setNumParticles] = useState(200);
  const onParticleChange = (event) => {
    const newNumParticles = parseInt(event.target.value, 10);
    setNumParticles(newNumParticles);
  };
  const [wind, setWind] = useState(0);
  const onWindChange = (event) => {
    const newWind = parseInt(event.target.value, 10);
    setWind(newWind);
  };
  const [gravity, setGravity] = useState(0.1);
  const onGravityChange = (event) => {
    const newGravity = parseInt(event.target.value, 10);
    setGravity(newGravity);
  };
  const buttonText = IsRunning ? "Turn Confetti off" : "Turn Confetti On";
  return (
    <div>
      <div>
        <label htmlFor="num-particles">Num Particles:</label>
        <input
          type="range"
          id="num-particles"
          min="1"
          max="3000"
          step="1"
          value={numParticles}
          onChange={onParticleChange}
        />
      </div>
      <div>
        <label htmlFor="num-wind">Wind:</label>
        <input
          type="range"
          id="num-wind"
          min="0"
          max="5"
          step="0.25"
          value={wind}
          onChange={onWindChange}
        />
      </div>
      <div>
        <label htmlFor="num-gravity">Gravity:</label>
        <input
          type="range"
          id="num-gravity"
          min="0.1"
          max="10.1"
          step="0.25"
          value={gravity}
          onChange={onGravityChange}
        />
      </div>


      <div>
        <button onClick={toggleConfetti}>{buttonText}</button>
      </div>
      <Confetti
        numberOfPieces={numParticles}
        gravity={gravity}
        wind={wind}
        run={IsRunning}
        width = {intFrameWidth}
        height = {intFrameHeight}
       
      />
    </div>
  );
}

export default ConfettiDemo;
