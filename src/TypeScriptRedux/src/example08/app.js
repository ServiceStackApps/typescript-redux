/// <reference path='../../typings/tsd.d.ts'/>
System.register(['react', 'react-dom', 'redux', 'react-redux', './reducers', './History', './Counter', './ColorPicker', './ShapeMaker', './ShapeViewer', './core'], function(exports_1) {
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var React, ReactDOM, redux_1, react_redux_1, reducers_1, History_1, Counter_1, ColorPicker_1, ShapeMaker_1, ShapeViewer_1, core_1;
    var defaultState, history, store, ColorWrapper;
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
            function (reducers_1_1) {
                reducers_1 = reducers_1_1;
            },
            function (History_1_1) {
                History_1 = History_1_1;
            },
            function (Counter_1_1) {
                Counter_1 = Counter_1_1;
            },
            function (ColorPicker_1_1) {
                ColorPicker_1 = ColorPicker_1_1;
            },
            function (ShapeMaker_1_1) {
                ShapeMaker_1 = ShapeMaker_1_1;
            },
            function (ShapeViewer_1_1) {
                ShapeViewer_1 = ShapeViewer_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            defaultState = { nextShapeId: 0, width: 100, height: 100, color: "#000000", shapes: [] };
            //Proper Undo: http://rackt.org/redux/docs/recipes/ImplementingUndoHistory.html
            history = {
                actions: [],
                states: [],
                stateIndex: 0,
                reset: function () {
                    this.actions = [];
                    this.states = [];
                    this.stateIndex = 0;
                },
                prev: function () { return this.states[--this.stateIndex]; },
                next: function () { return this.states[++this.stateIndex]; },
                goTo: function (index) { return this.states[this.stateIndex = index]; },
                canPrev: function () { return this.stateIndex <= 0; },
                canNext: function () { return this.stateIndex >= this.states.length - 1; },
                add: function (action, nextState) {
                    this.actions.push(action);
                    this.states.push(nextState);
                    this.stateIndex = this.states.length - 1;
                }
            };
            store = redux_1.createStore(function (state, action) {
                var reducer = reducers_1.default[action.type];
                var nextState = reducer != null
                    ? reducer(state, action)
                    : state;
                if (action.type !== 'LOAD')
                    history.add(action, nextState);
                return nextState;
            }, defaultState);
            ColorWrapper = (function (_super) {
                __extends(ColorWrapper, _super);
                function ColorWrapper() {
                    _super.apply(this, arguments);
                }
                ColorWrapper.prototype.render = function () {
                    return React.createElement(ColorPicker_1.ColorPicker, {"color": this.props.color, "onChange": this.props.setColor});
                };
                ColorWrapper = __decorate([
                    core_1.reduxify(function (state) { return ({ color: state.color }); }, function (dispatch) { return ({ setColor: function (color) { return dispatch({ type: 'COLOR_CHANGE', color: color }); } }); })
                ], ColorWrapper);
                return ColorWrapper;
            })(React.Component);
            ReactDOM.render(React.createElement(react_redux_1.Provider, {"store": store}, React.createElement("table", null, React.createElement("tbody", null, React.createElement("tr", null, React.createElement("td", {"style": { width: 220 }}, React.createElement(Counter_1.default, {"field": "width", "step": 10}), React.createElement(Counter_1.default, {"field": "height", "step": 10}), React.createElement(ColorWrapper, null)), React.createElement("td", {"style": { verticalAlign: "top", textAlign: "center", width: 500 }}, React.createElement("h2", null, "Preview"), React.createElement(ShapeMaker_1.default, null)), React.createElement("td", {"style": { verticalAlign: "top" }}, React.createElement("h2", null, "History"), React.createElement(History_1.default, {"store": store, "history": history, "defaultState": defaultState}))), React.createElement("tr", null, React.createElement("td", {"colSpan": 3}, React.createElement("h2", {"style": { margin: 5, textAlign: 'center' }}, "Shapes"), React.createElement(ShapeViewer_1.default, null)))))), document.getElementById("content"));
        }
    }
});
//# sourceMappingURL=app.js.map