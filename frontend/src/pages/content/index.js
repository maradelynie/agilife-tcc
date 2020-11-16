import React,{useState, useEffect} from 'react'

import {setLogo,setTitle,setMenu,setTasks} from "../../redux/actions";
import {useDispatch} from "react-redux";


import './style.css';
import ConteudoItem from '../../components/conteudoItem';
import ModalCompra from '../../components/modalCompra';
import AsideFilter from '../../components/asideFilter';

export default function Content() {
    const [statusModalTroca, setStatusModalTroca] = useState(false)
    const dispatch = useDispatch();
    
    const conteudos = [
       
            {tipo:"curso",
            img:"https://www.jornalcontabil.com.br/wp-content/uploads/2019/12/empreendedorismofeminino.jpg",
            titulo:"Aprenda a Empreender",
            url:"https://player.vimeo.com/video/137177039",
            valor:0,
            possui:true},
            {tipo:"Oficina",
            img:"https://empreendacomproposito.com.br/wp-content/uploads/2016/07/atitudes-de-toda-mulher-empreendedora.jpg",
            titulo:"Plano de negócio para começar bem",
            valor:0,
            possui:true}
            ,
            {tipo:"Oficina",
            img:"https://alexandraoliveira.com.br/wp-content/uploads/2015/04/dias-desanimados-vida-empreendedora.jpg",
            titulo:"planejamento e lançamento de uma marca",
            valor:100,
            possui:false},

            {tipo:"curso",
            img:"https://www.rbsdirect.com.br/imagesrc/25516898.jpg?w=700",
            titulo:"Aprenda a Empreender Avançado",
            valor:300,
            possui:false}]

    useEffect(() => {
     
        dispatch(setTitle("conteúdo"));
        dispatch(setLogo(false));
        dispatch(setMenu(false));
    }, [])
   
    return (<>
        <AsideFilter/>
        <ModalCompra status={statusModalTroca} setModal={setStatusModalTroca}/>
        <div >
            
            {conteudos.map(conteudo=> {
                return <ConteudoItem setModal={setStatusModalTroca} key={conteudo.titulo} data={conteudo}/>
            })}
        </div>
        </>
    )
}
