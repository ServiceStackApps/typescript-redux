/// <reference path='../../typings/main.d.ts'/>
System.register(['react', 'react-dom', './Counter'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var React, ReactDOM, Counter_1;
    return {
        setters:[
            function (React_1) {
                React = React_1;
            },
            function (ReactDOM_1) {
                ReactDOM = ReactDOM_1;
            },
            function (Counter_1_1) {
                Counter_1 = Counter_1_1;
            }],
        execute: function() {
            ReactDOM.render(React.createElement(Counter_1.default, null), document.getElementById("content"));
        }
    }
});
//# sourceMappingURL=app.js.map