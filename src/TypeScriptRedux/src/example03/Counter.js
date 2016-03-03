/// <reference path='../../typings/browser.d.ts'/>
System.register(['react'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var React;
    var Counter;
    return {
        setters:[
            function (React_1) {
                React = React_1;
            }],
        execute: function() {
            Counter = (function (_super) {
                __extends(Counter, _super);
                function Counter(props, context) {
                    _super.call(this, props, context);
                    this.state = { counter: 0 };
                }
                Counter.prototype.render = function () {
                    var _this = this;
                    return (React.createElement("div", null, React.createElement("p", null, React.createElement("label", null, "Counter: "), React.createElement("b", null, "#", this.state.counter)), React.createElement("button", {onClick: function (e) { return _this.incr(1); }}, "INCREMENT"), React.createElement("span", {style: { padding: "0 5px" }}), React.createElement("button", {onClick: function (e) { return _this.incr(-1); }}, "DECREMENT")));
                };
                Counter.prototype.incr = function (by) {
                    this.setState({ counter: this.state.counter + by });
                };
                return Counter;
            }(React.Component));
            exports_1("default", Counter);
        }
    }
});
//# sourceMappingURL=Counter.js.map