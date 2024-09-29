import React from "react";
import '../App.css'
import iconfinal from '../assets/iconfinal.jpg'
import Botao from "./Botao";

function Quemsomos (){
return(
    <div className="container-qs">
        <forms className="forms-qs">
        <h1>Fale com a gente ;)</h1>
        <label>Email:</label>
            <input type="email" name="email" id="" placeholder="Digite seu email aqui..." className="input-qs"/>
            <label>Assunto: </label>
            <input type="text" name="assunto" id="" placeholder="Assunto..." className="input-qs"/>
            <label>Mensagem: </label>
            <textarea className="textarea-qs" rows="5" cols="30"></textarea>
            <Botao texto="Enviar"/>
          </forms>
        <div className="creditos">
        <h3 className="h3-qs">Estamos sempre atualizados com as últimas novidades do mercado desde 100 a.C. para oferecer as melhores soluções em informática. Contamos com equipamentos de última geração e softwares especializados para garantir a qualidade dos nossos serviços.</h3>
        <img src={iconfinal} className="img-qs"/>
        <footer><p>@Todos direitos reservados a Gabriel Mira</p></footer>
    </div>
    
    </div>
)
}

export default Quemsomos;