/// <reference path='../../typings/browser.d.ts'/>
System.register(['react', 'react-dom', 'redux', 'react-redux', './Counter', './ActionPlayer', './ShapeMaker', './ShapeViewer', './ColorPicker'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var React, ReactDOM, redux_1, react_redux_1, Counter_1, ActionPlayer_1, ShapeMaker_1, ShapeViewer_1, ColorPicker_1;
    var actions, defaultState, store, ColorWrapperBase, ColorWrapper;
    return {
        setters:[
            function (React_1) {
                React = React_1;
            },
            function (ReactDOM_1) {
                ReactDOM = ReactDOM_1;
            },
            function (redux_1_1) {
                redux_1 = redux_1_1;
            },
            function (react_redux_1_1) {
                react_redux_1 = react_redux_1_1;
            },
            function (Counter_1_1) {
                Counter_1 = Counter_1_1;
            },
            function (ActionPlayer_1_1) {
                ActionPlayer_1 = ActionPlayer_1_1;
            },
            function (ShapeMaker_1_1) {
                ShapeMaker_1 = ShapeMaker_1_1;
            },
            function (ShapeViewer_1_1) {
                ShapeViewer_1 = ShapeViewer_1_1;
            },
            function (ColorPicker_1_1) {
                ColorPicker_1 = ColorPicker_1_1;
            }],
        execute: function() {
            actions = [];
            defaultState = { nextShapeId: 0, width: 100, height: 100, color: "#000000", shapes: [] };
            store = redux_1.createStore(function (state, action) {
                actions.push(action);
                switch (action.type) {
                    case 'COUNTER_CHANGE':
                        return Object.assign({}, state, (_a = {}, _a[action.field] = state[action.field] + action.by, _a));
                    case 'COLOR_CHANGE':
                        return Object.assign({}, state, { color: action.color });
                    case 'SHAPE_ADD':
                        var id = state.nextShapeId;
                        var shape = Object.assign({}, { id: id }, action);
                        delete shape['type'];
                        return Object.assign({}, state, { nextShapeId: id + 1, shapes: state.shapes.concat([shape]) });
                    case 'SHAPE_CHANGE':
                        var shape = Object.assign({}, state.shapes.filter(function (x) { return x.id === action.id; })[0], { top: action.top, left: action.left });
                        return Object.assign({}, state, { shapes: state.shapes.filter(function (x) { return x.id !== action.id; }).concat([shape]) });
                    case 'LOAD':
                        return action.state;
                    default:
                        return state;
                }
                var _a;
            }, defaultState);
            ColorWrapperBase = (function (_super) {
                __extends(ColorWrapperBase, _super);
                function ColorWrapperBase() {
                    _super.apply(this, arguments);
                }
                ColorWrapperBase.prototype.render = function () {
                    return React.createElement(ColorPicker_1.ColorPicker, {color: this.props.color, onChange: this.props.setColor});
                };
                return ColorWrapperBase;
            }(React.Component));
            ColorWrapper = react_redux_1.connect(function (state) { return ({ color: state.color }); }, function (dispatch) { return ({ setColor: function (color) { return dispatch({ type: 'COLOR_CHANGE', color: color }); } }); })(ColorWrapperBase);
            ReactDOM.render(React.createElement(react_redux_1.Provider, {store: store}, React.createElement("table", null, React.createElement("tbody", null, React.createElement("tr", null, React.createElement("td", {style: { width: 220 }}, React.createElement(Counter_1.default, {field: "width", step: 10}), React.createElement(Counter_1.default, {field: "height", step: 10}), React.createElement(ColorWrapper, null)), React.createElement("td", {style: { verticalAlign: "top", textAlign: "center", width: 500 }}, React.createElement("h2", null, "Preview"), React.createElement(ShapeMaker_1.default, null)), React.createElement("td", {style: { verticalAlign: 'bottom' }}, React.createElement(ActionPlayer_1.default, {store: store, actions: actions, defaultState: defaultState}))), React.createElement("tr", null, React.createElement("td", {colSpan: 3}, React.createElement("h2", {style: { margin: 5, textAlign: 'center' }}, "Shapes"), React.createElement(ShapeViewer_1.default, null)))))), document.getElementById("content"));
        }
    }
});
//# sourceMappingURL=app.js.map