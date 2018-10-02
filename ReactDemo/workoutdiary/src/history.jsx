import React, { Component } from 'react';

class ListItem extends Component {
    render() {
        return (
            <li >{this.props.name} - {this.props.result}</li>
        );
    };
}

export default class History extends Component {
    _mockHistory = [
        {
            "name": "Murph",
            "result": "32:18",
            "notes": "painful, but fun"
        },
        {
            "name": "Tabata Something Else",
            "type": "reps",
            "result": "421",
            "notes": ""
        }
    ];

    render() {
        let mockhist = this._mockHistory;
        let formattedLi = [];
        for (let i = 0; i < mockhist.length; i++) {
	
            let histObj = { name: mockhist[i].name, result: mockhist[i].result };
            formattedLi.push( <ListItem {...histObj} /> );
        }
        return (
            <div>
                <h2>History</h2>
                <ul>
                    {formattedLi}
                </ul>
            </div>
        );
    };
}