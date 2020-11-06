import React,{useState} from 'react';
import './style.css';

import { faLock,faLockOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function RecompensaG(props) {
  let lock = faLock;
  let classLock = "trocalock_card";
  const {img,titulo,tags,pontos} = props.data
  const pontosUser = 60;


  if(pontosUser>=pontos){
    lock =faLockOpen;
     classLock = "trocalock_card-open";
  }

  return (
   <div  onClick={() => {if(props.setTrocarPontos) return props.setTrocarPontos(pontos)}} className="card_recompensa">
     <img src={img} alt={titulo}/>
     <div className="trocalock_detail">
        <h3>{titulo}</h3>
        
        <p>{tags}</p>
        <div className="trocalock_container"> 
          <div className={classLock}>
            <FontAwesomeIcon   onClick={props.onClick} className="trocalock_icon" icon={lock}/>
            
            &nbsp;&nbsp;{pontos} pontos
          </div>
        </div>
     </div>
   </div>
  );
}
