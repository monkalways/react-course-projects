// let visible = false;

// const onToggle = (e) => {
//     visible = !visible;
//     render();
// }

// const appRoot = document.querySelector('#app');

// const render = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={onToggle}>{visible ? 'Hide details' : 'Show details'}</button>
//             {visible && (
//                 <p>Hey. These are some details you can see now!</p>
//             )}
            
//         </div>
//     );
//     ReactDOM.render(template, appRoot);
// };

// render();

class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        };

        this.onToggle = this.onToggle.bind(this);
    }
    onToggle() {
        this.setState(prevState => ({
            visible: !prevState.visible
        }));
    }
    render() {
        const {visible} = this.state;
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.onToggle}>{visible ? 'Hide details' : 'Show details'}</button>
                {visible && (
                    <p>Hey. These are some details you can see now!</p>
                )}
                
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle/>, document.getElementById('app'));