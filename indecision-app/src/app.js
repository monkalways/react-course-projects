import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

// Exposes the React library globally in the browser, 
// which ensures all calls to React.createElement are assured to work.
window.React = React;

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
