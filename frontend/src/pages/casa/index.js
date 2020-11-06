import React from 'react'

import './style.css';
import Header from '../../components/header';
import DiaCasa from '../../components/diaCasa';
import User from '../../components/user';
import Tarefa from '../../components/tarefa';

export default function Home() {
    const imgPerfil = "https://ath2.unileverservices.com/wp-content/uploads/sites/2/2017/10/perfis-de-mulheres-com-cabelo-curto-no-instagram-7.jpg";
    const imgPerfilParceiro = "https://cdn.topmidianews.com.br/img/pc/620/320/dn_noticia/2019/04/servidor-25-anos.jpg";
    const pontosCasa = 60;

    const tarefas = [{
        _id: 1,
        nome:"Lavar a louça",
        responsavel: "José",
        hora: "10:00",
        status: false
    },{
        _id: 2,

        nome:"Buscar Luana na creche",
        responsavel: "José",
        hora: "16:00",
        status: false
    },{
        _id: 3,
        nome:"Limpar Banheiro",
        responsavel: "Eliza",
        hora: "18:30",
        status: true
    },{
        _id: 4,
        nome:"Dar comida para Scott",
        responsavel: "Eliza",
        hora: "19:00",
        status: false
    }]
   
    return (<>
        <Header voltar="true" text="casa" pontos={pontosCasa}/>
        <div className="casa_container">
            <div className="casaDia">
                <DiaCasa dia="Quarta-Feira" data="02 de Setembro de 2020"/>
            </div>
           <div  className="casal_container">
               <h5>Casal</h5>
               <div  className="casa_images">
               <User img={imgPerfil}/>
               <User img={imgPerfilParceiro}/>
               </div>
           </div>
           {tarefas.map(tarefa => <Tarefa key={tarefa._id} dados={tarefa}/>)}
        </div>
        </>
    )
}
