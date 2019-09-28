import React from 'react';
import { shallow } from 'enzyme';
import CardList from './CardList';

it('expect it to be cardList', () => {
    const mockRobots = [
        {
            id: 1,
            name: 'John Snow',
            username: 'abhishek',
            email: 'abhishek@gmail.com'

        }
    ]
    expect(shallow(<CardList robots={mockRobots}/>)).toMatchSnapshot();
})