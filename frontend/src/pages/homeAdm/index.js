import React,{useEffect,useState} from 'react'
import {useHistory} from 'react-router-dom'

import './style.css';

import {setLogo,setTitle,setMenu,setShowMenu} from "../../redux/actions";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";

import Button from '../../components/button';
import Input from '../../components/input';
import Select from '../../components/select';
import AsideMenu from '../../components/asideMenu';
import Calendar from "../../components/calendar"
import Notification from "../../components/notificacao"

export default function HomeAdm() {
    const {showMenu} = useSelector(state => state);
    const dispatch = useDispatch();
    const history = useHistory();

    const [usersCount, setUsersCount] = useState(0)
    const [contentTitle, setContentTitle] = useState("")
    const [contentType, setContentType] = useState("")
    const [contentUrl, setContentUrl] = useState("")

    const report = {
        _id: 123123123,
        text: `Até o mesmo estamos com ${usersCount} usuários cadastrados na plataforma`,
        icon: "administracao"
    }
    const options = ["Curso","Video Aula"]
 
    const postContent = () => {
        // API SEND CONFIG DATA 
  
        history.push("/contentAdm")
    }

    useEffect(() => {
  
        //  api call to get total users

        dispatch(setTitle(""));
        dispatch(setLogo(true));
        dispatch(setMenu(true));
    }, [])

    return (<>
        <AsideMenu type="admind" setShowMenu={()=>dispatch(setShowMenu())} status={showMenu}/>
        <div className="home_container">
            <Notification data={report}/>
            <Calendar/>
            <div className="homeAdm_container main_container">
                <Input 
                    autoComplete="no"
                    placeholder="Título"
                    type="email" 
                    value={contentTitle}
                    onChange={e => setContentTitle(e.target.value)}
                />
                <Select 
                    autoComplete="no"
                    options={options} 
                    placeholder="Tipo"
                    value={contentType}
                    onChange={e => setContentType(e.target.value)}
                />
                <Input 
                    autoComplete="no"
                    placeholder="Url do conteúdo"
                    type="text" 
                    value={contentUrl}
                    onChange={e => setContentUrl(e.target.value)}
                />
            </div>
            <Button onClick={postContent} type="button" text="publicar"/>

        </div>
        </>
    )
}
