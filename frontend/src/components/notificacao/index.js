import React from 'react';
import './style.css';

import { faBriefcase,faTasks } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Notificacao({data}) {
  
  return (             
    <div className="notificacao_container">
      {data.icon==="conteudo"?
        <FontAwesomeIcon className="notification_icon" icon={faBriefcase}/>:
        <FontAwesomeIcon className="notification_icon" icon={faTasks}/>
        }
      <p>{data.text}</p>
    </div>
    )
  
    

  
}