import React from "react";
import './botoesStyle.css';
import btnPlay from "../res/play.png"
import logo from '../res/logo.png'

export default function(props){
    
    return(
        <div className="menu">
            <img src={logo} alt="logo do sapinho" id="logo"/>
            <div>
            <input type="image" className="btn" name="play" src={btnPlay} />        
            <input type="image" className="btn" name="play" src={btnPlay} />        
            </div>
        </div>
        //<img src={path + props.nome} />            //<img src={btnPlay} />
    )
}