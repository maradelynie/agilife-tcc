import React,{useEffect} from 'react'
import {useHistory} from 'react-router-dom'

import {setLogo,setTitle,setMenu,setAllUserData,setLoading} from "../../redux/actions";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";

import './style.css';
import {getUserData} from "../../api";

import Tarefa from '../../components/tarefa';
import Button from '../../components/button';

export default function Tasks() {
    const history = useHistory();

    const {tasks} = useSelector(state => state);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(setLoading(true));

        const setUpDataUser = async (token) => {
            if(token){
                if(tasks.length===0){
                    const data = await getUserData(token)
                    dispatch(setLoading(false));
                    return dispatch(setAllUserData(data))
                }
            }else{
                dispatch(setLoading(false));
                return history.push("/")
            }
        }
        dispatch(setLoading(false));

        setUpDataUser(localStorage.getItem("token"))    
        dispatch(setTitle("atividades"));
        dispatch(setLogo(false));
        dispatch(setMenu(false));
    }, [])

      
    return (<>
        <div className="task_container">
           {tasks.map((tarefa,index) => <Tarefa key={index} index={index} data={tarefa}/>)}
        </div> 
        <Button onClick={()=>history.push("/editTasks")} type="button" text="Editar"/>

        </>
    )
}
