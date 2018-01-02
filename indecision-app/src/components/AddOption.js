import React from 'react';

export default class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: undefined
        };
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(e) {
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
                {error && (<p>{error}</p>)}
                <form onSubmit={this.onSubmit}>
                    <input type="text" name="option"/>
                    <button type="submit">Add Option</button>
                </form>
            </div>
            
        );
    }
}
