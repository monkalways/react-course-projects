import React from 'react';
import { Segment } from 'semantic-ui-react';

const pageHeaderStyle = {
    background: '#f7f7f7'
};

const PageHeader = (props) => {
    return (
        <Segment padded style={pageHeaderStyle}>
            {props.children}
        </Segment>
    );
}

export default PageHeader;