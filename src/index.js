import React, { Component, PropTypes } from 'react';
import { Container, PasswordInput, TextInput, Button } from './elements.js';

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
    inputStyles: PropTypes.any,
    buttonStyles: PropTypes.any
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
    const visibleField = passwordShown ? this.textInput : this.passwordInput;

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
    this.setState({ passwordShown: !this.state.passwordShown });
  }

  render() {
    const { value, id, name, className, placeholder, onChange, inputStyles, buttonStyles } = this.props;
    const { passwordShown } = this.state;

    return (
      <Container>
        <PasswordInput
          type="password"
          innerRef={input => this.passwordInput = input}
          value={value}
          id={!passwordShown ? id : ''}
          name={!passwordShown ? name : ''}
          className={className}
          placeholder={placeholder}
          onChange={onChange}
          inputStyles={inputStyles}
          passwordShown={passwordShown}
          onFocus={() => this.setState({ hasBeenFocused: true })}
        />

        <TextInput
          type="text"
          innerRef={input => this.textInput = input}
          value={value}
          id={passwordShown ? id : ''}
          name={passwordShown ? name : ''}
          className={className}
          placeholder={placeholder}
          onChange={onChange}
          inputStyles={inputStyles}
          passwordShown={passwordShown}
          onFocus={() => this.setState({ hasBeenFocused: true })}
        />

        <Button
          href=""
          buttonStyles={buttonStyles}
          onMouseDown={e => e.preventDefault()}
          onClick={e => {
            e.preventDefault();
            this.togglePasswordMask();
          }}
        >
          {passwordShown ? 'Hide' : 'Show'}
        </Button>
      </Container>
    );
  }
}
