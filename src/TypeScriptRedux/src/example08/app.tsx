/// <reference path='../../typings/tsd.d.ts'/>
/// <reference path='../../typings/es6-shim/es6-shim.d.ts'/>

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Store, createStore } from 'redux';
import { Provider, connect } from 'react-redux';

import reducers from './reducers';
import Counter from './Counter';
import { ColorPicker } from './ColorPicker';
import { ShapeMaker, ShapeViewer } from './Shapes';
import { reduxify, listenTo } from './core';

var actions = [], states = [], stateIndex = 0;
var defaultState = { nextShapeId: 0, width: 100, height: 100, color: "#000000", shapes: [] };

//Proper Undo: http://rackt.org/redux/docs/recipes/ImplementingUndoHistory.html
let store = createStore(
    (state, action) => {
        var reducer = reducers[action.type];
        var nextState = reducer != null
            ? reducer(state, action)
            : state;

        if (action.type !== 'LOAD') {
            actions.push(action);
            states.push(nextState);
            stateIndex = states.length - 1;
        }

        return nextState;
    },
    defaultState);

const replayActions = () => {
   var clone = actions.slice(0);
   store.dispatch({ type: 'LOAD', state: defaultState });
    actions = [];

    for (var i=0; i<clone.length; i++) {
        (index => {
            setTimeout(() => {
                store.dispatch(clone[index]);
            }, 10 * index);
        })(i);
    }
};

const clearActions = () => {
    store.dispatch({ type: 'LOAD', state: defaultState });
    actions = [], states = [], stateIndex = 0;
};

const undoAction = () => {
    store.dispatch({ type: 'LOAD', state: states[--stateIndex] });
};

const redoAction = () => {
    store.dispatch({ type: 'LOAD', state: states[++stateIndex] });
};

@listenTo(store)
class ActionPlayer extends React.Component<any, any> {
    render() {
        return (
            <div>
                <button onClick={replayActions}>replay</button>
                <span> </span>
                <button onClick={clearActions}>clear</button>
                <p>
                    <b>{actions.length}</b> actions
                </p>
                <button onClick={undoAction} disabled={stateIndex <= 0}>undo</button>
                <span> </span>
                <button onClick={redoAction} disabled={stateIndex >= states.length - 1}>redo</button>
            </div>
        );
    }
}

@reduxify(
    (state) => ({ color: state.color }),
    (dispatch) => ({ setColor: (color) => dispatch({ type: 'COLOR_CHANGE', color }) })
)
class ColorWrapper extends React.Component<any,any> {
    render() {
        return <ColorPicker color={this.props.color} onChange={c => this.props.setColor(c)} />;
    }
}

ReactDOM.render(
    <Provider store={store}>
        <table>
            <tbody>
            <tr>
                <td>
                    <Counter field="width" step={10} />
                    <Counter field="height" step={10} />
                    <ColorWrapper />
                </td>
                <td style={{verticalAlign:"top",textAlign:"center", width:500}}>
                    <h2>Preview</h2>
                    <ShapeMaker />
                </td>
                <td style={{ verticalAlign: 'bottom' }}>
                    <ActionPlayer />
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

