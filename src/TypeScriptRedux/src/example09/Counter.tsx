/// <reference path='../../typings/browser.d.ts'/>

import * as React from 'react';
import { connect } from 'react-redux';

interface IHelloWorldProps {
    field: string;
    step?: number;
    counter?: number;
    incr?: Function;
    decr?: Function;
}

@connect(
    (state, props) => ({ counter: (state[props.field] || 0) }),
    (dispatch) => ({
        incr: (field, step) => {
            dispatch({ type: 'COUNTER_CHANGE', field, by: step });
        },
        decr: (field, step) => {
            dispatch({ type: 'COUNTER_CHANGE', field, by: -1 * step });
        }
    })
)
export default class Counter extends React.Component<IHelloWorldProps, any> {
    render() {
        var field = this.props.field, step = this.props.step || 1;
        return (
            <div>
                <p>
                    <label>{field}: </label>
                    <b>{this.props.counter}</b>
                </p>
                <button style={{ width:30, margin:2 }} onClick={e => this.props.decr(field, step) }>-</button>
                <button style={{ width: 30, margin: 2 }} onClick={e => this.props.incr(field, step) }>+</button>
            </div>
        );
    }
}