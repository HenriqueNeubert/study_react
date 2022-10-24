import "./components/App.css"
import React from "react";
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import Card from './components/layout/Card'
import Aleatorio from "./components/basicos/Aleatorio";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Primeiro from "./components/basicos/Primeiro";

export default (_) => (
  <div id="App">
    <h1>Fundamentos React</h1>

    <div className="Cards">      

      <Card title="#5 - Componentes com filhos" color="#708090">
        <Familia sobrenome="Neubert">
          <FamiliaMembro nome="Henrique" />
          <FamiliaMembro nome="Carla" />
          <FamiliaMembro nome="Renata" />
        </Familia>
      </Card>

      <Card title="#4 - Desafio Aleatório" color="#48D1CC">
        <Aleatorio min={ 10 }  max={ 42 }>      
        </Aleatorio>
      </Card>

      <Card title="#3 - Fragmento" color="#9370DB">
        <Fragmento />
      </Card>

      <Card title="#2 - Com Parametro" color="#F4A460">
        <ComParametro
          titulo="Situação do aluno"
          aluno="Henrique Neubert"
          nota={3.3}
        />
      </Card>

      <Card title="#1 - Primeiro" color="#FF6347">
        <Primeiro />
      </Card>

    </div>
  </div>
);