/// <reference path='../../typings/tsd.d.ts'/>
/// <reference path='../../typings/es6-shim/es6-shim.d.ts'/>
System.register(['react', 'react-dom', 'redux', 'react-redux', './Counter', './ColorPicker', './Shapes'], function(exports_1) {
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var React, ReactDOM, redux_1, react_redux_1, Counter_1, ColorPicker_1, Shapes_1;
    var actions, defaultState, store, replayActions, clearActions, undoAction, ActionPlayer, ColorWrapperBase, ColorWrapper;
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
            function (ColorPicker_1_1) {
                ColorPicker_1 = ColorPicker_1_1;
            },
            function (Shapes_1_1) {
                Shapes_1 = Shapes_1_1;
            }],
        execute: function() {
            actions = [];
            defaultState = { nextShapeId: 0, width: 100, height: 100, color: "#336699", shapes: [] };
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
            replayActions = function () {
                var clone = actions.slice(0);
                store.dispatch({ type: 'LOAD', state: defaultState });
                actions = [];
                for (var i = 0; i < clone.length; i++) {
                    (function (index) {
                        setTimeout(function () {
                            store.dispatch(clone[index]);
                        }, 10 * index);
                    })(i);
                }
            };
            clearActions = function () {
                store.dispatch({ type: 'LOAD', state: defaultState });
                actions = [];
            };
            undoAction = function () {
                var clone = actions.slice(0, actions.length - 1);
                store.dispatch({ type: 'LOAD', state: defaultState });
                actions = [];
                clone.forEach(function (action) { return store.dispatch(action); });
            };
            ActionPlayer = (function (_super) {
                __extends(ActionPlayer, _super);
                function ActionPlayer() {
                    _super.apply(this, arguments);
                }
                ActionPlayer.prototype.componentDidMount = function () {
                    var _this = this;
                    this.unsubscribe = store.subscribe(function () { return _this.forceUpdate(); });
                };
                ActionPlayer.prototype.componentWillUnmount = function () {
                    this.unsubscribe();
                };
                ActionPlayer.prototype.render = function () {
                    return (React.createElement("div", null, React.createElement("button", {"onClick": replayActions}, "replay"), React.createElement("p", null, React.createElement("b", null, actions.length), " actions"), React.createElement("button", {"onClick": undoAction}, "undo"), " ", React.createElement("span", null), React.createElement("button", {"onClick": clearActions}, "clear")));
                };
                return ActionPlayer;
            })(React.Component);
            ColorWrapperBase = (function (_super) {
                __extends(ColorWrapperBase, _super);
                function ColorWrapperBase() {
                    _super.apply(this, arguments);
                }
                ColorWrapperBase.prototype.render = function () {
                    var _this = this;
                    return React.createElement(ColorPicker_1.ColorPicker, {"color": this.props.color, "onChange": function (c) { return _this.props.setColor(c); }});
                };
                return ColorWrapperBase;
            })(React.Component);
            ColorWrapper = react_redux_1.connect(function (state) { return ({ color: state.color }); }, function (dispatch) { return ({ setColor: function (color) { return dispatch({ type: 'COLOR_CHANGE', color: color }); } }); })(ColorWrapperBase);
            ReactDOM.render(React.createElement(react_redux_1.Provider, {"store": store}, React.createElement("table", null, React.createElement("tbody", null, React.createElement("tr", null, React.createElement("td", null, React.createElement(Counter_1.default, {"field": "width", "step": 10}), React.createElement(Counter_1.default, {"field": "height", "step": 10}), React.createElement(ColorWrapper, null)), React.createElement("td", {"style": { verticalAlign: "top", textAlign: "center", width: 500 }}, React.createElement("h2", null, "Preview"), React.createElement(Shapes_1.ShapeMaker, null)), React.createElement("td", {"style": { verticalAlign: 'bottom' }}, React.createElement(ActionPlayer, null))), React.createElement("tr", null, React.createElement("td", {"colSpan": 3}, React.createElement("h2", {"style": { margin: 5, textAlign: 'center' }}, "Shapes"), React.createElement(Shapes_1.ShapeViewer, null)))))), document.getElementById("content"));
        }
    }
});
//# sourceMappingURL=app.js.map