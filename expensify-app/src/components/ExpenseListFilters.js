import React from 'react';
import { connect } from 'react-redux';

import { setTextFilter, sortByAmount, sortByDate } from '../actions/filters';

const ExpenseListFilters = ({ filters, dispatch }) => {
    return (
        <div>
            <input 
                type="text" 
                value={filters.text} 
                onChange={(e) => {
                    const text = e.target.value;
                    dispatch(setTextFilter(text));
                }} 
            />
            <select 
                value={filters.sortBy} 
                onChange={(e) => {
                    const filterBy = e.target.value;
                    if (filterBy === 'date') {
                        dispatch(sortByDate());
                    } else if (filterBy === 'amount') {
                        dispatch(sortByAmount());
                    }
                }}
            >
                <option value="date">Date</option>
                <option value="amount">Amount</option>
            </select>
        </div>
    );
};

const mapStateToProps = (state) => ({
    filters: state.filters
});

export default connect(mapStateToProps)(ExpenseListFilters);
