import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router';
import Circuito from './components/Circuito';
import Menu from './components/Menu';

export default class Rotas extends Component 
{
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Menu} />
                <Route path="/circuito" component={Circuito} />
            </Switch>
        )
    }
}
