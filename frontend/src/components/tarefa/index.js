import React,{useState} from 'react';

import './style.css';
import CheckBox from '../../components/checkbox';

export default function Tarefa({data}) {
  
  const {task,keeper} = data;
  const [status, setstatus] = useState(data.status)
  
  const changeStatus = () =>{
    setstatus(status => !status)
  }
 
  return (<>
    <div className={status?"tarefa_container done":"tarefa_container default"} >
      <div>
        <div><h4>{task} </h4> <p>{keeper}</p></div>  
      </div> 
      <CheckBox status={status} changeStatus={changeStatus}/>

    </div>
    </>
  );
}


