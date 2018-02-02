import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';
import { Header, Table } from 'semantic-ui-react';

import { removeExpense } from '../actions/expenses';

export const ExpenseListItem = ({ id, description, amount, createdAt }) => (
    <Table.Row>
        <Table.Cell>
            <Link to={`/edit/${id}`}>
                <Header as="h3">
                    {description}
                    <Header.Subheader>
                        {moment(createdAt).format('MMMM Do, YYYY')}
                    </Header.Subheader>
                </Header>
            </Link>
        </Table.Cell>
        <Table.Cell>
            <Header as="h3">{numeral(amount/100).format('$0,0.00')}</Header>
        </Table.Cell>
    </Table.Row>
);

export default ExpenseListItem;