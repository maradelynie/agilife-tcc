import React, {useState} from 'react'
import { GoogleLogin } from "react-google-login";
import {useHistory} from 'react-router-dom'


import './style.css';
import Header from '../../components/header';
import Button from '../../components/button';
import Input from '../../components/input';

const clientId = process.env.REACT_APP_GOOGLE_ID

export default function Register() {
  const history = useHistory();

    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [confirmaSenha, setConfirmaSenha] = useState("")

    const extSuccess = (e) => {
        // sendDataRegistro();
        localStorage.setItem('token', e.accessToken);
        localStorage.setItem('notificacoes', "['descanso','curso','tarefa']");
        localStorage.setItem('pontosCasa', 60);
        localStorage.setItem('pontosEmpresa', 200);
        localStorage.setItem('userName', "Eliza");
        localStorage.setItem('imgPerfil', "https://ath2.unileverservices.com/wp-content/uploads/sites/2/2017/10/perfis-de-mulheres-com-cabelo-curto-no-instagram-7.jpg");
        
        history.push("/setup/1");
    }
    const successLoguin = async () => {
        await localStorage.setItem('perfilEmpreendedora', "true");
        await localStorage.setItem('userName', "Eliza");
        await localStorage.setItem('imgPerfil', "https://ath2.unileverservices.com/wp-content/uploads/sites/2/2017/10/perfis-de-mulheres-com-cabelo-curto-no-instagram-7.jpg");
        
        history.push("setup/1");
    }

    return (<>
        <Header logo={true}/>
        <div className="register_container">
            <h3>Cadastro</h3>
            <form className="register_form">
                <Input 
                    placeholder="Nome"
                    type="email" 
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                />
                <Input 
                    placeholder="Email"
                    type="email" 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <Input 
                    placeholder="Senha"
                    type="password" 
                    value={senha}
                    onChange={e => setSenha(e.target.value)}
                />
                
                <Input 
                    placeholder="Confirme a senha" 
                    type="password" 
                    value={confirmaSenha}
                    onChange={e => setConfirmaSenha(e.target.value)}
                />
                <Button onClick={successLoguin} type="submit" text="Cadastrar"></Button>
            </form>
            <GoogleLogin
                    className="button_google"
                    clientId={clientId}
                    buttonText="Cadastrar com Gmail"
                    onSuccess={extSuccess}
                    cookiePolicy={'single_host_origin'}
                />
        </div>
        
        </>
    )
}
