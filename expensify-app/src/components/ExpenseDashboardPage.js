import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import { Button, Dropdown, Form, Header, Icon, Segment } from 'semantic-ui-react';
import { push } from 'react-router-redux';

import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import getVisibleExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expenses-total';
import PageHeader from './PageHeader';

const pageHeaderTitleStyle= {
    fontWeight: 300,
};

const highlightStyle = {
    fontWeight: 700
};

const marginButtonStyle = {
    marginBottom: '2rem'
};

export const ExpenseDashboardPage = ({ expenses, expensesTotal, navigateToAddExpense }) => {
    const count = expenses ? expenses.length : 0;
    const expenseWording = count > 1 ? 'expenses' : 'expense';
    const formattedTotal = numeral(expensesTotal/100).format('$0,0.00');
    
    return (
        <div>
            <div style={marginButtonStyle}>
                <PageHeader >
                    <h1 style={pageHeaderTitleStyle}>Viewing <span style={highlightStyle}>{count}</span> {expenseWording} totalling <span style={highlightStyle}>{formattedTotal}</span></h1>
                    <div >
                        <Button onClick={navigateToAddExpense} primary>Add Expense</Button>
                    </div>
                </PageHeader>
            </div>
            <div style={marginButtonStyle}>
                <ExpenseListFilters style={marginButtonStyle} />
            </div>
            <ExpenseList />
        </div>
    )
};

const mapStateToProps = (state) => ({
    expenses: getVisibleExpenses(state.expenses, state.filters),
    expensesTotal: getExpensesTotal(getVisibleExpenses(state.expenses, state.filters))
});

const mapDispatchToProps = (dispatch) => ({
    navigateToAddExpense: () => dispatch(push('/create'))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseDashboardPage);