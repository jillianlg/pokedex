import React, { Component } from 'react'
import './App.css';
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
} from 'react-router-dom';
import ListPage from './ListPage.js';
import FetchPage from './FetchPage.js';
import Header from './Header';
import HomePage from './HomePage';

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
                        path="/fetch" 
                        exact
                        render={(routerProps) => <FetchPage {...routerProps} />} 
                    />
                    </Switch>
                </Router>
            </div>
        )
    }
}