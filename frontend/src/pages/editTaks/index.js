import React, {useState,useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import {useSelector} from "react-redux";

import {updateData, getUserData} from "../../api";

import {setTitle,setWarning,setWarningText,setLoading,setAllUserData} from "../../redux/actions";
import {useDispatch} from "react-redux";

import './style.css';
import Button from '../../components/button';
import Input from '../../components/input';
import Select from '../../components/select';

export default function EditTasks() {
    const dispatch = useDispatch();
    const history = useHistory();
    const {emailPartner,email} = useSelector(state => state);

      const keeperOption = [emailPartner,email]
      const [tarefas, setTarefas] = useState([1,2,3])
  
      const addTarefa = () => {
          setTarefas(tarefas => {
              const prox = tarefas.length+1;
              return [...tarefas, prox]
          })
      }
  
      const cadastrarTarefas = async () => {
          setLoading(true)
          const inputs = document.querySelectorAll("input")
          const selects = document.querySelectorAll("select")
          const tasksList = []
          inputs.forEach((taskItem,index)=>{
              if(taskItem.value!==""){
                  const data = {
                  task:taskItem.value,
                  keeper:selects[index].value
                  }
                  tasksList.push(data)
              }
          })
  
  
          const token = localStorage.getItem("token")
          const newData = await updateData({token,tasks:tasksList})
  
          if(newData.res) history.push("/home");
          else{
              dispatch(setWarningText("Algo ocorreu, porfavor atualize e tente novamente."))
              dispatch(setWarning(true))
          }
          setLoading(false)
      }
  
      useEffect(() => {
        const setUpDataUser = async (token) => {
            dispatch(setLoading(true))

            if(token){
               
                    const data = await getUserData(token)
                    if(data.tasks.length===0){
                        return history.push("/setup/1")
                    }
                    dispatch(setLoading(false))

                    return dispatch(setAllUserData(data))
              
            }else{
                dispatch(setLoading(false))

                return history.push("/")
            }

        }
        setUpDataUser(localStorage.getItem("token"))
            dispatch(setTitle("editar atividades"))
       
  
        }, [])
  
      return (<>
              <form className="setup_container">
                  <div className="tarefas_container">
                  {tarefas.map((tarefa) =>{
                     return (
                      <div key={tarefa} className="setup_tarefas">
                          <label>Tarefa
                              <Input autoComplete="no" />
                          </label>
                          <label>Responsável
                              <Select options={keeperOption} />
                          </label>
                      </div>
                      )
                  })}
                  </div>
                  <Button onClick={addTarefa} type="add" text="+"/>
                  <Button  onClick={cadastrarTarefas} type="submit" text="Cadastrar"/>
              </form>
  
         
          </>
      )
}
