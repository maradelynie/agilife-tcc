import React,{useEffect} from 'react'
import {useHistory} from 'react-router-dom'

import {setLogo,setTitle,setMenu,setAdmContents} from "../../redux/actions";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";

import {getAdmContent} from "../../api"

import './style.css';

import Content from '../../components/content';

export default function ContentAdm() {
    const history = useHistory();
    const dispatch = useDispatch();
    const {admContents} = useSelector(state => state);

    
    useEffect(() => {
        const getData = async () => {
            const token = localStorage.getItem("token")
            const data = await getAdmContent(token)
            dispatch(setAdmContents(data.data));
        }
        getData()
        dispatch(setTitle("gerenciar conteúdo"));
        dispatch(setLogo(false));
        dispatch(setMenu(false));
    }, [])

      
    return (<>
            <div className="task_container">
                {admContents.map(content => <Content key={content._id} data={content}/>)}

            </div> 
        </>
    )
}
