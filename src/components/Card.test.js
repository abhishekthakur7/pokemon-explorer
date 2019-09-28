import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

it('expect it to be card component', () => {
    expect(shallow(<Card />)).toMatchSnapshot();
})