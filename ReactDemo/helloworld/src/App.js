import React from 'react';

class App extends React.Component {
    render() {
        return React.createElement('div', null, `Hello ${this.props.name}`);
    }
};

export default App;