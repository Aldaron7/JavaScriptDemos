import React, { Component } from 'react';

class SignIn extends Component {

    render() {
        return (
            <div>
                <label htmlFor="username">Username<input type="text" id="username" /></label>
                <label htmlFor="password">Password<input type="text" id="password" /></label>
                <button id="signIn" onClick={this.props.onAuthComplete.bind( null, this._doAuth )}>Sign In</button>
            </div>
        );
    };

    _doAuth  () {
        return true;
    }
}

export default SignIn;