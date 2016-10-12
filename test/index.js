import React from 'react';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import sinon from 'sinon';
import PasswordMask from '../src/index.js';

chai.use(chaiEnzyme());

let wrapper;
let password = '';

function onShow() {}

describe('<PasswordMask />', () => {
  before(() => {
    wrapper = shallow(
      <PasswordMask
        id="password"
        name="password"
        className="form-field"
        placeholder="Enter password"
        value={password}
        onChange={e => password = e.target.value}
        inputStyles={{ borderColor: 'aqua' }}
        buttonStyles={{ background: 'smoke' }}
        onShow={onShow}
      />
    );
  });

  it('renders password field', () => {
    expect(wrapper.find('input[type="password"]')).to.have.length(1);
  });

  it('renders text field', () => {
    expect(wrapper.find('input[type="text"]')).to.have.length(1);
  });

  it('renders show/hide button', () => {
    expect(wrapper.find('a')).to.have.length(1);
  });

  it('sets value passed from props', () => {
    expect(wrapper.instance().props.value).to.equal('');
  });

  it('sets id passed from props', () => {
    expect(wrapper.instance().props.id).to.equal('password');
  });

  it('sets name passed from props', () => {
    expect(wrapper.instance().props.name).to.equal('password');
  });

  it('sets className passed from props', () => {
    expect(wrapper.instance().props.className).to.equal('form-field');
  });

  it('sets placeholder passed from props', () => {
    expect(wrapper.instance().props.placeholder).to.equal('Enter password');
  });

  it('sets onChange callback passed from props', () => {
    expect(wrapper.instance().props.onChange).to.not.be.undefined;
  });

  it('applies input styles passed from props', () => {
    const input = wrapper.find('input[type="password"]');
    expect(input).to.have.style('border-color', 'aqua');
  });

  it('applies button styles passed from props', () => {
    const showHideButton = wrapper.find('a');
    expect(showHideButton).to.have.style('background', 'smoke');
  });

  it('updates internal showPassword state', () => {
    let wrapper = shallow(
      <PasswordMask
        id="password"
        name="password"
        className="form-field"
        placeholder="Enter password"
        value={password}
        onChange={e => password = e.target.value}
      />
    );

    const showHideButton = wrapper.find('a');
    showHideButton.simulate('click', { preventDefault: () => {} });
    expect(wrapper.instance().state.showPassword).to.equal(true);
  });

  it('updates internal hasBeenFocused state', () => {
    let wrapper = shallow(
      <PasswordMask
        id="password"
        name="password"
        className="form-field"
        placeholder="Enter password"
        value={password}
        onChange={e => password = e.target.value}
      />
    );

    const input = wrapper.find('input[type="password"]');
    input.simulate('focus');
    expect(wrapper.instance().state.hasBeenFocused).to.equal(true);
  });

  it('calls onChange callback', () => {
    const input = wrapper.find('input[type="password"]');
    input.simulate('change', { target: { value: 'bval' } });

    expect(password).to.equal('bval');
  });

  it('calls onShow callback', () => {
    const onShow = sinon.spy();

    let wrapper = shallow(
      <PasswordMask
        id="password"
        name="password"
        className="form-field"
        placeholder="Enter password"
        value={password}
        onChange={e => password = e.target.value}
        onShow={onShow}
      />
    );

    const showHideButton = wrapper.find('a');
    showHideButton.simulate('click', { preventDefault: () => {} });
    expect(onShow.calledOnce).to.equal(true);
  });

  it('calls onHide callback', () => {
    const onHide = sinon.spy();

    let wrapper = shallow(
      <PasswordMask
        id="password"
        name="password"
        className="form-field"
        placeholder="Enter password"
        value={password}
        onChange={e => password = e.target.value}
        onHide={onHide}
      />
    );

    const showHideButton = wrapper.find('a');
    showHideButton.simulate('click', { preventDefault: () => {} });
    showHideButton.simulate('click', { preventDefault: () => {} });
    expect(onHide.calledOnce).to.equal(true);
  });

  it('calls onToggle callback', () => {
    const onToggle = sinon.spy();

    let wrapper = shallow(
      <PasswordMask
        id="password"
        name="password"
        className="form-field"
        placeholder="Enter password"
        value={password}
        onChange={e => password = e.target.value}
        onToggle={onToggle}
      />
    );

    const showHideButton = wrapper.find('a');
    showHideButton.simulate('click', { preventDefault: () => {} });
    showHideButton.simulate('click', { preventDefault: () => {} });
    expect(onToggle.calledTwice).to.equal(true);
  });

  it('cancels mousedown event', () => {
    const preventDefault = sinon.spy();

    let wrapper = shallow(
      <PasswordMask
        id="password"
        name="password"
        className="form-field"
        placeholder="Enter password"
        value={password}
        onChange={e => password = e.target.value}
      />
    );

    const showHideButton = wrapper.find('a');
    showHideButton.simulate('mouseDown', { preventDefault });
    expect(preventDefault.calledOnce).to.equal(true);
  });
});
