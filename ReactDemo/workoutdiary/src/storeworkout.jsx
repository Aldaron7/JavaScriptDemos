import React, { Component } from 'react';

class Option extends Component {
    render() {
        return (
            <option>{this.props.value}</option>
        );
    };
}

class StoreWorkout extends Component {
    _mockWorkouts = [
        {
            "name": "Murph",
            "type": "fortime",
            "description": "Run 1 Mile \n 100 pull-ups \n 200 push-ups \n 300 squats \n Run 1 Mile"
        },
        {
            "name": "Tabata Something Else",
            "type": "reps",
            "description": "4 x 20 seconds on 10 seconds off for 4 minutes \n pull- ups, push-ups, sit-ups, squats"
        }
    ];

    render() {
        let opts = [];
        for ( let i = 0; i < this._mockWorkouts.length; i++ ) {
            opts.push( <Option key={this._mockWorkouts[i].name.toString()} value={this._mockWorkouts[i].name} /> );
        }
        return (
            <div id="logWorkout" className="tabview">
                <h2>Record Workout</h2>
                <label htmlFor="chooseWorkout">Workout:</label>
                <select name="" id="chooseWorkout">
                    {opts}
                </select>
                <label htmlFor="workoutResult">Result:</label>
                <input id="workoutResult" type="text" />
                <input id="workoutDate" type="date" />
                <label htmlFor="notes">Notes:</label>
                <textarea id="notes"></textarea>
                <button>Store</button>
            </div>
        );
    };
}

export default StoreWorkout;