import { camelCase } from './utils'
import ReactDOMServer from 'react-dom/server';
import ReactDOM from 'react-dom';
import App from './react/App';
import React from 'react';

const componentInstance = React.createElement(App, { startFrom: 10 })

// invoke a simple function
console.log(camelCase('foo'));

if (typeof window !== 'undefined') {
    // render react component in browser
    const target = window.document.getElementById('react-target');
    ReactDOM.render(componentInstance, target);
    if (target) target.style.display = 'block';
} else {
    // render react component into string on server
    const string = ReactDOMServer.renderToString(componentInstance);
    console.log(string);
}