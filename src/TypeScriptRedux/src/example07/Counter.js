/// <reference path='../../typings/tsd.d.ts'/>
System.register(['react', 'react-redux'], function(exports_1) {
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
                    var field = this.props.field, step = this.props.step || 1;
                    return (React.createElement("div", null, React.createElement("p", null, React.createElement("label", null, field, ": "), React.createElement("b", null, this.props.counter)), React.createElement("button", {"style": { width: 30, margin: 2 }, "onClick": function (e) { return _this.props.decr(field, step); }}, "-"), React.createElement("button", {"style": { width: 30, margin: 2 }, "onClick": function (e) { return _this.props.incr(field, step); }}, "+")));
                };
                return Counter;
            })(React.Component);
            mapStateToProps = function (state, props) { return ({ counter: state[props.field] || 0 }); };
            mapDispatchToProps = function (dispatch) { return ({
                incr: function (field, step) {
                    dispatch({ type: 'COUNTER_CHANGE', field: field, by: step });
                },
                decr: function (field, step) {
                    dispatch({ type: 'COUNTER_CHANGE', field: field, by: -1 * step });
                }
            }); };
            exports_1("default",react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Counter));
        }
    }
});
//# sourceMappingURL=Counter.js.map