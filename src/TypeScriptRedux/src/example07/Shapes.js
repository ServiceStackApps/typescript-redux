/// <reference path='../../typings/tsd.d.ts'/>
System.register(['react', 'react-redux', './ColorPicker'], function(exports_1) {
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var React, react_redux_1, ColorPicker_1;
    var ShapeMakerBase, ShapeMaker, ShapeViewerBase, ShapeViewer;
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
            ShapeMakerBase = (function (_super) {
                __extends(ShapeMakerBase, _super);
                function ShapeMakerBase(props, context) {
                    _super.call(this, props, context);
                    this.state = { top: props.top, left: props.left };
                }
                ShapeMakerBase.prototype.render = function () {
                    var _this = this;
                    var width = this.props.width, height = this.props.height, background = this.props.color;
                    var color = ColorPicker_1.isDark(background) ? '#fff' : '#000';
                    return (React.createElement("div", null, React.createElement("p", null, React.createElement("label", null, "size: "), React.createElement("b", null, height, "x", width)), React.createElement("div", {"style": { height: height, width: width, background: background, color: color, lineHeight: height + "px", margin: "auto" }}, "(", this.state.top, ",", this.state.left, ")"), React.createElement("div", null, React.createElement("p", null, React.createElement("label", null, "position: "), React.createElement("input", {"style": { width: 30 }, "defaultValue": this.props.top, "onChange": function (e) { return _this.handleTop(e); }}), React.createElement("span", null, ","), React.createElement("input", {"style": { width: 30 }, "defaultValue": this.props.left, "onChange": function (e) { return _this.handleLeft(e); }})), React.createElement("button", {"onClick": function (e) { return _this.props.addShape(background, height, width, _this.state.top, _this.state.left); }}, "Add Shape"))));
                };
                ShapeMakerBase.prototype.handleTop = function (e) {
                    var top = parseInt(e.target.value);
                    if (!isNaN(top))
                        this.setState({ top: top });
                };
                ShapeMakerBase.prototype.handleLeft = function (e) {
                    var left = parseInt(e.target.value);
                    if (!isNaN(left))
                        this.setState({ left: left });
                };
                return ShapeMakerBase;
            })(React.Component);
            ShapeMaker = react_redux_1.connect(function (state) { return ({
                width: state.width, height: state.height, color: state.color,
                top: state.nextShapeId * 10, left: state.nextShapeId * 10
            }); }, function (dispatch) { return ({
                addShape: function (color, height, width, top, left) {
                    dispatch({ type: 'SHAPE_ADD', height: height, width: width, color: color, top: top, left: left });
                }
            }); })(ShapeMakerBase);
            ShapeViewerBase = (function (_super) {
                __extends(ShapeViewerBase, _super);
                function ShapeViewerBase(props, context) {
                    _super.call(this, props, context);
                    this.state = { isDragging: false };
                }
                ShapeViewerBase.prototype.render = function () {
                    var _this = this;
                    return (React.createElement("div", {"className": "noselect", "style": { position: "relative", border: "solid 1px #ccc", width: 900, height: 600 }}, this.props.shapes.map(function (s) { return (React.createElement("div", {"key": s.id, "style": {
                        position: "absolute", top: s.top, left: s.left, color: ColorPicker_1.isDark(s.color) ? '#fff' : '#000',
                        background: s.color, width: s.width, height: s.height,
                        lineHeight: s.height + 'px', textAlign: "center",
                        cursor: 'move' }, "onMouseDown": function (e) { return _this.handleDragInit(e); }, "onMouseUp": function (e) { return _this.setState({ isDragging: false }); }, "onMouseOut": function (e) { return _this.setState({ isDragging: false }); }, "onMouseMove": function (e) { return _this.handleDrag(s.id, s.height, s.width, e); }}, "(", s.top, ",", s.left, ")")); })));
                };
                ShapeViewerBase.prototype.handleDragInit = function (e) {
                    var el = e.target;
                    while (el.nodeName !== 'DIV')
                        el = el.parentNode; //don't select text SPAN node
                    var top = parseInt(el.style.top) || 0;
                    var left = parseInt(el.style.left) || 0;
                    this.setState({ isDragging: true, orig: { x: e.pageX - left, y: e.pageY - top } });
                };
                ShapeViewerBase.prototype.handleDrag = function (id, height, width, e) {
                    if (this.state.isDragging) {
                        this.props.updateShape(id, e.pageY - this.state.orig.y, e.pageX - this.state.orig.x);
                    }
                };
                return ShapeViewerBase;
            })(React.Component);
            ShapeViewer = react_redux_1.connect(function (state) { return ({ shapes: state.shapes }); }, function (dispatch) { return ({
                updateShape: function (id, top, left) { return dispatch({ type: 'SHAPE_CHANGE', id: id, top: top, left: left }); }
            }); })(ShapeViewerBase);
            exports_1("ShapeMaker", ShapeMaker);
            exports_1("ShapeViewer", ShapeViewer);
        }
    }
});
//# sourceMappingURL=Shapes.js.map