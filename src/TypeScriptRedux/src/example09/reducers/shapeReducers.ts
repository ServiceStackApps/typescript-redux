import ES6 from 'es6-shim';

export const addShape = (state, action) => {
    var id = state.nextShapeId;
    var shape = ES6.Object.assign({}, { id: id }, action);
    delete shape['type'];
    return ES6.Object.assign({}, state, { nextShapeId: id + 1, shapes: [...state.shapes, shape] });
};

export const changeShape = (state, action) => {
    var shape = ES6.Object.assign({}, state.shapes.filter(x => x.id === action.id)[0],
        { top: action.top, left: action.left });
    return ES6.Object.assign({}, state, { shapes: [...state.shapes.filter(x => x.id !== action.id), shape] });
};
