import React, { Component } from 'react';
import './index.css';

export default class Timeslot extends Component {
  render() {
    const { method, value, variant } = this.props;
    console.log(value)
    return (
      <div className={`Timeslot Timeslot--${variant}`}>
        {variant !== 'total' &&
          <div>
            <input
              type="text"
              name="0"
              value={value[0] ? value[0] : '00'}
              onChange={method} />

              <span>:</span>

              <input type="text"
                name="1"
                value={value[1] ? value[1] : '00'}
                onChange={method} />
          </div>
        }

        {variant === 'total' &&
          <span>{value}</span>}

      </div>
    )
  }
}