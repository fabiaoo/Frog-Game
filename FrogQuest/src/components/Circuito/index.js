import React, { Component } from 'react';
import sapo1 from '../../../src/res/sapoesquerda.png'
import sapo2 from '../../../src/res/sapodireita.png';
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
    indexResposta: 0,
    divImg: false,
    img1: sapo1,
}

export default class Circuito extends Component
{
    state = {...stateInicial};

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

    atualizaCampo(event) {
        //console.log(event.target.value);
        const resposta = {...this.state.resposta};
        resposta[event.target.name] = event.target.value;
        this.setState({ resposta });
    }

    conferir()
    {
        var resposta = this.state.resposta;
        resposta = resposta.resp;
        console.log(resposta);     

        this.state.dadosRespostas.map(
            (resposta, index) => {
                if(index == this.state.indexResposta)
                {
                    if(resposta.resp === this.state.resposta.resp)
                    {
                        this.state.divImg = true;
                        console.log(this.state.divImg);
                        console.log("Parabéns! Resposta certa: " + resposta.resp);
                        this.state.indexPergunta = this.state.indexPergunta + 1;

                        this.limpar();
                    }
                    else {
                        console.log("Que pena! Tente novamente");
                        this.state.divImg = false;
                    }
                }
                this.setState({ indexResposta: this.state.indexResposta + 1 });  
                return;
            }
        )
    }

    limpar()
    {
        this.setState({resposta: stateInicial.resposta});
    }

    divSituacao()
    {
        if(this.state.divImg == true)
        {
            console.log(this.state.divImg);
            this.state.img1 = sapo2;
        }
        else
        {
            this.state.img1 = sapo1;
        }
    }

    handleChange(event)
    {
        const resposta = { ...this.state.resposta };
        resposta[event.target.name] = event.target.value;
        this.setState({ resposta });
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
                {
                    this.divSituacao()
                }
                    <img img src={this.state.img1} className="imgBg"/>

                </div>

                <input
                type="number" 
                id="resp"
                placeholder="Resposta" 
                className="resposta" 
                name="resp"
                onChange={ e => this.handleChange(e)}
                value={this.state.resposta.resp}
                />

                <button className="btnSalvar" onClick={ e => this.conferir(e) }>
                    Enviar
                </button>
            </div>
        )
    }
}
