import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'


import Button from '../../components/button';
import Filter from '../../components/filterConteudo';
import ModalCompra from '../../components/modalCompra';


import './style.css';
import Header from '../../components/header';
import Conteudo from '../../components/conteudo';

export default function Home() {
    const [compraStatus, setCompraStatus] = useState(false)
    const [itemPontos, setItemPontos] = useState(0)

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
   
    return (<>
        <Header voltar="true" text="empresa" pontos={pontosEmpresa}/>
        <ModalCompra status={compraStatus} setStatus={setCompraStatus} pontos={itemPontos} pontosEmpresa={pontosEmpresa}/>

        <div className="empresa_container">
            <div className="empresa_tab">
                <Button  type="button" text="Conteúdos"></Button>
                <Button type={"off"} onClick={() => history.push("/empresa/forum")}  text="Fórums"></Button>
            </div>
            <Filter/>
            {conteudos.map(conteudo=> {
                return <Conteudo setTrocarPontos={setTrocarPontos} key={conteudo.titulo} data={conteudo}/>
            })}
        </div>
        </>
    )
}
