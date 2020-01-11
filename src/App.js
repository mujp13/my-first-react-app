import React, { Component } from 'react';
import moment from 'moment';

class App extends Component {
  render() {
    //get the current date and time
    const right_now = moment();

    // get a nicely formatted date and time
    const formatted_right_now = right_now.format("dddd, MMMM Do YYYY, h:mm:ss a");

    // add 7 days, 4 hours and 32 minutes to the current time
    right_now.add(7, 'days');
    right_now.add(4, 'hours');
    right_now.add(32, 'minutes');

    // get a nicely formatted date and time for the new time
    const formatted_later = right_now.format("dddd, MMMM Do YYYY, h:mm:ss a");

    return (
      <div className="App">
        <h1>Playing with dates</h1>
        <h2>The date and time right now is: </h2>
        <p>{formatted_right_now}</p>

        <h2>The date and time 7 days, 4 hours and 32 minutes from now is: </h2>
        <p>{formatted_later}</p>
      </div>
    );
  }
}

export default App;