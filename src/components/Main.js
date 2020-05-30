import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Sub from './SubMain';
import Single from './Single';
import Photogrid from './Photogrid';

class Main extends Component {
    render() {
        return (
            <BrowserRouter>
            <div>
                <Switch>
                  <Route path="/" component={Sub} />
                  <Route exact path="/" component={Photogrid} />
                  <Route path="/view/:postId" component={Single} />
                </Switch>
            </div>
            </BrowserRouter>
        );
    }
}

    export default Main;