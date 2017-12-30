class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };

        this.onIncrease = this.onIncrease.bind(this);
        this.onDecrease = this.onDecrease.bind(this);
        this.onReset = this.onReset.bind(this);
    }
    componentDidMount() {
        try {
            const json = localStorage.getItem('count');
            if (json) {
                const count = parseInt(JSON.parse(json), 10);
                if (!isNaN(count)) {
                    this.setState({ count });
                }
            }
        } catch (e) {
            // do nothing
        }
    }
    componentDidUpdate() {
        const json = JSON.stringify(this.state.count);
        localStorage.setItem('count', json);
    }
    onIncrease() {
        const count = this.state.count + 1;
        this.setState(prevState => ({
            count: count
        }));
    }
    onDecrease() {
        const count = this.state.count - 1;
        this.setState({
            count: count
        });
    }
    onReset() {
        this.setState({
            count: 0
        });
    }
    render() {
        const { count } = this.state;
        return React.createElement(
            'div',
            null,
            React.createElement(
                'h1',
                null,
                'Count: ',
                count
            ),
            React.createElement(
                'button',
                { onClick: this.onIncrease },
                '+1'
            ),
            React.createElement(
                'button',
                { onClick: this.onDecrease },
                '-1'
            ),
            React.createElement(
                'button',
                { onClick: this.onReset },
                'Reset'
            )
        );
    }
}

ReactDOM.render(React.createElement(Counter, null), document.getElementById('app'));
