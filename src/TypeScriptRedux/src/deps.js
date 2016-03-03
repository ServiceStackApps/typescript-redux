/// <reference path='../typings/browser.d.ts'/>
System.register(['react', 'react-dom', 'redux', 'react-redux', 'es6-shim', 'jquery', 'ss-utils'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var React, react_dom_1, redux_1, react_redux_1, ES6;
    var a, store, Deps, DepsRedux, ignore;
    return {
        setters:[
            function (React_1) {
                React = React_1;
            },
            function (react_dom_1_1) {
                react_dom_1 = react_dom_1_1;
            },
            function (redux_1_1) {
                redux_1 = redux_1_1;
            },
            function (react_redux_1_1) {
                react_redux_1 = react_redux_1_1;
            },
            function (ES6_1) {
                ES6 = ES6_1;
            },
            function (_1) {},
            function (_2) {}],
        execute: function() {
            a = ES6.Object.assign({});
            store = redux_1.createStore(function (state, action) { return state; }, {});
            Deps = (function (_super) {
                __extends(Deps, _super);
                function Deps() {
                    _super.apply(this, arguments);
                }
                Deps.prototype.render = function () {
                    return React.createElement("div", null, "Hello, World!");
                };
                return Deps;
            }(React.Component));
            DepsRedux = react_redux_1.connect(function (state) { return ({}); }, function (dispatch) { return ({}); })(Deps);
            ignore = function () { return react_dom_1.render(React.createElement(Deps, null), document.body); };
        }
    }
});
//# sourceMappingURL=deps.js.map