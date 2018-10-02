import React, { Component } from 'react';

export default class NewTodo extends Component {

    render() {
        const ENTER_KEY_CODE = 13;
        const addTodo = () => this.props.onAdd( this.props.draft );
        return (
            <input autoFocus={true} id="new-todo" placeholder="What needs to be done?"
                value={this.props.draft}
                onBlur={() => addTodo()}
                onChange={( event ) => this.props.onUpdateDraft( event.target.value )}
                onKeyDown={( event ) => {
                    if ( event.keyCode === ENTER_KEY_CODE ) {
                        addTodo();
                    }
                }}
            />
        );
    }
}