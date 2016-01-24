/// <reference path='../../typings/tsd.d.ts'/>

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

import reducers from './reducers';
import History from './History';
import Counter from './Counter';
import { ColorPicker } from './ColorPicker';
import ShapeMaker from './ShapeMaker';
import ShapeViewer from './ShapeViewer';
import { reduxify } from './core';

var defaultState = { nextShapeId: 0, width: 100, height: 100, color: "#000000", shapes: [] };

//Proper Undo: http://rackt.org/redux/docs/recipes/ImplementingUndoHistory.html
var history = {
    actions: [],
    states: [],
    stateIndex: 0,
    reset() {
        this.actions = [];
        this.states = [];
        this.stateIndex = 0;
    },
    prev() { return this.states[--this.stateIndex]; },
    next() { return this.states[++this.stateIndex]; },
    goTo(index) { return this.states[this.stateIndex=index]; },
    canPrev() { return this.stateIndex <= 0; },
    canNext() { return this.stateIndex >= this.states.length - 1; },
    add(action, nextState) {
        this.actions.push(action);
        this.states.push(nextState);
        this.stateIndex = this.states.length - 1;
    }
};

let store = createStore(
    (state, action) => {
        var reducer = reducers[action.type];
        var nextState = reducer != null
            ? reducer(state, action)
            : state;

        if (action.type !== 'LOAD')
            history.add(action, nextState);

        return nextState;
    },
    defaultState);

@reduxify(
    (state) => ({ color: state.color }),
    (dispatch) => ({ setColor: (color) => dispatch({ type: 'COLOR_CHANGE', color }) })
)
class ColorWrapper extends React.Component<any,any> {
    render() {
        return <ColorPicker color={this.props.color} onChange={this.props.setColor} />;
    }
}

ReactDOM.render(
    <Provider store={store}>
        <table>
            <tbody>
            <tr>
                <td style={{width:220}}>
                    <Counter field="width" step={10} />
                    <Counter field="height" step={10} />
                    <ColorWrapper />
                </td>
                <td style={{verticalAlign:"top",textAlign:"center", width:500}}>
                    <h2>Preview</h2>
                    <ShapeMaker />
                </td>
                <td style={{verticalAlign:"top"}}>
                    <h2>History</h2>
                    <History store={store} history={history} defaultState={defaultState} />
                </td>
            </tr>
            <tr>
                <td colSpan={3}>
                    <h2 style={{margin:5,textAlign:'center'}}>Shapes</h2>
                    <ShapeViewer />
                </td>
            </tr>
            </tbody>
        </table>
    </Provider>,
    document.getElementById("content"));

