import React,{useEffect,useState} from 'react'
import {useHistory} from 'react-router-dom'

import './style.css';

import {getAllUsers,postContent,getAdmContent,updateContent} from "../../api"

import {setLogo,setTitle,setMenu,setShowMenu,setLoading,setWarningText,setWarning,setAdmContents} from "../../redux/actions";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";

import Button from '../../components/button';
import Input from '../../components/input';
import Select from '../../components/select';
import AsideMenu from '../../components/asideMenu';
import Calendar from "../../components/calendar"
import Notification from "../../components/notificacao"

export default function HomeAdm({match}) {
    const {showMenu} = useSelector(state => state);
    const dispatch = useDispatch();
    const history = useHistory();

    const [usersCount, setUsersCount] = useState(0)
    const [contentTitle, setContentTitle] = useState("")
    const [contentType, setContentType] = useState("")
    const [contentUrl, setContentUrl] = useState("")
    const [contentValue, setContentValue] = useState(0)
    const [contentImg, setContentImg] = useState("")

    const report = {
        text: `Até o mesmo estamos com ${usersCount} usuários cadastrados na plataforma`,
        icon: "administracao"
    }
    const options = ["Curso","Video"]
 
    const post = async () => {
        if(match.params.id){
            if(!contentType){
                    dispatch(setWarningText("Selecione o tipo"))
                    dispatch(setWarning(true))
            }else{
                const token = localStorage.getItem("token")

                const data = {
                    
                    title:contentTitle,
                    img:contentImg,
                    type:contentType,
                    link:contentUrl,
                    value:contentValue,
                    ownerId:token
                }
                updateContent(match.params.id,data)
                history.push("/contentAdm")
            }
        }else{
        if(!contentTitle||
            !contentType||
            !contentUrl||
            !contentImg
            ){
                dispatch(setWarningText("Todos os campos são obrigatórios"))
                dispatch(setWarning(true))
        }else{
            const token = localStorage.getItem("token")
            if(token){
                dispatch(setLoading(true))
                const data = {
                    title:contentTitle,
                    img:contentImg,
                    type:contentType,
                    link:contentUrl,
                    value:contentValue,
                    ownerId:token
                }
                const response = await postContent(data)
            }
        
            dispatch(setLoading(false))
    
            history.push("/contentAdm")
        }}
    }

    useEffect(() => {
        if(match.params.id){
            const getData = async () => {
                const token = localStorage.getItem("token")
                const data = await getAdmContent(token)
                const selected = data.data.find(content=>content._id===match.params.id)
                setContentTitle(selected.title)
                setContentUrl(selected.link)
                setContentImg(selected.img)
                setContentValue(selected.value)
            }
            getData()
        
        }

        const token = localStorage.getItem("token")
        
        if(!token){
            history.push("/")
        }

        const getData = async () => {
            const numbers = await getAllUsers()
            setUsersCount(numbers.data)
        }
        getData()

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
                 <Input 
                    autoComplete="no"
                    placeholder="Url da imagem"
                    type="text" 
                    value={contentImg}
                    onChange={e => setContentImg(e.target.value)}
                />
                <Input 
                    autoComplete="no"
                    placeholder="valor do conteúdo"
                    type="number" 
                    value={contentValue}
                    onChange={e => setContentValue(e.target.value)}
                />
            </div>
            <Button onClick={post} type="button" text="publicar"/>

        </div>
        </>
    )
}
