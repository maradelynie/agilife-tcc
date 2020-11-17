import React,{useState} from 'react';

import './style.css';
import CheckBox from '../../components/checkbox';
import {useSelector} from "react-redux";
import {updateTasks} from "../../api";

export default function Tarefa({data,index}) {
  
  const {task,keeper} = data;
  const [status, setstatus] = useState(data.status)
  const {tasks,email} = useSelector(state => state);
  
  const changeStatus = () =>{
    
    setstatus(status => {
      const token = localStorage.getItem("token")
      if(token){
      data.status = !status;
      tasks[index] = data

      updateTasks(tasks,token)

      return !status}
    })
  }
  return (<>
    <div className={status?"tarefa_container done":"tarefa_container default"} >
      <div>
        <div><h4>{task} </h4> <p>{keeper===email?"você":"Parceiro(a)"}</p></div>  
      </div> 
      <CheckBox status={status} changeStatus={changeStatus}/>

    </div>
    </>
  );
}


