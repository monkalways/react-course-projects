class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: []
        }

        this.onRemoveAll = this.onRemoveAll.bind(this);
        this.onMakeDecision = this.onMakeDecision.bind(this);
        this.onAddOption = this.onAddOption.bind(this);
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
                <Header
                    title={title} 
                    subtitle={subtitle}
                />
                <Action
                    hasOptions={options && options.length > 0}
                    onMakeDecision={this.onMakeDecision}
                />
                <Options
                    options={options}
                    onRemoveAll={this.onRemoveAll} 
                />
                <AddOption onAddOption={this.onAddOption}/>
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        const {title, subtitle} = this.props;
        return (
            <div>
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
            </div>  
        );
    }
}

class Action extends React.Component {
    render() {
        const {hasOptions, onMakeDecision} = this.props;
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
    }
}

class Options extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {options, onRemoveAll} = this.props;
        return (
            <div>
                <button onClick={onRemoveAll}>Remove All</button>
                <ul>
                    {options.map((option, i) => 
                        <Option key={i} optionText={option}></Option>)}
                </ul>
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        const {optionText} = this.props;
        return (
            <li>
                {optionText}
            </li>
        );
    }
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

ReactDOM.render(<IndecisionApp/>, document.getElementById("app"));