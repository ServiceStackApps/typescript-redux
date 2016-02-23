/// <reference path='../../typings/main.d.ts'/>

import * as React from 'react';
import * as ReactDOM from 'react-dom';

class HelloWorld extends React.Component<any, any> {
    render() {
        return <div>Hello, World!</div>;
    }
}

ReactDOM.render(<HelloWorld/>, document.getElementById("content"));
