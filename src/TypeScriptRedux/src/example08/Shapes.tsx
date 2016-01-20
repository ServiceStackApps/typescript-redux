/// <reference path='../../typings/tsd.d.ts'/>

import * as React from 'react';
import { connect } from 'react-redux';
import { isDark } from './ColorPicker';
import { reduxify } from './core';

@reduxify(
    (state) => ({
        width: state.width, height: state.height, color: state.color,
        top: state.nextShapeId * 10, left: state.nextShapeId * 10
    }),
    (dispatch) => ({
        addShape: (color, height, width, top, left) => {
            dispatch({ type: 'SHAPE_ADD', height, width, color, top, left });
        }
    })
)
export class ShapeMaker extends React.Component<any, any> {
    constructor(props?, context?) {
        super(props, context);
        this.state = { top: props.top, left: props.left };
    }

    render() {
        var width = this.props.width, height = this.props.height, background = this.props.color;
        const color = isDark(background) ? '#fff' : '#000';
        return (
            <div>
                <p>
                    <label>size: </label>
                    <b>{height}x{width}</b>
                </p>
                <div style={{ height, width, background, color, lineHeight: height + "px", margin: "auto" }}>
                    ({this.state.top},{this.state.left})
                </div>
                <div>
                    <p>
                        <label>position: </label>
                        <input style={{ width: 30 }} defaultValue={this.props.top} onChange={this.handleTop} />
                        <span>,</span>
                        <input style={{ width: 30 }} defaultValue={this.props.left} onChange={this.handleLeft} />
                    </p>

                    <button onClick={e => this.props.addShape(background, height, width, this.state.top, this.state.left) }>
                        Add Shape
                    </button>
                </div>
            </div>
        );
    }

    handleTop = (e) => {
        var top = parseInt(e.target.value);
        if (!isNaN(top))
            this.setState({ top });
    }

    handleLeft = (e) => {
        var left = parseInt(e.target.value);
        if (!isNaN(left))
            this.setState({ left });
    }
}

@reduxify(
    (state) => ({ shapes: state.shapes }),
    (dispatch) => ({
        updateShape: (id, top, left) => dispatch({ type: 'SHAPE_CHANGE', id, top, left })
    })
)
export class ShapeViewer extends React.Component<any, any> {
    constructor(props?, context?) {
        super(props, context);
        this.state = { isDragging: false};
    }

    render() {
        return (
            <div className="noselect" style={{ position: "relative", border: "solid 1px #ccc", width: 900, height: 600 }}>
                { this.props.shapes.map(s => (
                    <div key={s.id} style={{
                        position: "absolute", top: s.top, left: s.left, color: isDark(s.color) ? '#fff' : '#000',
                        background: s.color, width: s.width, height: s.height,
                        lineHeight: s.height + 'px', textAlign: "center",
                        cursor: 'move' }}
                        onMouseDown={this.handleDragInit}
                        onMouseUp={e => this.setState({ isDragging: false }) }
                        onMouseOut={e => this.setState({ isDragging: false }) }
                        onMouseMove={e => this.handleDrag(s.id, s.height, s.width, e) }>
                        ({s.top},{s.left})
                    </div>)
                )}
            </div>
        );
    }

    handleDragInit = (e) => {
        var el = e.target as HTMLElement;
        while (el.nodeName !== 'DIV')
            el = el.parentNode as HTMLElement; //don't select text SPAN node
        var top = parseInt(el.style.top) || 0;
        var left = parseInt(el.style.left) || 0;
        this.setState({ isDragging: true, orig: { x: e.pageX - left, y: e.pageY - top} });
    }

    handleDrag(id, height, width, e) {
        if (this.state.isDragging) {
            this.props.updateShape(id, e.pageY - this.state.orig.y, e.pageX - this.state.orig.x);
        }
    }
}
