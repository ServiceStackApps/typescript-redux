/// <reference path='../../typings/tsd.d.ts'/>
System.register(['react', 'react-redux', './ColorPicker'], function(exports_1) {
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var React, react_redux_1, ColorPicker_1;
    var ShapeViewer;
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
            ShapeViewer = (function (_super) {
                __extends(ShapeViewer, _super);
                function ShapeViewer(props, context) {
                    _super.call(this, props, context);
                    this.state = { isDragging: false };
                }
                ShapeViewer.prototype.render = function () {
                    var _this = this;
                    return (React.createElement("div", {"className": "noselect", "style": { position: "relative", border: "solid 1px #ccc", width: 860, height: 500 }}, this.props.shapes.map(function (s) { return (React.createElement("div", {"key": s.id, "style": {
                        position: "absolute", top: s.top, left: s.left, color: ColorPicker_1.isDark(s.color) ? '#fff' : '#000',
                        background: s.color, width: s.width, height: s.height,
                        lineHeight: s.height + 'px', textAlign: "center",
                        cursor: 'move' }, "onMouseDown": function (e) { return _this.handleDragInit(e); }, "onMouseUp": function (e) { return _this.setState({ isDragging: false }); }, "onMouseOut": function (e) { return _this.setState({ isDragging: false }); }, "onMouseMove": function (e) { return _this.handleDrag(s.id, s.height, s.width, e); }}, "(", s.top, ",", s.left, ")")); })));
                };
                ShapeViewer.prototype.handleDragInit = function (e) {
                    var el = e.target;
                    while (el.nodeName !== 'DIV')
                        el = el.parentNode; //don't select text SPAN node
                    var top = parseInt(el.style.top) || 0;
                    var left = parseInt(el.style.left) || 0;
                    this.setState({ isDragging: true, orig: { x: e.pageX - left, y: e.pageY - top } });
                };
                ShapeViewer.prototype.handleDrag = function (id, height, width, e) {
                    if (this.state.isDragging) {
                        this.props.updateShape(id, e.pageY - this.state.orig.y, e.pageX - this.state.orig.x);
                    }
                };
                return ShapeViewer;
            })(React.Component);
            exports_1("default",react_redux_1.connect(function (state) { return ({ shapes: state.shapes }); }, function (dispatch) { return ({
                updateShape: function (id, top, left) { return dispatch({ type: 'SHAPE_CHANGE', id: id, top: top, left: left }); }
            }); })(ShapeViewer));
        }
    }
});
//# sourceMappingURL=ShapeViewer.js.map