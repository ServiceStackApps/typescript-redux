/// <reference path='../../typings/browser.d.ts'/>
System.register(['react', 'react-dom', './HelloWorld'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var React, ReactDOM, HelloWorld_1;
    return {
        setters:[
            function (React_1) {
                React = React_1;
            },
            function (ReactDOM_1) {
                ReactDOM = ReactDOM_1;
            },
            function (HelloWorld_1_1) {
                HelloWorld_1 = HelloWorld_1_1;
            }],
        execute: function() {
            ReactDOM.render(React.createElement(HelloWorld_1.default, null), document.getElementById("content"));
        }
    }
});
//# sourceMappingURL=app.js.map