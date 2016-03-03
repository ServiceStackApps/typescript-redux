/// <reference path='../../typings/browser.d.ts'/>
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
    var History;
    return {
        setters:[
            function (React_1) {
                React = React_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            History = (function (_super) {
                __extends(History, _super);
                function History() {
                    var _this = this;
                    _super.apply(this, arguments);
                    this.resetState = function () {
                        _this.props.store.dispatch({ type: 'LOAD', state: _this.props.defaultState });
                        _this.props.history.reset();
                    };
                    this.replayStates = function () {
                        _this.props.history.states.forEach(function (state, i) {
                            return setTimeout(function () { return _this.props.store.dispatch({ type: 'LOAD', state: state }); }, 10 * i);
                        });
                    };
                    this.prevState = function () {
                        _this.props.store.dispatch({ type: 'LOAD', state: _this.props.history.prev() });
                    };
                    this.nextState = function () {
                        _this.props.store.dispatch({ type: 'LOAD', state: _this.props.history.next() });
                    };
                    this.goToState = function (event) {
                        var e = event.target;
                        _this.props.store.dispatch({ type: 'LOAD', state: _this.props.history.goTo(parseInt(e.value)) });
                    };
                }
                History.prototype.render = function () {
                    return (React.createElement("div", null, React.createElement("button", {onClick: this.replayStates}, "replay"), React.createElement("span", null, " "), React.createElement("button", {onClick: this.resetState}, "clear"), React.createElement("p", null, React.createElement("b", null, this.props.history.states.length), " states"), React.createElement("button", {onClick: this.prevState, disabled: this.props.history.canPrev()}, "prev"), React.createElement("span", null, " "), React.createElement("button", {onClick: this.nextState, disabled: this.props.history.canNext()}, "next"), React.createElement("p", null, React.createElement("b", null, this.props.history.stateIndex + 1), " position"), React.createElement("input", {type: "range", min: "0", max: this.props.history.states.length - 1, disabled: this.props.history.states.length === 0, value: this.props.history.stateIndex, onChange: this.goToState})));
                };
                History = __decorate([
                    core_1.subscribeToStore()
                ], History);
                return History;
            }(React.Component));
            exports_1("default", History);
        }
    }
});
//# sourceMappingURL=History.js.map