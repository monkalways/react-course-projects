import React from 'react';
import { connect } from 'react-redux';
import { Button, Dropdown, Form, Header, Icon, Segment } from 'semantic-ui-react';

import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => {

    return (
        <div className="box-layout">
            <div className="box-layout__box">
                <Segment padded basic>
                    <Header as="h1" textAlign="center">
                        <Header.Content>
                            <Icon name="money" />Expensify
                        </Header.Content>
                    </Header>
                    <p>It's time to get your expenses under control.</p>
                    <Form>
                        <Button type='button' primary onClick={startLogin}>Login with Google</Button>
                    </Form>
                </Segment>
            </div>
        </div>
        
    );
}

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);