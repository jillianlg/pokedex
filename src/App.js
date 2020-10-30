import React, { Component } from 'react'
import './App.css';
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
} from 'react-router-dom';
import ListPage from './ListPage.js';
import Header from './Header';
import HomePage from './HomePage';
import DetailPage from './DetailPage';

export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Header />
                    <Switch>
                    <Route 
                        path="/" 
                        exact
                        render={(routerProps) => <HomePage {...routerProps} />} 
                    />
                    <Route 
                        path="/list" 
                        exact
                        render={(routerProps) => <ListPage {...routerProps} />} 
                    />
                    <Route 
                        path="/pokeData/:pokeName" 
                        exact
                        render={(routerProps) => <DetailPage {...routerProps} />} 
                    />
                    </Switch>
                </Router>
            </div>
        )
    }
}