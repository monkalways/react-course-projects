import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import { Button, Dropdown, Form, Header, Icon, Segment } from 'semantic-ui-react';
import { push } from 'react-router-redux';

import PageHeader from './PageHeader';

const pageHeaderTitleStyle= {
    fontWeight: 300,
};

const highlightStyle = {
    fontWeight: 700
};

const marginButtonStyle = {
    marginBottom: '2rem'
};

const DashboardPage = () => {
    return (
        <div>
            <div style={marginButtonStyle}>
                <PageHeader >
                    <h1 style={pageHeaderTitleStyle}>Dashboard Page</h1>
                </PageHeader>
            </div>
        </div>
    )
};

export default DashboardPage;