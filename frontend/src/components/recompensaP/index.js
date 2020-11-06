import React from 'react';
import './style.css';

import { faLock,faLockOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function RecompensaP(props) {
  const {data} = props

  const showClassPontos = (possui,pontos) =>{
    if(!possui){
      if(props.pontos>=pontos){
        return(<div className="trocalock_card-open">
              <FontAwesomeIcon className="trocalock_icon" icon={faLockOpen}/>
              &nbsp;&nbsp;{pontos} pontos 
            </div>
      )
      }
      return(<div className="trocalock_card">
              <FontAwesomeIcon className="trocalock_icon" icon={faLock}/> 
              &nbsp;&nbsp;{pontos} pontos 
            </div>
      )
    }

      return (
        <div className="trocalock_cardP-acessar">
          Acessar
        </div>

      )
   
  }


  return (
    <div className="card_recompensaPContainer">
    {data.map(item=>{
      return(
        <div onClick={() => {if(props.setTrocarPontos) return props.setTrocarPontos(item.pontos)}} className="card_recompensaP">
          <img src={item.img} alt={item.titulo}/>
          <div className="trocalock_detailp">
              <h3>{item.titulo}</h3>
              
              <p>{item.tags}</p>
              {showClassPontos(item.possui,item.pontos)}
          </div>
        </div>
      )}
      
    )}
    </div>

  );
  
}
