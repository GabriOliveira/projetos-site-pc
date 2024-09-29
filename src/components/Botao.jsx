import React from "react";
import "../App.css";

function Botao(props) {
  return (
    <div>
      <button class="button-33" role="button">
        {props.texto}
      </button>
    </div>
  );
}

export default Botao;
