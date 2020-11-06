import React,{useState} from 'react'

import './style.css';
import Header from '../../components/header';
import RecompensaG from '../../components/recompensaG';
import RecompensaP from '../../components/recompensaP';
import ModalCompra from '../../components/modalCompra';

export default function EmpresaTrocaPonto() {
   const pontosEmpresa = 200;
   const [compraStatus, setCompraStatus] = useState(false)
   const [itemPontos, setItemPontos] = useState(150)

    const recompensas= [{
        _id: 1,
        tags:"Cursos",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ8wwEDZ6w8Ua4rkhpkI0WRCrYRfqiVTYOFGw&usqp=CAU",
        titulo: "Planejamento e lançamento de uma marca",
        pontos: 150,
        possui: false,
        local: [
            {lat: 25.774, lng: -80.190},
          ]
    },{
        _id: 2,
        tags:"Webnars",
        img:"https://www.sbcoaching.com.br/blog/wp-content/uploads/2019/06/quero-empreender-dicas-ideias-saiba-por-onde-comecar-730x487.jpg",
        titulo: "Aprender a Empreender",
        pontos: 450,
        possui: false ,
        local: [
            {lat: 25.774, lng: -80.190},
          ]
    },{
        _id: 3,
        tags:"Seminários",
        img:"https://www.tramparonline.com/wp-content/uploads/2019/01/plano-de-negocio.jpg",
        titulo: "Plano de Negócios",
        pontos: 250,
        possui: true ,

        local: [
            {lat: 25.774, lng: -80.190},
          ]
    },{
        _id: 4,
        tags:"Cursos",
        img:"https://nova-escola-producao.s3.amazonaws.com/2vXPxFwyzbYHG8rDqpGZWE8PqWXCptRUGy99H6FyPPsHfwX7mTyVgBWb6A66/blog-questao-de-ensino-6-pontos-essenciais-para-elaborar-um-plano-de-aula-shutterstock.jpeg",
        titulo: "Lançamento de marca",
        pontos: 650,
        possui: false,
        local: [
            {lat: 25.774, lng: -80.190},
          ]
    }]

    const [listaRecompensas, setListaRecompensas] = useState(recompensas)

    const listaTags = ["todos" , ...recompensas.map(recompensa =>  recompensa.tags).filter(unique)]
    function unique(value, index, self) { 
        return self.indexOf(value) === index;
    }
    // const filtrar = (value) => {
    //     return setListaRecompensas(recompensas.filter(recompensa => recompensa.tags===value))
    // }

    const ativar = (el) => {
      
        if(el.classList.contains("tag_active")){
         
          return el.classList.remove("tag_active")
        }
  
        return el.classList.add("tag_active")
    
    }
    const setTrocarPontos = async (pontos) => {
        await setItemPontos(pontos)
        await setCompraStatus(true)
    }
   
    return (<>
        <Header  voltar="true" text="empresa" pontos={pontosEmpresa}/>
        <ModalCompra status={compraStatus} setStatus={setCompraStatus} pontos={itemPontos} pontosEmpresa={pontosEmpresa}/>
        <div className="casatroca_container">
           
                <h3>Troca de Pontos</h3><p>Prêmios para a empreendedora</p>

           <div  className="casatroca_tagsContainer">
               {listaTags.map(tag => {
                   return <div onClick={e => ativar(e.target)} className={`casatroca_tagName ${tag==="todos"?"tag_active":""}`} key={tag}>{tag}</div>
               })}
           </div>
               <div className="recompensas_sectionContainer"><h3>Visto recentemente</h3>
                <RecompensaG  setTrocarPontos={setTrocarPontos} pontos={pontosEmpresa} data={recompensas[0]}/>

               </div>
               <div className="recompensas_sectionContainer-pequeno"><h3>Mais Vistos</h3>
                <RecompensaP setTrocarPontos={setTrocarPontos} pontos={pontosEmpresa} data={recompensas}/>

               </div>
               <div className="recompensas_sectionContainer"><h3>Destaque</h3>
                <RecompensaG  setTrocarPontos={setTrocarPontos} pontos={pontosEmpresa} data={recompensas[3]}/>

               </div>
            
    
        </div>
        </>
    )
}
