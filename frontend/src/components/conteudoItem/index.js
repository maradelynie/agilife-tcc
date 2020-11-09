import React,{useState} from 'react';
import './style.css';

import { faLock,faLockOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function RecompensaG(props) {
  let lock = faLock;
  let classLock = "item_conteudo";
  const {img,titulo,valor,possui,tipo} = props.data



  if(possui){
    lock =faLockOpen;
     classLock = "trocalock_card-open";
  }

  return (
   <div onClick={() => {if(!possui) return props.setTrocarPontos(valor)}} className="card_conteudo">
     <img src={img} alt={titulo}/>
     <div className={possui?"conteudo_detail-possui clicable":"conteudo_detail clicable"}>
        <p>{tipo}</p>
        <h3>{titulo}</h3>
        
        <div className="trocalock_container"> 
          <div className={classLock}>
            <FontAwesomeIcon   onClick={props.onClick} className="trocalock_icon" icon={lock}/>
          {valor!==0?valor:""}
          </div>
        </div>
     </div>
   </div>
  );
}
