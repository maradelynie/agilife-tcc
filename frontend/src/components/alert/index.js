import React from 'react';
import './style.css';

import { faBell } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Alert(props) {

  return (<div className="alert_container clicable">
    <FontAwesomeIcon   onClick={props.onClick} className="alert_icon" icon={faBell}/>
    <div className="alert_number ">{props.data.length}</div> 
    </div>
  );
}


