import React, { Component } from 'react';

export default class Footer extends Component {

    render() {
        if ( !this.props.todos || this.props.todos.size === 0 ) {
            return null;
        }
        const remaining = this.props.todos.filter( todo => !todo.complete ).size;
        const completed = this.props.todos.size - remaining;
        const phrase = remaining === 1 ? ' item left' : ' items left';

        let clearCompletedButton = completed > 0 ? <button id="clear-completed-button" onClick={this.props.onDeleteCompletedTodos}>Clear completed ({completed})</button> : null;

        return (
            <footer id="footer">
                <span id="todo-count">
                    <strong>
                        {remaining}
                    </strong>
                    {phrase}
                </span>
                {clearCompletedButton}
            </footer>
        );
    }
}