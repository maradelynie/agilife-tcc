import React from 'react';
import './style.css';

export default function Button(props) {
  let type = props.type;
  return (
    <button className="buttonDefault clicable" type={type} onClick={props.onClick}>{props.text}</button>
  );
}


