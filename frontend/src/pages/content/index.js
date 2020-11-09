import React,{useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'

import {setLogo,setTitle,setMenu,setTasks} from "../../redux/actions";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";

import Button from '../../components/button';
import Filter from '../../components/filterConteudo';
import ModalCompra from '../../components/modalCompra';

import './style.css';
import ConteudoItem from '../../components/conteudoItem';

export default function Home() {
    const [compraStatus, setCompraStatus] = useState(false)
    const [itemPontos, setItemPontos] = useState(0)
    const dispatch = useDispatch();
    
    const history = useHistory();
    const pontosEmpresa = 200;
    const conteudos = [
       
            {tipo:"curso",
            img:"https://www.jornalcontabil.com.br/wp-content/uploads/2019/12/empreendedorismofeminino.jpg",
            titulo:"Aprenda a Empreender",
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

    const setTrocarPontos = async (pontos) => {
        
        await setItemPontos(pontos)
        await setCompraStatus(true)
    }

    useEffect(() => {
     
        dispatch(setTitle("conteúdo"));
        dispatch(setLogo(false));
        dispatch(setMenu(false));
    }, [])
   
    return (<>
        <div className="content_container">
            <Filter/>
            {conteudos.map(conteudo=> {
                return <ConteudoItem setTrocarPontos={setTrocarPontos} key={conteudo.titulo} data={conteudo}/>
            })}
        </div>
        </>
    )
}
