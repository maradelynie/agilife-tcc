import React, {useState,useEffect} from 'react'
import { GoogleLogin } from "react-google-login";
import { Link } from "react-router-dom";
import {useHistory} from 'react-router-dom'

import {
    setLogo,
    setTitle,
    setMenu,
    setWarning,
    setWarningText,
    setLoading,
    
} from "../../redux/actions";

import {useDispatch} from "react-redux";

import Logo from "../../assets/logog.png";

import {getAuth} from "../../api";
import './style.css';
import Button from '../../components/button';
import Input from '../../components/input';

const clientId = "560780546067-epiigd1dr0rj7do54t9qdonni8c86qhj.apps.googleusercontent.com"

export default function Login() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [email, setEmailInput] = useState("")
    const [senha, setSenha] = useState("")

    const setGoogleData = async (e) => {
        try{
            const data = {
                login: e.getBasicProfile().getEmail(),
                password: e.getBasicProfile().getId()
            }
    
            login(data);
        }catch{
            loginFail();
        }
       
    }
    const login = async (data) => {
        dispatch(setLoading(true))
        
        try{
            const userAuth = await getAuth(data)
            if(userAuth.res)loginSuccess(userAuth)
            else loginFail()
        }catch{
            loginFail()
        }
        dispatch(setLoading(false))

    }
    const setLogin = async (e) => {
        e.preventDefault()
        if(email===""||senha==="")loginFail()
        else{
        const data = {
            login: email,
            password: senha
        }
       
        login(data)}
    }
    const loginFail = () => {
        dispatch(setWarningText("Falha na autenticação, cheque seus dado e tente novamente"))
        dispatch(setWarning(true))
    }
    const loginSuccess = (data) => {
        localStorage.setItem("token",data.token)
        if(data.admin)history.push("/homeAdm");
        else history.push("/home");
    }
    useEffect(() => {
        dispatch(setTitle(""))
        dispatch(setLogo(false))
        dispatch(setMenu(false))
    }, [])
    
    return (
       
        <div className="login_container">
            <img alt="logo agile" src={Logo}></img>

            <form className="form_container">
                    <Input 
                        required={true}
                        autoComplete="email"
                        placeholder="Usuário"
                        type="email" 
                        value={email}
                        onChange={e => setEmailInput(e.target.value)}
                    />
                    <Input 
                        required={true}
                        autoComplete="current-password"
                        placeholder="Senha" 
                        type="password" 
                        value={senha}
                        onChange={e => setSenha(e.target.value)}
                    />
               
                <div  className="Login_submitContainer">
                    <Button text="Login" onClick={(e) => setLogin(e)} type="submit" ></Button>
                    <p>Primeira vez aqui? <Link to={'/register'}>Cadastre-se</Link>.</p>
                </div>
                
            </form>

            <GoogleLogin
                className="button_google"
                clientId={clientId}
                buttonText="Logar com Gmail"
                onSuccess={setGoogleData}
                cookiePolicy={'single_host_origin'}
                onFailure={loginFail}
            />
        </div>
        
    )
}
