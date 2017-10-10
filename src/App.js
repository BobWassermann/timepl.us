import React, { Component } from 'react';
import Timeslot from './Components/Timeslot'
import './reset.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      values: [
        ['00', '00'],
      ],
      v: [
        ['00', '00']
      ]
    }
  }

  handleTimeSlot(i, e) {
    const { name, value } = e.target
    let arr = [
      ['00', '00']
    ]
    arr[i][Number(name)] = value
    console.log(arr)

    this.setState({
      v: [i][Number(name)] = value.toString
    }, () => {
      console.log(this.state.v)
    })
  }

  render() {
    const { values } = this.state
    return (
      <div className="App">
        <h1>Time Calculator</h1>
        <hr />

        {values.map((x, i) => {
          return <Timeslot
            key={`Timeslot_${i}`}
            variant="open"
            value={x}
            method={e => this.handleTimeSlot(i, e)}  />
        })}

        <Timeslot variant="total" value={'00:12'} />
      </div>
    );
  }
}

export default App;
