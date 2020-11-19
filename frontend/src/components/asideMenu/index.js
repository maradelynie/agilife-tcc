import React from 'react';
import {useHistory} from 'react-router-dom'

import './style.css';

export default function AsideMenu({setShowMenu,status,type}) {
  const history = useHistory();
  
  const goTo = (to) =>{
    setShowMenu()
    history.push(to)
  }

  const logout = () =>{
    localStorage.clear()
    setShowMenu()
    history.push("/")
  }
  const showItens = () =>{
    if(type){return (<>
      <li onClick={()=>goTo("/homeAdm")} className="menu_container" >Início</li>
      <li onClick={()=>goTo("/contentAdm")} className="menu_container" >Gerenciar Conteúdo</li>
      <li onClick={logout} className="menu_container" >Logout</li>
    </>
  )}
    return (<>
        <li onClick={()=>goTo("/home")} className="menu_container" >Início</li>
        <li onClick={()=>goTo("/user")} className="menu_container" >Perfil</li>
        <li onClick={()=>goTo("/content")} className="menu_container" >Conteúdos</li>
        <li onClick={()=>goTo("/tasks")} className="menu_container" >Atividades</li>
        <li onClick={logout} className="menu_container" >Logout</li>
      </>
    )
  }
  
return (<>
    <div onClick={setShowMenu} className={status?"filtro_background hideAside":"filtro_background"}></div>
    <div className={status?"filtro_container hideAside":"filtro_container"}>
      <header className="aside_header-menu"><h5>Menu</h5></header>
      <ul>
        {showItens()}
        
      </ul>
    </div>
   </>
  );
}