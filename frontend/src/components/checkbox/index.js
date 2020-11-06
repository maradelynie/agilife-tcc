import React,{useState} from 'react';

import './style.css';
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Checkbox(props) {
  const [status, setStatus] = useState(props.status)
  const [checkedBorder, setCheckedBorders] = useState(status?"border_checked":"")
  
  const acao = () =>{
    props.changeStatus()
    if(!status){
      setCheckedBorders("border_checked")
    }else{
      setCheckedBorders("")
    }
    return setStatus((status) => !status)
  }
  const check = () =>{
    if(status) {
      
      return <FontAwesomeIcon className="icon_checked" icon={faCheck}/>
    }
    
  }
  
  return (
    <div onClick={acao} className={`Checkbox_container ${checkedBorder}`}>
      {check()}
    </div>
  );
}


