import React, {Component} from 'react';
import Child from "./Child";


export default class Parent extends Component {
    render() {
        return (
            <Child appTitle={'My App'}
                   clickTitle={(title) =>
                       this.onTitleClicked(title)}/>
        );
    }

    onTitleClicked(title) {
        alert(`Title clicked: ${title}`);
    }
}
