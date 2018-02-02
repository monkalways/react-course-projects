import React from 'react';
import { connect } from 'react-redux';

import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses';
import PageHeader from './PageHeader';

export class AddExpensePage extends React.Component {
    onSubmit = (expense) => {
        const { startAddExpense, history } = this.props;
        startAddExpense(expense);
        history.push('/');
    };

    render() {
        return (
            <div>
                <PageHeader>
                    <h1>Add Expense</h1>
                </PageHeader>
                <ExpenseForm onSubmit={this.onSubmit} />
            </div> 
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    startAddExpense: (expense) => dispatch(startAddExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);