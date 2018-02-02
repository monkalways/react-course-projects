import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';

let wrapper, startLogin;

beforeEach(() => {
    startLogin = jest.fn();
    wrapper = shallow(<LoginPage startLogin={startLogin}/>);
})

test('should render login page', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should call startLogin on button click', () => {
    wrapper.find('Button').prop('onClick')();
    expect(startLogin).toHaveBeenCalled();
});