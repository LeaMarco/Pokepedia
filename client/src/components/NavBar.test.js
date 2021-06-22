import React from 'react';
import { Link } from 'react-router-dom';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NavBar from './NavBar';

configure({adapter: new Adapter()});

describe('<NavBar />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<NavBar />)
  })

  it('Deberia renderizar Dos <Link />', () => {
    expect(wrapper.find(Link)).toHaveLength(2);
  });
  it('El primer Link debe tener el texto "Home".', () => {
    expect(wrapper.find(Link).at(0).text()).toEqual('Home');
  });
  it('El primer Link debe cambiar la ruta hacia "/home".', () => {
    expect(wrapper.find(Link).at(0).prop('to')).toEqual('/home');
  });
  it('El segundo Link debe tener el texto "Create"', () => {
    expect(wrapper.find(Link).at(1).text()).toEqual('Create');
  });
  it('El segundo Link debe cambiar la ruta hacia "/create"', () => {
    expect(wrapper.find(Link).at(1).prop('to')).toEqual('/create');
  });
})