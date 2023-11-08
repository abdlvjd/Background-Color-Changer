import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [backgroundColor, setBackgroundColor] = useState('white');

  const changeBackgroundColor = (color) => {
    setBackgroundColor(color);
  };

  return (
    <div className="main" style={{ backgroundColor }}>
      <h1>Background Color Change</h1>
      <div className="button-container button-main">
        <button className='red' onClick={() => changeBackgroundColor('red')}>Red</button>
        <button className='green' onClick={() => changeBackgroundColor('green')}>Green</button>
        <button className='yellow' onClick={() => changeBackgroundColor('yellow')}>Yellow</button>
        <button className='orange' onClick={() => changeBackgroundColor('orange')}>Orange</button>
      </div>
    </div>
  );
};

export default App;
