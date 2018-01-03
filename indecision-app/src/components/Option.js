import React from 'react';

const Option = ({optionText, count, onRemoveOption}) => (
    <div className="option">
        <p className="option__text">{count}. {optionText}</p>
        <button 
            className="button button--link"
            onClick={() => onRemoveOption(optionText)}
        >
            Remove
        </button>
    </div>
);

export default Option;