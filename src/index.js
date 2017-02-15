import React, { Component, PropTypes } from 'react';
import { inputStyles, buttonStyles } from './styles.js';

export default class PasswordMask extends Component {
  static propTypes = {
    value: PropTypes.any.isRequired,
    id: PropTypes.string,
    name: PropTypes.string,
    className: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    onShow: PropTypes.func,
    onHide: PropTypes.func,
    onToggle: PropTypes.func,
    inputStyles: PropTypes.object,
    buttonStyles: PropTypes.object
  };

  state = {
    passwordShown: false,
    hasBeenFocused: false
  }

  invokeCallbacks(value, passwordShown) {
    const { onShow, onHide, onToggle } = this.props;

    if (onToggle) {
      onToggle(value);
    }

    if (onShow && passwordShown) {
      onShow(value);
    }

    if (onHide && !passwordShown) {
      onHide(value);
    }
  }

  focusVisibleField() {
    const { passwordShown } = this.state;
    const visibleField = passwordShown ? this.refs.text : this.refs.password;

    visibleField.focus();
  }

  componentWillUpdate(nextProps, nextState) {
    const { passwordShown } = this.state;

    if (nextState.passwordShown !== passwordShown) {
      this.invokeCallbacks(nextProps.value, nextState.passwordShown);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { passwordShown, hasBeenFocused } = this.state;

    if (hasBeenFocused && prevState.passwordShown !== passwordShown) {
      this.focusVisibleField();
    }
  }

  togglePasswordMask() {
    const { passwordShown } = this.state;
    this.setState({ passwordShown: !passwordShown });
  }

  render() {
    const { value, id, name, className, placeholder, onChange } = this.props;
    const { passwordShown } = this.state;

    return (
      <div style={{ position: 'relative' }}>
        <input
          type="password"
          ref="password"
          value={value}
          id={!passwordShown ? id : ''}
          name={!passwordShown ? name : ''}
          className={className}
          placeholder={placeholder}
          style={{
            ...inputStyles,
            ...this.props.inputStyles,
            display: !passwordShown ? 'block' : 'none'
          }}
          onChange={onChange}
          onFocus={() => this.setState({ hasBeenFocused: true })}
        />

        <input
          type="text"
          ref="text"
          value={value}
          id={passwordShown ? id : ''}
          name={passwordShown ? name : ''}
          className={className}
          placeholder={placeholder}
          style={{
            ...inputStyles,
            ...this.props.inputStyles,
            display: passwordShown ? 'block' : 'none'
          }}
          onChange={onChange}
          onFocus={() => this.setState({ hasBeenFocused: true })}
        />

        <a
          href=""
          style={{
            ...buttonStyles,
            ...this.props.buttonStyles
          }}
          onMouseDown={e => e.preventDefault()}
          onClick={e => {
            e.preventDefault();
            this.togglePasswordMask();
          }}
        >
          {passwordShown ? 'Hide' : 'Show'}
        </a>
      </div>
    );
  }
}
