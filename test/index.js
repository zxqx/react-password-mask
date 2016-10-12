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
    expect(wrapper.instance().props.value).to.eql('');
  });

  it('sets id passed from props', () => {
    expect(wrapper.instance().props.id).to.eql('password');
  });

  it('sets name passed from props', () => {
    expect(wrapper.instance().props.name).to.eql('password');
  });

  it('sets className passed from props', () => {
    expect(wrapper.instance().props.className).to.eql('form-field');
  });

  it('sets placeholder passed from props', () => {
    expect(wrapper.instance().props.placeholder).to.eql('Enter password');
  });

  it('sets onChange callback passed from props', () => {
    expect(wrapper.instance().props.onChange).to.not.be.undefined;
  });

  it('applies input styles passed from props', () => {
    const input = wrapper.find('input[type="password"]');
    expect(input).to.have.style('border-color', 'aqua');
  });

  it('applies button styles passed from props', () => {
    const input = wrapper.find('a');
    expect(input).to.have.style('background', 'smoke');
  });

  it('calls onChange callback on key input', () => {
    const input = wrapper.find('input[type="password"]');
    input.simulate('change', { target: { value: 'bval' } });

    expect(password).to.eql('bval');
  });
});
