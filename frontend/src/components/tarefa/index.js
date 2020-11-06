import React,{useEffect, useState} from 'react';

import './style.css';
import CheckBox from '../../components/checkbox';


export default function Tarefa(props) {
  const {nome,responsavel,hora} = props.dados;
  const [status, setstatus] = useState(props.dados.status)
  const [classTarefa, setClassTarefa] = useState("default")

  
 useEffect(() => {
  const data = new Date();
  if(data.getHours() > hora.slice(0,2)){
    setClassTarefa ("atrasado")
  }else if(data.getHours() >= hora.slice(0,2) && data.getMinutes() > hora.slice(3,5)){
    setClassTarefa ("atrasado")
  }else{
    setClassTarefa ("default")
  }
  if(status){
    setClassTarefa("feito");
  }
 }, [status,hora])
  
  const changeStatus = () =>{
    setstatus(status => !status)
  }

  return (<>
    <div className={`tarefa_container ${classTarefa}`}>
      <div>
        <div><p><span>{nome} </span> {responsavel}</p></div>  
        <p className="tarefa_hora" >{hora}</p>
      </div> 
      <CheckBox status={status} changeStatus={changeStatus}/>
    </div>
    </>
  );
}


