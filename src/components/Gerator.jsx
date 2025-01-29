import React, { useState } from 'react';

function Gerator() {
  const [display, setDisplay] = useState('');

  function generateRandomNumbers() {
    const numbers = [];
    while (numbers.length < 6) {
      const randomNumber = Math.floor(Math.random() * 60) + 1;
      if (!numbers.includes(randomNumber)) {
        numbers.push(randomNumber);
      }
    }
    setDisplay(numbers.join(', '));
  }

  return (
    <div className="Gerator">
      <div className="display">{display}</div>
      <button onClick={generateRandomNumbers}>Gerar</button>
    </div>
  );
}

export default Gerator;
