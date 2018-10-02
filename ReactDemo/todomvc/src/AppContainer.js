import React, { Component } from 'react';
import { Container } from 'flux/utils';
import TodoStore from './stores/TodoStore';
import TodoDraftStore from './stores/TodoDraftStore';
import TodoEditStore from './stores/TodoEditStore';
import TodoActions from './actions/TodoActions';
import AppView from './components/AppView';

class AppContainer extends Component {

    render() {
        return (
            <AppView {...this.state} />
        );
    }
}

AppContainer.getStores = () => ( [TodoStore, TodoDraftStore, TodoEditStore ] );
AppContainer.calculateState = ( prevState ) => ( {
    todos: TodoStore.getState(),
    draft: TodoDraftStore.getState(),
    editing: TodoEditStore.getState(),

    onAdd: TodoActions.addTodo,
    onEditTodo: TodoActions.editTodo,
    onStartEditingTodo: TodoActions.startEditingTodo,
    onStopEditingTodo: TodoActions.stopEditingTodo,
    onUpdateDraft: TodoActions.updateDraft,
    onDeleteCompletedTodos: TodoActions.deleteCompletedTodos,
    onDeleteTodo: TodoActions.deleteTodo,
    onToggleTodo: TodoActions.toggleTodo,
    onToggleAllTodos: TodoActions.toggleAllTodos,
} );

export default Container.create( AppContainer );