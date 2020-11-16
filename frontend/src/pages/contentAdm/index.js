import React,{useEffect,useState} from 'react'
import {useHistory} from 'react-router-dom'

import {setLogo,setTitle,setMenu,setTasks} from "../../redux/actions";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";



import './style.css';

import Content from '../../components/content';

export default function ContentAdm() {
    const history = useHistory();
    const dispatch = useDispatch();

    const [contentArray, setContentArray] = useState([])
    
    useEffect(() => {

        setContentArray([{
            title: "Espreendedorismo 1",
            type: "video aula",
            link: "https://player.vimeo.com/video/137177039",
            value: 125,
            ownerId: "123"
        },{
            title: "Espreendedorismo 2",
            type: "curso",
            link: "https://player.vimeo.com/video/137177039",
            value: 0,
            ownerId: "123"
        },
        {
            title: "Espreendedorismo 3",
            type: "curso",
            link: "https://player.vimeo.com/video/137177039",
            value: 500,
            ownerId: "123"
        },
        {
            title: "Espreendedorismo 4",
            type: "video aula",
            link: "https://player.vimeo.com/video/137177039",
            value: 200,
            ownerId: "123"
        }])

        dispatch(setTitle("gerenciar conteúdo"));
        dispatch(setLogo(false));
        dispatch(setMenu(false));
    }, [])

      
    return (<>
            <div className="task_container">
                {contentArray.map(content => <Content key={content._id} data={content}/>)}

            </div> 
        </>
    )
}
