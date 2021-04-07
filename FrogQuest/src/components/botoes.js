import React from "react";
import './botoesStyle.css';
import btnPlay from "../res/botao6.png"
import logo from '../res/logo.png'

export default function(props){
    
    return(
        <div className="menu" style={{backgroundImage: "url(./swamp3.jpg)"}}>
            <div>
                <div className="botoes">
                <img src={logo} alt="logo do sapinho" className="logo"/>
                    <input type="image" className="btn" name="play" src={btnPlay} href="/"/>        
                    <input type="image" className="btn" name="play" src={btnPlay} href="/"/>        
                </div>
            </div>
        </div>
        //<img src={path + props.nome} />            //<img src={btnPlay} />
    )
}