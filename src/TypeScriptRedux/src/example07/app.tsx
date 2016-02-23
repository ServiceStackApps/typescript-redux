/// <reference path='../../typings/main.d.ts'/>

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

import Counter from './Counter';
import ActionPlayer from './ActionPlayer';
import ShapeMaker from './ShapeMaker';
import ShapeViewer from './ShapeViewer';
import { ColorPicker } from './ColorPicker';

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
                var shape = Object.assign({}, state.shapes.filter(x => x.id === action.id)[0],
                    { top: action.top, left: action.left });
                return Object.assign({}, state,
                    { shapes: [...state.shapes.filter(x => x.id !== action.id), shape] });
            case 'LOAD':
                return action.state;
            default:
                return state;
        }
    },
    defaultState);

class ColorWrapperBase extends React.Component<any,any> {
    render() {
        return <ColorPicker color={this.props.color} onChange={this.props.setColor} />;
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
                <td style={{ width: 220 }}>
                    <Counter field="width" step={10} />
                    <Counter field="height" step={10} />
                    <ColorWrapper />
                </td>
                <td style={{verticalAlign:"top", textAlign:"center", width:500}}>
                    <h2>Preview</h2>
                    <ShapeMaker />
                </td>
                <td style={{ verticalAlign: 'bottom' }}>
                    <ActionPlayer store={store} actions={actions} defaultState={defaultState} />
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

