import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';

import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';

export class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
    };
    onDatesChange = ({ startDate, endDate }) => {
        const { setStartDate, setEndDate } = this.props;
        setStartDate(startDate);
        setEndDate(endDate);
    };
    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }));
    };
    onTextChange = (e) => {
        const text = e.target.value;
        this.props.setTextFilter(text);
    };
    onSortChange = (e) => {
        const { sortByDate, sortByAmount } = this.props;
        const filterBy = e.target.value;
        if (filterBy === 'date') {
            sortByDate();
        } else if (filterBy === 'amount') {
            sortByAmount();
        }
    }
    render() {
        const { filters, dispatch } = this.props;
        return (
            <div>
                <input 
                    type="text" 
                    value={filters.text} 
                    onChange={this.onTextChange} 
                />
                <select 
                    value={filters.sortBy} 
                    onChange={this.onSortChange}
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

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount())
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
