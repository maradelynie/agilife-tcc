import React from 'react';

import './style.css';

import {deletContent} from "../../api"
import {useHistory} from 'react-router-dom'

import {setAdmContents} from "../../redux/actions";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";

import { faEdit,faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Content({data}) {
  const history = useHistory();
  const {admContents} = useSelector(state => state);
  const dispatch = useDispatch();
  const {title,value,type,_id} = data;
  const token = localStorage.getItem("token");

  const deleteContent = () => {
    deletContent(_id,token)
    dispatch(setAdmContents(admContents.filter(content => content._id!==_id)))
  }
  return (<>
    <div className="content_container default" >
      <div>
        <div><h4>{title} </h4> <p>{type} | {value} pontos</p></div>  
        
      </div> 
      <div>
        <FontAwesomeIcon onClick={()=>history.push("/homeAdm/"+_id)} className="content_icon clicable" icon={faEdit}/>
        <FontAwesomeIcon onClick={()=>deleteContent()} className="content_icon clicable" icon={faTrashAlt}/>
      </div>
       

    </div>
    </>
  );
}


