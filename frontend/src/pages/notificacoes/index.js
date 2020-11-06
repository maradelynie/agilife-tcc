import React from 'react'

import './style.css';
import Header from '../../components/header';
import Notificacao from '../../components/notificacao';

export default function Home() {
    const notificacoes=["descanso","curso","tarefa"];

    return (<>
        <Header  voltar="true" text="Notificações"/>
        <div className="notificacoes_container">
            {notificacoes.map(notificação => {
                return <Notificacao pontos="3" type={notificação}/>
            })}

        </div>
        </>
    )
}
