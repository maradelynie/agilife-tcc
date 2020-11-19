import React, {useState,useEffect} from 'react'
import { GoogleLogin } from "react-google-login";
import {useHistory} from 'react-router-dom'

import {setTitle,setWarningText,setWarning} from "../../redux/actions";
import {useDispatch} from "react-redux";

import './style.css';
import {getRegister} from "../../api";
import Button from '../../components/button';
import Input from '../../components/input';

const clientId = process.env.REACT_APP_GOOGLE_ID

export default function Register() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [confirmaSenha, setConfirmaSenha] = useState("")


  useEffect(() => {
    dispatch(setTitle("registro"))
  }, [])

    
    const setGoogleData = async (e) => {
        try{
            const data = {
                name: e.getBasicProfile().getName(),
                login: e.getBasicProfile().getEmail(),
                password: e.getBasicProfile().getId()
            }
    
            register(data);
        }catch{
            registerFail();
        }
       
    }
    const register = async (data) => {
            try{
                const newData = await getRegister(data);
                localStorage.setItem("token",newData.token)
                registerSuccess()
            }catch{
                registerFail()
            }
        

    }
    const setRegister = async (e) => {
        e.preventDefault()
        if(senha!==confirmaSenha){
            dispatch(setWarningText("A confirmação de senha não confere."))
            dispatch(setWarning(true))
        }else if(nome===""||email===""||senha===""||confirmaSenha===""){
            dispatch(setWarningText("Todos os campos precisam ser preenchidos."))
            dispatch(setWarning(true))
        }

        const data = {
            name:nome,
            password:senha,
            login:email
        }
       
        register(data)
    }
    const registerFail = async () => {
        dispatch(setWarningText("Email inválido ou já cadastrado."))
        dispatch(setWarning(true))
    }
    const registerSuccess = async () => {
        history.push("/setup/1");
    }

    return (<>
        <div className="register_container">
            <form className="register_form">
                <Input 
                    required={true}
                    autoComplete="name"
                    placeholder="Nome"
                    type="email" 
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                />
                <Input 
                    required={true}
                    autoComplete="email"
                    placeholder="Email"
                    type="email" 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <Input 
                    required={true}
                    autoComplete="no"
                    placeholder="Senha"
                    type="password" 
                    value={senha}
                    onChange={e => setSenha(e.target.value)}
                />
                
                <Input 
                    required={true}
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
