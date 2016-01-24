/// <reference path='../../typings/tsd.d.ts'/>
System.register(['react', './ColorPicker', './core'], function(exports_1) {
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
    var ShapeViewer;
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
            ShapeViewer = (function (_super) {
                __extends(ShapeViewer, _super);
                function ShapeViewer(props, context) {
                    var _this = this;
                    _super.call(this, props, context);
                    this.handleDragInit = function (e) {
                        var el = e.target;
                        while (el.nodeName !== 'DIV')
                            el = el.parentNode; //don't select text SPAN node
                        var top = parseInt(el.style.top) || 0;
                        var left = parseInt(el.style.left) || 0;
                        _this.setState({ isDragging: true, orig: { x: e.pageX - left, y: e.pageY - top } });
                    };
                    this.state = { isDragging: false };
                }
                ShapeViewer.prototype.render = function () {
                    var _this = this;
                    return (React.createElement("div", {"className": "noselect", "style": { position: "relative", border: "solid 1px #ccc", width: 860, height: 500 }}, this.props.shapes.map(function (s) { return (React.createElement("div", {"key": s.id, "style": {
                        position: "absolute", top: s.top, left: s.left, color: ColorPicker_1.isDark(s.color) ? '#fff' : '#000',
                        background: s.color, width: s.width, height: s.height,
                        lineHeight: s.height + 'px', textAlign: "center",
                        cursor: 'move'
                    }, "onMouseDown": _this.handleDragInit, "onMouseUp": function (e) { return _this.setState({ isDragging: false }); }, "onMouseOut": function (e) { return _this.setState({ isDragging: false }); }, "onMouseMove": function (e) { return _this.handleDrag(s.id, s.height, s.width, e); }}, "(", s.top, ", ", s.left, ")")); })));
                };
                ShapeViewer.prototype.handleDrag = function (id, height, width, e) {
                    if (this.state.isDragging) {
                        this.props.updateShape(id, e.pageY - this.state.orig.y, e.pageX - this.state.orig.x);
                    }
                };
                ShapeViewer = __decorate([
                    core_1.reduxify(function (state) { return ({ shapes: state.shapes }); }, function (dispatch) { return ({
                        updateShape: function (id, top, left) { return dispatch({ type: 'SHAPE_CHANGE', id: id, top: top, left: left }); }
                    }); })
                ], ShapeViewer);
                return ShapeViewer;
            })(React.Component);
            exports_1("default", ShapeViewer);
        }
    }
});
//# sourceMappingURL=ShapeViewer.js.map