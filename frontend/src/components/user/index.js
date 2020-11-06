import React from 'react';
import './style.css';

export default function Alert(props) {

  return (
    <div className="user_container">
      <img className="user_img" alt="imagem de perfil do usuário" src={props.img}/>
    <div className="user_name">{props.name}</div> 
    </div>
  );
}


