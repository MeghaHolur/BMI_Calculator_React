import React, { useState } from 'react';
import './App.css'; // Assuming you have a separate CSS file for styling

const BmiCalculator = () => {
  const [weight, setWeight] = useState('');
  const [heightFeet, setHeightFeet] = useState('');
  const [bmi, setBmi] = useState(null);

  const calculateBMI = () => {
    const heightInches = heightFeet * 12;
    const heightInMeters = heightInches * 0.0254; // Convert inches to meters
    const weightInKg = parseFloat(weight);

    if (weightInKg > 0 && heightInMeters > 0) {
      const bmiValue = weightInKg / (heightInMeters * heightInMeters);
      setBmi(bmiValue.toFixed(2));
    } else {
      setBmi(null);
    }
  };

  return (
    <div className="bmi-container">
      <h2>BMI Calculator</h2>
      <div className="input-group">
        <label>Weight (kg):</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Height (feet):</label>
        <input
          type="number"
          value={heightFeet}
          onChange={(e) => setHeightFeet(e.target.value)}
        />
      </div>
      <button onClick={calculateBMI}>Calculate BMI</button>
      {bmi !== null && <p>Your BMI is: {bmi}</p>}
    </div>
  );
};

export default BmiCalculator;
