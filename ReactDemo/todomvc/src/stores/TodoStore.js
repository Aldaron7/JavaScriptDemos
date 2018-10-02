import Immutable from 'immutable';
import { ReduceStore } from 'flux/utils';
import TodoActionTypes from '../actions/TodoActionTypes';
import TodoDispatcher from '../TodoDispatcher';
import Todo from '../data/Todo';
import Counter from '../data/Counter';

class TodoStore extends ReduceStore {
    constructor() {
        super( TodoDispatcher );
    }

    getInitialState() {
        return Immutable.OrderedMap();
    }

    reduce( state, action ) {
        switch ( action.type ) {
            case TodoActionTypes.ADD_TODO:
                if ( !action.text ) {
                    return state;
                }
                const id = Counter.increment();
                const todo = new Todo( {
                    id,
                    text: action.text,
                    complete: false,
                } );
                console.log(todo);
                return state.set( id, todo );

            case TodoActionTypes.DELETE_TODO:
                return state.delete( action.id );

            case TodoActionTypes.TOGGLE_TODO:
                return state.update(
                    action.id,
                    todo => todo.set( 'complete', !todo.complete ),
                );

            case TodoActionTypes.DELETE_COMPLETED_TODOS:
                return state.filter( todo => !todo.complete );

            case TodoActionTypes.TOGGLE_ALL_TODOS:
                const allComplete = state.every(( todo, id, iter ) => todo.complete );
                return state.map( todo => todo.set( 'complete', !allComplete ) );

            case TodoActionTypes.EDIT_TODO:
                return state.update(
                    action.id,
                    todo => todo.set( 'text', action.text ),
                );

            default:
                return state;
        }
    }
}

export default new TodoStore();