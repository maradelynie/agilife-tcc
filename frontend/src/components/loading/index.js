import React from 'react';
import './style.css';

import {useSelector} from "react-redux";

export default function Loading() {
  const {loading} = useSelector(state => state);


  if(!loading){
    return ""
  }

  return (
   <div  className="loading_container">
      <p>Carregando...</p>
   </div>
  );
}
