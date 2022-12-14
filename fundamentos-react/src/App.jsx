import "./components/App.css";
import React from "react";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import Card from "./components/layout/Card";
import Aleatorio from "./components/basicos/Aleatorio";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Primeiro from "./components/basicos/Primeiro";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import ListaProdutos from "./components/repeticao/ListaProdutos";
import ParOuImpar from "./components/condicional/ParOuImpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import DiretaPai from "./components/comunicacao/DiretaPai";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import Input from "./components/formulario/Input";
import Contador from './components/contador/Contador'
import Sorteio  from "./components/mega/Sorteio";

export default (_) => (
  <div id="App">
    <h1>Fundamentos React</h1>

    <div className="Cards">
      <Card title="#13 - Sorteio" color="#A020F0">
        <Sorteio qtde={8}></Sorteio>
      </Card>
      <Card title="#12 - Contador" color="#A020F0">
        <Contador numeroInicial={10}></Contador>
      </Card>
      <Card title="#11 - Componente controlado" color="#D8BFD8">
        <Input></Input>
      </Card>
      <Card title="#10 - Comunicação Indireta" color="#CD5C5C">
        <IndiretaPai></IndiretaPai>
      </Card>
      <Card title="#9 - Comunicação Direta" color="#B0E0E6">
        <DiretaPai></DiretaPai>
      </Card>
      <Card title="#8 - Renderização condicional" color="#B8860B">
        <ParOuImpar></ParOuImpar>
        <UsuarioInfo usuario={{ nome: "Fernando" }} />
      </Card>

      <Card title="#7 - Lista Produtos" color="#556B2F">
        <ListaProdutos numero={22}></ListaProdutos>
      </Card>

      <Card title="#6 - Lista alunos" color="#1E90FF">
        <ListaAlunos></ListaAlunos>
      </Card>

      <Card title="#5 - Componentes com filhos" color="#708090">
        <Familia sobrenome="Neubert">
          <FamiliaMembro nome="Henrique" />
          <FamiliaMembro nome="Carla" />
          <FamiliaMembro nome="Renata" />
        </Familia>
      </Card>

      <Card title="#4 - Desafio Aleatório" color="#48D1CC">
        <Aleatorio min={10} max={42}></Aleatorio>
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
