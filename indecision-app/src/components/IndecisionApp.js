import React from 'react';

import Header from './Header';
import Action from './Action';
import AddOption from './AddOption';
import Options from './Options';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
    state = {
        options: this.props.options,
        selectedOption: undefined
    };

    onAddOption = (option) => {
        const {options} = this.state;

        if(!option) {
            return 'Enter valid value to add an option';
        } else if(options.indexOf(option) != -1) {
            return 'This option already exists';
        }

        this.setState({
            options: [
                ...options,
                option
            ]
        });
    };

    onRemoveOption = (option) => {
        this.setState({
            options: this.state.options.filter(o => o !== option)
        });
    };

    onRemoveAll = () => {
        this.setState({
            options: []
        });
    };
    
    onMakeDecision = () => {
        const {options} = this.state;
        if(options) {
            const randomNum = Math.floor(Math.random() * options.length);
            this.setState({
                selectedOption: options[randomNum]
            });
        }
    };

    onClearSelectedOption = () => {
        this.setState({
            selectedOption: undefined
        });
    };

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            if(json) {
                const options = JSON.parse(json);
                this.setState({
                    options
                });
            }
        } catch (e) {
            // do nothing at all
        }
        
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length != this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }
    
    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';
        const {options, selectedOption} = this.state;
        return (
            <div>
                <Header subtitle={subtitle}/>
                <Action
                    hasOptions={options && options.length > 0}
                    onMakeDecision={this.onMakeDecision}
                />
                <Options
                    options={options}
                    onRemoveAll={this.onRemoveAll}
                    onRemoveOption={this.onRemoveOption}
                />
                <AddOption 
                    onAddOption={this.onAddOption}
                />
                <OptionModal 
                    selectedOption={selectedOption}
                    onCloseModal={this.onClearSelectedOption}
                />
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
};
