import React from 'react';
import './style.css';

import { faFilter,faSortDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Filter() {


  // const [styleIcon, setStyleIcon] = useState("")
  // const [styleMenu, setStyleMenu] = useState("noneDisplay")
  // const [styleMenuContainer, setStyleMenuContainer] = useState("")
  // const abrirMenu = () => {
  //   setStyleIcon(styleIcon => {

  //     if(styleIcon===""){
  //       return "filtro_icon"
  //     }
  //     return ""
  //   })

  //   setStyleMenuContainer(styleMenuContainer => {

  //     if(styleMenuContainer===""){
  //       return "filtro_container-active"
  //     }
  //     return ""
  //   }) 

  //   setStyleMenu(styleMenu => {
  //     if(styleMenu===""){
  //       return "noneDisplay"
  //     }
  //     return ""
  //   }) 
  // }
  // const abrirSubmenu = (e) => {
  //   e.persist()
  //   if(e.target.lastChild.classList){
  //     if(e.target.lastChild.classList.contains("noneDisplay")){
  //       e.target.classList.add("menu_active")
  //       return e.target.lastChild.classList.remove("noneDisplay")
  //     }
  //     e.target.classList.remove("menu_active")

  //     return e.target.lastChild.classList.add("noneDisplay")
  
  //   }
    
  // }
  // const activeItem = (e) => {
  //   e.persist()
  //     console.log(e.target)
  //     if(e.target.classList.contains("item_active")){
       
  //       return e.target.classList.remove("item_active")
  //     }

  //     return e.target.classList.add("item_active")
  
    
    
  // }

return (<>
    {/* <FontAwesomeIcon icon={faFilter}/> */}
    <div className="filtro_container">
      <header className="filter_header"><h5>Filtros</h5></header>
      <div>
      
      <div className={`menu_container`} >Todos</div>
      <div   className={`menu_container`} >Tipo de conteúdo <FontAwesomeIcon icon={faSortDown}/>
        <div className="menu_submenu noneDisplay">
          <ul>
            <li>Vídeo aula</li>
            <li>Curso</li>
          </ul>
        </div>
      
      
      </div>

      <div   className={`menu_container`} >Acesso <FontAwesomeIcon icon={faSortDown}/>
        <div className="menu_submenu noneDisplay">        
          <ul>
            <li>Com acesso</li>
            <li>Sem acesso </li>
          </ul>
        </div>
      </div>
      </div>
    </div>
   </>
  );
}
