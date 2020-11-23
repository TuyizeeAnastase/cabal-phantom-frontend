import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import LandingPage from '../Pages/LandingPage';
import TestRedux from '../components/Counter';

export default class Routers extends Component {
    render() {
        return (
            <div>
                 <Router>
                     <Switch>
                        <Route path="/" exact component={LandingPage} />
                        <Route exact path="/TestRedux" component={TestRedux} />
                     </Switch>
                 </Router>                
            </div>
        )
    }
}
