import 'react-dates/initialize'; // to make react-dates work
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import moment from 'moment';
import createHistory from 'history/createBrowserHistory';

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import { startSetExpenses } from './actions/expenses';
import { firebase } from './firebase/firebase';

import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';
import 'semantic-ui-css/semantic.min.css';
import './styles/styles.scss';
// import { setTimeout } from 'timers';

// Exposes the React library globally in the browser, 
// which ensures all calls to React.createElement are assured to work.
window.React = React;

const history = createHistory();
const store = configureStore(history);

const jsx = (
    <Provider store={store}>
        <AppRouter history={history} />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));

// let hasRendered = false;
// const renderApp = () => {
//     if(!hasRendered) {
//         ReactDOM.render(jsx, document.getElementById('app'));
//         hasRendered = true;
//     }
// };

// ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

firebase.auth().onAuthStateChanged( (user) => {
    if (user) {
        console.log('login', user.uid);
    } else {
        console.log('logout');
    }
});
