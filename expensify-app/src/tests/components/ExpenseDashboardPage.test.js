import 'react-dates/initialize' // to make react-dates work
import React from 'react';
import { shallow } from 'enzyme';

import { ExpenseDashboardPage}  from '../../components/ExpenseDashboardPage';
import expenses from '../fixtures/expenses';

test('should render ExpenseDashboardPage with single expense', () => {
    const expensesTotal = 195;
    const wrapper = shallow(<ExpenseDashboardPage expenses={[expenses[0]]} expensesTotal={expensesTotal} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseDashboardPage with multiple expenses', () => {
    const expensesTotal = 114195;
    const wrapper = shallow(<ExpenseDashboardPage expenses={expenses} expensesTotal={expensesTotal} />);
    expect(wrapper).toMatchSnapshot();
});