import React, { Component } from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

export default class AppView extends Component {

    render() {
        return (
            <div>
                <Header {...this.props} />
                <Body {...this.props} />
                <Footer {...this.props} />
            </div>
        );
    }
}