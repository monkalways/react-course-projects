import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';

import ExpenseForm from './ExpenseForm';
import PageHeader from './PageHeader';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

const removeButtonContainerStyle = {
    marginTop: '14px'
};

export const EditExpensePage = ({ expense, startEditExpense, startRemoveExpense, history }) => {

    const onSubmit = (expense) => {
        startEditExpense(expense);
        history.push('/');
    };

    const onRemoveExpense = () => {
        startRemoveExpense(expense);
        history.push('/');
    }

    return (
        <div>
            <PageHeader>
                <h1>Edit Expense</h1>
            </PageHeader>
            <ExpenseForm
                expense={expense}
                onSubmit={onSubmit}
            />
            <div style={removeButtonContainerStyle}>
                <Button onClick={onRemoveExpense}>Remove Expense</Button>
            </div>
        </div>
    );
};

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find(expense => expense.id === props.match.params.id)
    };
};

const mapDispatchToProps = (dispatch) => ({
    startEditExpense: expense => dispatch(startEditExpense(expense.id, expense)),
    startRemoveExpense: expense => dispatch(startRemoveExpense({ id: expense.id }))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);