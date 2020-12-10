import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoadingPage from './LoadingPage';
import TestRedux from './Counter';
import dashboard from './dashboard/Dashboard'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <Switch>
                        <Route exact path="/" component={LoadingPage} />
                        <Route exact path="/TestRedux" component={TestRedux} />
                        <Route exact path="/admin" component={dashboard} />
                    </Switch>
                </Router>
            </div>
        )
    }
}
