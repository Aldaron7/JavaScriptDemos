import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import RepoDetails from './RepoDetails';

class Repos extends Component {

    constructor() {
        super( ...arguments );
        this.state = {
            repositories: []
        }
    }

    componentDidMount() {
        window.fetch( 'https://api.github.com/users/pro-react/repos' )
            .then(( response ) => {
                if ( response.ok )
                    return response.json();
                else
                    throw new Error( "Server response wasn't OK" );
            } )
            .then(( responseData ) => {
                this.setState( { repositories: responseData } );
            } )
            .catch(( error ) => {
                this.props.history.push('/error' );
            } );
    }

    render() {
        let repos = this.state.repositories.map(( repo ) => (
            <li key={repo.id}>
                <Link to={"/repos/" + repo.name}>{repo.name}</Link>
            </li>
        ) );
        return (
            <div>
                <h1>Github Repos</h1>
                <ul>
                    {repos}
                </ul>
                <Route path={"/repos/:repo_name"} component={RepoDetails} />
            </div>
        );
    }
}
export default Repos;