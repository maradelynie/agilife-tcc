import React from 'react';
import './style.css';

import Button from '../button';

export default function ModalCOmpra(props) {
 
  const showTroca = () =>{
    if(props.pontosEmpresa>=props.pontos){
      return(
        <div className="opcaoCompra_card">
          Trocar pontos pelo conteúdo
            <Button className="buton_compra" type="button" text={`${props.pontos} pontos`}></Button>
        </div>
      )
    }
   
      return(
        <div className="opcaoCompra_card-off">
          Opa, parece que você não possui pontos suficientes
            <Button className="buton_compra" type="button" text={`${props.pontos} pontos`}></Button>
        </div>
      )
    
   
  }
  const showCompra = () =>{
    if(props.pontosEmpresa>=props.pontos){
      return(
        <div className="opcaoCompra2_card">
          <h3>Torne-se Premium</h3>
          <p>Acesso ilimitado a todos os conteúdos</p>
          <div className="displayFlex"><h3>R$ 14,90</h3><h5>/mês</h5></div>
        </div>
      )
      
    }
   
    return(
      <div className="opcaoCompra2_card-active">
        <h3>Torne-se Premium</h3>
        <p>Acesso ilimitado a todos os conteúdos</p>
        <div><h3>R$ 14,90</h3><h5>/mês</h5></div>
      </div>
    )
    
   
  }

  const sair = (el) => {
    if(el.id==="out"){
      console.log("out")
      props.setStatus(false)
    }
  }
  if(!props.status){
    return ""
  }
  return (
   <div id="out" onClick={(e)=>{sair(e.target)}} className="modalcompra_container">
      <div className="modalcompra_card">
        <Button  type="button" text={`${props.pontosEmpresa} pontos`}></Button>
        <p>como você deseja adquirir esse conteúdo?</p>
        <div className="opcaoCompra_container" >
        {showTroca()}
        {showCompra()}
         
        </div>
      </div>
   </div>
  );
}
