import React from 'react'
import {useHistory} from 'react-router-dom'


import Button from '../../components/button';

import './style.css';
import Header from '../../components/header';
import forum1 from "../../assets/Group1.png";
import forum2 from "../../assets/Group2.png";
import forum3 from "../../assets/Group3.png";
import forum4 from "../../assets/Group4.png";
import forum5 from "../../assets/Group5.png";
import forum6 from "../../assets/Group6.png";


export default function Home() {
    
  const history = useHistory();
    const pontosEmpresa = 200;
    
   
    return (<>
        <Header voltar="true" text="empresa" pontos={pontosEmpresa}/>
        <div className="empresa_container">
            <div className="empresa_tab">
                <Button   type={"off"} onClick={() => history.push("/empresa/conteudo")}text="Conteúdos"></Button>
                <Button text="Fórums" type="button" ></Button>
            </div>
               <img className="clicable" onClick={()=> history.push("/empresa/forum/1")} alt="Dicas de Conteúdo" src={forum1}/>
               <img className="clicable" onClick={()=> history.push("/empresa/forum/2")} alt="Networking" src={forum2}/>
               <img className="clicable" onClick={()=> history.push("/empresa/forum/3")} alt="Gestão de tempo" src={forum3}/>
               <img className="clicable" onClick={()=> history.push("/empresa/forum/4")} alt="Finanças" src={forum4}/>
               <img className="clicable" onClick={()=> history.push("/empresa/forum/5")} alt="Empoderamento Feminino" src={forum5}/>
               <img className="clicable" onClick={()=> history.push("/empresa/forum/6")} alt="Outros" src={forum6}/>
        </div>
        </>
    )
}
