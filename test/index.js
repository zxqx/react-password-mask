import React from 'react';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import sinon from 'sinon';
import PasswordMask from '../src/index.js';

chai.use(chaiEnzyme());

const state = {
  password: ''
};

describe('<PasswordMask />', () => {
  it('renders password field', () => {
    const component = shallow(
      <PasswordMask value={state.password} />
    );

    expect(component.find('input[type="password"]')).to.have.length(1);
  });

  it('renders text field', () => {
    const component = shallow(
      <PasswordMask value={state.password} />
    );

    expect(component.find('input[type="text"]')).to.have.length(1);
  });

  it('renders show/hide button', () => {
    const component = shallow(
      <PasswordMask value={state.password} />
    );

    expect(component.find('a')).to.have.length(1);
  });

  it('sets value passed from props', () => {
    const component = shallow(
      <PasswordMask value={state.password} />
    );

    expect(component.instance().props.value).to.equal('');
  });

  it('sets id passed from props', () => {
    const component = shallow(
      <PasswordMask
        id="password"
        value={state.password}
      />
    );

    expect(component.instance().props.id).to.equal('password');
  });

  it('sets name passed from props', () => {
    const component = shallow(
      <PasswordMask
        name="password"
        value={state.password}
      />
    );

    expect(component.instance().props.name).to.equal('password');
  });

  it('sets className passed from props', () => {
    const component = shallow(
      <PasswordMask
        className="form-field"
        value={state.password}
      />
    );

    expect(component.instance().props.className).to.equal('form-field');
  });

  it('sets placeholder passed from props', () => {
    const component = shallow(
      <PasswordMask
        placeholder="Enter password"
        value={state.password}
      />
    );

    expect(component.instance().props.placeholder).to.equal('Enter password');
  });

  it('sets onChange callback passed from props', () => {
    const component = shallow(
      <PasswordMask
        value={state.password}
        onChange={e => password = e.target.value}
      />
    );

    expect(component.instance().props.onChange).to.not.be.undefined;
  });

  it('updates internal showPassword state', () => {
    const component = shallow(
      <PasswordMask value={state.password} />
    );

    const showHideButton = component.find('a');
    showHideButton.simulate('click', { preventDefault: () => {} });
    expect(component.instance().state.showPassword).to.equal(true);
  });

  it('updates internal hasBeenFocused state', () => {
    const component = shallow(
      <PasswordMask value={state.password} />
    );

    const input = component.find('input[type="password"]');
    input.simulate('focus');
    expect(component.instance().state.hasBeenFocused).to.equal(true);
  });

  it('applies input styles passed from props', () => {
    const component = shallow(
      <PasswordMask
        value={state.password}
        inputStyles={{ borderColor: 'aqua' }}
      />
    );

    const input = component.find('input[type="password"]');
    expect(input).to.have.style('border-color', 'aqua');
  });

  it('applies button styles passed from props', () => {
    const component = shallow(
      <PasswordMask
        value={state.password}
        buttonStyles={{ background: 'smoke' }}
      />
    );

    const showHideButton = component.find('a');
    expect(showHideButton).to.have.style('background', 'smoke');
  });

  it('calls onChange callback', () => {
    const component = shallow(
      <PasswordMask
        value={state.password}
        onChange={e => state.password = e.target.value}
      />
    );

    const input = component.find('input[type="password"]');
    input.simulate('change', { target: { value: 'bval' } });

    expect(state.password).to.equal('bval');
  });

  it('calls onShow callback', () => {
    const onShow = sinon.spy();

    const component = shallow(
      <PasswordMask
        value={state.password}
        onShow={onShow}
      />
    );

    const showHideButton = component.find('a');
    showHideButton.simulate('click', { preventDefault: () => {} });
    expect(onShow.calledOnce).to.equal(true);
  });

  it('calls onHide callback', () => {
    const onHide = sinon.spy();

    const component = shallow(
      <PasswordMask
        value={state.password}
        onHide={onHide}
      />
    );

    const showHideButton = component.find('a');
    showHideButton.simulate('click', { preventDefault: () => {} });
    showHideButton.simulate('click', { preventDefault: () => {} });
    expect(onHide.calledOnce).to.equal(true);
  });

  it('calls onToggle callback', () => {
    const onToggle = sinon.spy();

    const component = shallow(
      <PasswordMask
        value={state.password}
        onToggle={onToggle}
      />
    );

    const showHideButton = component.find('a');
    showHideButton.simulate('click', { preventDefault: () => {} });
    showHideButton.simulate('click', { preventDefault: () => {} });
    expect(onToggle.calledTwice).to.equal(true);
  });

  it('cancels mousedown event', () => {
    const preventDefault = sinon.spy();

    const component = shallow(
      <PasswordMask value={state.password} />
    );

    const showHideButton = component.find('a');
    showHideButton.simulate('mouseDown', { preventDefault });
    expect(preventDefault.calledOnce).to.equal(true);
  });
});
