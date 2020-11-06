import React,{useEffect} from 'react'
import {useHistory} from 'react-router-dom'


import casa from "../../assets/VetorCasa.png";
import empresa from "../../assets/VetorBoneca.png";

import './style.css';
import Header from '../../components/header';
import Button from '../../components/button';
import Alert from '../../components/alert';
import User from '../../components/user';

import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
    const history = useHistory();
    const notificacoes=["descanso","curso","tarefa"];
    const pontosCasa = 60;
    const pontosEmpresa = 200;


    const perfilEmpreendedora = localStorage.getItem('perfilEmpreendedora');

    const userName = localStorage.getItem('userName');
    const imgPerfil = localStorage.getItem('imgPerfil');;

    const imgPerfilParceiro = "https://cdn.topmidianews.com.br/img/pc/620/320/dn_noticia/2019/04/servidor-25-anos.jpg";

    // useEffect(() => {
    //     const auth = localStorage.getItem('token');
    //     if(!auth){
    //         history.push("/")
    //     }
    // }, [])

    const showEmpreda = () => {
        if(perfilEmpreendedora=="true"){
            return ( 
                <div className="home_setores-elemento">
                    <img className="home_setoresIcone"  alt="Mulher usando o computador" src={empresa}></img>
                    <Button onClick={() => history.push("/empresa")}  type="button" text="Empresa"></Button>
                    <p>{pontosEmpresa} pontos</p>
                    <Button onClick={() => history.push("/empresa/troca-de-pontos")} type="pontos" text="Trocar meus pontos"></Button>
        
                </div>
        
        
    )}
    }

    return (<>
        <Header  logo={true}/>
        <div className="home_container">
            <nav className="home_nav">
                <Alert onClick={() => history.push("/notificacoes")} data={notificacoes} />
                <User name={userName} img={imgPerfil}/>
                <FontAwesomeIcon   className="nav_icon" icon={faEllipsisH}/>
            </nav>
            
            <main className="home_setores">
                <div className="home_setores-elemento">
                    <img className="home_setoresIcone" alt="Casa branca com porta, telhados e janelas em roxo" src={casa}></img>
                    <Button onClick={() => history.push("/casa")} type="button" text="Casa"></Button>
                    <p>{pontosCasa} pontos</p>
                    <Button onClick={() => history.push("/casa/troca-de-pontos")} type="pontos" text="Trocar meus pontos"></Button>
                </div>
                {showEmpreda()}
            </main>
        </div>
        </>
    )
}
