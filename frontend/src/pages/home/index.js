import React,{useEffect} from 'react'
import {useHistory} from 'react-router-dom'

import './style.css';

import {setLogo,setTitle,setMenu,setAllUserData,setShowMenu,setLoading} from "../../redux/actions";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";

import { faBriefcase,faTasks } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {getUserData} from "../../api";

import AsideMenu from '../../components/asideMenu';
import Calendar from "../../components/calendar"
import Notification from "../../components/notificacao"

export default function Home() {
    const {name,notifications,points,showMenu} = useSelector(state => state);
    const dispatch = useDispatch();

    const history = useHistory();

    useEffect(() => {
        const setUpDataUser = async (token) => {
            dispatch(setLoading(true))

            if(token){
               
                    const data = await getUserData(token)
                    if(data.tasks.length===0){
                        localStorage.setItem("email", data.login)
                        localStorage.setItem("partner", data.userPartner)
                        return history.push("/setup/1")
                    }
                    dispatch(setLoading(false))

                    return dispatch(setAllUserData(data))
              
            }else{
                dispatch(setLoading(false))

                return history.push("/")
            }

        }
        setUpDataUser(localStorage.getItem("token"))
        

        dispatch(setTitle(""));
        dispatch(setLogo(true));
        dispatch(setMenu(true));
    }, [])

    return (<>
        <AsideMenu setShowMenu={()=>dispatch(setShowMenu())} status={showMenu}/>
        <div className="home_container">
            <nav className="home_nav">
                <FontAwesomeIcon onClick={()=>history.push("/tasks")} className="nav_icon clicable" icon={faTasks}/>
                <div>
                    <h3>{name}</h3>
                    <p>{points} pontos</p>
                </div>
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
