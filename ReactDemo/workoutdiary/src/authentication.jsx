import React, { Component } from 'react';
import SignIn from './signin.jsx';
import CreateAccount from './createaccount.jsx';

class Authentication extends Component {
    render() {
        return (
            <div>
                <SignIn onAuthComplete={this.props.onAuthComplete} />
                <CreateAccount onAuthComplete={this.props.onAuthComplete} />
            </div>
        );
    };
}

export default Authentication;