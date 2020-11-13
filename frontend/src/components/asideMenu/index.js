import React from 'react';
import {useHistory} from 'react-router-dom'

import './style.css';

import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Aside({setShowMenu,status}) {
  const history = useHistory();
  
  const goTo = (to) =>{
    setShowMenu()
    history.push(to)
  }

  const logout = () =>{
    localStorage.clear()
    history.push("/")
  }
  
return (<>
    <div onClick={setShowMenu} className={status?"filtro_background hideAside":"filtro_background"}></div>
    <div className={status?"filtro_container hideAside":"filtro_container"}>
      <header className="aside_header-menu"><h5>Menu</h5></header>
      <ul>
        <li onClick={()=>goTo("/user")} className="menu_container" >Perfil</li>
        <li onClick={()=>goTo("/content")} className="menu_container" >Conteúdos</li>
        <li onClick={()=>goTo("/tasks")} className="menu_container" >Atividades</li>
        <li onClick={logout} className="menu_container" >Logout</li>
      </ul>
    </div>
   </>
  );
}