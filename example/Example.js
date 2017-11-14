import React, { Component } from 'react';
import PasswordMask from '../src/index';

export default class Example extends Component {
  state = {
    password: ''
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <div>
        <h1>React Password Mask</h1>

        <PasswordMask
          value={this.state.password}
          id="password"
          name="password"
          placeholder="Enter password"
          onChange={this.handleChange.bind(this)}
          inputStyles={{
            padding: '8px',
            fontSize: '16px'
          }}
          inputClassName="PasswordMaskInput"
          buttonStyles={{
            width: '61px'
          }}
        />
      </div>
    );
  }
}
