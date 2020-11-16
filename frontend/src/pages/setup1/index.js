import React, {useEffect} from 'react'
import imgCasa from "../../assets/Casinha.png";
import {useHistory} from 'react-router-dom'

import {setTitle} from "../../redux/actions";
import {useDispatch} from "react-redux";

import './style.css';
import Button from '../../components/button';

export default function Register() {
  const dispatch = useDispatch();
  const history = useHistory();

    const buttonNao= async () =>{
        await localStorage.setItem('parceiro', false);

        history.push("/setup/3")
        
    }
    const buttonSim = async () => {
        await localStorage.setItem('parceiro', true);

        history.push("/setup/2")
    }

    useEffect(() => {
        dispatch(setTitle("configuração de conta"))
      }, [])


    return (<>
            <div className="setup_container">
                <img alt="casa roxa com arvores em volta" src={imgCasa}></img>
                <p>Você dividirá as tarefas domésticas com mais alguem?</p>
                    
                <div className="button_container">
                    <Button onClick={buttonSim} type="submit" text="sim"/>
                    <Button onClick={buttonNao}type="submit" text="não"/>
                </div>
            </div>

       
        </>
    )
}
