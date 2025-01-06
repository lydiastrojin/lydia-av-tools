import React, { useState } from 'react';
import './App.css';

function App() {
  const [screenSize, setScreenSize] = useState('');
  const [bezelSize, setBezelSize] = useState('');

  const handleScreenSizeChange = (event) => {
    setScreenSize(event.target.value);
  };

  const handleBezelSizeChange = (event) => {
    setBezelSize(event.target.value);
  };

  const calculateDimensions = (size) => {
    if (!size) return null;
    const x = size / Math.sqrt(337);
    const width = 16 * x;
    const height = 9 * x;
    return { width: width.toFixed(2), height: height.toFixed(2) };
  };

  const dimensions = calculateDimensions(screenSize);

  const calculateTotalDimensions = (width, height, bezel) => {
    if (!width || !height || !bezel) return null;
    const totalWidth = parseFloat(width) + 2 * parseFloat(bezel);
    const totalHeight = parseFloat(height) + 2 * parseFloat(bezel);
    return { totalWidth: totalWidth.toFixed(2), totalHeight: totalHeight.toFixed(2) };
  };

  const totalDimensions = calculateTotalDimensions(dimensions?.width, dimensions?.height, bezelSize);

  return (
    <div className="App">
      <h1>Screen Size Input</h1>
      <label>
        Enter screen size (in inches):
        <input
          type="number"
          value={screenSize}
          onChange={handleScreenSizeChange}
          placeholder="Enter size in inches"
        />
      </label>
      {screenSize && (
        <div>
          <p>Your screen size is: {screenSize} inches</p>
          <p>Calculated width: {dimensions?.width} inches</p>
          <p>Calculated height: {dimensions?.height} inches</p>
          <label>
            Enter bezel size (in inches):
            <input
              type="number"
              value={bezelSize}
              onChange={handleBezelSizeChange}
              placeholder="Enter bezel size"
            />
          </label>
          {bezelSize && (
            <div>
              <p>Total width with bezel: 
                <p style={{color: 'green'}}>Total width with bezel: {totalDimensions?.totalWidth} inches</p>
              </p>
              <p>Total height with bezel: 
                <p style={{color: 'green'}}>Total height with bezel: {totalDimensions?.totalHeight} inches</p>
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
