import React from 'react';
import './style.css';

import {useSelector} from "react-redux";

import {updateData,getAllContent} from "../../api";

import {setPoints,setAllContents, setContents} from "../../redux/actions";
import {useDispatch} from "react-redux";

export default function ModalCompra({status,setModal}) {
  const {points,contents} = useSelector(state => state);
  const dispatch = useDispatch();

  const changePoints = async () =>{
    const token = localStorage.getItem("token")
    const data = {
      token,
      points: points-status.value,
      contents: [...contents,status._id]
    }
    await updateData(data)
    
    const dataContent = await getAllContent([...contents,status._id])

    dispatch(setAllContents(dataContent))
    dispatch(setPoints(points-status.value));
    dispatch(setContents([...contents,status._id]));
    setModal(false);
  }

  const showTroca = () =>{
      return(
        <button onClick={changePoints} className="opcaoCompra_card clicable">
          Troque seus pontos pelo conteúdo;
          <h3>{status.value} pontos</h3>
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

  if(status===false){
    return ""
  }

  return (

   <div id="out" onClick={(e)=>{sair(e.target)}} className="modalcompra_container">
      <div className="modalcompra_card">
        <h3>{points} pontos </h3>
        {points>=status.value?<p>como você deseja adquirir esse conteúdo?</p>:<p>você não tem pontos o suficiente para trocar.</p>}
        <div className="opcaoCompra_container" >
        {points>=status.value?showTroca():<></>}
        {showCompra()}
         
        </div>
      </div>
   </div>
  );
}
