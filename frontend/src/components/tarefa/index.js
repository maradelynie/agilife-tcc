import React,{useState} from 'react';

import './style.css';
import CheckBox from '../../components/checkbox';
import {useSelector} from "react-redux";
import {updateData} from "../../api";

export default function Tarefa({data,index}) {
  
  const {task,keeper} = data;
  const [status, setstatus] = useState(data.status)
  const {tasks,email,points} = useSelector(state => state);
  
  const changeStatus = () =>{
    setstatus(status => {
      const token = localStorage.getItem("token")
      if(token){
      data.status = !status;
      tasks[index] = data
      const newData = status?{points:points-3,tasks,token}:{points:points+3,tasks,token}
      updateData(newData)

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


