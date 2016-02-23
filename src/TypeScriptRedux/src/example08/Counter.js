/// <reference path='../../typings/main.d.ts'/>
System.register(['react', './core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
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
    var React, core_1;
    var Counter;
    return {
        setters:[
            function (React_1) {
                React = React_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Counter = (function (_super) {
                __extends(Counter, _super);
                function Counter() {
                    _super.apply(this, arguments);
                }
                Counter.prototype.render = function () {
                    var _this = this;
                    var field = this.props.field, step = this.props.step || 1;
                    return (React.createElement("div", null, React.createElement("p", null, React.createElement("label", null, field, ": "), React.createElement("b", null, this.props.counter)), React.createElement("button", {style: { width: 30, margin: 2 }, onClick: function (e) { return _this.props.decr(field, step); }}, "-"), React.createElement("button", {style: { width: 30, margin: 2 }, onClick: function (e) { return _this.props.incr(field, step); }}, "+")));
                };
                Counter = __decorate([
                    core_1.reduxify(function (state, props) { return ({ counter: (state[props.field] || 0) }); }, function (dispatch) { return ({
                        incr: function (field, step) {
                            dispatch({ type: 'COUNTER_CHANGE', field: field, by: step });
                        },
                        decr: function (field, step) {
                            dispatch({ type: 'COUNTER_CHANGE', field: field, by: -1 * step });
                        }
                    }); })
                ], Counter);
                return Counter;
            }(React.Component));
            exports_1("default", Counter);
        }
    }
});
//# sourceMappingURL=Counter.js.map