System.register(['es6-shim'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var es6_shim_1;
    var addShape, changeShape;
    return {
        setters:[
            function (es6_shim_1_1) {
                es6_shim_1 = es6_shim_1_1;
            }],
        execute: function() {
            exports_1("addShape", addShape = function (state, action) {
                var id = state.nextShapeId;
                var shape = es6_shim_1.default.Object.assign({}, { id: id }, action);
                delete shape['type'];
                return es6_shim_1.default.Object.assign({}, state, { nextShapeId: id + 1, shapes: state.shapes.concat([shape]) });
            });
            exports_1("changeShape", changeShape = function (state, action) {
                var shape = es6_shim_1.default.Object.assign({}, state.shapes.filter(function (x) { return x.id === action.id; })[0], { top: action.top, left: action.left });
                return es6_shim_1.default.Object.assign({}, state, { shapes: state.shapes.filter(function (x) { return x.id !== action.id; }).concat([shape]) });
            });
        }
    }
});
//# sourceMappingURL=shapeReducers.js.map