import React from 'react';
import Option from './Option';

const Options = ({options, onRemoveAll, onRemoveOption}) => (
    <div>
        <button onClick={onRemoveAll}>Remove All</button>
        {options.length === 0 && <p>Please add an option to get started!</p>}
        <ul>
            {options.map((option, i) => 
                <Option 
                    key={i} 
                    optionText={option}
                    onRemoveOption={onRemoveOption}
                />)}
        </ul>
    </div>
);

export default Options;
