import React, {useState,useEffect} from 'react'
import {useHistory} from 'react-router-dom'

import {setTitle} from "../../redux/actions";
import {useDispatch} from "react-redux";

import './style.css';
import Button from '../../components/button';
import Input from '../../components/input';
import Select from '../../components/select';

export default function Setup3() {
  const dispatch = useDispatch();
  const history = useHistory();
    const keeperOption = ["você","parceiro"]
    const [tarefas, setTarefas] = useState([1,2,3])

    const addTarefa = () => {
        setTarefas(tarefas => {
            const prox = tarefas.length+1;
            return [...tarefas, prox]
        })
    }

    const cadastrarTarefas = () => {
        // API SEND CONFIG DATA 
        localStorage.removeItem('parceiro');
        localStorage.removeItem('emailParceiro');
        history.push("/home")
    }

    useEffect(() => {
        if(localStorage.getItem("parceiro")){
            dispatch(setTitle("configuração de conta"))
        }else{
            history.push("/home")
        }
      }, [])

    return (<>
            <form onSubmit={(e) => {e.preventDefault();e.persist(); return console.log(e)}} className="setup_container">
                <div className="tarefas_container">
                {tarefas.map((tarefa) =>{
                   return (
                    <div key={tarefa} className="setup_tarefas">
                        <label>Tarefa
                            <Input autoComplete="no" />
                        </label>
                        <label>Responsável
                            <Select options={keeperOption} />
                        </label>
                    </div>
                    )
                })}
                </div>
                <Button onClick={addTarefa} type="add" text="+"/>
                <Button  onClick={cadastrarTarefas} type="submit" text="Cadastrar"/>
            </form>

       
        </>
    )
}
