/// <reference path='typings/tsd.d.ts'/>
System.register(['react', 'react-dom'], function(exports_1) {
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var React, ReactDOM;
    var Deps, Run;
    return {
        setters:[
            function (React_1) {
                React = React_1;
            },
            function (ReactDOM_1) {
                ReactDOM = ReactDOM_1;
            }],
        execute: function() {
            Deps = (function (_super) {
                __extends(Deps, _super);
                function Deps() {
                    _super.apply(this, arguments);
                }
                Deps.prototype.render = function () {
                    return (React.createElement("div", null, "Hello, World!"));
                };
                return Deps;
            })(React.Component);
            Run = function () {
                ReactDOM.render(React.createElement(Deps, null), document.getElementById("content"));
            };
        }
    }
});
//# sourceMappingURL=deps.js.map