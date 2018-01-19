import 'react-dates/initialize' // to make react-dates work
import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';

import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import expenses from '../fixtures/expenses';

let setTextFilter,
    setStartDate,
    setEndDate,
    sortByDate,
    sortByAmount,
    filters,
    wrapper

beforeEach(() => {
    setTextFilter = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    filters = {};
    wrapper = shallow(
        <ExpenseListFilters 
            setTextFilter={setTextFilter}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
            sortByDate={sortByDate}
            sortByAmount={sortByAmount} 
            filters={filters}
        />);
});

test('should render ExpenseListFilters', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters with alt filters', () => {
    filters = {
        text: 'abc',
        sortBy: 'amount',
        startDate: moment(100),
        endDate: moment(10000)
    };
    wrapper.setProps({
        filters
    });
    expect(wrapper).toMatchSnapshot();
});

test('should update dates on date change', () => {
    const startDate = moment();
    const endDate = moment(1000);
    wrapper.find('withStyles(DateRangePicker)')
        .prop('onDatesChange')({startDate, endDate});
    expect(setStartDate).toHaveBeenCalledWith(startDate);
    expect(setEndDate).toHaveBeenCalledWith(endDate);
});

test('should update focus on focus change', () => {
    const focused = null;
    wrapper.find('withStyles(DateRangePicker)')
        .prop('onFocusChange')(focused);
    expect(wrapper.state().calendarFocused).toEqual(focused);
});

test('should update filter text on input change', () => {
    const text = 'abc';
    wrapper.find('input').simulate('change', {
        target: { value: text }
    });
    expect(setTextFilter).toHaveBeenCalledWith(text);
});

test('should sort by date when sortByDate is selected', () => {
    const sortBy = 'date';
    wrapper.find('select').simulate('change', {
        target: { value: sortBy }
    });
    expect(sortByDate).toHaveBeenCalled();
});

test('should sort by amount when sortByAmount is selected', () => {
    const sortBy = 'amount';
    wrapper.find('select').simulate('change', {
        target: { value: sortBy }
    });
    expect(sortByAmount).toHaveBeenCalled();
});