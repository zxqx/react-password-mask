import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';
import renderer from 'react-test-renderer';
import PasswordMask from '../src/index';

describe('<PasswordMask />', () => {
  it('renders password mask', () => {
    const tree = renderer.create(
      <PasswordMask
        value={''}
        id="password"
        name="password"
        placeholder="Enter password"
        autoFocus
        maxLength={16}
        inputStyles={{ borderColor: 'aqua' }}
        buttonStyles={{ background: 'cornsilk' }}
        showButtonContent="Hide it"
        hideButtonContent="Show it"
        onChange={() => ({})}
        onKeyDown={() => ({})}
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders password mask without any styles', () => {
    const tree = renderer.create(
      <PasswordMask
        value={''}
        id="password"
        name="password"
        useVendorStyles={false}
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('updates internal passwordShown state', () => {
    const component = mount(
      <PasswordMask
        value={''}
        onChange={() => ({})}
      />
    );

    const showHideButton = component.find('a');
    showHideButton.simulate('click', { preventDefault: () => ({}) });

    expect(component.state().passwordShown).toEqual(true);
  });

  it('updates internal hasBeenFocused state', () => {
    const component = mount(
      <PasswordMask
        value={''}
        onChange={() => ({})}
      />
    );

    const input = component.find('input[type="password"]');
    input.simulate('focus');

    expect(component.state().hasBeenFocused).toEqual(true);
  });

  it('calls onChange callback', () => {
    const onChange = sinon.spy();

    const component = mount(
      <PasswordMask
        value={''}
        onChange={onChange}
      />
    );

    const input = component.find('input[type="password"]');
    input.simulate('change');

    expect(onChange.calledOnce).toEqual(true);
  });

  it('calls onBlur callback', () => {
    const onBlur = sinon.spy();

    const component = mount(
      <PasswordMask
        value={''}
        onBlur={onBlur}
      />
    );

    const input = component.find('input[type="password"]');
    input.simulate('blur');

    expect(onBlur.calledOnce).toEqual(true);
  });

  it('calls onKeyDown callback', () => {
    const onKeyDown = sinon.spy();

    const component = mount(
      <PasswordMask
        value={''}
        onKeyDown={onKeyDown}
      />
    );

    const input = component.find('input[type="password"]');
    input.simulate('keyDown');

    expect(onKeyDown.calledOnce).toEqual(true);
  });

  it('calls onShow callback with value argument', () => {
    const onShow = sinon.spy();

    const component = mount(
      <PasswordMask
        value={''}
        onShow={onShow}
        onChange={() => ({})}
      />
    );

    const showHideButton = component.find('a');
    showHideButton.simulate('click', { preventDefault: () => ({}) });

    expect(onShow.withArgs('').calledOnce).toEqual(true);
  });

  it('calls onHide callback with value argument', () => {
    const onHide = sinon.spy();

    const component = mount(
      <PasswordMask
        value={''}
        onHide={onHide}
        onChange={() => ({})}
      />
    );

    const showHideButton = component.find('a');
    showHideButton.simulate('click', { preventDefault: () => ({}) });
    showHideButton.simulate('click', { preventDefault: () => ({}) });

    expect(onHide.withArgs('').calledOnce).toEqual(true);
  });

  it('calls onToggle callback with value argument', () => {
    const onToggle = sinon.spy();

    const component = mount(
      <PasswordMask
        value={''}
        onToggle={onToggle}
        onChange={() => ({})}
      />
    );

    const showHideButton = component.find('a');
    showHideButton.simulate('click', { preventDefault: () => ({}) });
    showHideButton.simulate('click', { preventDefault: () => ({}) });

    expect(onToggle.withArgs('').calledTwice).toEqual(true);
  });

  it('focuses visible text field on show', () => {
    const component = mount(
      <PasswordMask
        value={''}
        onChange={() => ({})}
      />
    );

    const passwordInput = component.find('input[type="password"]');
    const textInput = component.find('input[type="text"]');
    const spy = sinon.spy(textInput.node, 'focus');
    const showHideButton = component.find('a');

    passwordInput.simulate('focus');
    showHideButton.simulate('click');

    expect(spy.calledOnce).toEqual(true);
  });

  it('focuses visible password field on hide', () => {
    const component = mount(
      <PasswordMask
        value={''}
        onChange={() => ({})}
      />
    );

    const passwordInput = component.find('input[type="password"]');
    const textInput = component.find('input[type="text"]');
    const spy = sinon.spy(passwordInput.node, 'focus');
    const showHideButton = component.find('a');

    showHideButton.simulate('click');
    textInput.simulate('focus');
    showHideButton.simulate('click');

    expect(spy.calledOnce).toEqual(true);
  });

  it('cancels mouseDown event', () => {
    const preventDefault = sinon.spy();

    const component = mount(
      <PasswordMask
        value={''}
        onChange={() => ({})}
      />
    );

    const showHideButton = component.find('a');
    showHideButton.simulate('mouseDown', { preventDefault });

    expect(preventDefault.calledOnce).toEqual(true);
  });

  it('can be readonly', () => {
    const component = mount(
      <PasswordMask
        value={''}
        readOnly
      />
    );

    const inputs = component.find('input');
    inputs.forEach((node) => {
      expect(node.props().readOnly).toEqual(true);
    });
  });
});
