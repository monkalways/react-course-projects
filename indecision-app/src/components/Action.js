import React from 'react';

const Action = ({hasOptions, onMakeDecision}) => (
    <div>
        <button 
            className="big-button"
            disabled={!hasOptions} 
            onClick={onMakeDecision}
        >
            What should I do?
        </button>
    </div>
);

export default Action;