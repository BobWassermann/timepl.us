import React, { Component } from 'react';
import Timeslot from './Components/Timeslot'
import './reset.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      values: [
        ['00', '00']
      ],
      total: ['00', '00']
    }
  }

  handleTime(i, e) {
    const { name, value } = e.target
    const { values } = this.state
    values[i][Number(name)] = value
    if (!values[i+1]) {
      values[i+1] = ['00', '00']
    }
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
    const { values } = this.state
    let total = ['00', '00']
    values.map(x => {
      const h = x[0]
      const m = x[1]
      total[0] = Number(total[0]) + Number(h)
      total[1] = Number(total[1]) + Number(m)
      if (total[1] >= 60) {
        total[0] = total[0] + 1
        total[1] = total[1] - 60
      }
      this.setState({
        total
      })
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
