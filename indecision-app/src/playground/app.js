class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: props.options
        };

        this.onRemoveAll = this.onRemoveAll.bind(this);
        this.onMakeDecision = this.onMakeDecision.bind(this);
        this.onAddOption = this.onAddOption.bind(this);
        this.onRemoveOption = this.onRemoveOption.bind(this);
    }
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
    onAddOption(option) {
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
    }
    onRemoveOption(option) {
        this.setState({
            options: this.state.options.filter(o => o !== option)
        });
    }
    onRemoveAll() {
        this.setState({
            options: []
        });
    }
    onMakeDecision() {
        const {options} = this.state;
        if(options) {
            const randomNum = Math.floor(Math.random() * options.length);
            alert(options[randomNum]);
        }
    }
    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';
        const {options} = this.state;
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
                <AddOption onAddOption={this.onAddOption}/>
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
};

const Header = (props) => {
    const {title, subtitle} = props;
    return (
        <div>
            <h1>{title}</h1>
            {subtitle && <h2>{subtitle}</h2>}
        </div>
    );
};

Header.defaultProps = {
    title: 'Indecision'
};

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

const Options = (props) => {
    const {options, onRemoveAll, onRemoveOption} = props;
    return (
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
}

const Option = (props) => {
    const {optionText, onRemoveOption} = props;
    return (
        <li>
            {optionText}
            <button onClick={() => onRemoveOption(optionText)}>Remove</button>
        </li>
    );
}

class AddOption extends React.Component {
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

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));