import React,{useState} from 'react';

import './style.css';
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Checkbox(props) {
  const [status, setStatus] = useState(props.status)
  const [checkedBorder, setCheckedBorders] = useState(status?"border_checked":"")
  
  const acao = () =>{
    const animation = document.querySelector("#animation")
    props.changeStatus()
    if(!status){
      animation.classList.add("gainPoints")
      setTimeout(() => {
        animation.classList.remove("gainPoints")
      }, 500); 
      setCheckedBorders("border_checked")
    }else{
      animation.classList.add("losePoints")
      setTimeout(() => {
        animation.classList.remove("losePoints")
      }, 500); 
      setCheckedBorders("")
    }
    return setStatus((status) => !status)
  }
  const check = () =>{
    if(status) {
      
      return <FontAwesomeIcon className="icon_checked" icon={faCheck}/>
    }
    
  }
  
  return (<>
    <div onClick={acao} className={`Checkbox_container ${checkedBorder}`}>
      {check()}
    </div>
    <div id="animation" className={"points_type"}></div>

    </>
  );
}


