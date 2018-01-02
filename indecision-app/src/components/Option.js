import React from 'react';

const Option = (props) => {
    const {optionText, onRemoveOption} = props;
    return (
        <li>
            {optionText}
            <button onClick={() => onRemoveOption(optionText)}>Remove</button>
        </li>
    );
};

export default Option;