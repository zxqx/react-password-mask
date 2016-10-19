import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PasswordMask from '../src/index';
import './style.css';

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
      <div>
        <h1>React Password Mask</h1>

        <PasswordMask
          value={this.state.password}
          id="password"
          name="password"
          placeholder="Enter password"
          onChange={this.handleChange.bind(this)}
          inputStyles={{ padding: '8px', fontSize: '16px' }}
          buttonStyles={{ width: '61px' }}
        />
      </div>
    );
  }
}

ReactDOM.render(
  <Example />,
  document.getElementById('root')
);
