import React, { Component } from 'react';
import './index.css';

export default class Timeslot extends Component {
  render() {
    const { hourMethod, minuteMethod, value, variant } = this.props;
    return (
      <div className={`Timeslot Timeslot--${variant}`}>
        <div>
          <input
            type="text"
            name="0"
            value={value[0] ? value[0] : '00'}
            onChange={hourMethod} />

          <span>:</span>

          <input type="text"
            name="1"
            value={value[1] ? value[1] : '00'}
            onChange={minuteMethod} />
        </div>
      </div>
    )
  }
}
