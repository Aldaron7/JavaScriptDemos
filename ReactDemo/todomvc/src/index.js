import React from 'react';
import ReactDOM from 'react-dom';
import App from './AppContainer';
import TodoActions from './actions/TodoActions';
import './style.css';

TodoActions.addTodo( 'My first task' );
TodoActions.addTodo( 'Another task' );
TodoActions.addTodo( 'Finish this tutorial' );

ReactDOM.render( <App />, document.getElementById( 'root' ) );

