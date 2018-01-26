import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Icon, Menu } from 'semantic-ui-react';

class Header extends React.Component {
    state = { activeItem: 'dashboard' }

    handleItemClick = (e, { name }) => this.setState( () => ({ activeItem: name }) );

    render() {
        const { activeItem } = this.state; 
        return (
            <Menu color="grey" inverted fixed="top" size="large">
                <Menu.Item key="dashboard" name="dashboard" to="/dashboard" as={Link} active={activeItem === 'dashboard'} onClick={this.handleItemClick} />
                <Menu.Item key="create" name="create expense" to="/create" as={Link} active={activeItem === 'create'}  onClick={this.handleItemClick} />
                
                <Menu.Item name="logout" />
                
                <Menu.Item position="right">
                    <Icon name="calendar" />
                    Add Expense
                </Menu.Item>
            </Menu>
        );
    }
}

export default Header;