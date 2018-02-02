import React from 'react';
import { Router, Route, Switch} from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import { ConnectedRouter } from 'react-router-redux'

import DashboardPage from '../components/DashboardPage';
import Header from '../components/Header';
import LoginPage from '../components/LoginPage';
import NotFoundPage from '../components/NotFoundPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const AppRouter = ({ history }) => (
    <ConnectedRouter history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true} />
                <PrivateRoute path="/dashboard" component={DashboardPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </ConnectedRouter>
);


export default AppRouter;