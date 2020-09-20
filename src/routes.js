import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import Planner from './Planner/component/table';
import Home from "./Home/component/Home";
import SignIn from './SignIn/component/Signin';
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/planner" component={Planner} />
                    <Route path="/signin" component={SignIn} />
                </Switch>
            </Router>
        )
    }
}