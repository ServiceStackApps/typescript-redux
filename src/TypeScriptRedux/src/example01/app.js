/// <reference path='../../typings/browser.d.ts'/>
System.register(['react', 'react-dom'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var React, ReactDOM;
    var HelloWorld;
    return {
        setters:[
            function (React_1) {
                React = React_1;
            },
            function (ReactDOM_1) {
                ReactDOM = ReactDOM_1;
            }],
        execute: function() {
            HelloWorld = (function (_super) {
                __extends(HelloWorld, _super);
                function HelloWorld() {
                    _super.apply(this, arguments);
                }
                HelloWorld.prototype.render = function () {
                    return React.createElement("div", null, "Hello, World!");
                };
                return HelloWorld;
            }(React.Component));
            ReactDOM.render(React.createElement(HelloWorld, null), document.getElementById("content"));
        }
    }
});
//# sourceMappingURL=app.js.map