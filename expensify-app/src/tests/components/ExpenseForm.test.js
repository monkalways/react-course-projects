import 'react-dates/initialize' // to make react-dates work
import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';

import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

test('should render ExpenseForm', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseForm with provided data', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(wrapper.state().error).toEqual('Please provide description and amount');
    expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', () => {
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(0).simulate('change', {
        target: {
            value: 'new_value'
        }
    });
    expect(wrapper.state().description).toBe('new_value');
});

test('should set note on input change', () => {
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('textarea').simulate('change', {
        target: {
            value: 'new_value'
        }
    });
    expect(wrapper.state().note).toBe('new_value');
});

test('should set amount on input change if valid', () => {
    const value = '23.50';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    });
    expect(wrapper.state().amount).toBe(value);
});

test('should set amount on input change if not valid', () => {
    const value = '23.500';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    });
    expect(wrapper.state().amount).toBe('');
});

test('should call onSubmit prop for valid form submission', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />);
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(onSubmitSpy).toHaveBeenCalledTimes(1);
    expect(onSubmitSpy).toHaveBeenCalledWith(expenses[0]);
    expect(wrapper.state().error).toBe('');
});

test('should set date on date change', () => {
    const wrapper = shallow(<ExpenseForm />);
    const now = moment();
    wrapper.find('withStyles(SingleDatePicker)').prop('onDateChange')(now);
    expect(wrapper.state().createdAt).toEqual(now);
});

test('should set calendarFocused on focus change', () => {
    const focused = true;
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('withStyles(SingleDatePicker)').prop('onFocusChange')({ focused });
    expect(wrapper.state().calendarFocused).toBe(true);
});