import { camelCase } from './utils'
import ReactDOMServer from 'react-dom/server';
import ReactDOM from 'react-dom';
import Counter from './react/Counter';
import Foo from './react/Foo';
import React from 'react';

const IS_BROWSER = typeof window !== 'undefined';

// invoke a simple function
console.log(camelCase('foo'));

if (IS_BROWSER) {
    // render react component in browser
    const target = window.document.getElementById('react-target');
    if (target) {
        ReactDOM.render(
            [<Counter startFrom={10} key="1" />, <Foo value="demo value" key="2" />],
            target
        );
        target.style.display = 'block';
    }
} else {
    // render react component into string
    const counterComponent = React.createElement(Counter, { startFrom: 10 })
    const string = ReactDOMServer.renderToString(counterComponent);
    console.log(string);
}