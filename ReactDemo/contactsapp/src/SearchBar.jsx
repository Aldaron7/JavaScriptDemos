import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchBar extends Component {
    render() {
        return <input type="search" placeholder="search" value={this.props.filterText} onChange={this.handleChange.bind( this )} />
    }

    handleChange( event ) {
        this.props.onUserInput( event.target.value )
    }
}

SearchBar.propTypes = {
    filterText: PropTypes.string.isRequired,
    onUserInput: PropTypes.func.isRequired
}