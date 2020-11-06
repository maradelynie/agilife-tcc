import React from 'react';
import {useHistory} from 'react-router-dom'

import './style.css';

import logo from "../../assets/logo.png";

import { faHome,faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Header(props) {
  const history = useHistory();
  let displayClass = "header_nav "

  const iconeEsquerda = () => {
    if(props.voltar){
      return (<>
      <FontAwesomeIcon className="clicable" onClick={history.goBack}icon={faChevronLeft}/>
      
      </>)
    }
  }
  const iconeCentro = () => {
    if(props.text==="casa"){
      return <FontAwesomeIcon className="header_icon" onClick={history.goBack}icon={faHome}/>
    }else if(props.text==="empresa"){
      return <FontAwesomeIcon className="header_icon" icon={faBriefcase}/>

    }else if(props.logo){
      return <img alt="Agilife" src={logo}></img>

    }else{
      return props.text
    }
  }
  const iconeDireita = () => {
    if(props.pontos){
      return <div className="header_direita">{props.pontos} pontos</div>
    }
  }
  return (
    <div className="header">
      <div className={props.voltar||props.logo||props.login?"header_nav":"header_nav-center"}>
        <div  className="header_esquerda" >
          {iconeEsquerda()}
          </div>
        <p>{iconeCentro()}</p>
      
        {iconeDireita()}
      
      </div>
      <div className="header_detail"></div>
      </div>
  );
}


