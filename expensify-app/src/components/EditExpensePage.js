import React from 'react';
import { connect } from 'react-redux';

import ExpenseForm from './ExpenseForm';
import { editExpense, startRemoveExpense } from '../actions/expenses';

export const EditExpensePage = ({ expense, editExpense, startRemoveExpense, history }) => {

    const onSubmit = (expense) => {
        editExpense(expense);
        history.push('/');
    };

    const onRemoveExpense = () => {
        startRemoveExpense(expense);
        history.push('/');
    }

    return (
        <div>
            <ExpenseForm
                expense={expense}
                onSubmit={onSubmit}
            />
            <button onClick={onRemoveExpense}>Remove</button>
        </div>
    );
};

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find(expense => expense.id === props.match.params.id)
    };
};

const mapDispatchToProps = (dispatch) => ({
    editExpense: expense => dispatch(editExpense(expense.id, expense)),
    startRemoveExpense: expense => dispatch(startRemoveExpense({ id: expense.id }))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);