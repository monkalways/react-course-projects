import React from 'react';
import { connect } from 'react-redux';
import { Button, Dropdown, Form, Header, Segment } from 'semantic-ui-react';

import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => {

    return (
        <Segment padded="very" basic>
            <Header as="h1">Expensify</Header>
            <Form>
                <Button type='button' primary onClick={startLogin}>Login from Google</Button>
            </Form>
        </Segment>
    );
}

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);