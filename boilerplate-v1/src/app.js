import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

// Exposes the React library globally in the browser, 
// which ensures all calls to React.createElement are assured to work.
window.React = React;

ReactDOM.render(<p>This is my boilerplate</p>, document.getElementById("app"));
