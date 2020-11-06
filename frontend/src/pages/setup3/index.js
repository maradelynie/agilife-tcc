import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'

import './style.css';
import Header from '../../components/header';
import Button from '../../components/button';
import Input from '../../components/input';

export default function Register() {
  const history = useHistory();

    const [tarefas, setTarefas] = useState([1,2,3])

    const addTarefa = () => {
        setTarefas(tarefas => {
            const prox = tarefas.length+1;
            return [...tarefas, prox]
        })
    }

    const cadastrarTarefas = () => {

        const tarefas = [{
            _id: 1,
            nome:"Lavar s louça",
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
        localStorage.setItem('tarefas', JSON.stringify(tarefas));
        history.push("/home")
    }
    
    return (<>
        <Header text="Quais tarefas você possui diariamente em sua casa?"/>
            <form onSubmit={(e) => {e.preventDefault();e.persist(); return console.log(e)}} className="setup_container">
                <p>É importante preencher essa etapa junto com seu companheiro(a)</p>
                {tarefas.map((tarefa) =>{
                   return (
                    <div key={tarefa} className="setup_tarefas">
                        <label>Tarefa
                            <Input type="tarefas" />
                        </label>
                        <label>Responsável
                            <Input type="tarefas" />
                        </label>
                        <label>Hora:
                            <Input type="tarefas_hora" />
                        </label>
                    </div>
                    )
                })}
                <Button onClick={addTarefa} type="add" text="+"/>
                <Button  onClick={cadastrarTarefas} type="submit" text="Cadastrar"/>
            </form>

       
        </>
    )
}
