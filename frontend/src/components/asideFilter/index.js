
import React,{useState} from 'react';
import './style.css';

import { faFilter,faSortDown,faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AsideFilter() {
  const [visible, setVisible] = useState(true)
  const [typeFilter, setTypeFilter] = useState('')
  const [accessFilter, setAccessFilter] = useState('')

  const showFilters = () => {
    setVisible(visible=>!visible)
  }
  const showSubMenu = (el) => {
    el.classList.toggle("hideAside")
  }
  const restoreAll = () => {
    setTypeFilter('')
    setAccessFilter('')
  }

  const filterByType = (type,el) => {
    const anotherItems = document.querySelectorAll("#filter_type li")
    anotherItems.forEach(el => el.classList.remove("selected_item_aside"))
    el.classList.toggle("selected_item_aside")
    setTypeFilter(type)
  }
  const filterByAccess = (type,el) => {
    const anotherItems = document.querySelectorAll("#filter_access li")
    anotherItems.forEach(el => el.classList.remove("selected_item_aside"))
    el.classList.toggle("selected_item_aside")
    setAccessFilter(type)
  }

return (<>
    <div className="filter_icon"><FontAwesomeIcon onClick={showFilters} icon={faFilter}/></div>
    <div onClick={showFilters} className={visible?"filtro_background hideAside":"filtro_background"}></div>
    <div className={visible?"filtro_container hideAside":"filtro_container"}>
      <header className="aside_header "><h5>Filtros</h5><FontAwesomeIcon onClick={showFilters} icon={faTimes}/></header>
      <ul>
        <li className="menu_container" onClick={restoreAll} >Todos</li>
        <li className="menu_container" >
          <div onClick={(e)=>showSubMenu(e.target.nextElementSibling)}>Tipo de conteúdo <FontAwesomeIcon icon={faSortDown}/></div>
          <div className="menu_submenu hideAside">
            <ul id="filter_type">
              <li onClick={(e)=>filterByType("video",e.target)} >Vídeo aula</li>
              <li onClick={(e)=>filterByType("curso",e.target)} >Curso</li>
            </ul>
          </div>
        </li>
        <li className="menu_container" >
          <div onClick={(e)=>showSubMenu(e.target.nextElementSibling)}>Tipo de Acesso <FontAwesomeIcon icon={faSortDown}/></div>
          <div className="menu_submenu hideAside">        
            <ul id="filter_access">
              <li onClick={(e)=>filterByAccess("livre",e.target)}>Com acesso</li>
              <li onClick={(e)=>filterByAccess("pago",e.target)}>Sem acesso </li>
            </ul>
          </div>
      </li>
      </ul>
    </div>
   </>
  );
}
