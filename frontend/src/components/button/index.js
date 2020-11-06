import React from 'react';
import './style.css';

export default function Button(props) {
  let type = props.type;
  let classButton = "buttonDefault";
  
  
  
  if(type==="add"){
    type = "button";
    classButton = "buttonAdd";
  }
  if(type==="pontos"){
    type = "button";
    classButton = "buttonPontos";
  }
  if(type==="off"){
    type = "button";
    classButton = "buttonOff";
  }
  return (
    <button className={classButton} type={type} onClick={props.onClick}>{props.text}</button>
  );
}


