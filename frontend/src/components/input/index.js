import React from 'react';
import './style.css';

export default function inputDefault(props) {
  let classInput = "inputDefault" 
  if(props.type==="tarefas"){
    classInput = "inputtarefas"
  }
  if(props.type==="tarefas_hora"){
    classInput = "inputtarefas_hora"
  }

  return (
    <input 
    required={props.required}
    autoComplete={props.autoComplete}
    placeholder={props.placeholder}
    className={classInput}
    type={props.type} 
    onClick={props.onClick} 
    onChange={props.onChange}
    onBlur={props.onBlur}
    value={props.value}
    />
  );
}
