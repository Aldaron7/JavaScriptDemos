import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Repos from './Repos';
import ServerError from './ServerError';

export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <header>App</header>
                    <menu>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/repos">Repos</Link></li>
                        </ul>
                    </menu>

                    <Route exact path="/" component={Home} />
                    <Route path="/about" render={( props ) => <About {...props} title="About Us" />} />
                    <Route path="/repos" component={Repos} />
                    <Route path="/error" component={ServerError} />
                </div>
            </Router>
        );
    }
}