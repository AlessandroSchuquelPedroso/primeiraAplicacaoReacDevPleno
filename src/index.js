import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { parse } from "@babel/parser";

//componente functional components
function App() {
  // ENTRADA,RODANDO,FIM
  const [estado, setEstado] = useState("ENTRADA");

  //palpites que a maquina deu
  const [palpite, setPalpite] = useState(150);
  const [numeroPalpites, setNumeroPalpites] = useState(1);

  // 0<>300
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(300);

  const iniciarjogo = () => {
    setEstado("RODANDO");
    setMin(0);
    setMax(300);
    setNumeroPalpites(1);
    setPalpite(150);
  };
  if (estado === "ENTRADA") {
    return <button onClick={iniciarjogo}>começar a jogar!</button>;
  }

  const menor = () => {
    setNumeroPalpites(numeroPalpites - 1);
    setMax(palpite);
    const proxPalpite = parseInt((palpite - min) / 2) + min;
    setPalpite(proxPalpite);
  };

  const maior = () => {
    setNumeroPalpites(numeroPalpites + 1);
    setMin(palpite);
    const proxPalpite = parseInt((max - palpite) / 2) + palpite;
    setPalpite(proxPalpite);
  };

  const acertou = () => {
    setEstado("FIM");
  };
  if (estado === "FIM") {
    return (
      <div>
        <p>
          Acertei o numero de {palpite} com {numeroPalpites} chutes!
          <button onClick={iniciarjogo}>Iniciar novamente!</button>
        </p>
      </div>
    );
  }
  return (
    <div className="App">
      <p>O seu numero é {palpite}?</p>
      <p>
        Min: {min} / Max: {max}
      </p>
      <button onClick={menor}>Menor!</button>
      <button onClick={acertou}>Acertou!</button>
      <button onClick={maior}>Maior!</button>
    </div>
  );
}
/////

const rootElement = document.getElementById("root");
ReactDOM.render(<App name="deve pleno" />, rootElement);
