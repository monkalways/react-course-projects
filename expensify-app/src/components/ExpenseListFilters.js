import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';

import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';

class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
    };
    onDatesChange = ({ startDate, endDate }) => {
        const { dispatch } = this.props;
        dispatch(setStartDate(startDate));
        dispatch(setEndDate(endDate));
    };
    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }));
    };
    render() {
        const { filters, dispatch } = this.props;
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
                <DateRangePicker
                    startDate={filters.startDate}
                    startDateId="filter_start_date"
                    endDate={filters.endDate}
                    endDateId="filter_end_date"
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    showClearDates={true}
                    numberOfMonths={1}
                    isOutsideRange={(day) => false}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    filters: state.filters
});

export default connect(mapStateToProps)(ExpenseListFilters);
