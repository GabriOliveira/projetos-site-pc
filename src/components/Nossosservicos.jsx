import React from "react";
import pc from "../assets/pc.jpg";

import repair from "../assets/repair.jpg";
import "../App.css";
import Botao from "./Botao";

function Nossosservicos() {
  return (
    <div className="container-ns">
      <div className="bloco">
        <div className="texto-ns">
          <h1>Nosso diferencial...</h1>
          <p>
            Precisando de um técnico de confiança para cuidar do seu computador?
            A Nossa assistência oferece serviços especializados em conserto de
            computadores, notebooks e smartphones. Com anos de experiência e um
            atendimento personalizado, garantimos a resolução rápida e eficiente
            de seus problemas. Entre em contato e agende uma visita técnica!
          </p>
          <Botao texto="Mais informações" />
        </div>
        <div className="container-img">
          <img src={pc} className="img-ns" />
        </div>
      </div>
      <div className="bloco">
        <div className="container-img">
          <img src={repair} className="img-ns" />
        </div>
        <div className="texto-ns">
          <h1>Previnir danos</h1>
          <p>
            A importância da manutenção preventiva do computador é inegável. Ao
            realizar tarefas simples como limpeza regular, atualização de
            software e criação de backups, você garante um desempenho otimizado,
            aumenta a vida útil do equipamento e evita problemas maiores no
            futuro. Além disso, a manutenção preventiva protege seus dados
            contra perdas e garante maior segurança, prevenindo ataques de vírus
            e hackers. Investir em cuidados básicos com seu computador é
            essencial para garantir uma experiência de uso mais satisfatória e
            evitar gastos inesperados com reparos.
          </p>
          <Botao texto="Mais informações" />

         
        </div>
      </div>
      
    </div>
  );
}

export default Nossosservicos;
