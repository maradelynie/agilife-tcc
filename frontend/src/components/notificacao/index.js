import React from 'react';
import './style.css';

import { faBriefcase,faTasks,faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Notificacao({data}) {
  
  return (             
    <div className="notificacao_container">
      {data.icon==="conteudo"?
        <FontAwesomeIcon className="notification_icon" icon={faBriefcase}/>:
        <></>
      }
      {data.icon==="tarefas"?
        <FontAwesomeIcon className="notification_icon" icon={faTasks}/>:
        <></>
      }
      {data.icon==="administracao"?
        <FontAwesomeIcon className="notification_icon" icon={faAddressCard}/>:
        <></>
      }
      <p>{data.text}</p>
    </div>
    )
  
    

  
}