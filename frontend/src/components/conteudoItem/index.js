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
  const {img,title,value,link,type,_id} = data
  const confirmAccess = () => {
    if(link!=="") accessContent()
    else setModal({value,_id})
  }

  const accessContent = () => {
    dispatch(setIframe(true))
    dispatch(setIframeUrl(data.link))
  }

  if(link!==""){
    lock =faLockOpen;
     classLock = "trocalock_card-open";
  }
  return (
   <div onClick={confirmAccess} className="card_conteudo">
     <img src={img} alt={title}/>
     <div className={link!==""?"conteudo_detail-possui clicable":"conteudo_detail clicable"}>
        <p>{type}</p>
        <h3>{title}</h3>
        
        <div className="trocalock_container"> 
          <div className={classLock}>
            <FontAwesomeIcon  className="trocalock_icon" icon={lock}/>
          {value!==0?" "+value:""}
          </div>
        </div>
     </div>
   </div>
  );
}
