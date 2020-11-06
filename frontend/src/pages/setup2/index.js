import React, {useState} from 'react'
import imgEmail from "../../assets/VetorEmail.png";
import {useHistory} from 'react-router-dom'


import './style.css';
import Header from '../../components/header';
import Button from '../../components/button';
import Input from '../../components/input';

export default function Register() {
  const history = useHistory();

    const [email, setEmail] = useState("")

    const handleSubmit = () => {
        localStorage.setItem('emailParceiro', "email");
        
        history.push("/setup/3");
    }

    return (<>
        <Header  logo={true}/>
            <div className="setup_container">
                <h3>Digite abaixo o email de seu/sua companheiro(a):</h3>

                <Input 
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <p>Enviaremos a ele(a) uma mensagem de confirmação</p>
                   
                <img alt="casa roxa com arvores em volta" src={imgEmail}></img>
                <Button onClick={handleSubmit} type="submit" text="Próximo"/>
            </div>

       
        </>
    )
}
