/// <reference path='../../typings/main.d.ts'/>
System.register(['react', 'react-redux', './ColorPicker'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var React, react_redux_1, ColorPicker_1;
    var ShapeMaker;
    return {
        setters:[
            function (React_1) {
                React = React_1;
            },
            function (react_redux_1_1) {
                react_redux_1 = react_redux_1_1;
            },
            function (ColorPicker_1_1) {
                ColorPicker_1 = ColorPicker_1_1;
            }],
        execute: function() {
            ShapeMaker = (function (_super) {
                __extends(ShapeMaker, _super);
                function ShapeMaker(props, context) {
                    _super.call(this, props, context);
                    this.state = { top: props.top, left: props.left };
                }
                ShapeMaker.prototype.render = function () {
                    var _this = this;
                    var width = this.props.width, height = this.props.height, background = this.props.color;
                    var color = ColorPicker_1.isDark(background) ? '#fff' : '#000';
                    return (React.createElement("div", null, React.createElement("p", null, React.createElement("label", null, "size: "), React.createElement("b", null, height, "x", width)), React.createElement("div", {style: { height: height, width: width, background: background, color: color, lineHeight: height + "px", margin: "auto" }}, "(", this.state.top, ",", this.state.left, ")"), React.createElement("div", null, React.createElement("p", null, React.createElement("label", null, "position: "), React.createElement("input", {style: { width: 30 }, defaultValue: this.props.top, onChange: function (e) { return _this.handleTop(e); }}), React.createElement("span", null, ","), React.createElement("input", {style: { width: 30 }, defaultValue: this.props.left, onChange: function (e) { return _this.handleLeft(e); }})), React.createElement("button", {onClick: function (e) { return _this.props.addShape(background, height, width, _this.state.top, _this.state.left); }}, "Add Shape"))));
                };
                ShapeMaker.prototype.handleTop = function (e) {
                    var top = parseInt(e.target.value);
                    if (!isNaN(top))
                        this.setState({ top: top });
                };
                ShapeMaker.prototype.handleLeft = function (e) {
                    var left = parseInt(e.target.value);
                    if (!isNaN(left))
                        this.setState({ left: left });
                };
                return ShapeMaker;
            }(React.Component));
            exports_1("default",react_redux_1.connect(function (state) { return ({
                width: state.width, height: state.height, color: state.color,
                top: state.nextShapeId * 10, left: state.nextShapeId * 10
            }); }, function (dispatch) { return ({
                addShape: function (color, height, width, top, left) {
                    dispatch({ type: 'SHAPE_ADD', height: height, width: width, color: color, top: top, left: left });
                }
            }); })(ShapeMaker));
        }
    }
});
//# sourceMappingURL=ShapeMaker.js.map