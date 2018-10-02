import React, {Component} from 'react'

export default class Child extends Component {
    render() {
        return (
            <h1 onClick={() => this.props.clickTitle(this.props.appTitle)}>Welcome to {this.props.appTitle}</h1>
        );
    }
}
