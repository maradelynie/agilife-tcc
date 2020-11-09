import React,{useEffect} from 'react'

import {setLogo,setTitle,setMenu,setNotifications} from "../../redux/actions";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";

import './style.css';

import DiaCasa from '../../components/diaCasa';
// import User from '../../components/user';
import Tarefa from '../../components/tarefa';

export default function Atividades() {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(setTitle("atividades"));
        dispatch(setLogo(false));
        dispatch(setMenu(false));
    }, [])

    const tarefas = [{
        _id: 1,
        nome:"Lavar a louça",
        responsavel: "José",
        hora: "10:00",
        status: false
    },{
        _id: 2,

        nome:"Buscar Luana na creche",
        responsavel: "José",
        hora: "16:00",
        status: false
    },{
        _id: 3,
        nome:"Limpar Banheiro",
        responsavel: "Eliza",
        hora: "18:30",
        status: true
    },{
        _id: 4,
        nome:"Dar comida para Scott",
        responsavel: "Eliza",
        hora: "19:00",
        status: false
    }]
   
    return (<>
        <div className="task_container">
           {tarefas.map(tarefa => <Tarefa key={tarefa._id} dados={tarefa}/>)}
        </div>
        </>
    )
}
