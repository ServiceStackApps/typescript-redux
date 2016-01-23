/// <reference path='../../typings/tsd.d.ts'/>
System.register(['react'], function(exports_1) {
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
                    var _this = this;
                    _super.apply(this, arguments);
                    this.resetState = function () {
                        _this.props.store.dispatch({ type: 'LOAD', state: _this.props.defaultState });
                        _this.props.actions.length = 0;
                    };
                    this.replayActions = function () {
                        var store = _this.props.store, actions = _this.props.actions;
                        var snapshot = actions.slice(0);
                        _this.resetState();
                        snapshot.forEach(function (action, i) {
                            return setTimeout(function () { return store.dispatch(action); }, 10 * i);
                        });
                    };
                    this.undoAction = function () {
                        var store = _this.props.store, actions = _this.props.actions;
                        var snapshot = actions.slice(0, actions.length - 1);
                        _this.resetState();
                        snapshot.forEach(function (action) { return store.dispatch(action); });
                    };
                }
                ActionPlayer.prototype.componentDidMount = function () {
                    var _this = this;
                    this.unsubscribe = this.props.store.subscribe(function () { return _this.forceUpdate(); });
                };
                ActionPlayer.prototype.componentWillUnmount = function () {
                    this.unsubscribe();
                };
                ActionPlayer.prototype.render = function () {
                    return (React.createElement("div", null, React.createElement("button", {"onClick": this.replayActions}, "replay"), React.createElement("p", null, React.createElement("b", null, this.props.actions.length), " actions"), React.createElement("button", {"onClick": this.undoAction}, "undo"), " ", React.createElement("span", null), React.createElement("button", {"onClick": this.resetState}, "clear")));
                };
                return ActionPlayer;
            })(React.Component);
            exports_1("default", ActionPlayer);
        }
    }
});
//# sourceMappingURL=ActionPlayer.js.map