import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Icon, Menu } from 'semantic-ui-react';

import { startLogout } from '../actions/auth';
import { menuChange } from '../actions/site';

export class Header extends React.Component {
    state = { activeItem: 'dashboard' }

    handleItemClick = (e, { name }) => this.props.menuChange(name);

    handleLogout = (e) => {
        this.props.startLogout();
    };

    render() {
        const { activeMenu } = this.props;
        return (
            <Menu color="blue" inverted fixed="top" size="huge">
                <Menu.Item header key="dashboard" name="expensify" to="/dashboard" as={Link} active={activeMenu === 'dashboard'} onClick={this.handleItemClick} />
                
                <Menu.Item position="right">
                    <Button onClick={this.handleLogout}>Logout</Button>
                </Menu.Item>
            </Menu>
        );
    }
}

const mapStateToProps = (state) => ({
    activeMenu: state.site.activeMenu
});

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout()),
    menuChange: (activeMenu) => dispatch(menuChange(activeMenu))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);