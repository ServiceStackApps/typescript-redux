/// <reference path='../../typings/main.d.ts'/>
System.register(['react'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var React;
    var NumberPicker, ColorPicker, componentToHex, rgbToHex, hexToRgb, luminance, isDark;
    return {
        setters:[
            function (React_1) {
                React = React_1;
            }],
        execute: function() {
            NumberPicker = (function (_super) {
                __extends(NumberPicker, _super);
                function NumberPicker() {
                    _super.apply(this, arguments);
                }
                NumberPicker.prototype.render = function () {
                    var _this = this;
                    return (React.createElement("p", null, React.createElement("input", {type: "range", value: this.props.value.toString(), min: "0", max: "255", onChange: function (e) { return _this.handleChange(e); }}), React.createElement("label", null, " ", this.props.name, ": "), React.createElement("b", null, this.props.value)));
                };
                NumberPicker.prototype.handleChange = function (event) {
                    var e = event.target;
                    this.props.onChange(parseInt(e.value));
                };
                return NumberPicker;
            }(React.Component));
            exports_1("NumberPicker", NumberPicker);
            ColorPicker = (function (_super) {
                __extends(ColorPicker, _super);
                function ColorPicker() {
                    _super.apply(this, arguments);
                }
                ColorPicker.prototype.render = function () {
                    var _this = this;
                    var color = this.props.color;
                    var rgb = hexToRgb(color);
                    var textColor = isDark(color) ? '#fff' : '#000';
                    return (React.createElement("div", null, React.createElement(NumberPicker, {name: "Red", value: rgb.r, onChange: function (n) { return _this.updateRed(n); }}), React.createElement(NumberPicker, {name: "Green", value: rgb.g, onChange: function (n) { return _this.updateGreen(n); }}), React.createElement(NumberPicker, {name: "Blue", value: rgb.b, onChange: function (n) { return _this.updateBlue(n); }}), React.createElement("div", {style: {
                        background: color, width: "100%", height: 40, lineHeight: "40px",
                        textAlign: "center", color: textColor
                    }}, color)));
                };
                ColorPicker.prototype.updateRed = function (n) {
                    var rgb = hexToRgb(this.props.color);
                    this.changeColor(rgbToHex(n, rgb.g, rgb.b));
                };
                ColorPicker.prototype.updateGreen = function (n) {
                    var rgb = hexToRgb(this.props.color);
                    this.changeColor(rgbToHex(rgb.r, n, rgb.b));
                };
                ColorPicker.prototype.updateBlue = function (n) {
                    var rgb = hexToRgb(this.props.color);
                    this.changeColor(rgbToHex(rgb.r, rgb.g, n));
                };
                ColorPicker.prototype.changeColor = function (color) {
                    this.props.onChange(color);
                };
                return ColorPicker;
            }(React.Component));
            exports_1("ColorPicker", ColorPicker);
            componentToHex = function (c) {
                var hex = c.toString(16);
                return hex.length == 1 ? "0" + hex : hex;
            };
            rgbToHex = function (r, g, b) { return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b); };
            hexToRgb = function (hex) {
                var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
                return result ? {
                    r: parseInt(result[1], 16),
                    g: parseInt(result[2], 16),
                    b: parseInt(result[3], 16)
                } : null;
            };
            luminance = function (color) {
                var rgb = hexToRgb(color);
                return 0.2126 * rgb.r + 0.7152 * rgb.g + 0.0722 * rgb.b;
            };
            exports_1("isDark", isDark = function (color) { return luminance(color) < 100; });
        }
    }
});
//# sourceMappingURL=ColorPicker.js.map