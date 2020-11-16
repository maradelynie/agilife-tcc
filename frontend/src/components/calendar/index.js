import React,{useEffect, useState} from 'react';

import * as utils from "../../utils"
import './style.css';

export default function Calendar(props) {
  const [weekDay, setWeekDay] = useState("")
  const [day, setDay] = useState("")
  const [month, setMonth] = useState("")
  const [year, setYear] = useState("")

  
  useEffect(() => {
    const date = new Date();

    setWeekDay(utils.formatDay(date.getDay()))
    setDay(date.getDate())
    setMonth(utils.formatMonth(date.getMonth()))
    setYear(date.getFullYear())

  });

  return <div className="calendario_container">
      <h3>{weekDay}</h3>
      <p>{day} de {month} de {year}</p>
      <hr/>
    </div>
  
}


