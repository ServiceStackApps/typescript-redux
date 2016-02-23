/// <reference path='../../typings/main.d.ts'/>
System.register(['react', './ColorPicker', './core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var React, ColorPicker_1, core_1;
    var ShapeMaker;
    return {
        setters:[
            function (React_1) {
                React = React_1;
            },
            function (ColorPicker_1_1) {
                ColorPicker_1 = ColorPicker_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ShapeMaker = (function (_super) {
                __extends(ShapeMaker, _super);
                function ShapeMaker(props, context) {
                    var _this = this;
                    _super.call(this, props, context);
                    this.handleTop = function (e) {
                        var top = parseInt(e.target.value);
                        if (!isNaN(top))
                            _this.setState({ top: top });
                    };
                    this.handleLeft = function (e) {
                        var left = parseInt(e.target.value);
                        if (!isNaN(left))
                            _this.setState({ left: left });
                    };
                    this.state = { top: props.top, left: props.left };
                }
                ShapeMaker.prototype.render = function () {
                    var _this = this;
                    var width = this.props.width, height = this.props.height, background = this.props.color;
                    var color = ColorPicker_1.isDark(background) ? '#fff' : '#000';
                    return (React.createElement("div", null, React.createElement("p", null, React.createElement("label", null, "size: "), React.createElement("b", null, height, "x", width)), React.createElement("div", {style: { height: height, width: width, background: background, color: color, lineHeight: height + "px", margin: "auto" }}, "(", this.state.top, ", ", this.state.left, ")"), React.createElement("div", null, React.createElement("p", null, React.createElement("label", null, "position: "), React.createElement("input", {style: { width: 30 }, defaultValue: this.props.top, onChange: this.handleTop}), React.createElement("span", null, ", "), React.createElement("input", {style: { width: 30 }, defaultValue: this.props.left, onChange: this.handleLeft})), React.createElement("button", {onClick: function (e) { return _this.props.addShape(background, height, width, _this.state.top, _this.state.left); }}, "Add Shape"))));
                };
                ShapeMaker = __decorate([
                    core_1.reduxify(function (state) { return ({
                        width: state.width, height: state.height, color: state.color,
                        top: state.nextShapeId * 10, left: state.nextShapeId * 10
                    }); }, function (dispatch) { return ({
                        addShape: function (color, height, width, top, left) {
                            dispatch({ type: 'SHAPE_ADD', height: height, width: width, color: color, top: top, left: left });
                        }
                    }); })
                ], ShapeMaker);
                return ShapeMaker;
            }(React.Component));
            exports_1("default", ShapeMaker);
        }
    }
});
//# sourceMappingURL=ShapeMaker.js.map