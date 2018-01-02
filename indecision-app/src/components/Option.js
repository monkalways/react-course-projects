import React from 'react';

const Option = ({optionText, onRemoveOption}) => (
    <li>
        {optionText}
        <button onClick={() => onRemoveOption(optionText)}>Remove</button>
    </li>
);

export default Option;