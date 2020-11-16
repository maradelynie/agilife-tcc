import React,{useState} from 'react';
import './style.css';

import {setIframe,setIframeUrl} from "../../redux/actions";
import {useDispatch} from "react-redux";

import { faLock,faLockOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ConteudoItem({data,setModal}) {
  const dispatch = useDispatch();
  
  let lock = faLock;
  let classLock = "item_conteudo";
  const {img,titulo,valor,possui,tipo} = data

  const confirmAccess = () => {
    if(possui) accessContent()
    else setModal(valor)
  }

  const accessContent = () => {
    dispatch(setIframe(true))
    dispatch(setIframeUrl(data.url))
  }

  if(possui){
    lock =faLockOpen;
     classLock = "trocalock_card-open";
  }
  return (
   <div onClick={confirmAccess} className="card_conteudo">
     <img src={img} alt={titulo}/>
     <div className={possui?"conteudo_detail-possui clicable":"conteudo_detail clicable"}>
        <p>{tipo}</p>
        <h3>{titulo}</h3>
        
        <div className="trocalock_container"> 
          <div className={classLock}>
            <FontAwesomeIcon  className="trocalock_icon" icon={lock}/>
          {valor!==0?valor:""}
          </div>
        </div>
     </div>
   </div>
  );
}
