/// <reference path='../typings/tsd.d.ts'/>

//build bumdle with: jspm bundle src/deps deps.lib.js

import * as React from 'react';
import { render } from 'react-dom';

class Deps extends React.Component<any, any> {
    render() {
        return <div>Hello, World!</div>;  
    }
}

const ignore = () => render(<Deps/>, document.body);
