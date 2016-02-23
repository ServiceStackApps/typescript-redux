/// <reference path='../../typings/main.d.ts'/>
System.register(['react', 'react-redux'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var React, react_redux_1;
    var Counter, mapStateToProps, mapDispatchToProps;
    return {
        setters:[
            function (React_1) {
                React = React_1;
            },
            function (react_redux_1_1) {
                react_redux_1 = react_redux_1_1;
            }],
        execute: function() {
            Counter = (function (_super) {
                __extends(Counter, _super);
                function Counter() {
                    _super.apply(this, arguments);
                }
                Counter.prototype.render = function () {
                    var _this = this;
                    return (React.createElement("div", null, React.createElement("p", null, React.createElement("label", null, "Counter: "), React.createElement("b", null, "#", this.props.counter)), React.createElement("button", {onClick: function (e) { return _this.props.incr(); }}, "INCREMENT"), React.createElement("span", {style: { padding: "0 5px" }}), React.createElement("button", {onClick: function (e) { return _this.props.decr(); }}, "DECREMENT")));
                };
                return Counter;
            }(React.Component));
            mapStateToProps = function (state) { return state; };
            mapDispatchToProps = function (dispatch) { return ({
                incr: function () {
                    dispatch({ type: 'INCR', by: 1 });
                },
                decr: function () {
                    dispatch({ type: 'INCR', by: -1 });
                }
            }); };
            exports_1("default",react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Counter));
        }
    }
});
//# sourceMappingURL=Counter.js.map