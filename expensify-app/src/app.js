import 'react-dates/initialize'; // to make react-dates work
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import moment from 'moment';

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';
import './styles/styles.scss';
import { setTimeout } from 'timers';

// Exposes the React library globally in the browser, 
// which ensures all calls to React.createElement are assured to work.
window.React = React;

const store = configureStore();

store.dispatch(addExpense({ description: 'Water bill', amount: 99999, createdAt: moment('2018-01-01').valueOf() }));
store.dispatch(addExpense({ description: 'Gas bill', createdAt: moment('2018-01-31').valueOf() }));
store.dispatch(addExpense({ description: 'Rent', amount: 109555, createdAt: moment('2018-02-01').valueOf() }));

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
