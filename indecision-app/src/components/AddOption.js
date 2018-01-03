import React from 'react';

export default class AddOption extends React.Component {
    // class properties
    state = {
        error: undefined
    };

    onSubmit = (e) => {
        e.preventDefault();

        const {onAddOption} = this.props;
        const option = e.target.elements.option.value.trim();
        
        const error = onAddOption(option);
        this.setState({ 
            error
        });
        e.target.elements.option.focus();
        if(!error) {
            e.target.elements.option.value = '';
        }
    }

    render() {
        const {error} = this.state;
        return (
            <div>
                {error && (<p className="add-option-error">{error}</p>)}
                <form className="add-option" onSubmit={this.onSubmit}>
                    <input className="add-option__input" type="text" name="option"/>
                    <button className="button" type="submit">Add Option</button>
                </form>
            </div>
            
        );
    }
}
