import React, { Component } from 'react';
import NewTodo from './NewTodoView';

export default class Header extends Component {

    render() {
        return (
            <header id="header">
                <h1>Todos</h1>
                <NewTodo {...this.props}/>
            </header>
        );
    }
}