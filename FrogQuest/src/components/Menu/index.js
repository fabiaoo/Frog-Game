import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './botoesStyle.css';
import btnPlay from "../../../src/res/botao6.png";
import btnOpcoes from "../../../src/res/botao7.png";
import logo from '../../../src/res/logo.png';

export default class Menu extends Component
{
    render() {
        return(
            <div className="menu" style={{backgroundImage: "url(./swamp3.jpg)"}}>
                <div>
                    <div className="botoes">
                    <img src={logo} alt="logo do sapinho" className="logo"/>

                    <Link className="btn" name="play" to="/circuito">
                        <img className="btn" src={btnPlay} />
                    </Link>
                    
                    <input type="image" className="btn" name="play" src={btnOpcoes} href="/"/>        
                    </div>
                </div>
            </div>
        )
    }
}