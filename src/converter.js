import React, { useState } from 'react';
import './converter.css'; // Assuming you have a separate CSS file for styling

const Converter = () => {
    const [weight, setWeight] = useState('');
    const [heightFeet, setHeightFeet] = useState('');
    const [lbs, setLbs] = useState('');
    const [inch, setInch] = useState('');
    const [bmi, setBmi] = useState(null);
    const [convertedWeight, setConvertedWeight] = useState('');
    const [convertedHeightFeet, setConvertedHeightFeet] = useState('');

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

    const convertWeight = () => {
        const lbsToKg = parseFloat(lbs) * 0.453592; // 1 lbs = 0.453592 kg
        setConvertedWeight(lbsToKg.toFixed(2));
    };

    const convertHeight = () => {
        const inchToFeet = parseFloat(inch) / 12; // 1 inch = 0.0833 feet
        setConvertedHeightFeet(inchToFeet.toFixed(2));
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

            <h2>Weight Converter (lbs to kg)</h2>
            <div className="input-group">
                <label>Weight (lbs):</label>
                <input
                    type="number"
                    value={lbs}
                    onChange={(e) => setLbs(e.target.value)}
                />
            </div>
            <button onClick={convertWeight}>Convert</button>
            {convertedWeight && <p>{lbs} lbs is {convertedWeight} kg</p>}

            <h2>Height Converter (inch to feet)</h2>
            <div className="input-group">
                <label>Height (inch):</label>
                <input
                    type="number"
                    value={inch}
                    onChange={(e) => setInch(e.target.value)}
                />
            </div>
            <button onClick={convertHeight}>Convert</button>
            {convertedHeightFeet && <p>{inch} inch is {convertedHeightFeet} feet</p>}
        </div>
    );
};

export default Converter;
