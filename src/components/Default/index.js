import React from "react";
import * as C from "./styles";
import Icone from './icon.png'
import "./Default.css"

const Default = () => {
  return (
    <C.Container>
    
      <img className="IconeChat" src={Icone} alt="" />
      <C.Title>ChatApp Pro</C.Title>
      <C.Info> 
        Agora você pode enviar e receber mensagens sem precisar manter seu
        celular conectado à internet.
      </C.Info>
    </C.Container>
  );
}; 

export default Default;
