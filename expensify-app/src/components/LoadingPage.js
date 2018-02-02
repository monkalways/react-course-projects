import React from 'react';
import { Loader } from 'semantic-ui-react';

const containerStyle = {
    alignItems: 'center',
    display: 'flex',
    height: '100vh',
    justifyContent: 'center',
    width: '100vw'
};

const LoadingPage = () => {
    return (
        <div style={containerStyle}>
            <Loader active inline='centered' size="large">
                Loading
            </Loader>
        </div> 
    );
}

export default LoadingPage;