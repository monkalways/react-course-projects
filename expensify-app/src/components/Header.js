import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Icon, Menu } from 'semantic-ui-react';

import { startLogout } from '../actions/auth';

export class Header extends React.Component {
    state = { activeItem: 'dashboard' }

    handleItemClick = (e, { name }) => this.setState( () => ({ activeItem: name }) );

    handleLogout = (e) => {
        this.props.startLogout();
    };

    render() {
        const { activeItem } = this.state; 
        return (
            <Menu color="grey" inverted fixed="top" size="large">
                <Menu.Item key="dashboard" name="dashboard" to="/dashboard" as={Link} active={activeItem === 'dashboard'} onClick={this.handleItemClick} />
                <Menu.Item key="create" name="create expense" to="/create" as={Link} active={activeItem === 'create'}  onClick={this.handleItemClick} />
                
                <Menu.Item position="right">
                    <Button onClick={this.handleLogout}>Logout</Button>
                </Menu.Item>
            </Menu>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);