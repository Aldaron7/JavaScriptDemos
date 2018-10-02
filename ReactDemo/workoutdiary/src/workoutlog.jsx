import React, { Component } from 'react';
import Navigation from './navigation.jsx';
import DefineWorkout from './defineworkout.jsx';
import StoreWorkout from './storeworkout.jsx';
import History from './history.jsx';

export default class WorkoutLog extends Component {
    constructor( props ) {
        super( props );
        this.state = { view: "define" };
    }

    render() {
        return (
            <div>
                <h1>Workout Log</h1>
                <Navigation onLogout={this.props.onLogout} onNav={this._onNav} />
                {this.state.view === "define" ? <DefineWorkout /> : ""}
                {this.state.view === "store" ? <StoreWorkout /> : ""}
                {this.state.view === "history" ? <History /> : ""}
            </div>
        );
    }

    _onNav = ( theView ) => {
        this.setState( { view: theView } );
    }

}