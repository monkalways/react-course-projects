import 'react-dates/initialize' // to make react-dates work
import React from 'react';
import { shallow } from 'enzyme';

import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let editExpense, startRemoveExpense, history, wrapper;

beforeEach(() => {
    editExpense = jest.fn();
    startRemoveExpense = jest.fn(() => new Promise((resolve, reject) => { resolve(); }));
    history = {
        push: jest.fn()
    };
    wrapper = shallow(<EditExpensePage expense={expenses[1]} editExpense={editExpense} startRemoveExpense={startRemoveExpense} history={history} />);
});

test('should render EditExpensePage', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle form submission', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(editExpense).toHaveBeenCalledWith(expenses[1]);
    expect(history.push).toHaveBeenCalledWith('/');
})

test('should handle remove expense', () => {
    wrapper.find('button').simulate('click');
    expect(startRemoveExpense).toHaveBeenCalledWith(expenses[1]);
    expect(history.push).toHaveBeenCalledWith('/');
});