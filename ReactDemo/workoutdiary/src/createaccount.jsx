import React, { Component } from 'react';

class CreateAccount extends Component {
    render() {
        return (
            <div>
                <label htmlFor="username">Username:<input type="text" id="username" /></label>
                <label htmlFor="password">Password:<input type="text" id="password" /></label>
                <label htmlFor="password">Confirm Password:<input type="text" id="confpassword" /></label>
                <button id="signIn" onClick={this.props.onAuthComplete.bind( null, this._createAccount )}>Create Account</button>
            </div>
        );
    };

    _createAccount() {
        return true;
    }
}

export default CreateAccount;