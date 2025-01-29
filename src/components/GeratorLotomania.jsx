import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/GeratorLotomania.css';

function GeratorLotomania() {
  const [display, setDisplay] = useState('');

  function generateRandomNumbers() {
    const numbers = [];
    while (numbers.length < 50) {
      const randomNumber = Math.floor(Math.random() * 100) + 1;
      if (!numbers.includes(randomNumber)) {
        numbers.push(randomNumber);
      }
    }
    const groupedNumbers = [];
    for (let i = 0; i < numbers.length; i += 5) {
      groupedNumbers.push(numbers.slice(i, i + 5).join(', '));
    }
    setDisplay(groupedNumbers.join('\n'));
  }

  return (
    <div>
      <div>
        <Link to="/">
          <button className="voltarLotom">Voltar</button>
        </Link>
      </div>
      <div className="GeratorLotomania">
        <h1>Lotomania</h1>
        <textarea className="Display" value={display || ''} readOnly/>
        <div className="Gerar">
          <button className='gerar' onClick={generateRandomNumbers}>Gerar</button>
        </div>
      </div>
    </div>
  );
}

export default GeratorLotomania;
