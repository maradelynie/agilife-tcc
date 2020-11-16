
import React from 'react';
import './style.css';

import {setIframe} from "../../redux/actions";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";

import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Iframe() {
  const dispatch = useDispatch();
  const {iframe,iframeUrl} = useSelector(state => state);

if(iframe){
return (
  <div className="iframe_container">
    <div onClick={()=>dispatch(setIframe(false))}  className="iframe_close"><FontAwesomeIcon  icon={faTimes}/></div>
    <iframe className="iframe_full" width="100%" height="100%" src={iframeUrl}/>

   </div>
  );}else{
    return <></>
  }
}
