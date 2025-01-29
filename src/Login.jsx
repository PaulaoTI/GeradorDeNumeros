import React from 'react';
import lotofacilImage from './assets/lotofacil.webp'
import lotomaniaImage from './assets/lotomania.webp'
import megaSenaImage from './assets/mega-sena.jpg'
import { Link } from 'react-router-dom'
import './App.css'

function Login() {
  return <div>
      <center><h1>Geradores | Lotérica</h1></center><br />
      <div className="center-container1">
        <img src={lotofacilImage} className="lotofacil" alt="Lotofácil" /><br />
        <Link to={"/GeratorLotofacil"}>
          <button className='acessar'>Acessar</button>
        </Link>
      </div>
      <div className="center-container1">
        <img src={lotomaniaImage} className="lotomania" alt="Lotomania" /><br />
        <Link to={"/GeratorLotomania"}>
          <button className='acessar'>Acessar</button>
        </Link>
      </div>
      <div className="center-container1">
        <img src={megaSenaImage} className="megasena" alt="Mega Sena" /><br />
        <Link to={"/GeratorMegaSena"}>
          <button className='acessar'>Acessar</button>
        </Link>
      </div>
    </div>

}

export default Login;
