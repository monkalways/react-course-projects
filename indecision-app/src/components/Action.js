import React from 'react';

const Action = (props) => {
    const {hasOptions, onMakeDecision} = props;
    return (
        <div>
            <button 
                disabled={!hasOptions} 
                onClick={onMakeDecision}
            >
                What should I do?
            </button>
        </div>
    );
};

export default Action;