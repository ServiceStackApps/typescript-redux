/// <reference path='../../typings/browser.d.ts'/>

import * as React from 'react';
import { connect } from 'react-redux';
import { isDark } from './ColorPicker';

@connect(
    (state) => ({ shapes: state.shapes }),
    (dispatch) => ({
        updateShape: (id, top, left) => dispatch({ type: 'SHAPE_CHANGE', id, top, left })
    })
)
export default class ShapeViewer extends React.Component<any, any> {
    constructor(props?, context?) {
        super(props, context);
        this.state = { isDragging: false };
    }
    render() {
        return (
            <div className="noselect" style={{position:"relative",border:"solid 1px #ccc",width:860,height:500}}>
            { this.props.shapes.map(s => (
                <div key={s.id} style={{
                    position: "absolute", top: s.top, left: s.left, color: isDark(s.color) ? '#fff' : '#000',
                    background: s.color, width: s.width, height: s.height,
                    lineHeight: s.height + 'px', textAlign: "center",
                    cursor: 'move'
                }}
                    onMouseDown={this.handleDragInit}
                    onMouseUp={e => this.setState({ isDragging: false }) }
                    onMouseOut={e => this.setState({ isDragging: false }) }
                    onMouseMove={e => this.handleDrag(s.id, s.height, s.width, e) }>
                    ({s.top}, {s.left})
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
        this.setState({ isDragging: true, orig: { x: e.pageX - left, y: e.pageY - top } });
    }
    handleDrag(id, height, width, e) {
        if (this.state.isDragging) {
            this.props.updateShape(id, e.pageY - this.state.orig.y, e.pageX - this.state.orig.x);
        }
    }
}
