import React, {useState,useEffect} from 'react'
import imgEmail from "../../assets/VetorEmail.png";
import {useHistory} from 'react-router-dom'

import {updateData} from "../../api";

import {setTitle,setWarning,setWarningText,} from "../../redux/actions";
import {useDispatch} from "react-redux"; 

import './style.css';
import Button from '../../components/button';
import Input from '../../components/input';

export default function Setup2() {
  const dispatch = useDispatch();

  const history = useHistory();

    const [email, setEmail] = useState("")

    const handleSubmit = async () => {
        const token = localStorage.getItem("token")
        const newData = await updateData({token,userPartner:email})

        if(newData.res){
            localStorage.setItem("partner", email)
            history.push("/setup/3");
        }
        else{
            dispatch(setWarningText("Algo errado! Parece que esse email ja foi utilizado em outra conta."))
            dispatch(setWarning(true))
        }
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
