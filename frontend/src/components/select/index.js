import React from 'react';
import './style.css';

export default function Select(props) {
  
  return (
    <select 
    className="selectDefault"
    value={props.value}
    onClick={props.onClick} 
    onChange={props.onChange}
    onBlur={props.onBlur}
    >
      {props.placeholder?<option defaultValue value="">{props.placeholder}</option>:<></>}
      {props.options.map(option =>{
        return <option key={option} value={option}>{option}</option>
      })}
      
    </select>
  );
}
