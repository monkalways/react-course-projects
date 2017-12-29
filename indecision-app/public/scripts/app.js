class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: props.options
        };

        this.onRemoveAll = this.onRemoveAll.bind(this);
        this.onMakeDecision = this.onMakeDecision.bind(this);
        this.onAddOption = this.onAddOption.bind(this);
    }
    onAddOption(option) {
        const { options } = this.state;

        if (!option) {
            return 'Enter valid value to add an option';
        } else if (options.indexOf(option) != -1) {
            return 'This option already exists';
        }

        this.setState({
            options: [...options, option]
        });
    }
    onRemoveAll() {
        this.setState({
            options: []
        });
    }
    onMakeDecision() {
        const { options } = this.state;
        if (options) {
            const randomNum = Math.floor(Math.random() * options.length);
            alert(options[randomNum]);
        }
    }
    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';
        const { options } = this.state;
        return React.createElement(
            'div',
            null,
            React.createElement(Header, { subtitle: subtitle }),
            React.createElement(Action, {
                hasOptions: options && options.length > 0,
                onMakeDecision: this.onMakeDecision
            }),
            React.createElement(Options, {
                options: options,
                onRemoveAll: this.onRemoveAll
            }),
            React.createElement(AddOption, { onAddOption: this.onAddOption })
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
};

const Header = props => {
    const { title, subtitle } = props;
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            title
        ),
        subtitle && React.createElement(
            'h2',
            null,
            subtitle
        )
    );
};

Header.defaultProps = {
    title: 'Indecision'
};

const Action = props => {
    const { hasOptions, onMakeDecision } = props;
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            {
                disabled: !hasOptions,
                onClick: onMakeDecision
            },
            'What should I do?'
        )
    );
};

const Options = props => {
    const { options, onRemoveAll } = props;
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: onRemoveAll },
            'Remove All'
        ),
        React.createElement(
            'ul',
            null,
            options.map((option, i) => React.createElement(Option, { key: i, optionText: option }))
        )
    );
};

const Option = props => {
    const { optionText } = props;
    return React.createElement(
        'li',
        null,
        optionText
    );
};

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

        const { onAddOption } = this.props;
        const option = e.target.elements.option.value.trim();

        const error = onAddOption(option);
        this.setState({
            error
        });
        e.target.elements.option.focus();
        if (!error) {
            e.target.elements.option.value = '';
        }
    }
    render() {
        const { error } = this.state;
        return React.createElement(
            'div',
            null,
            error && React.createElement(
                'p',
                null,
                error
            ),
            React.createElement(
                'form',
                { onSubmit: this.onSubmit },
                React.createElement('input', { type: 'text', name: 'option' }),
                React.createElement(
                    'button',
                    { type: 'submit' },
                    'Add Option'
                )
            )
        );
    }
}

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById("app"));
