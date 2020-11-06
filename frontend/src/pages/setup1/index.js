import React, {useState} from 'react'
import imgCasa from "../../assets/Casinha.png";
import {useHistory} from 'react-router-dom'


import './style.css';
import Header from '../../components/header';
import Button from '../../components/button';
import Select from '../../components/select';

export default function Register() {
  const history = useHistory();

    const [genero, setGenero] = useState("")
    const optionsGender = ["Mulher","Homem"]

    const buttonNao= async () =>{
        await localStorage.setItem('parceiro', false);
        await localStorage.setItem('genero', genero);

        history.push("/setup/2")
        
    }
    const buttonSim = async () => {
        await localStorage.setItem('parceiro', true);
        await localStorage.setItem('genero', genero);

        history.push("/setup/2")
    }

    return (<>
        <Header logo={true}/>
            <div className="setup_container">
                <Select 
                    placeholder="Como se Identifica?"
                    value={genero}
                    onChange={e => setGenero(e.target.value)}
                    options={optionsGender}
                />
                   
            <img alt="casa roxa com arvores em volta" src={imgCasa}></img>
                <h3>Você dividirá as tarefas do lar com alguem?</h3>
                <div className="button_container">
                    <Button onClick={buttonSim} type="submit" text="SIM"/>
                    <Button onClick={buttonNao}type="submit" text="NÃO"/>
                </div>
            </div>

       
        </>
    )
}
