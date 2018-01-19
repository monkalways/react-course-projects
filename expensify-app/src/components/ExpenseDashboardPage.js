import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';

import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import getVisibleExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expenses-total';

export const ExpenseDashboardPage = ({ expenses, expensesTotal }) => {
    const count = expenses ? expenses.length : 0;
    const expenseWording = count > 1 ? 'expenses' : 'expense';
    const formattedTotal = numeral(expensesTotal/100).format('$0,0.00');
    return (
        <div>
            <p>{`Viewing ${count} ${expenseWording} totalling ${formattedTotal}`}</p>
            <ExpenseListFilters />
            <ExpenseList />
        </div>
    )
};

const mapStateToProps = (state) => ({
    expenses: getVisibleExpenses(state.expenses, state.filters),
    expensesTotal: getExpensesTotal(getVisibleExpenses(state.expenses, state.filters))
});

export default connect(mapStateToProps)(ExpenseDashboardPage);