import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from './Login'
import GeratorLotofacil from './components/GeratorLotofacil'
import GeratorLotomania from './components/GeratorLotomania'
import GeratorMegaSena from './components/GeratorMegaSena'

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/GeratorLotofacil' element={<GeratorLotofacil/>}/>
        <Route path='/GeratorLotomania' element={<GeratorLotomania/>}/>
        <Route path='/GeratorMegaSena' element={<GeratorMegaSena/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
