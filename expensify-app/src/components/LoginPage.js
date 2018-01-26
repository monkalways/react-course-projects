import React from 'react';
import { connect } from 'react-redux';
import { Button, Dropdown, Form, Header } from 'semantic-ui-react';

import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => {

    return (
        <div>
            <Header as="h1">Login</Header>
            <Form>
                <Button type='button' primary onClick={startLogin}>Login from Google</Button>
            </Form>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);