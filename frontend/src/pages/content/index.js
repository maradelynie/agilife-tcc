import React,{useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'

import {setLogo,setTitle,setMenu,setTasks} from "../../redux/actions";
import {useDispatch} from "react-redux";


import './style.css';
import ConteudoItem from '../../components/conteudoItem';
import AsideFilter from '../../components/asideFilter';

export default function Home() {
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
            valor:150,
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
        <div className="content_container">
            
            {conteudos.map(conteudo=> {
                return <ConteudoItem  key={conteudo.titulo} data={conteudo}/>
            })}
        </div>
        </>
    )
}
