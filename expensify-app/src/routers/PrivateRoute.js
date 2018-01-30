import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { Segment } from 'semantic-ui-react';

import Header from '../components/Header';

const PrivateRoute = ({ isAuthenticated, component: Component, ...rest }) => {
    return (
        <Route component={(props) => (isAuthenticated ? (
            <div>
                <Header />
                <Segment padded="very" basic>
                    <Component {...props} />
                </Segment>
            </div>
        ) : (
            <Redirect to="/" />
        ))} {...rest} />
    );
}

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);