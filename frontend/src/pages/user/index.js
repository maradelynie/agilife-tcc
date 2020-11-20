import React, {useState,useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import {useSelector} from "react-redux";

import {useDispatch} from "react-redux";
import {setTitle,setAllUserData,setLoading,setWarning,setWarningText} from "../../redux/actions";

import {updateData,getUserData,getPoints} from "../../api";

import './style.css';
import Button from '../../components/button';
import Input from '../../components/input';

export default function User() {
  const dispatch = useDispatch();
  const {emailPartner,name, points} = useSelector(state => state);

  const history = useHistory();

  useEffect(() => {
    const setUpDataUser = async (token) => {
        dispatch(setLoading(true))

        if(token){
           
                const data = await getUserData(token)
                dispatch(setLoading(false))
                const getPointsData = await getPoints(data.userPartner)
                setPointsUser(getPointsData)

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
    const [pointsUser, setPointsUser] = useState(0)
    const [emailParceiro, setEmailParceiro] = useState(emailPartner)

    const update = async () => {
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
                <h2>Placar</h2>
            <h3>{name}</h3>
             <h3>{points}</h3>
             <hr/>
             <h3>{emailPartner}</h3>
             <h3>{pointsUser}</h3>
             <h2>Editar dados</h2>
                <label> Nome
                <Input 
                    autoComplete="name"
                    placeholder="Nome"
                    type="email" 
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                /></label>
                <label>
                    Email parceiro
                <Input 
                    autoComplete="no"
                    placeholder="Email Parceiro"
                    type="email" 
                    value={emailParceiro}
                    onChange={e => setEmailParceiro(e.target.value)}
                /></label>
              
                <Button onClick={update} type="submit" text="atualizar"></Button>

            </div>
                
        
            
        </form>
        
        </>
    )
}
