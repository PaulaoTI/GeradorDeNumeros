import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/GeratorMegaSena.css';

function GeratorMegaSena() {
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
    <div>
      <div>
        <Link to="/">
          <button className="voltar">Voltar</button>
        </Link>
      </div>

      <div className="GeratorMegaSena">
        <h1>Mega Sena</h1>
        <input type="text" className="Display" value={display || ''} readOnly />
        <div className="Gerar">
          <button className='gerar' onClick={generateRandomNumbers}>Gerar</button>
        </div>
      </div>
    </div>
  );

}

export default GeratorMegaSena;
