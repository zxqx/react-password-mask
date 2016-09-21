import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PasswordMask from '../lib/passwordMask.min.js';

export default class Example extends Component {
  constructor() {
    super();

    this.state = {
      password: ''
    };
  }

  handleChange(e) {
    const nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }

  render() {
    return (
      <div style={{ width: '300px' }}>
        <PasswordMask
          value={this.state.password}
          id="password"
          name="password"
          placeholder="Enter password"
          onChange={this.handleChange.bind(this)}
          hideOnTimeout={400}
          inputStyles={{ padding: '8px', fontSize: '16px' }}
        />
      </div>
    );
  }
}

ReactDOM.render(
  <Example />,
  document.getElementById('root')
);
