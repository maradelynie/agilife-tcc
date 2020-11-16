import React, {useState,useEffect} from 'react'
import { GoogleLogin } from "react-google-login";
import { Link } from "react-router-dom";
import {useHistory} from 'react-router-dom'

import {setLogo,setTitle,setMenu} from "../../redux/actions";
import {useDispatch} from "react-redux";

import Logo from "../../assets/logog.png";

import './style.css';
import Button from '../../components/button';
import Input from '../../components/input';

const clientId = process.env.REACT_APP_GOOGLE_ID

export default function Login() {

  const dispatch = useDispatch();

  const history = useHistory();

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    const setGoogleData = async (e) => {
        try{
            const data = {
                nome:e.googleId.email,
                email:e.googleId.givenName,
                senha:e.googleId.googleId
            }
    
            login(data);
        }catch{
            loginFail();
        }
       
    }
    const login = async (data) => {
        try{
            // apiSetLogin(data);
            loginSuccess()
        }catch{
            loginFail()
        }

    }
    const setLogin = async (e) => {
        e.preventDefault()
        const data = {
            email,
            senha
        }
       
        login(data)
    }
    const loginFail = async (e) => {
        console.log("fail")
    }
    const loginSuccess = async (e) => {
        history.push("/home");
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
                        autoComplete="email"
                        placeholder="Usuário"
                        type="email" 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Input 
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
