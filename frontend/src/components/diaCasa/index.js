import React from 'react';

import './style.css';


export default function Header(props) {
  
  return (
    <div className="diaCasa_container">
      <h6>{props.dia}</h6>      
      <p>{props.data}</p>      
    </div>
  );
}


