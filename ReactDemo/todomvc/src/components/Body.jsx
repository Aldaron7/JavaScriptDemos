import React, { Component } from 'react';
import classnames from 'classnames';

class TodoItem extends Component {

    render() {
        const { editing, todo } = this.props;
        const isEditing = editing === todo.id;
        const onDeleteTodo = () => this.props.onDeleteTodo( todo.id );
        const onStartEditingTodo = () => this.props.onStartEditingTodo( todo.id );
        const onToggleTodo = () => this.props.onToggleTodo( todo.id );

        // Construct the input for editing a task if necessary.
        let input = null;
        if ( isEditing ) {
            const onChange = ( event ) => this.props.onEditTodo( todo.id, event.target.value );
            const onStopEditingTodo = this.props.onStopEditingTodo;
            const onKeyDown = ( event ) => {
                if ( event.keyCode === 13 ) {
                    onStopEditingTodo();
                }
            };
            input =
                <input
                    autoFocus={true}
                    className="edit"
                    value={todo.text}
                    onBlur={onStopEditingTodo}
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                />;
        }

        return (
            <li
                className={classnames( {
                    completed: todo.complete,
                    editing: isEditing,
                } )}>
                <div className="view">
                    <input
                        className="toggle"
                        type="checkbox"
                        checked={todo.complete}
                        onChange={onToggleTodo}
                    />
                    <label onDoubleClick={onStartEditingTodo}>
                        {todo.text}
                    </label>
                    <button className="destroy" onClick={onDeleteTodo} />
                </div>
                {input}
            </li>
        );
    }
}

export default class Body extends Component {

    render() {
        if ( !this.props.todos || this.props.todos.size === 0 ) {
            return null;
        }

        const allCompleted = this.props.todos.every( todo => todo.complete );

        return (
            <section id="main">
                <input id="toggle-all" type="checkbox"
                    checked={allCompleted ? 'checked' : ''}
                    onChange={this.props.onToggleAllTodos} />
                <label htmlFor="toggle-all">Mark all as complete</label>
                <ul id="todo-list">
                    {[...this.props.todos.values()].reverse().map( todo => (
                        <TodoItem
                            key={todo.id}
                            editing={this.props.editing}
                            todo={todo}
                            onDeleteTodo={this.props.onDeleteTodo}
                            onEditTodo={this.props.onEditTodo}
                            onStartEditingTodo={this.props.onStartEditingTodo}
                            onStopEditingTodo={this.props.onStopEditingTodo}
                            onToggleTodo={this.props.onToggleTodo}
                        />
                    ) )}
                </ul>
            </section>
        );
    }
}