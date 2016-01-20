/// <reference path='../typings/tsd.d.ts'/>

//build bumdle with: jspm bundle src/deps deps.lib.js

import * as React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { connect } from 'react-redux';
import * as ES6 from 'es6-shim';

var a = ES6.Object.assign({});
var store = createStore((state, action) => state, {});

class Deps extends React.Component<any, any> {
    render() {
        return <div>Hello, World!</div>;  
    }
}

var DepsRedux = connect((state) => ({}), (dispatch) => ({}))(Deps);

const ignore = () => render(<Deps/>, document.body);
