import React from 'react'
import {useHistory} from 'react-router-dom'
import Filter from '../../components/filterForum';


import './style.css';
import Header from '../../components/header';
import Button from '../../components/button';
import User from '../../components/user';

import forum1 from "../../assets/Group1.png";
import forum2 from "../../assets/Group2.png";
import forum3 from "../../assets/Group3.png";
import forum4 from "../../assets/Group4.png";
import forum5 from "../../assets/Group5.png";
import forum6 from "../../assets/Group6.png";
import { faStar, faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Forum1(props) {
  const history = useHistory();
   const pontosEmpresa = 200;
   const comentarios = [{
       nome:"Letícia Costa",
       img: "https://www.sodelas.com.br/sites/default/files/cropped_images/article/crop_676X550/shutterstock_262414568_1543923286.jpg",
       respostas: 12,
       minutos: 18,
       likes: 5,
       texto: "Meninas, olhem que show esse conteúdo do SEBRAE sobre empoderamento: www.sebrae.com.br/"
   },{
    nome:"Alice Vieira",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR3CbVOLo1J_HZWd2TRGoSaluB6z-CGOA3jcA&usqp=CAU",
    respostas: 20,
    minutos: 18,
    likes: 75,
    texto: "Alguém sabe a origem do termo empoderamento feminino?"
}]
    
    const showImage = () => {
   
   if(props.match.params.id==="1") { return <img alt="Dicas de Conteúdo" src={forum1}/>}
   if(props.match.params.id==="2") { return <img alt="Dicas de Conteúdo" src={forum2}/>}
   if(props.match.params.id==="3") { return <img alt="Dicas de Conteúdo" src={forum3}/>}
   if(props.match.params.id==="4") { return <img alt="Dicas de Conteúdo" src={forum4}/>}
   if(props.match.params.id==="5") { return <img alt="Dicas de Conteúdo" src={forum5}/>}
   if(props.match.params.id==="6") { return <img alt="Dicas de Conteúdo" src={forum6}/>}
   
    }
    // 
    return (<>
        <Header voltar="true" text="empresa" pontos={pontosEmpresa}/>
        <div className="empresa_tab">
            <Button   type={"off"} onClick={() => history.push("/empresa/conteudo")} text="Conteúdos"></Button>
            <Button text="Fórums" onClick={() => history.push("/empresa/forum")}  type="button" ></Button>
        </div>
        <Filter/>
        <div  className="empresa_forumPost">
        {showImage()}
        <textarea placeholder="Escreva aqui a sua dica, dúvida ou o que quiser compartilhar..."></textarea>
        </div>
        {comentarios.map(comentario => {
            return(
                <div className="card_comentario">
                    <div className="container_comentario">
                        <User img={comentario.img}/>
                        <div>
                    
                            <div className="comentario_titulo" >
                                <h3>{comentario.nome}</h3>
                                <span>{comentario.likes} <FontAwesomeIcon   className="like_icon" icon={faStar}/></span></div>
                            <p>{comentario.texto}</p>
                        </div>
                    </div>
                    <div className="comentario_rodape" >
                        <span><FontAwesomeIcon   className="comment_icon" icon={faCommentDots}/> {comentario.respostas} respostas</span> 
                        <span>Há {comentario.minutos} min.</span>
                    </div>
                </div>
            )
        })}
        
        
        </>
    )
}
