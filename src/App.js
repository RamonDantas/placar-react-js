import React from 'react';
import './App.css';
import PlacarContainer from './components/PlacarContainer';

const dados = {
  partida: {
    estadio: "Maracanã/RJ",
    data: "01/06/2020",
    horario: "19h",
  },
  casa: {
    nome: "Vasco",
  },
  visitante: {
    nome: "Flamengo",
  }
};

function App() {
  return (
    <div>
      <PlacarContainer {...dados} />
    </div>
  );
}

export default App;
