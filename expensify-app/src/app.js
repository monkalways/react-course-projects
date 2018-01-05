import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

// Exposes the React library globally in the browser, 
// which ensures all calls to React.createElement are assured to work.
window.React = React;

const ExpenseDashboardPage = () => (
    <div>Expense Dashboard Component</div>
);

const AddExpensePage = () => (
    <div>Add Expense Component</div>
);

const EditExpensePage = () => (
    <div>Edit Expense Component</div>
);

const HelpPage = () => (
    <div>Help Component</div>
);

const routes = (
    <BrowserRouter>
        <div>
            <Route path="/" component={ExpenseDashboardPage} exact={true} />
            <Route path="/create" component={AddExpensePage} />
            <Route path="/edit" component={EditExpensePage} />
            <Route path="/help" component={HelpPage} />
        </div>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("app"));
