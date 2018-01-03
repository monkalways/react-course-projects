import React from 'react';
import Option from './Option';

const Options = ({options, onRemoveAll, onRemoveOption}) => (
    <div>
        <div className="widget-header">
            <h3 className="widget-header__title">Your Options</h3>
            <button className="button button--link" onClick={onRemoveAll}>Remove All</button>
        </div>
        {options.length === 0 && <p className="widget__message">Please add an option to get started!</p>}
        <div>
            {options.map((option, i) => 
                <Option 
                    key={i} 
                    optionText={option}
                    count={i+1}
                    onRemoveOption={onRemoveOption}
                />)}
        </div>
    </div>
);

export default Options;
