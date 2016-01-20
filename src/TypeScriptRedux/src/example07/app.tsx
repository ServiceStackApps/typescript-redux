/// <reference path='../../typings/tsd.d.ts'/>
/// <reference path='../../typings/es6-shim/es6-shim.d.ts'/>

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Store, createStore } from 'redux';
import { Provider, connect } from 'react-redux';

import Counter from './Counter';
import { ColorPicker } from './ColorPicker';
import { ShapeMaker, ShapeViewer } from './Shapes';

var actions = [];
var defaultState = { nextShapeId:0, width: 100, height: 100, color:"#000000", shapes:[] };

let store = createStore(
    (state, action) => {
        actions.push(action);
        switch (action.type) {
            case 'COUNTER_CHANGE':
                return Object.assign({}, state, { [action.field]: state[action.field] + action.by });
            case 'COLOR_CHANGE':
                return Object.assign({}, state, { color: action.color });
            case 'SHAPE_ADD':
                var id = state.nextShapeId;
                var shape = Object.assign({}, { id: id }, action);
                delete shape['type'];
                return Object.assign({}, state, { nextShapeId: id + 1, shapes: [...state.shapes, shape] });
            case 'SHAPE_CHANGE':
                var shape = Object.assign({}, state.shapes.filter(x => x.id === action.id)[0], { top: action.top, left: action.left });
                return Object.assign({}, state, { shapes: [...state.shapes.filter(x => x.id !== action.id), shape] });
            case 'LOAD':
                return action.state;
            default:
                return state;
        }
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
    actions = [];
};

const undoAction = () => {
    var clone = actions.slice(0, actions.length - 1);
    store.dispatch({ type: 'LOAD', state: defaultState });
    actions = [];
    clone.forEach(action => store.dispatch(action));
};

class ActionPlayer extends React.Component<any, any> {
    private unsubscribe: Function;
    componentDidMount() {
        this.unsubscribe = store.subscribe(() => this.forceUpdate());
    }
    componentWillUnmount(){
        this.unsubscribe();
    }
    render() {
        return (
            <div>
                <button onClick={replayActions}>replay</button>
                <p>
                    <b>{actions.length}</b> actions
                </p>
                <button onClick={undoAction}>undo</button> <span></span>
                <button onClick={clearActions}>clear</button>
            </div>
        );
    }
}

class ColorWrapperBase extends React.Component<any,any> {
    render() {
        return <ColorPicker color={this.props.color} onChange={c => this.props.setColor(c)} />;
    }
}

const ColorWrapper = connect(
    (state) => ({ color: state.color }),
    (dispatch) => ({ setColor: (color) => dispatch({ type:'COLOR_CHANGE', color })})
)(ColorWrapperBase);

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

