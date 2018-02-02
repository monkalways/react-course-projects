import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { Dropdown, Grid, Input, Segment } from 'semantic-ui-react';

import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';

const filterStyle = {
    height: '48px',
    fontSize: '18px'
};

export class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
    };
    filterOptions = [
        {
            text: 'amount',
            value: 'amount'
        },
        {
            text: 'date',
            value: 'date'
        }
    ];
    onDatesChange = ({ startDate, endDate }) => {
        const { setStartDate, setEndDate } = this.props;
        setStartDate(startDate);
        setEndDate(endDate);
    };
    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }));
    };
    onTextChange = (e, data) => {
        const text = data.value;
        this.props.setTextFilter(text);
    };
    onSortChange = (param, data) => {
        const { sortByDate, sortByAmount } = this.props;
        const filterBy = data.value;
        if (filterBy === 'date') {
            sortByDate();
        } else if (filterBy === 'amount') {
            sortByAmount();
        }
    };
    render() {
        const { filters, dispatch } = this.props;
        return (
            <Grid>
                <Grid.Column computer={4} mobile={16} tablet={16}>
                    <Input 
                        fluid
                        size="big" 
                        icon='search' 
                        placeholder='Search expenses'
                        value={filters.text}
                        onChange={this.onTextChange} />
                </Grid.Column>
                <Grid.Column computer={3} mobile={16} tablet={16}>
                    <Dropdown 
                        placeholder='Filter by'
                        fluid
                        selection
                        style={filterStyle}
                        value={filters.sortBy} 
                        onChange={this.onSortChange} 
                        options={this.filterOptions} 
                    />
                </Grid.Column>
                <Grid.Column computer={9} mobile={16} tablet={16}>
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
                        showDefaultInputIcon
                    />
                </Grid.Column>
            </Grid>
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
