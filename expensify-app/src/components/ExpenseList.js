import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'semantic-ui-react';

import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = ({ expenses }) => (
    <div>
        {
            expenses.length === 0 ? (
                <p>No expenses</p>
            ) : (
                <Table stackable>
                    <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Expense</Table.HeaderCell>
                        <Table.HeaderCell>Amount</Table.HeaderCell>
                    </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {expenses.map(expense => (
                            <ExpenseListItem key={expense.id} {...expense} />
                        ))}
                    </Table.Body>
                </Table>
                
            )
        }
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseList);