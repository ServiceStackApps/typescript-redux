/// <reference path='../../typings/tsd.d.ts'/>

import * as React from 'react';

export interface INumberProps {
    name: string;
    value: number;
    onChange: (n:number) => void;
}

export class NumberPicker extends React.Component<INumberProps, any> {
    render() {
        return (
            <p>
                <input type="range" value={this.props.value.toString()} min="0" max="255"
                    onChange={this.handleChange} />
                <label> {this.props.name}: </label>
                <b>{this.props.value}</b>
            </p>
        );
    }
    handleChange = (event) => {
        const e = event.target as HTMLInputElement;
        this.props.onChange(parseInt(e.value));
    }
}

export interface IColorPickerProps {
    color: string;
    onChange: (hexColor:string) => void;
}

export class ColorPicker extends React.Component<IColorPickerProps, any> {
    render() {
        const color = this.props.color;
        const rgb = hexToRgb(color);
        const textColor = isDark(color) ? '#fff' : '#000';

        return (
            <div>
                <NumberPicker name="Red" value={rgb.r} onChange={this.updateRed} />
                <NumberPicker name="Green" value={rgb.g} onChange={this.updateGreen} />
                <NumberPicker name="Blue" value={rgb.b} onChange={this.updateBlue} />
                <div style={{
                    background: color, width: "100%", height: 40, lineHeight: "40px",
                    textAlign: "center", color: textColor
                }}>
                    {color}
                </div>
            </div>
        );
    }
    updateRed = (n: number) => {
        const rgb = hexToRgb(this.props.color);
        this.changeColor(rgbToHex(n, rgb.g, rgb.b));
    }
    updateGreen = (n: number) => {
        const rgb = hexToRgb(this.props.color);
        this.changeColor(rgbToHex(rgb.r, n, rgb.b));
    }
    updateBlue = (n: number) => {
        const rgb = hexToRgb(this.props.color);
        this.changeColor(rgbToHex(rgb.r, rgb.g, n));
    }
    changeColor(color: string) {
        this.props.onChange(color);  
    }
}

const componentToHex = (c: number) => {
    const hex = c.toString(16);
    return hex.length == 1 ? `0${hex}` : hex;
};

const rgbToHex = (r: number, g: number, b: number) =>
    "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);

const hexToRgb = (hex: string): { r: number; g: number; b: number; } => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
};

const luminance = (color: string) => {
    const rgb = hexToRgb(color);
    return 0.2126 * rgb.r + 0.7152 * rgb.g + 0.0722 * rgb.b;
};

export const isDark = (color: string) => luminance(color) < 100;