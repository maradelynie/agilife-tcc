import React, {useState,useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import {useSelector} from "react-redux";

import {useDispatch} from "react-redux";
import {setTitle,setAllUserData,setLoading,setWarning,setWarningText} from "../../redux/actions";

import {updateData,getUserData} from "../../api";

import './style.css';
import Button from '../../components/button';
import Input from '../../components/input';

export default function User() {
  const dispatch = useDispatch();
  const {emailPartner,name} = useSelector(state => state);

  const history = useHistory();

  useEffect(() => {
    const setUpDataUser = async (token) => {
        dispatch(setLoading(true))

        if(token){
           
                const data = await getUserData(token)
                dispatch(setLoading(false))

                return dispatch(setAllUserData(data))
          
        }else{
            dispatch(setLoading(false))

            return history.push("/")
        }

    }
    setUpDataUser(localStorage.getItem("token"))
    dispatch(setTitle("perfil"))
  }, [])

    const [nome, setNome] = useState(name)
    const [emailParceiro, setEmailParceiro] = useState(emailPartner)

    const update = async (data) => {
        setLoading(true)

        const token = localStorage.getItem("token")
        const newData = await updateData({token,name:nome,userPartner:emailParceiro})

        if(!newData.res){
            dispatch(setWarningText("Algo ocorreu, porfavor atualize e tente novamente."))
            dispatch(setWarning(true))
        }
        setLoading(false)

    }


    return (<>
        <form className="register_container">
            <div className="user_container">
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
              
                <Button onClick={update} type="submit" text="atualizar"></Button>

            </div>
                
        
            
        </form>
        
        </>
    )
}
