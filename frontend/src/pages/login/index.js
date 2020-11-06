import React, {useState} from 'react'
import { GoogleLogin } from "react-google-login";
import { Link } from "react-router-dom";
import {useHistory} from 'react-router-dom'

import logo from "../../assets/logog.png";

import './style.css';
import Header from '../../components/header';
import Button from '../../components/button';
import Input from '../../components/input';

const clientId = process.env.REACT_APP_GOOGLE_ID

export default function Login() {
  const history = useHistory();

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    const extSuccess = async (e) => {
        console.log(e)
        localStorage.setItem('token', e.accessToken);
        localStorage.setItem('notificacoes', "['descanso','curso','tarefa']");
        localStorage.setItem('pontosCasa', 60);
        localStorage.setItem('pontosEmpresa', 200);

        await localStorage.setItem('perfilEmpreendedora', "true");
        await localStorage.setItem('userName', "Eliza");
        await localStorage.setItem('imgPerfil', "https://ath2.unileverservices.com/wp-content/uploads/sites/2/2017/10/perfis-de-mulheres-com-cabelo-curto-no-instagram-7.jpg");
        
        // history.push("/home");
    }
    const successLoguin = async (e) => {
        e.preventDefault()
        localStorage.setItem('token', "loguin");

        await localStorage.setItem('perfilEmpreendedora', "false");
        
        await localStorage.setItem('userName', "José");
        await localStorage.setItem('imgPerfil', "https://cdn.topmidianews.com.br/img/pc/620/320/dn_noticia/2019/04/servidor-25-anos.jpg");

        history.push("/home");
    }
    
    return (<>
        <Header login={true}/>
        <div className="login_container">
            <img alt="Mulher usando o computador" src={logo}></img>

            <form className="form_container">
                    <Input 
                        placeholder="Usuário"
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
               
                <div>
                    <Button text="Login" onClick={(e) => successLoguin(e)} type="submit" ></Button>
                    <p>Nova aqui? <Link to={'/register'}>Cadastre-se</Link>.</p>
                </div>
                
            </form>

            <GoogleLogin
                    className="button_google"
                    clientId={clientId}
                    buttonText="Logar com Gmail"
                    onSuccess={extSuccess}
                    cookiePolicy={'single_host_origin'}
                    // isSignedIn={true}
                />
        </div>
        </>
    )
}
