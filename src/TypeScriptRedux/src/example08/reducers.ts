import ES6 from 'es6-shim';
import { addShape, changeShape } from './reducers/shapeReducers';

const changeCounter = (state, action) =>
    ES6.Object.assign({}, state, { [action.field]: state[action.field] + action.by });

const changeColor = (state, action) =>
    ES6.Object.assign({}, state, { color: action.color });

export default {
    COUNTER_CHANGE: changeCounter,
    COLOR_CHANGE: changeColor,
    SHAPE_ADD: addShape,
    SHAPE_CHANGE: changeShape,
    LOAD: (state, action) => action.state
};