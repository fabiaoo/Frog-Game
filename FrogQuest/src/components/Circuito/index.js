import React, { Component } from 'react';
import bk from '../../../src/res/circuitoBg.png'
import sapo1 from '../../../src/res/sapo1.png';
import './CircuitoStyle.css';

const apiURL = 'http://localhost:5000/api/pergunta';
const apiURL2 = 'http://localhost:5000/api/resposta';

const stateInicial = 
{
    pergunta: { id:0, conteudo:'', url_Img:true},
    dadosPerguntas: [],
    resposta: { id: 0, resp: '', IdPergunta: '', correta:''},
    dadosRespostas: [],
    indexPergunta: 0,
    indexResposta: 0
}

export default class Circuito extends Component
{
    state = {...stateInicial};
    
    componentDidUpdate() {
        
    }

    componentDidMount() {
        fetch(apiURL)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                            dadosPerguntas: result
                });
            },
            (error) => {
                this.setState({ error });
            }
        )
        fetch(apiURL2)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                    dadosRespostas: result
                });
            },
            (error) => {
                this.setState({ error });
            }
        )
    }

    conferir()
    {
        this.state.dadosRespostas.map(
            (resposta, index) => {
                if(index == this.state.indexResposta)
                {
                    return pergunta.conteudo;
                }

                return "";
            }
        )
    }

    render() 
    {
        return (
            <div style = {{backgroundColor: '#AFD5F3'}}>
                <div className="quest">
                {
                    <div>
                        <p>{this.state.dadosPerguntas.map(
                            (pergunta, index) => {
                                if(index == this.state.indexPergunta)
                                {
                                    return pergunta.conteudo;
                                }

                                return "";
                            }
                            )}
                        </p>                                        
                    </div>
                }
                </div>
                
                <div style = {{backgroundImage : 'url(./circuitoBg.png)'}} />

                <div className="container">
                    <img img src={sapo1} className="imgBg"/><img img src={bk} className="imgBg2" widt="540" height="724"/>
                </div>

                <input type="number" placeholder="Resposta" className="resposta" />

                <button className="btnSalvar"
                onClick={e => this.conferir(e)} 
                >
                    Enviar
                </button>
            </div>
        )
    }
}
