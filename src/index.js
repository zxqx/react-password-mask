import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { inputStyles, buttonStyles } from './styles.js';

export default class PasswordMask extends Component {
  static propTypes = {
    value: PropTypes.any.isRequired,
    id: PropTypes.string,
    name: PropTypes.string,
    className: PropTypes.string,
    inputClassName: PropTypes.string,
    iconClassName: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    onKeyDown: PropTypes.func,
    onShow: PropTypes.func,
    onHide: PropTypes.func,
    onToggle: PropTypes.func,
    inputStyles: PropTypes.any,
    buttonStyles: PropTypes.any,
    showButtonContent: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string
    ]),
    hideButtonContent: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string
    ])
  }

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

  focusVisibleInput() {
    const { passwordShown } = this.state;
    const visibleInput = passwordShown ? this.textInput : this.passwordInput;

    visibleInput.focus();
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
      this.focusVisibleInput();
    }
  }

  togglePasswordMask() {
    this.setState({ passwordShown: !this.state.passwordShown });
  }

  render() {
    const { value, id, name, className, inputClassName, iconClassName, placeholder, onChange, onKeyDown, showButtonContent, hideButtonContent } = this.props;
    const { passwordShown } = this.state;

    return (
      <div style={{ position: 'relative' }} className={className}>
        <input
          type="password"
          ref={input => this.passwordInput = input}
          value={value}
          id={!passwordShown ? id : ''}
          name={!passwordShown ? name : ''}
          className={inputClassName}
          placeholder={placeholder}
          style={{
            ...inputStyles,
            ...this.props.inputStyles,
            display: !passwordShown ? 'block' : 'none'
          }}
          onChange={onChange}
          onKeyDown={onKeyDown}
          onFocus={() => this.setState({ hasBeenFocused: true })}
        />

        <input
          type="text"
          ref={input => this.textInput = input}
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
          onKeyDown={onKeyDown}
          onFocus={() => this.setState({ hasBeenFocused: true })}
        />

        <a
          href=""
          className={iconClassName}
          style={{
            ...buttonStyles,
            ...this.props.buttonStyles
          }}
          onMouseDown={e => e.preventDefault()}
          onClick={e => {
            e.preventDefault();
            this.togglePasswordMask();
          }}
          tabIndex={-1}
        >
          {passwordShown ?
            hideButtonContent || 'Hide' :
            showButtonContent || 'Show'
          }
        </a>
      </div>
    );
  }
}
