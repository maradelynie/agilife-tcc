import React,{useState} from 'react';
import './style.css';

import { faFilter,faSortDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Filter(props) {
  const [styleIcon, setStyleIcon] = useState("")
  const [styleMenu, setStyleMenu] = useState("noneDisplay")
  const [styleMenuContainer, setStyleMenuContainer] = useState("")
  const abrirMenu = () => {
    setStyleIcon(styleIcon => {

      if(styleIcon===""){
        return "filtro_icon"
      }
      return ""
    })

    setStyleMenuContainer(styleMenuContainer => {

      if(styleMenuContainer===""){
        return "filtro_container-active"
      }
      return ""
    }) 

    setStyleMenu(styleMenu => {
      if(styleMenu===""){
        return "noneDisplay"
      }
      return ""
    }) 
  }
  const abrirSubmenu = (e) => {
    e.persist()
    if(e.target.lastChild.classList){
      if(e.target.lastChild.classList.contains("noneDisplay")){
        e.target.classList.add("menu_active")
        return e.target.lastChild.classList.remove("noneDisplay")
      }
      e.target.classList.remove("menu_active")

      return e.target.lastChild.classList.add("noneDisplay")
  
    }
    
  }
  const activeItem = (e) => {
    e.persist()
      
      if(e.target.classList.contains("item_active")){
       
        return e.target.classList.remove("item_active")
      }

      return e.target.classList.add("item_active")
  
    
    
  }
  return (<div className={`filtro_container ${styleMenuContainer}`}>
    <FontAwesomeIcon className={styleIcon} onClick={abrirMenu} icon={faFilter}/>
    <div className={styleMenu}>
    
    <div onClick={e => abrirSubmenu(e)}  className={`menu_container`} >Conteúdos <FontAwesomeIcon className="" icon={faSortDown}/>
      <div className="menu_submenu noneDisplay">
        <ul>
          <li  onClick={e => activeItem(e)}  >Todos</li>
          <li  onClick={e => activeItem(e)}>Cursos</li>
          <li onClick={e => activeItem(e)}>Webnars</li>
          <li onClick={e => activeItem(e)}>Seminários</li>
          <li onClick={e => activeItem(e)}>Workshops</li>
          <li onClick={e => activeItem(e)}>Bate Papos</li>
          <li onClick={e => activeItem(e)}>Oficinas</li>
        </ul>
      </div>
    
    
    </div>

    <div onClick={e => abrirSubmenu(e)}  className={`menu_container`} >Data <FontAwesomeIcon className="" icon={faSortDown}/>
      <div className="menu_submenu noneDisplay">        
        <ul>
          <li  onClick={e => activeItem(e)}  >Dia</li>
          <li  onClick={e => activeItem(e)}>Semana</li>
          <li onClick={e => activeItem(e)}>Mês</li>
          <li onClick={e => activeItem(e)}>Todos</li>
        </ul>
      </div>
    </div>
    <div onClick={e => abrirSubmenu(e)}  className={`menu_container-final`} >Localização <FontAwesomeIcon className="" icon={faSortDown}/>
      <div className="menu_submenu noneDisplay">        
        <ul>
          <li  onClick={e => activeItem(e)} >Cidade</li>
          <li  onClick={e => activeItem(e)}>Estado</li>
          <li  onClick={e => activeItem(e)} >País</li>
          <li  onClick={e => activeItem(e)} >Proximidades</li>
        </ul>
      </div>
    </div>
    </div>
   </div>
  );
}
