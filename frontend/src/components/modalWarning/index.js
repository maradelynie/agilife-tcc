import React from 'react';
import './style.css';

import {setWarning} from "../../redux/actions";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";

export default function Loading() {
  const {warning, warningText} = useSelector(state => state);
  const dispatch = useDispatch();

 

  const sair = (el) => {
    if(el.id==="out"){
      dispatch(setWarning(false))
    }
  }

  if(!warning){
    return ""
  }

  return (
   <div id="out" onClick={(e)=>{sair(e.target)}} className="modalcompra_container">
      <div className="modalcompra_card">
        <h3>Atenção </h3>
        <p>{warningText}</p>  
        <button className="buttonDefault" type="button" onClick={()=>dispatch(setWarning(false))}>ok</button>
      </div>
   </div>
  );
}
