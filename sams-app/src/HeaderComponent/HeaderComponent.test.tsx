import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import HeaderComponent from './HeaderComponent';

it('should render header without crashing', () => {
    // setup
    const wrapper = shallow(<HeaderComponent/>);
    expect(wrapper).toEqual(true);
});
