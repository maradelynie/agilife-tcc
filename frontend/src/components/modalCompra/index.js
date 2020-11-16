import React from 'react';
import './style.css';

import {useSelector} from "react-redux";

import {setPoints} from "../../redux/actions";
import {useDispatch} from "react-redux";

export default function ModalCompra({status,setModal}) {
  const {points} = useSelector(state => state);
  const dispatch = useDispatch();

  const changePoints = () =>{
    // api change the points
    // api put content on user list
    dispatch(setPoints(points-status));
    setModal(false);
  }

  const showTroca = () =>{
      return(
        <button onClick={changePoints} className="opcaoCompra_card clicable">
          Troque seus pontos pelo conteúdo;
          <h3>{status} pontos</h3>
        </button>
      )
  }

  const showCompra = () =>{
    
      return(
        <div className="opcaoCompra2_card">
          <h3>Torne-se Premium</h3>

          {/* <p>Acesso ilimitado a todos os conteúdos</p>
          <div className="displayFlex"><h3>R$ 14,90</h3><h5>/mês</h5></div> */}
        </div>
      )

  }

  const sair = (el) => {
    if(el.id==="out"){
      setModal(false)
    }
  }

  if(!status){
    return ""
  }

  return (
   <div id="out" onClick={(e)=>{sair(e.target)}} className="modalcompra_container">
      <div className="modalcompra_card">
        <h3>{points} pontos </h3>
        {points>=status?<p>como você deseja adquirir esse conteúdo?</p>:<p>você não tem pontos o suficiente para trocar.</p>}
        <div className="opcaoCompra_container" >
        {points>=status?showTroca():<></>}
        {showCompra()}
         
        </div>
      </div>
   </div>
  );
}
