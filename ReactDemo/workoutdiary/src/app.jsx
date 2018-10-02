import React, { Component } from 'react';
import Authentication from './authentication.jsx';
import WorkoutLog from './workoutlog';

export default class App extends Component {
    constructor() {
        super();
        this.state = { signedIn: false };
        this._onAuthComplete = this._onAuthComplete.bind( this );
    }

    render() {
        return (
            <div>
                {this.state.signedIn ? <WorkoutLog onLogout={this._onLogout} /> : <Authentication onAuthComplete={this._onAuthComplete} />}
            </div>
        );
    }

    _onAuthComplete( result ) {
        if ( result() ) {
            this.setState( { signedIn: true } );
        }
    }

    _onLogout = () => {
        this.setState( { signedIn: false } );
    }

}