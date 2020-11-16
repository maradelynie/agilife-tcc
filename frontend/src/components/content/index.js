import React,{useState} from 'react';

import './style.css';
import { faEdit,faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Content({data}) {
  const {title,value,type} = data;
  const [status, setstatus] = useState(data.status)


 
  return (<>
    <div className="content_container default" >
      <div>
        <div><h4>{title} </h4> <p>{type} | {value} pontos</p></div>  
        
      </div> 
      <div>
        <FontAwesomeIcon onClick={()=>console.log('edit')} className="content_icon clicable" icon={faEdit}/>
        <FontAwesomeIcon onClick={()=>console.log('delet')} className="content_icon clicable" icon={faTrashAlt}/>
      </div>
       

    </div>
    </>
  );
}


