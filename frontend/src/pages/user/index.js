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
    dispatch(setTitle("perfil"))
  }, [])

    const [nome, setNome] = useState("")
    const [emailParceiro, setEmailParceiro] = useState("")
    const [senha, setSenha] = useState('')
    const [confirmaSenha, setConfirmaSenha] = useState('')

    const update = async (data) => {
        try{
            // apiSetLogin(data);
            registerSuccess()
        }catch{
            registerFail()
        }

    }
    const SetUpdate = async (e) => {
        e.preventDefault()
        const data = {
            nome,
            emailParceiro,
        }
        if(senha){
            if(senha===confirmaSenha){
                data[senha]=senha
                update(data)
            }
            else registerFail()
        }else{
            update(data)

        }
       
    }
    const registerFail = (e) => {
        console.log("fail")
    }
    const registerSuccess = () => {
        console.log("success")

    }

    return (<>
        <form className="register_container">
          
                <Input 
                    autoComplete="name"
                    placeholder="Nome"
                    type="email" 
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                />
                <Input 
                    autoComplete="no"
                    placeholder="Email Parceiro"
                    type="email" 
                    value={emailParceiro}
                    onChange={e => setEmailParceiro(e.target.value)}
                />
                <Input 
                    autoComplete="no"
                    placeholder="Nova senha"
                    type="password" 
                    value={senha}
                    onChange={e => setSenha(e.target.value)}
                />
                
                <Input 
                    autoComplete="no"
                    placeholder="Confirme a nova senha" 
                    type="password" 
                    value={confirmaSenha}
                    onChange={e => setConfirmaSenha(e.target.value)}
                />
                <Button onClick={SetUpdate} type="submit" text="atualizar"></Button>
        
            
        </form>
        
        </>
    )
}
