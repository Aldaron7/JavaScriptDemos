import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Square from './Square';

export default class Board extends Component {

    renderSquare( i ) {
        return <Square value={this.props.squares[i]} onClick={() => this.props.onClick( i )} />;
    }

    render() {
        let rows = [];
        for ( var i = 0; i < 9; i++ ) {
            rows.push( this.renderSquare( i ) );
        }
        return (
            <div>
                <div className="board-row">
                    {rows.slice( 0, 3 )}
                </div>
                <div className="board-row">
                    {rows.slice( 3, 6 )}
                </div>
                <div className="board-row">
                    {rows.slice( 6, 9 )}
                </div>
            </div>
        );
    }
}

Board.proptypes = {
    squares: PropTypes.arrayOf( PropTypes.instanceOf( Square ) ).isRequired,
    onClick: PropTypes.func
    }