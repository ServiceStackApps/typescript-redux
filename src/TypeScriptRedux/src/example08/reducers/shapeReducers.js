System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var addShape, changeShape;
    return {
        setters:[],
        execute: function() {
            exports_1("addShape", addShape = function (state, action) {
                var id = state.nextShapeId;
                var shape = Object.assign({}, { id: id }, action);
                delete shape['type'];
                return Object.assign({}, state, { nextShapeId: id + 1, shapes: state.shapes.concat([shape]) });
            });
            exports_1("changeShape", changeShape = function (state, action) {
                var shape = Object.assign({}, state.shapes.filter(function (x) { return x.id === action.id; })[0], { top: action.top, left: action.left });
                return Object.assign({}, state, { shapes: state.shapes.filter(function (x) { return x.id !== action.id; }).concat([shape]) });
            });
        }
    }
});
//# sourceMappingURL=shapeReducers.js.map