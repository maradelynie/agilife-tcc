import React from 'react';
import {useHistory} from 'react-router-dom'

import {useSelector} from "react-redux";

import './style.css';

import Logo from "../../assets/logo.png";

import {setShowMenu} from "../../redux/actions";
import {useDispatch} from "react-redux";
import { faEllipsisH,faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Header() {
  const {title,logo,menu} = useSelector(state => state);
  const dispatch = useDispatch();
  
  const history = useHistory();

  return (<>
    <div className="header">
      <div className={"header_nav"}>
        {title?<FontAwesomeIcon className="clicable" onClick={history.goBack} icon={faChevronLeft}/>:<div className="header_icon"></div>}
        {logo?<img alt="Agilife" src={Logo}/>:<div></div>}
        {menu?<FontAwesomeIcon onClick={()=>dispatch(setShowMenu())} className="clicable" icon={faEllipsisH}/>:<p >{title}</p>}
      </div>
    </div>
    </>
  );
}


