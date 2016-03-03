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
    var ActionPlayer;
    return {
        setters:[
            function (React_1) {
                React = React_1;
            }],
        execute: function() {
            ActionPlayer = (function (_super) {
                __extends(ActionPlayer, _super);
                function ActionPlayer() {
                    _super.apply(this, arguments);
                }
                ActionPlayer.prototype.componentDidMount = function () {
                    var _this = this;
                    this.unsubscribe = this.props.store.subscribe(function () { return _this.forceUpdate(); });
                };
                ActionPlayer.prototype.componentWillUnmount = function () {
                    this.unsubscribe();
                };
                ActionPlayer.prototype.render = function () {
                    var _this = this;
                    return (React.createElement("div", null, React.createElement("button", {onClick: function (e) { return _this.replayActions(); }}, "replay"), React.createElement("p", null, React.createElement("b", null, this.props.actions.length), " actions"), React.createElement("button", {onClick: function (e) { return _this.undoAction(); }}, "undo"), " ", React.createElement("span", null), React.createElement("button", {onClick: function (e) { return _this.resetState(); }}, "clear")));
                };
                ActionPlayer.prototype.resetState = function () {
                    this.props.store.dispatch({ type: 'LOAD', state: this.props.defaultState });
                    this.props.actions.length = 0;
                };
                ActionPlayer.prototype.replayActions = function () {
                    var _this = this;
                    var snapshot = this.props.actions.slice(0);
                    this.resetState();
                    snapshot.forEach(function (action, i) {
                        return setTimeout(function () { return _this.props.store.dispatch(action); }, 10 * i);
                    });
                };
                ActionPlayer.prototype.undoAction = function () {
                    var _this = this;
                    var snapshot = this.props.actions.slice(0, this.props.actions.length - 1);
                    this.resetState();
                    snapshot.forEach(function (action) { return _this.props.store.dispatch(action); });
                };
                return ActionPlayer;
            }(React.Component));
            exports_1("default", ActionPlayer);
        }
    }
});
//# sourceMappingURL=ActionPlayer.js.map