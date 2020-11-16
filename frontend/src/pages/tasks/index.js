import React,{useEffect} from 'react'
import {useHistory} from 'react-router-dom'

import {setLogo,setTitle,setMenu,setTasks} from "../../redux/actions";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";

import './style.css';

import Tarefa from '../../components/tarefa';
import Button from '../../components/button';

export default function Atividades() {
    const history = useHistory();

    const {tasks} = useSelector(state => state);
    const dispatch = useDispatch();
    
    useEffect(() => {
        const taskArray = [{
            task: "lavar louça1",
            keeper: "user",
            status: false
        },{
            task: "lavar louça2",
            keeper: "not user",
            status: false
        },
        {
            task: "lavar louça3",
            keeper: "user",
            status: true
        },
        {
            task: "lavar louça4",
            keeper: "user",
            status: false
        }]
        dispatch(setTasks(taskArray));

        dispatch(setTitle("atividades"));
        dispatch(setLogo(false));
        dispatch(setMenu(false));
    }, [])

      
    return (<>
        <div className="task_container">
           {tasks.map(tarefa => <Tarefa key={tarefa._id} data={tarefa}/>)}
        </div> 
        <Button onClick={()=>history.push("/editTasks")} type="button" text="Editar"/>

        </>
    )
}
