import React, {useState,useEffect} from 'react'
import imgEmail from "../../assets/VetorEmail.png";
import {useHistory} from 'react-router-dom'


import {setTitle} from "../../redux/actions";
import {useDispatch} from "react-redux"; 

import './style.css';
import Button from '../../components/button';
import Input from '../../components/input';

export default function Setup2() {
  const dispatch = useDispatch();

  const history = useHistory();

    const [email, setEmail] = useState("")

    const handleSubmit = () => {
        localStorage.setItem('emailParceiro', "email");
        
        history.push("/setup/3");
    }
    useEffect(() => {
        dispatch(setTitle("configuração de conta"))
      }, [])

    return (<>
            <div className="setup_container">

                <img alt="casa roxa com arvores em volta" src={imgEmail}></img>
                <p>Adicione o email para a gente enviar o convite para divisão de tarefas.</p>

                <Input 
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <Button onClick={handleSubmit} type="submit" text="Próximo"/>
            </div>

       
        </>
    )
}
