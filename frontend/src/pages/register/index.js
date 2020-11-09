import React, {useState,useEffect} from 'react'
import { GoogleLogin } from "react-google-login";
import {useHistory} from 'react-router-dom'


import {setTitle} from "../../redux/actions";
import {useDispatch} from "react-redux";

import './style.css';
import Button from '../../components/button';
import Input from '../../components/input';

const clientId = process.env.REACT_APP_GOOGLE_ID

export default function Register() {
  const dispatch = useDispatch();

  const history = useHistory();

  useEffect(() => {
    dispatch(setTitle("registro"))
  }, [])

    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [confirmaSenha, setConfirmaSenha] = useState("")

    const setGoogleData = async (e) => {
        try{
            const data = {
                nome:e.googleId.email,
                email:e.googleId.givenName,
                senha:e.googleId.googleId
            }
    
            register(data);
        }catch{
            registerFail();
        }
       
    }
    const register = async (data) => {
        try{
            // apiSetLogin(data);
            registerSuccess()
        }catch{
            registerFail()
        }

    }
    const setRegister = async (e) => {
        e.preventDefault()
        const data = {
            nome,
            email,
            senha
        }
       
        register(data)
    }
    const registerFail = async (e) => {
        console.log("fail")
    }
    const registerSuccess = async (e) => {
        history.push("/home");
    }

    return (<>
        <div className="register_container">
            <form className="register_form">
                <Input 
                    autoComplete="name"
                    placeholder="Nome"
                    type="email" 
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                />
                <Input 
                    autoComplete="email"
                    placeholder="Email"
                    type="email" 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <Input 
                    autoComplete="no"
                    placeholder="Senha"
                    type="password" 
                    value={senha}
                    onChange={e => setSenha(e.target.value)}
                />
                
                <Input 
                    autoComplete="no"
                    placeholder="Confirme a senha" 
                    type="password" 
                    value={confirmaSenha}
                    onChange={e => setConfirmaSenha(e.target.value)}
                />
                <Button onClick={setRegister} type="submit" text="Cadastrar"></Button>
            </form>
            <GoogleLogin
                className="button_google"
                clientId={clientId}
                buttonText="Registrar com Gmail"
                onSuccess={setGoogleData}
                cookiePolicy={'single_host_origin'}
                onFailure={registerFail}
            />
        </div>
        
        </>
    )
}
