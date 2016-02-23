System.register(['./reducers/shapeReducers'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var shapeReducers_1;
    var changeCounter, changeColor;
    return {
        setters:[
            function (shapeReducers_1_1) {
                shapeReducers_1 = shapeReducers_1_1;
            }],
        execute: function() {
            changeCounter = function (state, action) {
                return Object.assign({}, state, (_a = {}, _a[action.field] = state[action.field] + action.by, _a));
                var _a;
            };
            changeColor = function (state, action) {
                return Object.assign({}, state, { color: action.color });
            };
            exports_1("default",{
                COUNTER_CHANGE: changeCounter,
                COLOR_CHANGE: changeColor,
                SHAPE_ADD: shapeReducers_1.addShape,
                SHAPE_CHANGE: shapeReducers_1.changeShape,
                LOAD: function (state, action) { return action.state; }
            });
        }
    }
});
//# sourceMappingURL=reducers.js.map