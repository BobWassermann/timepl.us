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
      total: ['00', '00']
    }
  }

  handleTime(i, e) {
    const { name, value } = e.target
    const { values } = this.state
    values[i][Number(name)] = value
    this.setState({
      values
    }, () => this.calculateTotal())
  }

  handleHours(i, e) {
    this.handleTime(i, e)
  }

  handleMinutes(i, e) {
    this.handleTime(i, e)
  }

  calculateTotal() {
    this.setState({
      total: this.state.values[0]
    })
  }

  render() {
    const { total, values } = this.state
    return (
      <div className="App">
        <h1>Time<br />calculator</h1>

        {values.map((x, i) => {
          return <Timeslot
            key={`Timeslot_${i}`}
            variant="open"
            value={x}
            hourMethod={e => this.handleHours(i, e)}
            minuteMethod={e => this.handleMinutes(i, e)}  />
        })}

        <Timeslot variant="total" value={total} />
      </div>
    )
  }
}

export default App
