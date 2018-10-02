import React, { Component } from 'react';
import { Container } from 'flux/utils';
// import Autosuggest from 'react-autosuggest';
import AirportStore from './stores/AirportStore';
import RouteStore from './stores/RouteStore';
import TicketStore from './stores/TicketStore';
import AirportActionCreators from './actions/AirportActionCreators';


/*
const getSuggestionValue = suggestion => suggestion;

const renderSuggestion = ( suggestion ) => ( <div>{suggestion}</div> );
*/

class App extends Component {

    componentDidMount() {
        AirportActionCreators.fetchAirports();
    }
    /*
    suggestions = [];
    
    getSuggestions = ( input ) => {
    const escapedInput = input.trim().toLowerCase();
    const airportMatchRegex = new RegExp( '\\b' + escapedInput, 'i' );
    const suggestions = this.state.airports
    .filter( airport => airportMatchRegex.test( airport.city ) )
    .sort(( airport1, airport2 ) => {
    return airport1.city.toLowerCase().indexOf( escapedInput ) - airport2.city.toLowerCase().indexOf( escapedInput );
    } )
    .slice( 0, 7 )
    .map( airport => `${airport.city} - ${airport.country} (${airport.code})` );
    return suggestions;
    }
    
    
    onChange = ( event, { newValue } ) => {
    
    }
    
    onSuggestionsFetchRequested = ( { value } ) => {
    this.suggestions = this.getSuggestions( value )
    }
    
    onSuggestionsClearRequested = () => {
    this.suggestions = []
    }
    */
    handleSelect( target, suggestion, event ) {
        const airportCodeRegex = /\(([^)]+)\)/;
        let airportCode = airportCodeRegex.exec( suggestion )[1];
        AirportActionCreators.chooseAirport( target, airportCode );
    }

    render() {
        /*
        const inputProps = {
            placeholder: 'From',
            value: '',
            onChange: this.onChange
        };
                        */

        console.log( this.state.airports );
        return (
            <div>
                <header>
                    <div className="header-brand">
                        <img src="logo.png" height="35" alt="AirCheap" />
                        <p>Check discount ticket prices and pay using your AirCheap points</p>
                    </div>
                    <div className="header-route">
                        <input type="text" placeholder="From" ref="origin" onChange={this.handleSelect.bind( this, 'origin' )} />
                        <input type="text" placeholder="To" ref="destination" onChange={this.handleSelect.bind( this, 'destination' )} />
                        {/*
                        < Autosuggest id='origin'
                            suggestions={this.suggestions}
                            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                            getSuggestionValue={getSuggestionValue}
                            renderSuggestion={renderSuggestion}
                            inputProps={inputProps} />
                        */}
                    </div>
                </header>
            </div>
        );
    }
}

App.getStores = () => ( [AirportStore, RouteStore, TicketStore] );
App.calculateState = ( prevState ) => ( {
    airports: AirportStore.getState(),
    origin: RouteStore.get( 'origin' ),
    destination: RouteStore.get( 'destination' ),
    tickets: TicketStore.getState()
} );

const AppContainer = Container.create( App );

export default AppContainer;