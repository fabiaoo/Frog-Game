import React, { Component } from 'react';
import bk from '../../../src/res/circuitoBg.png'
import sapo1 from '../../../src/res/sapo1.png';
import './CircuitoStyle.css';

const apiURL = 'https://localhost:5000/api/circuito';

const stateInicial = 
{
    pergunta: { id:0, conteudo:'', url_Img:''},
    dadosPergunta: [],
    resposta: { id: 0, resp: '', IdPergunta: '', correta:''},
    dadosResposta: [],
}

function selectPergunta(id) {
    if(id > 0 && id < 6)
        return id;
}
export default class CadastroAluno extends Component
{
    state = {...stateInicial};
    
    componentDidMount() {
        fetch(apiURL)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                    dadosPergunta: result
                });
                console.log("Função didMount:" + result);
            },
            (error) => {
                this.setState({ error });
            }
        )
    }

    getPerguntas() 
    {
        const pergunta = this.state.dadosPerguntas.filter(selectPergunta);
        console.log(pergunta);
    }

    render() 
    {
        return (
            <div style = {{backgroundColor: '#AFD5F3'}}>
                <div className="quest">
                    2=2
                </div>

                <div style = {{backgroundImage : 'url(./circuitoBg.png)'}} />

                <div className="container">
                    <img img src={sapo1} className="imgBg"/><img img src={bk} className="imgBg2" widt="540" height="724"/>
                </div>

                <input type="number" placeholder="Resposta" className="resposta"/>

            </div>
        )
    }
}
