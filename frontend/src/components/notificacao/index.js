import React from 'react';
import './style.css';
import descanso from "../../assets/iconeBonequinha.png";
import tarefa from "../../assets/iconeTarefaOK.png";
import curso from "../../assets/iconeConteúdo.png";


export default function Notificacao(props) {

  if(props.type==="descanso"){
    return (<div className="notificacao_container">
      <img alt="pessoa dormindo" src={descanso}></img>
      <div>
        <h5>Hora de descansat</h5>
        <p>Parece que você ja fez muitas tarefas hoje, está na hora de descansar.</p>
      </div>
    </div>
  );
  }else if(props.type==="curso"){
    return (<div className="notificacao_container">
      <img alt="tela de aplicativo" src={curso}></img>
      <div>
        <h5>Seu curso está esperando</h5>
        <p>Que tal tirar alguns minutos para continuar seu curso <strong>Aprendendo a Empreender</strong>?</p>
      </div>
    </div>
  )}else{

    if(props.type==="tarefa"){
      return (<div className="notificacao_container">
        <img alt="casa com simbulo de certo" src={tarefa}></img>
        <div>
        <h5>Tarefa Finalizada</h5>
    <p>A tarefa foi concluída por José, somando <strong>+{props.pontos}</strong> na pontuação</p>
      </div>
    
      </div>
      );
    }

  }
}