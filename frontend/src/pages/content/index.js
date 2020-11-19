import React,{useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'

import {setLogo,setTitle,setMenu,setAllContents,setLoading,setAllUserData} from "../../redux/actions";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";

import {getAllContent,getUserData} from "../../api";

import './style.css';
import ConteudoItem from '../../components/conteudoItem';
import ModalCompra from '../../components/modalCompra';
import AsideFilter from '../../components/asideFilter';

export default function Content() {
    const [statusModalTroca, setStatusModalTroca] = useState(false)
    const dispatch = useDispatch();
    const history = useHistory();
    const {allContents,showContents} = useSelector(state => state);
   
    useEffect(() => {
        const setUpDataUser = async (token) => {
            if(token){
                    dispatch(setLoading(true))
                    const data = await getUserData(token)
                    const dataContent = await getAllContent(data.contents)
                    dispatch(setAllContents(dataContent))
                    dispatch(setLoading(false))
                    return dispatch(setAllUserData(data))
            }else{

                return history.push("/")
            }

        }
        setUpDataUser(localStorage.getItem("token"))
           
        dispatch(setTitle("conteúdo"));
        dispatch(setLogo(false));
        dispatch(setMenu(false));
    }, [])

    return (<>
        <AsideFilter/>
        <ModalCompra status={statusModalTroca} setModal={setStatusModalTroca}/>
        <div >
            {showContents?.map(conteudo=> {
                return <ConteudoItem key={conteudo._id} setModal={setStatusModalTroca} data={conteudo}/>
            })}
        </div>
        </>
    )
}
