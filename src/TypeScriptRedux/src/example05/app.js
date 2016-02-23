/// <reference path='../../typings/main.d.ts'/>
System.register(['react', 'react-dom', 'redux', 'react-redux', './Counter'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var React, ReactDOM, redux_1, react_redux_1, Counter_1;
    var store;
    return {
        setters:[
            function (React_1) {
                React = React_1;
            },
            function (ReactDOM_1) {
                ReactDOM = ReactDOM_1;
            },
            function (redux_1_1) {
                redux_1 = redux_1_1;
            },
            function (react_redux_1_1) {
                react_redux_1 = react_redux_1_1;
            },
            function (Counter_1_1) {
                Counter_1 = Counter_1_1;
            }],
        execute: function() {
            store = redux_1.createStore(function (state, action) {
                switch (action.type) {
                    case 'INCR':
                        return { counter: state.counter + action.by };
                    default:
                        return state;
                }
            }, { counter: 0 });
            ReactDOM.render(React.createElement(react_redux_1.Provider, {store: store}, React.createElement(Counter_1.default, null)), document.getElementById("content"));
        }
    }
});
//# sourceMappingURL=app.js.map