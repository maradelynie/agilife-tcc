import React,{useEffect} from 'react'
import {useHistory} from 'react-router-dom'

import './style.css';

import {setLogo,setTitle,setMenu,setNotifications} from "../../redux/actions";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";

import { faBriefcase,faTasks } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Calendar from "../../components/calendar"
import Notification from "../../components/notificacao"

export default function Home() {
    const {name,notifications} = useSelector(state => state);
    const dispatch = useDispatch();

    const history = useHistory();

    useEffect(() => {
        const alertArray = [{
            _id: 123123123,
            text: "Novo conteúdo gratúito adicionado, confira!",
            icon: "conteudo"
          },{
            _id: 234234234,
            text: "Tarefa concluída, você ganhou mais +3 pontos!",
            icon: "tarefas"
          },{
            _id: 345345345,
            text: "Novo conteúdo adiquirido, confira sua lista!",
            icon: "conteudo"
          }]
        // api call for notifications
        dispatch(setNotifications(alertArray));

        dispatch(setTitle(""));
        dispatch(setLogo(true));
        dispatch(setMenu(true));
    }, [])

    return (<>
        <div className="home_container">
            <nav className="home_nav">
                <FontAwesomeIcon onClick={()=>history.push("/tasks")} className="nav_icon clicable" icon={faTasks}/>
                <h3>{name}</h3>
                <FontAwesomeIcon onClick={()=>history.push("/content")} className="nav_icon clicable" icon={faBriefcase}/>
            </nav>
            <Calendar/>
            <main className="main_container">
               {notifications.map(notification => {
                   return <Notification key={notification._id} data={notification}/>
               })}
            </main>
        </div>
        </>
    )
}
