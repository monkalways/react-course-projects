import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { Container, Segment } from 'semantic-ui-react';

import Header from '../components/Header';

const containerBodyStyle = {
    paddingTop: '40px'
};

const PrivateRoute = ({ isAuthenticated, component: Component, ...rest }) => {
    return (
        <Route component={(props) => (isAuthenticated ? (
            <Container>
                <Header />
                <div style={containerBodyStyle}>
                    <Segment padded="very" basic>
                        <Component {...props} />
                    </Segment>
                </div>
            </Container>
        ) : (
            <Redirect to="/" />
        ))} {...rest} />
    );
}

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);